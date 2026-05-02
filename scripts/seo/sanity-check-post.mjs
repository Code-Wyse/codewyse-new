// Pre-PR sanity check on a freshly drafted MDX post.
// Fails if anything looks off — drafter workflow then refuses to open the PR.
//
// Usage: node scripts/seo/sanity-check-post.mjs <path/to/post.mdx>

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/seo/sanity-check-post.mjs <file.mdx>");
  process.exit(2);
}

const errors = [];
const warn = (m) => console.warn(`WARN: ${m}`);
const fail = (m) => errors.push(m);

const src = await fs.readFile(file, "utf8");

// Frontmatter
const fmMatch = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
if (!fmMatch) fail("Frontmatter block missing or malformed.");
const fm = fmMatch ? fmMatch[1] : "";

const required = ["title", "slug", "description", "keyword", "date", "author"];
for (const k of required) {
  if (!new RegExp(`^${k}:\\s*\".+\"`, "m").test(fm) && !new RegExp(`^${k}:\\s*\\S+`, "m").test(fm)) {
    fail(`Frontmatter missing required field: ${k}`);
  }
}

// Title length
const titleMatch = fm.match(/^title:\s*\"?(.+?)\"?$/m);
if (titleMatch) {
  const title = titleMatch[1].trim();
  if (title.length > 65) fail(`Title is ${title.length} chars (max 65 for SERP).`);
  if (title.length < 30) warn(`Title is ${title.length} chars (under 30 — usually too short).`);
}

// Description length
const descMatch = fm.match(/^description:\s*\"?(.+?)\"?$/m);
if (descMatch) {
  const desc = descMatch[1].trim();
  if (desc.length > 165) fail(`Description is ${desc.length} chars (max 165 for SERP).`);
  if (desc.length < 100) warn(`Description is ${desc.length} chars (under 100).`);
}

// Slug matches filename
const slugMatch = fm.match(/^slug:\s*\"?([a-z0-9-]+)\"?$/m);
if (slugMatch) {
  const expected = `${slugMatch[1]}.mdx`;
  if (path.basename(file) !== expected) {
    fail(`Filename ${path.basename(file)} does not match slug "${slugMatch[1]}".`);
  }
}

// Body
const body = fmMatch ? src.slice(fmMatch[0].length) : src;
const wordCount = body.trim().split(/\s+/).length;
if (wordCount < 1500) fail(`Word count ${wordCount} is below 1500.`);
if (wordCount > 3500) warn(`Word count ${wordCount} is above 3500 (unusually long).`);

// Must include H1
if (!/^#\s+\S/m.test(body)) fail("No H1 (`# ...`) in body.");

// Must include at least 4 H2s
const h2Count = (body.match(/^##\s+/gm) || []).length;
if (h2Count < 4) fail(`Only ${h2Count} H2 sections (minimum 4).`);

// Required internal links
const internal = ["/services", "/projects", "/support"];
for (const link of internal) {
  if (!body.includes(`](${link})`) && !body.includes(`](https://codewyse.io${link})`)) {
    fail(`Missing required internal link to ${link}.`);
  }
}

// No banned phrases (AI cliches)
const banned = [
  /\bin today's fast-paced world\b/i,
  /\bdive (in|into)\b/i,
  /\bunleash\b/i,
  /\bgame[- ]?changer\b/i,
  /\bin conclusion\b/i,
  /\brevolutionize\b/i,
  /\bharness the power of\b/i,
];
for (const re of banned) {
  if (re.test(body)) fail(`Banned cliche matched: ${re}`);
}

// Should reference the target keyword in the H1 / first paragraph
const keywordMatch = fm.match(/^keyword:\s*\"?(.+?)\"?$/m);
if (keywordMatch) {
  const kw = keywordMatch[1].trim().toLowerCase();
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.toLowerCase() ?? "";
  const firstPara = body.split(/\n\s*\n/)[1]?.toLowerCase() ?? "";
  const inH1 = h1.includes(kw);
  const inLede = firstPara.includes(kw);
  if (!inH1 && !inLede) {
    fail(`Target keyword "${keywordMatch[1]}" not in H1 or first paragraph.`);
  }
}

if (errors.length > 0) {
  console.error("Sanity check failed:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`Sanity check passed (${wordCount} words, ${h2Count} H2 sections).`);
