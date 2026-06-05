# Paul Johnson — Guitarist

A modern, single-page React site for jazz guitarist Paul Johnson, replacing the
older multi-page HTML site. Built with [Vite](https://vitejs.dev/) + React.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

Almost all text and links live in [`src/data.js`](src/data.js) — band names,
streaming links, services, and the booking email. Section copy (bio, headlines)
lives in the matching component under [`src/components/`](src/components/).

> **Note:** The booking email (`booking@guitaristpauljohnson.com`) and the
> "15+ years" stat are placeholders — confirm these with Paul before launch.

## Structure

- `src/components/Hero.jsx` — landing headline + calls to action
- `src/components/About.jsx` — bio, bands, quick stats
- `src/components/Music.jsx` — *Coming Home* album + streaming links
- `src/components/Performances.jsx` — services / ensemble formats
- `src/components/Contact.jsx` — booking call-to-action
- `src/index.css` — all styling (warm jazz theme, fully responsive)

## Deploying

The `dist/` folder is fully static — drop it on Netlify, Vercel, GitHub Pages,
or any static host.
