# Phyto-Board™ marketing site

Static marketing site for **Phyto-Board™** by Polymer Solutions LLC — one chemistry, one family of hemp-based products (hemp-mineral binder system).

## Aesthetic

Classic editorial elegance (Sep 2026 mocks, restored): near-black `#0D0D0D`, muted gold `#C5A87B`, Playfair Display + Outfit, chapter labels, thin rules, sharp CTAs, generous air. Mock JPEGs in `assets/mocks/`; clean crops in `assets/photos/`.

## Local preview

```bash
cd /workspace/phyto-board/website
python3 -m http.server 8765
```

Open http://localhost:8765/

No build step. Pure HTML / CSS / JS.

## Deploy (Netlify Drop)

1. Zip the contents of this folder (or drag the folder).
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drop the folder.
3. Forms: `contact` forms use `data-netlify="true"` and `name="contact"`. After first deploy, confirm the form appears under Netlify → Forms.
4. Point `phyto-board.com` DNS to the Netlify site when ready.
5. Optional: replace `assets/og-image.svg` with a 1200×630 PNG for broader OG support.

### Netlify CLI (optional)

```bash
npx netlify deploy --dir=. --prod
```

## Structure

| File | Role |
|------|------|
| `index.html` | Single-page story (#system #performance #kit #about #commons #contact) |
| `system.html` | Redirect / fallback to `index.html#system` |
| `contact.html` | Request the Book (Netlify form `contact`) |
| `thank-you.html` | Form success page |
| `css/styles.css` | Dark editorial design system |
| `js/main.js` | Sticky nav, mobile menu, reveal, track prefill |
| `assets/mocks/` | Section visuals from design mocks |
| `netlify.toml` | Publish root + security headers |

## Dual track (do not conflate)

- **Commercial CTAs:** corporate book, kit brief, partner, licensing
- **Open commons:** Field Guide / Open Library — DIY, NGOs, regional manufacturing (with or without Phyto products)

## Claims

Scoreboard metrics are **design intent / targets**, not certified results. See `NOTES.md`.
