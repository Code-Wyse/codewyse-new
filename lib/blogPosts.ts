// Server-side blog post loader.
// Merges:
//   1. Hand-curated entries in components/Blog/blogData.tsx
//   2. MDX files in markdown/blog/*.mdx (drafter output)
// Returns posts sorted by publishedAt desc.
//
// Server-only — uses fs/path. Do NOT import from a client component.

import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import BlogData from "@/components/Blog/blogData";
import type { Blog } from "@/types/blog";

const MDX_DIR = path.join(process.cwd(), "markdown", "blog");

type MdxPost = Blog & {
  source: "mdx";
  body: string;
};

type StaticPost = Blog & {
  source: "static";
};

export type LoadedPost = MdxPost | StaticPost;

function loadMdxPosts(): MdxPost[] {
  if (!fs.existsSync(MDX_DIR)) return [];
  const files = fs
    .readdirSync(MDX_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file, idx): MdxPost | null => {
      const full = path.join(MDX_DIR, file);
      const raw = fs.readFileSync(full, "utf8");
      const { data, content } = matter(raw);

      const slug =
        (data.slug as string | undefined) ||
        file.replace(/\.(mdx|md)$/, "");
      if (!slug || !data.title) {
        console.warn(`[blogPosts] Skipping ${file}: missing title or slug.`);
        return null;
      }

      const tags: string[] = Array.isArray(data.tags) ? data.tags : [];
      const faqs = Array.isArray(data.faqs)
        ? data.faqs
            .map((f: any) => ({
              q: typeof f?.q === "string" ? f.q.trim() : "",
              a: typeof f?.a === "string" ? f.a.trim() : "",
            }))
            .filter((f: { q: string; a: string }) => f.q && f.a)
        : undefined;

      return {
        source: "mdx",
        _id: 1000 + idx, // unique-ish ids for MDX posts; never collide with static ids
        slug,
        title: String(data.title),
        metadata: data.description ? String(data.description) : undefined,
        publishedAt: data.date ? String(data.date) : undefined,
        tags,
        category: tags[0],
        readTime: estimateReadTime(content),
        mainImage:
          data.ogImage ||
          data.image ||
          data.mainImage ||
          "/images/blog/blog-01.png",
        body: content,
        author: data.author ? { name: String(data.author), image: "" } : undefined,
        faqs,
      };
    })
    .filter((p): p is MdxPost => p !== null);
}

function loadStaticPosts(): StaticPost[] {
  return BlogData.map((p) => ({ ...p, source: "static" as const }));
}

function estimateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(3, Math.round((words / 220) * 6));
  return `${minutes} min read`;
}

function sortByDateDesc(a: LoadedPost, b: LoadedPost): number {
  const ad = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
  const bd = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
  return bd - ad;
}

export function getAllPosts(): LoadedPost[] {
  const mdx = loadMdxPosts();
  const staticPosts = loadStaticPosts();

  // De-dupe: an MDX file with the same slug as a static post wins.
  const mdxSlugs = new Set(mdx.map((p) => p.slug));
  const merged: LoadedPost[] = [
    ...mdx,
    ...staticPosts.filter((p) => !p.slug || !mdxSlugs.has(p.slug)),
  ];
  return merged.sort(sortByDateDesc);
}

export function getPostBySlug(slug: string): LoadedPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllPosts()
    .map((p) => p.slug)
    .filter((s): s is string => typeof s === "string" && s.length > 0);
}
