// Import the glob loader
import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

// BLOG COLLECTION
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        // Make image optional
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.string()),
        lastUpdated: z.date().optional(),
    }),
});

// GARDEN COLLECTION
const garden = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/garden' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        // Make image optional here too
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.string()),
        lastUpdated: z.date().optional(),
    }),
});

export const collections = { blog, garden };
