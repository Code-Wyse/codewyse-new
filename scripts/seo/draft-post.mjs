// Weekly SEO blog drafter — uses OpenAI Chat Completions.
// Pops the next keyword from seo/keyword-queue.md, drafts a long-form post,
// writes it to markdown/blog/<slug>.mdx, and marks the keyword [done].
//
// Required env: OPENAI_API_KEY
// Optional env: OPENAI_MODEL (default: gpt-4o)

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import OpenAI from "openai";

const ROOT = process.cwd();
const QUEUE = path.join(ROOT, "seo", "keyword-queue.md");
const OUT_DIR = path.join(ROOT, "markdown", "blog");
const MODEL = process.env.OPENAI_MODEL || "gpt-4o";

const SITE_URL = "https://codewyse.io";
const COMPANY = "Codewyse";

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY env var.");
  process.exit(1);
}

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);

async function readQueue() {
  const raw = await fs.readFile(QUEUE, "utf8");
  const lines = raw.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^- (?!\[done\])(.+)$/);
    if (m) {
      const [keyword, intent = "guide"] = m[1].split("|").map((s) => s.trim());
      return { keyword, intent, lineIndex: i, lines };
    }
  }
  return null;
}

async function markDone(state) {
  const { lineIndex, lines } = state;
  lines[lineIndex] = lines[lineIndex].replace(/^- /, "- [done] ");
  await fs.writeFile(QUEUE, lines.join("\n"), "utf8");
}

const SYSTEM_PROMPT = `You are a senior SEO content strategist and engineer writing for ${COMPANY} (${SITE_URL}), a global software development company that builds custom web apps, mobile apps, AI & ML solutions, SaaS products, MVPs and CRM systems.

Voice: confident, technical, no fluff, no AI cliches ("dive in", "in today's fast-paced world", "unleash"). Use concrete numbers, real library/tool names, real code where relevant.

Goals:
1. Rank in Google for the target keyword (use it in title, H1, first paragraph, one H2, and naturally throughout).
2. Convert readers into consultation bookings (CTA at the end pointing to https://codewyse.io/support).
3. Be the post a senior engineer or CTO actually wants to read — not generic listicle SEO slop.

Output MUST be valid MDX with this exact structure:

\`\`\`
---
title: "<60-char title with the target keyword>"
slug: "<url-slug>"
description: "<155-char meta description with the target keyword>"
keyword: "<target keyword>"
date: "<YYYY-MM-DD>"
author: "Codewyse"
tags: [<3-6 lowercase string tags>]
ogImage: "/images/blog/og-<slug>.jpg"
faqs:
  - q: "<question>"
    a: "<concise answer>"
  - q: "<question>"
    a: "<concise answer>"
  - q: "<question>"
    a: "<concise answer>"
---

# <H1 with target keyword>

<2-3 sentence lede that names the problem and the keyword>

## <H2 #1 — what / why>
...
## <H2 #2 — implementation / how>
\`\`\`code blocks where useful, fenced and language-tagged\`\`\`
## <H2 #3 — comparison / tradeoffs>
## <H2 #4 — common pitfalls>
## <H2 #5 — checklist or step-by-step>
## <H2 #6 — next steps + CTA to /support>

## FAQs
**Q1?**
A1.

**Q2?**
A2.

**Q3?**
A3.
\`\`\`

Hard rules:
- 1800-2400 words total.
- At least 3 internal links: one to /services, one to /projects, one to /support — use natural anchor text.
- At least one external authoritative link (MDN, official docs, RFC, well-known vendor blog) — never invent URLs; only link to canonical official docs you are certain exist.
- Include at least one realistic code block when the topic is technical.
- Include a comparison table (markdown) when the intent is "comparison".
- No emojis. No filler phrases. No "in conclusion".
- Frontmatter must be valid YAML (quote strings with colons).`;

function userPrompt(keyword, intent) {
  const today = new Date().toISOString().slice(0, 10);
  return `Target keyword: "${keyword}"
Intent: ${intent}
Today's date (use in frontmatter): ${today}
Slug to use: ${slugify(keyword)}

Draft the post. Return ONLY the MDX (frontmatter + body), no prose before or after.`;
}

async function draft(keyword, intent) {
  const res = await client.chat.completions.create({
    model: MODEL,
    temperature: 0.5,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt(keyword, intent) },
    ],
  });
  const text = res.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("Empty response from OpenAI.");
  return text;
}

function extractFrontmatter(mdx) {
  const m = mdx.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : "";
}

function frontmatterField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*\"?([^\"\\n]+)\"?$`, "m"));
  return m ? m[1].trim() : null;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const state = await readQueue();
  if (!state) {
    console.log("Keyword queue is empty. Nothing to draft.");
    process.exit(0);
  }

  console.log(`Drafting post for keyword: "${state.keyword}" (intent: ${state.intent})`);
  const mdx = await draft(state.keyword, state.intent);

  const fm = extractFrontmatter(mdx);
  const slug = frontmatterField(fm, "slug") || slugify(state.keyword);
  const outPath = path.join(OUT_DIR, `${slug}.mdx`);

  await fs.writeFile(outPath, mdx, "utf8");
  await markDone(state);

  console.log(`Wrote ${outPath}`);
  console.log(`PR_TITLE=seo: draft "${state.keyword}"`);
  console.log(`PR_BODY_FILE=${outPath}`);
  // Emit a GITHUB_OUTPUT for the workflow to pick up.
  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(
      process.env.GITHUB_OUTPUT,
      `slug=${slug}\nkeyword=${state.keyword}\noutpath=${outPath}\n`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
