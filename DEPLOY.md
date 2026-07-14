# How this site is deployed (updated 2026-07-14)

Live site: **https://sumitbalmiki90.github.io/sumit-portfolio/**

The GitHub repo `sumitbalmiki90/sumit-portfolio` now has two branches:

- **`main`** — the source code (this folder: `app/`, `components/`, configs).
- **`gh-pages`** — the built website (the contents of `out/`). GitHub Pages
  serves the live site from this branch (Settings → Pages → branch `gh-pages`).

⚠️ Do NOT follow the old drag-and-drop instructions (uploading `out/` contents
to `main`) — that would dump built files on top of the source code.

## To update the live site

Easiest: open Claude Code in this folder and say
**"rebuild the portfolio and deploy it to GitHub Pages"**.

Manual steps (for a developer):

1. Edit the source, then run `npm run build` — output goes to `out/`.
2. Ensure `out/.nojekyll` exists (create an empty file with that name if not —
   without it GitHub ignores the `_next/` folder and the site loads unstyled).
3. Commit the *contents* of `out/` to the `gh-pages` branch and push.
4. Commit any source changes to `main` and push.
5. Wait ~1–2 minutes, then hard-refresh the live site (Ctrl+Shift+R).

## Notes

- `next.config.mjs` sets `basePath: '/sumit-portfolio'` — required because the
  site lives at a sub-path. Local preview runs at
  **http://localhost:3000/sumit-portfolio** (`npm run dev`).
- If a Pages rebuild doesn't start after a push, trigger one from the repo's
  Settings → Pages, or via the API (`POST /repos/{owner}/{repo}/pages/builds`).
