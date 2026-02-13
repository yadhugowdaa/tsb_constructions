import { defineCollection, z } from 'astro:content';

// 1. SERVICES COLLECTION
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.union([z.string(), z.object({ image: z.string() })])).optional(),
  }),
});

// 2. PROJECTS COLLECTION
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['2d-3d', 'elevation', 'structural', 'pmc', 'estimation', 'real-estate']),
    image: z.string(),
    // Allow both simple strings and objects
    gallery: z.array(z.union([z.string(), z.object({ image: z.string() })])).optional(),
    video: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
  }),
});

// 3. SUSTAINABILITY COLLECTION (The one causing the issue)
const sustainabilityCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    coverImage: z.string(),
    // FIXED: Now accepts ["path/to/img.png"] OR [{image: "path/to/img.png"}]
    gallery: z.array(z.union([z.string(), z.object({ image: z.string() })])).optional(),
  }),
});

// 4. CAREERS COLLECTION
const careersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.enum(['Full Time', 'Part Time', 'Contract', 'Internship']),
    salary: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  services: servicesCollection,
  projects: projectsCollection,
  sustainability: sustainabilityCollection,
  careers: careersCollection,
};