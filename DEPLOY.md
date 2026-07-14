# Deploying to GitHub Pages (manual upload via github.com)

The deploy-ready site is the **contents of the `out/` folder** (58 files, ~1.8 MB).
It is built with `basePath: /sumit-portfolio` so it renders correctly at
`https://sumitbalmiki90.github.io/sumit-portfolio/`.

## Steps

1. Go to your repo on github.com: **`sumitbalmiki90/sumit-portfolio`** (the one that
   serves the live site). Make sure you're on the branch GitHub Pages publishes from
   (Settings → Pages tells you which branch/folder — likely `main`, root).

2. Click **Add file → Upload files**.

3. Open the `out/` folder on your PC, select **everything inside it** (Ctrl+A) —
   including the `_next` folder and the `case-studies` folder — and **drag it onto the
   upload area**. Do NOT drag the `out` folder itself; drag its *contents* so they land
   at the repo root.

4. ⚠️ **The `.nojekyll` file often does NOT survive drag-and-drop.** After the upload,
   confirm it's in the repo root. If it's missing, create it manually:
   **Add file → Create new file**, name it exactly `.nojekyll` (leave it empty),
   then Commit. Without this file, GitHub ignores the `_next/` folder and the site
   loads unstyled.

5. Write a commit message (e.g. "Reposition: dual-pillar + 4 real case studies") and
   **Commit changes**.

6. Wait ~1–2 minutes for Pages to rebuild, then hard-refresh
   `https://sumitbalmiki90.github.io/sumit-portfolio/` (Ctrl+Shift+R).

## Optional cleanup

Your old hand-coded site left these orphan files in the repo (now unused — the new
`index.html`/`about.html`/etc. overwrite the old pages by name):
- `css/` folder (old `styles.css`)
- `js/` folder (old `main.js`)

They're harmless but you can delete them on github.com for tidiness.

## What changed in the source (for future rebuilds)

- `next.config.mjs` now sets `basePath: '/sumit-portfolio'` — required for the project
  page. To rebuild: `npm run build`, then re-add `out/.nojekyll` (the build doesn't
  create it), then re-upload `out/` contents.
- Local preview now runs at **http://localhost:3000/sumit-portfolio** (note the path)
  when you run `npm run dev`.
