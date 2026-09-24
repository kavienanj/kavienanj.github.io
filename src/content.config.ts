import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string().optional(),
    year: z.number(),
    status: z.enum(['submitted', 'in-prep', 'published']),
    role: z.string().optional(),
    links: z
      .object({
        pdf: z.string().url().optional(),
        arxiv: z.string().url().optional(),
        code: z.string().url().optional(),
      })
      .optional(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    year: z.string().optional(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { publications, projects, blog };
