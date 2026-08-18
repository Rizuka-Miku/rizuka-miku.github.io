/** Site-wide constants, kept in one place so pages and endpoints agree. */

export const SITE_URL = 'https://rizuka-miku.github.io'

export const SITE_NAME = 'Rizuka Miku'

export const TAGLINE = 'Menyinari Kegelapan Yang Ada Di Hatimu'

export const SITE_TITLE = `${SITE_NAME} - ${TAGLINE}`

export const SITE_DESCRIPTION =
  'Rizuka Miku menyinari kegelapan yang ada di hatimu melalui cerita, tawa, dan kebersamaan. Indie VTuber Indonesia bertema Kucing Bulan mari ikut ke dunia Rizuka Miku di Rizuniverse!'

export const SITE_KEYWORDS =
  'Rizuka Miku, VTuber Indonesia, Indie VTuber Indonesia, VTuber Kucing, Kucing Bulan, Rizuniverse, Rizu, Miku, VTuber Indie, Virtual YouTuber Indonesia, VTuber ID, Streamer VTuber Indonesia'

/** twimg serves resized variants via `name`; ask for what is actually displayed. */
const AVATAR_BASE = 'https://pbs.twimg.com/media/GYI8VTAaIAA1usl?format=jpg'

/** Displayed at 224px (56 * 4) at most, so 900x900 covers 2x retina. */
export const AVATAR_IMAGE = `${AVATAR_BASE}&name=900x900`

/** Structured data and social cards want the large original. */
export const AVATAR_IMAGE_LARGE = `${AVATAR_BASE}&name=4096x4096`

export const OG_IMAGE = 'https://avatars.githubusercontent.com/u/183397269?s=400&v=4'

export const TWITTER_HANDLE = '@Rizuka_Miku'

/** Profile facts, rendered in the bio section and in llms.txt. */
export const PROFILE = [
  { label: 'Tanggal Lahir', value: '13 Agustus' },
  { label: 'Zodiac', value: 'Leo' },
  { label: 'Tinggi', value: '150cm' },
  { label: 'Oshi Mark', value: '💖✨' },
  { label: 'Fanname', value: 'Sirius' },
  { label: 'Fandom', value: 'Rizuniverse' },
] as const

export interface SocialLink {
  name: string
  handle: string
  url: string
  icon: 'youtube' | 'x' | 'instagram' | 'tiktok' | 'spotify' | 'gift'
}

export const SOCIALS: readonly SocialLink[] = [
  {
    name: 'YouTube',
    handle: 'Rizuka Miku Ch.',
    url: 'https://www.youtube.com/@RizukaMiku_Vtuber',
    icon: 'youtube',
  },
  { name: 'X', handle: '@Rizuka_Miku', url: 'https://x.com/Rizuka_Miku', icon: 'x' },
  {
    name: 'Instagram',
    handle: 'rizuka_miku',
    url: 'https://www.instagram.com/rizuka_miku/',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    handle: 'rizuka.miku',
    url: 'https://www.tiktok.com/@rizuka.miku',
    icon: 'tiktok',
  },
  {
    name: 'Spotify',
    handle: 'Rizuka Miku',
    url: 'https://open.spotify.com/artist/0LEPzZBneLQkMtKti7pjFW',
    icon: 'spotify',
  },
  {
    name: 'Trakteer',
    handle: 'RizukaMiku',
    url: 'https://trakteer.id/RizukaMiku',
    icon: 'gift',
  },
] as const

export const DISCORD_URL = `${SITE_URL}/discord`
