import { getCollection } from 'astro:content';
import coverSongData from '@/db/coverSong.json';
import type { Song } from '@/types/song';

const SLUG_BY_ID: Record<string, string> = {
  '1': 'rasa-cemasku',
  '2': 'gemerlap-bintang',
  '3': 'dreamcatcher',
  '4': 'bulan-dan-matahari',
  '5': 'rizuniverse',
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getOriginalSongs() {
  const entries = await getCollection('songs');
  return entries
    .map((entry) => ({
      ...entry.data,
      id: entry.data.id,
      slug: SLUG_BY_ID[entry.data.id] ?? slugify(entry.data.title),
      lyrics: entry.body ?? '',
    }))
    .sort((a, b) => Number(a.id) - Number(b.id));
}

export const coverSongs: Song[] = [...(coverSongData as Song[])].reverse();

export async function getSongBySlug(slug: string) {
  const songs = await getOriginalSongs();
  return songs.find((song) => song.slug === slug);
}

export function songUrl(slug: string, base: string): string {
  return new URL(`/songs/${slug}/`, base).href;
}

export function youtubeId(projectLink: string): string | null {
  const match = projectLink.match(/[?&]v=([\w-]{11})/);
  return match ? match[1] : null;
}

export function thumbnailVariant(
  imageLink: string,
  variant: 'maxresdefault' | 'hqdefault' | 'mqdefault',
): string {
  return imageLink.replace(/\/(maxresdefault|hqdefault|mqdefault|sddefault)\.jpg/, `/${variant}.jpg`);
}

export async function songNeighbours(slug: string) {
  const songs = await getOriginalSongs();
  const index = songs.findIndex((song) => song.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? songs[index - 1] : null,
    next: index < songs.length - 1 ? songs[index + 1] : null,
  };
}

export function lyricsExcerpt(lyrics: string, maxLength = 155): string {
  const flat = lyrics.replace(/\s+/g, ' ').trim();
  if (flat.length <= maxLength) return flat;
  return `${flat.slice(0, maxLength - 1).trimEnd()}…`;
}