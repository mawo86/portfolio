import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Allgemein'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    timeframe: z.string(),
    role: z.string(),
    services: z.array(z.string()).default([]),
    results: z.array(z.object({
      metric: z.string(),
      label: z.string(),
    })).default([]),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'case-studies': caseStudies };
