import originalSongData from '@/db/originalSong.json'
import coverSongData from '@/db/coverSong.json'
import type { OriginalSong, Song } from '@/types/song'

/**
 * Slugs are pinned by song id rather than derived from titles, so a future
 * title edit can never silently break a published URL.
 */
const SLUG_BY_ID: Record<string, string> = {
  '1': 'rasa-cemasku',
  '2': 'gemerlap-bintang',
  '3': 'dreamcatcher',
  '4': 'bulan-dan-matahari',
  '5': 'rizuniverse',
}

/** Fallback for any song added to the JSON without a pinned slug. */
function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const originalSongs: OriginalSong[] = (originalSongData as Song[]).map((song, index) => {
  const id = song.id ?? String(index + 1)

  return {
    ...song,
    id,
    slug: SLUG_BY_ID[id] ?? slugify(song.title),
    lyrics: song.lyrics ?? '',
  }
})

/** JSON keeps newest entries appended last; the UI shows newest first. */
export const coverSongs: Song[] = [...(coverSongData as Song[])].reverse()

export function getSongBySlug(slug: string): OriginalSong | undefined {
  return originalSongs.find((song) => song.slug === slug)
}

/** Absolute URL for a song page, used in canonicals and structured data. */
export function songUrl(slug: string, base: string): string {
  return new URL(`/songs/${slug}/`, base).href
}

/** The YouTube video id, used to build lightweight thumbnails and embeds. */
export function youtubeId(projectLink: string): string | null {
  const match = projectLink.match(/[?&]v=([\w-]{11})/)
  return match ? match[1] : null
}

/** Neighbouring songs, for prev/next navigation on a song page. */
export function songNeighbours(slug: string): {
  prev: OriginalSong | null
  next: OriginalSong | null
} {
  const index = originalSongs.findIndex((song) => song.slug === slug)

  if (index === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: index > 0 ? originalSongs[index - 1] : null,
    next: index < originalSongs.length - 1 ? originalSongs[index + 1] : null,
  }
}

/** First N lines of lyrics, used for meta descriptions and previews. */
export function lyricsExcerpt(lyrics: string, maxLength = 155): string {
  const flat = lyrics.replace(/\s+/g, ' ').trim()
  if (flat.length <= maxLength) return flat
  return `${flat.slice(0, maxLength - 1).trimEnd()}…`
}
