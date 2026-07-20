import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    locale: z.enum(["en", "zh"]),
    room: z.enum(["thinking", "salon"]),
    order: z.number(),
    marker: z.string(),
    title: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.object({
      image: z.string(),
      alt: z.string().optional(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
