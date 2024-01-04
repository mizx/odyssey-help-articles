import z from "zod";

const modelSchema = z.enum([
  "2024 Beast",
  "2024 Mystic",
  "2024 Stealth",
  "2024 Classic",
  "2023 Beast",
  "2023 Stealth",
  "2023 Classic",
  "2023 LT",
  "2022 Beast",
  "2022 Stealth",
  "2022 Classic",
  "2022 LT",
  "2021 Beast",
  "2021 Stealth",
  "2021 Classic",
  "2020 MODE",
]);

const tagSchema = z.enum([
  "shower",
  "plumbing",
  "electrical",
  "sink",
  "lights",
]);

export const MetadataSchema = z
  .object({
    models: modelSchema.array(),
    tags: tagSchema.array(),
    title: z.string(),
  })
  .strict();
