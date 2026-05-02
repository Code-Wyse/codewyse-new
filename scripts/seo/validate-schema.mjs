// Static JSON-LD validator. Scans .tsx files under app/ for inline JSON-LD
// blocks and (a) parses each as JSON and (b) requires @context + @type.
// Fails CI if any block is invalid.

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

function pushError(file, msg) {
  ERRORS.push(`${path.relative(ROOT, file)}: ${msg}`);
}

function extractInlineJsonLd(source) {
  // Matches `JSON.stringify(<identifier>)` so we know which const holds the JSON-LD.
  const re = /__html:\s*JSON\.stringify\(([A-Za-z_][A-Za-z0-9_]*)\)/g;
  const ids = new Set();
  let m;
  while ((m = re.exec(source))) ids.add(m[1]);
  return [...ids];
}

function extractObjectLiteral(source, identifier) {
  // Find `const <id> = { ... };` and return the object body.
  const re = new RegExp(
    `const\\s+${identifier}\\s*=\\s*(\\{[\\s\\S]*?\\n\\});`,
    "m"
  );
  const m = source.match(re);
  return m ? m[1] : null;
}

function looseJsonParse(literal) {
  // Convert TS/JS object literal (single quotes, unquoted keys) into JSON.
  // This is a best-effort parse — if it fails we report the issue but don't
  // crash CI on legitimate dynamic interpolations.
  let s = literal
    .replace(/\/\/.*$/gm, "")
    .replace(/,\s*([}\]])/g, "$1");
  // unquoted keys -> quoted
  s = s.replace(/([{,]\s*)([A-Za-z_@][A-Za-z0-9_-]*)(\s*:)/g, '$1"$2"$3');
  // single-quoted strings -> double-quoted (naive; skip if contains escape)
  s = s.replace(/'([^'\\]*)'/g, '"$1"');
  return JSON.parse(s);
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
      let obj;
      try {
        obj = looseJsonParse(literal);
      } catch (e) {
        pushError(file, `JSON-LD \`${id}\` failed to parse: ${e.message}`);
        continue;
      }
      if (!obj["@context"]) pushError(file, `JSON-LD \`${id}\` missing \`@context\`.`);
      if (!obj["@type"]) pushError(file, `JSON-LD \`${id}\` missing \`@type\`.`);
    }
  }

  if (ERRORS.length > 0) {
    console.error("Schema validation failed:\n");
    for (const e of ERRORS) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log("All inline JSON-LD blocks validated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
