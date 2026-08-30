import type { CollectionEntry } from 'astro:content';

export interface Song {
  id: string;
  title: string;
  description: string;
  projectLink: string;
  imageLink: string;
  lyrics?: string;
}

export interface OriginalSong extends Song {
  id: string;
  slug: string;
  lyrics: string;
}

export type SongEntry = CollectionEntry<'songs'>;