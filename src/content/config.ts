import { defineCollection, z } from 'astro:content';

const announcements = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    author: z.string().default('行政部'),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  announcements,
};
