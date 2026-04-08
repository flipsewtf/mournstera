//content.config.ts
// Import the glob loader
import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

// GARDEN COLLECTION
const garden = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/garden' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.string()),
        kind: z.enum(['musings', 'notes', 'seedlings']),
        lastUpdated: z.date().optional(),
    }),
});

const log = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/log' }),
    schema: z.object({
        pubDate: z.date(),
    }),
});

export const collections = { garden, log };
