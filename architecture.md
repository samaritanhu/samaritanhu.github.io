# Architecture

## Goal

Replace the generated Hexo site with a small, static Astro site that is simple to edit, fast to load, and deployable to GitHub Pages without committing generated HTML.

## System shape

```text
src/data/site.ts        ← editable site copy, room links, and field-note metadata
src/components/         ← visual sections of the homepage
src/layouts/BaseLayout  ← document shell, metadata, and global styles
src/pages/index.astro   ← composition root
public/images/          ← user-owned photography served as static assets
.github/workflows/      ← build and deploy pipeline
```

Astro renders the site at build time. There is no server, database, client-side framework, tracking script, or external image host.

## Decisions

| Decision | Reason |
| --- | --- |
| Astro static output | The site is editorial and content-led; static HTML is the fastest, lowest-maintenance fit. |
| Local first-party photos in `public/images` | Avoids fragile social-media URLs, preserves attribution context, and makes the live site independent from Instagram availability. |
| Field-note metadata in one TypeScript module | Image, caption, location, date, and source travel together so they cannot accidentally be mismatched. |
| CSS custom properties plus component classes | Keeps the visual system coherent without adding a design-system dependency. |
| GitHub Actions deployment | Keeps build output out of git and gives GitHub Pages a reproducible deploy artifact. |

## Legacy material

The old generated Hexo files remain in the repository during this first migration. `hexo-source/` remains untouched as the original source archive. A later, explicit cleanup can remove generated legacy paths after the Astro deployment has been stable.

The Astro TypeScript check is intentionally scoped to `src/` and `astro.config.mjs`, so that unmaintained legacy JavaScript is not treated as current application code.

## Deployment

The GitHub Action installs locked dependencies, runs `npm run build`, uploads `dist/`, and deploys that artifact to GitHub Pages. In the repository settings, Pages must be set to **GitHub Actions** as its source.
