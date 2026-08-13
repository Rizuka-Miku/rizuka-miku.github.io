/** A song entry as stored in `src/db/*.json`. */
export interface Song {
  id?: string
  title: string
  description: string
  projectLink: string
  imageLink: string
  lyrics?: string
}

/** An original song enriched with its own page slug. */
export interface OriginalSong extends Song {
  id: string
  slug: string
  lyrics: string
}
