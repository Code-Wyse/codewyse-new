# Codewyse SEO Automation — Runbook

## What runs on its own

| Workflow | When | What it does | File |
|---|---|---|---|
| **SEO Blog Drafter** | Every Monday 09:00 UTC | Pops next keyword from `seo/keyword-queue.md`, drafts a 1.8–2.4k-word MDX post via the OpenAI API, opens a PR | `.github/workflows/seo-blog-drafter.yml` + `scripts/seo/draft-post.mjs` |
| **Lighthouse CI** | Every PR + Mondays 06:00 UTC | Builds the static site, runs Lighthouse against home + 4 service pages, blocks PRs that drop performance / SEO scores | `.github/workflows/seo-lighthouse.yml` + `lighthouserc.json` |
| **Schema Validator** | Every PR touching `app/**` | Parses every inline JSON-LD block in the app, fails if `@context` / `@type` missing or malformed | `.github/workflows/seo-schema-validate.yml` + `scripts/seo/validate-schema.mjs` |
| **Broken Link Sweep** | Every Wednesday 07:00 UTC | Crawls https://codewyse.io, opens an issue listing every 4xx/5xx link | `.github/workflows/seo-link-check.yml` |

## Architecture (where the cron actually runs)

> **AWS Amplify only hosts the static build — it does not run cron jobs.**

```
GitHub Actions (cron)
        │
        │ drafts PR / opens issue
        ▼
GitHub repo  ─── webhook ───▶  AWS Amplify  ─── builds + deploys ───▶  https://codewyse.io
        ▲
        │
       you (review + merge PR)
```

Amplify's "Connect repository" feature already auto-deploys on every push to `main`. So a merged drafter PR → Amplify rebuilds in ~3 min → the new post is live. No extra Amplify config needed.

## One-time setup

### 1. Add GitHub secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Required for | Where to get it |
|---|---|---|
| `OPENAI_API_KEY` | Blog Drafter | https://platform.openai.com/api-keys |
| `LHCI_GITHUB_APP_TOKEN` | Lighthouse PR comments (optional) | Install https://github.com/apps/lighthouse-ci then copy the token |

### 2. Add a repository variable (optional)

Same screen → **Variables** tab:

| Variable | Default | Notes |
|---|---|---|
| `OPENAI_MODEL` | `gpt-4o` | Override to `gpt-4.1`, `gpt-4o-mini`, etc. |

### 3. First-time enable

```bash
git add .github/ scripts/seo/ seo/ lighthouserc.json package.json
git commit -m "chore: add SEO automation workflows"
git push origin main
```

Then in **GitHub → Actions tab**, enable workflows if prompted.

### 4. Smoke test

Manually trigger the drafter once to verify everything works:

GitHub → **Actions → SEO Blog Drafter → Run workflow**.

Within ~2 minutes a PR titled `seo: draft "<keyword>"` should appear.

## Auto-merge mode (currently enabled)

Drafter PRs auto-merge as soon as **all required status checks pass**:

- `SEO Lighthouse CI`
- `SEO Schema Validate`
- Pre-PR sanity check (frontmatter valid, 1500-3000 words, ≥4 H2s, internal links present, no AI cliches)

If any check fails, the PR stays open and waits for you.

### One-time GitHub setup to make auto-merge actually safe

If you skip these two steps, "auto-merge" silently merges anything — including failing or unreviewed posts.

**A. Enable auto-merge on the repo**

GitHub → repo → **Settings → General → Pull Requests** → check **Allow auto-merge**.

**B. Add branch protection on `main`**

GitHub → repo → **Settings → Branches → Add branch ruleset** (or "Add classic branch protection rule"):

- **Branch name pattern:** `main`
- **Require a pull request before merging:** on
- **Require status checks to pass before merging:** on
  - Required checks: `lighthouse`, `validate` (the schema validator job)
- **Require branches to be up to date before merging:** on
- **Do not allow bypassing the above settings:** on

Without branch protection requiring those checks, GitHub will happily auto-merge even if Lighthouse fails. **Set this up before pushing the workflows.**

### To pause auto-merge (e.g. you're going on vacation)

Run the drafter manually with `auto_merge: false`:

GitHub → Actions → SEO Blog Drafter → Run workflow → set `auto_merge` to `false`.

Or just disable the scheduled trigger in the workflow file.

## ⚠️ The Google penalty risk

> Google's spam policy targets "scaled content abuse" — sites publishing AI content at scale without human review. Sites have been de-indexed for this in March 2024 and August 2024 core updates.

Mitigations baked into this setup:

1. **Sanity check** rejects posts that obviously look auto-generated.
2. **Lighthouse SEO score gate** ≥ 0.95 means the post must have a real meta description, H1, alt text, etc.
3. **Schema validator** ensures structured data is valid (Google rewards correctness).
4. **One post per week** is below the "scaled" threshold Google cares about.

But the safest stance is still: **read the post before merging.** Even a 60-second skim catches the obvious AI tells. If you want zero-touch, accept that one bad core update may cost you rankings.

## Weekly review loop (recommended even with auto-merge)

1. **Monday morning:** glance at the new PR (5 min, before it auto-merges).
2. If anything is off, comment "do not merge" or close the PR — auto-merge stops.
3. Otherwise let it merge → Amplify auto-deploys → submit the URL to **Google Search Console → URL Inspection → Request Indexing**.
4. Generate an OG image (Figma, Canva, or `gpt-image-1`) → save to `public/images/blog/og-<slug>.jpg`.
5. Add a card entry to `components/Blog/blogData.tsx` referencing the post.

## Things that still need a human (don't try to automate)

- **GoodFirms / Clutch reviews** — they detect fake reviews and de-list.
- **HARO / Qwoted journalist replies** — automated answers get flagged in seconds.
- **Guest post outreach** — automated outreach is the fastest path to a domain blacklist.
- **Founder LinkedIn posting** — inauthentic + ToS risk.

## Roadmap (Phase 2, when you're ready)

- **Google Search Console keyword harvester** (monthly) — pulls queries where you rank 5–20 and prepends them to `seo/keyword-queue.md`. Needs a Google service-account JSON in secrets.
- **Content refresh** (monthly) — re-runs the drafter on posts older than 6 months and opens a "refresh" PR.
- **Image optimizer** (per PR) — converts new PNG/JPG additions in `public/images/` to WebP/AVIF and rewrites the `<Image src>`.
- **Indexing API ping** (post-deploy) — calls Google's Indexing API on changed URLs after every Amplify build.
- **Filesystem-driven blog** — refactor `components/Blog/blogData.tsx` to read frontmatter from `markdown/blog/*.mdx` so merged drafter PRs go live with zero manual tsx edits.

Ping me to wire any of these up.

## Cost expectations

- **GitHub Actions:** free tier (2,000 min/mo on private repos) covers all four workflows easily.
- **OpenAI:** ~$0.05–0.20 per drafted post on `gpt-4o`. ~$1/month at one post per week.
- **Lighthouse CI / linkinator:** zero.
- **AWS Amplify:** unchanged — automation doesn't add to your bill.

Total: under $5/month for the full stack.
