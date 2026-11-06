import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const editorial = defineCollection({
  loader: glob({ base: './src/content/editorial', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    kind: z.enum(['thought', 'perspective', 'investigation', 'research-update', 'question', 'episode', 'resource', 'publication']),
    status: z.enum(['draft', 'published']).default('draft'),
    example: z.boolean().default(false),
    publishedAt: z.iso.datetime({ offset: true }).optional(),
    subjects: z.array(z.string().min(1)).default([]),
    related: z.array(z.string().min(1)).default([]),
    author: z.string().min(1).optional(),
    centralQuestion: z.string().min(1).optional(),
    whyItIsHere: z.string().min(1).optional(),
    downloadFile: z.string().regex(/^[a-z0-9-]+\.pdf$/, 'Use a PDF filename from src/files.').optional(),
    downloadPages: z.number().int().positive().optional(),
    sourceUrl: z.url().refine(url => new URL(url).protocol === 'https:', 'Use an HTTPS source URL.').optional(),
    knowledgeState: z.enum(['emerging', 'developing', 'established']).optional(),
    guests: z.array(z.string().min(1)).default([]),
    vimeoId: z.string().regex(/^\d+$/, 'Use the numeric Vimeo video ID.').optional(),
    milestones: z.array(z.object({
      title: z.string().min(1),
      date: z.iso.date(),
      state: z.enum(['done', 'now', 'next']),
    })).default([]),
  }).refine((entry) => entry.status !== 'published' || Boolean(entry.publishedAt), {
    message: 'Published entries require an explicit publishedAt timestamp with timezone.',
    path: ['publishedAt'],
  }),
});
export const collections = { editorial };
