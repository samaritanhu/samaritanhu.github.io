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

## Adding a Field Note

1. Put a compressed JPG or WebP in `public/images/field-notes/`.
2. Add one full metadata object to `fieldNotes` in `src/data/site.ts`.
3. Keep the photo, location, caption, date, and source URL from the same original record.
4. Test `npm run build` and check both desktop and mobile.

## Deployment

Push to `main` after review. The workflow in `.github/workflows/deploy.yml` publishes the Astro build. The repository's GitHub Pages setting needs **GitHub Actions** selected once.
