import { defineCollection, z } from 'astro:content';

const songs = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    projectLink: z.string().url(),
    imageLink: z.string().url(),
  }),
});

export const collections = { songs };