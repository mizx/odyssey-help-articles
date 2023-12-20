import { loadFront } from "yaml-front-matter";
import { glob } from "glob";
import { promises as fs } from "fs";
import path from "path";
import { MetadataSchema } from "./metadata.schema";

interface Metadata {
  tags: string[];
  models: string[];
  title: string;
}

interface MetadataWithSlug extends Metadata {
  slug: string;
}

interface Response {
  version: number;
  articles: {
    [key: string]: {
      tags: string[];
      models: string[];
      title: string;
    };
  };
}

function formatArticles(articles: MetadataWithSlug[]) {
  return articles.reduce(
    (accumulator, current) => {
      accumulator[current.slug] = current;

      return accumulator;
    },
    {} as Response["articles"],
  );
}

function getFilenameNoExtension(filename: string) {
  const parsed = path.parse(filename);

  return parsed.name;
}

function writeJson(response: Response) {
  const json = JSON.stringify(response);
  const outputFile = "./docs/articles.json";

  fs.writeFile(outputFile, json);

  console.debug("successfully wrote to %s", outputFile);
}

function validateMetadata(metadata: unknown): Metadata {
  const result = MetadataSchema.parse(metadata);

  return result;
}

async function run() {
  const mdFilenames = await glob("./docs/*.md", { absolute: true });

  console.debug("found %s total markdown files", mdFilenames.length);

  const articles: MetadataWithSlug[] = [];

  for (const filename of mdFilenames) {
    const contents = await fs.readFile(filename, "utf-8");
    const parsed = loadFront(contents);
    const { __content, ...metadata } = parsed;
    const validated = validateMetadata(metadata);
    const slug = getFilenameNoExtension(filename);

    articles.push({ ...validated, slug });
  }

  const output = formatArticles(articles);

  writeJson({ version: 1, articles: output });
}

run();
