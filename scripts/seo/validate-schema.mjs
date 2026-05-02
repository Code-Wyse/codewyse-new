// Static JSON-LD validator. Scans .tsx files under app/ for inline JSON-LD
// blocks and verifies each declares the required @context and @type fields,
// and has balanced braces.
//
// We deliberately do NOT try to parse the JS object literal as JSON — many
// blocks use template literals like `${SITE_URL}/#organization` which are
// valid JS but invalid JSON, and a brittle conversion just causes false
// failures. Schema correctness against schema.org is verified separately by
// Google's Rich Results Test once deployed.

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SCAN_DIR = path.join(ROOT, "app");

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) yield p;
  }
}

const ERRORS = [];
const pushError = (file, msg) =>
  ERRORS.push(`${path.relative(ROOT, file)}: ${msg}`);

function extractInlineJsonLd(source) {
  const re = /__html:\s*JSON\.stringify\(([A-Za-z_][A-Za-z0-9_]*)\)/g;
  const ids = new Set();
  let m;
  while ((m = re.exec(source))) ids.add(m[1]);
  return [...ids];
}

function extractObjectLiteral(source, identifier) {
  const startRe = new RegExp(`(?:const|let|var)\\s+${identifier}\\s*=\\s*\\{`);
  const startMatch = source.match(startRe);
  if (!startMatch) return null;
  const startIdx = startMatch.index + startMatch[0].length - 1;

  let depth = 0;
  let inString = null;
  let i = startIdx;

  for (; i < source.length; i++) {
    const c = source[i];
    const prev = source[i - 1];

    if (inString) {
      if (c === inString && prev !== "\\") inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = c;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return source.slice(startIdx, i + 1);
    }
  }
  return null;
}

function checkBalancedBraces(literal) {
  let depth = 0;
  let inString = null;
  for (let i = 0; i < literal.length; i++) {
    const c = literal[i];
    const prev = literal[i - 1];
    if (inString) {
      if (c === inString && prev !== "\\") inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = c;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth < 0) return false;
    }
  }
  return depth === 0 && inString === null;
}

async function main() {
  for await (const file of walk(SCAN_DIR)) {
    const src = await fs.readFile(file, "utf8");
    const ids = extractInlineJsonLd(src);
    for (const id of ids) {
      const literal = extractObjectLiteral(src, id);
      if (!literal) {
        pushError(file, `JSON-LD object \`${id}\` referenced but definition not found.`);
        continue;
      }
      if (!checkBalancedBraces(literal)) {
        pushError(file, `JSON-LD \`${id}\` has unbalanced braces or unterminated string.`);
        continue;
      }
      if (!/["']@context["']\s*:/.test(literal)) {
        pushError(file, `JSON-LD \`${id}\` missing required field \`@context\`.`);
      }
      if (!/["']@type["']\s*:/.test(literal)) {
        pushError(file, `JSON-LD \`${id}\` missing required field \`@type\`.`);
      }
    }
  }

  if (ERRORS.length > 0) {
    console.error("Schema validation failed:\n");
    for (const e of ERRORS) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log("All inline JSON-LD blocks passed structural validation.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
