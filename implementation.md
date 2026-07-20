# Implementation guide

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Astro prints the local URL (normally `http://localhost:4321`).

## Checks and production build

```bash
npm run build
npm run preview
```

`npm run build` runs Astro's type/content checks before creating the deployable `dist/` directory.

## Editing the homepage

| Change | File |
| --- | --- |
| Copy, places, sources, Field Note images | `src/data/site.ts` |
| Page order | `src/pages/index.astro` |
| Layout and typography | `src/styles/global.css` |
| A specific homepage section | matching file in `src/components/` |
| Photograph files | `public/images/` |
| Journal entries | `src/content/journal/` |

## Adding a Field Note

1. Put a compressed JPG or WebP in `public/images/field-notes/`.
2. Add one full metadata object to `fieldNotes` in `src/data/site.ts`.
3. Keep the photo, location, caption, date, and source URL from the same original record. The first two notes are the curated homepage selection; later entries appear in the full `/field-notes/` archive.
4. Test `npm run build` and check both desktop and mobile.

## Adding a journal entry (no local setup needed)

The Thinking and Salon pages are built from Markdown in `src/content/journal/`.

1. On GitHub, open the appropriate language and room folder, for example `src/content/journal/zh/salon/`.
2. Choose **Add file → Create new file**, and name it like `04-a-short-title.md`.
3. Copy [`journal-template.md`](journal-template.md) into the new file. Set `locale` to `en` or `zh`, `room` to `thinking` or `salon`, and give each entry a larger `order` number.
4. Write below the second `---`. Normal paragraphs are journal text; a line beginning with `>` is an excerpt.
5. Commit the new file to `main`. GitHub Actions will deploy it automatically, normally within a few minutes.

For a not-yet-public draft, set `draft: true` in the front matter. It will remain in the repository but will not appear on the site.

## Deployment

Push to `main` after review. The workflow in `.github/workflows/deploy.yml` publishes the Astro build. The repository's GitHub Pages setting needs **GitHub Actions** selected once.
