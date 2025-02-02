
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        category: z.enum([
             'post', 'snippet'
        ]),
        description: z.string().max(100),
        date: z.string().transform((str) => new Date(str)),
        modified:z.string().transform((str) => new Date(str)),
        tags: z.array(z.string())
    })
});

export const collections = { posts };