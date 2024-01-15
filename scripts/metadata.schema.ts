import z from "zod";

const modelSchema = z.enum([
  "2024-beast",
  "2024-mystic",
  "2024-stealth",
  "2024-classic",
  "2023-beast",
  "2023-stealth",
  "2023-classic",
  "2023-lt",
  "2022-beast",
  "2022-stealth",
  "2022-classic",
  "2022-lt",
  "2021-beast",
  "2021-stealth",
  "2021-classic",
  "2020-mode",
]);

const tagSchema = z.enum([
  "shower",
  "plumbing",
  "electrical",
  "sink",
  "lights",
  "volta",
  "common",
  "ac",
  "lithionics",
]);

export const MetadataSchema = z
  .object({
    models: modelSchema.array(),
    tags: tagSchema.array(),
    title: z.string(),
    subtitle: z.string().optional(),
  })
  .strict();
