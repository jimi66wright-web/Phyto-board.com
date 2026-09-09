# NOTES — assumptions & asks for Jim

## Aesthetic (Sep 2026 — classic return)

**Hero/nav rebuild (mock-faithful):** Full-bleed cinematic `hero-building.jpg` re-cropped from `mocks/07-front-page.jpg` (building lower-right, mist mountains, no baked UI text). Dark left veil. Nav: large hemp badge + gold serif wordmark + SYSTEM/PERFORMANCE/KIT/ABOUT + solid gold REQUEST THE BOOK. Left mid hero with quiet meta “Hemp-based coastal structure”, soft-glow serif H1 (pillar-first copy), white lede, solid + ghost CTAs, vertical SCROLL cue. Paradigm keeps “We don’t sell panels…”. Typo fix: “joining the wall”.


**Classic editorial elegance** restored to match Jim’s attached “best versions” mocks: near-black `#0D0D0D`, muted gold `#C5A87B`, Playfair Display + Outfit, chapter labels, thin rules, sharp rectangular CTAs, generous air. Drift (warm card frames, competing effects, densities photo on wrong side, kit step chrome) pulled back toward the mock layouts while keeping Jim’s later hard constraints.

## Hard constraints kept

1. **Hero open (pillar-first):** “Lower cost to own. / Storm-ready. *Quick recovery.*” + hemp-based coastal lede. CTAs: See the Pillars / Request the Book.
2. **“We don’t sell panels…”** lives in **Paradigm / System**, not the hero.
3. **Logo:** large tan hemp-leaf `assets/logo.png` (~76px) in nav.
4. **Typography / palette:** classic serif headlines, sans UI, gold on near-black, thin rules, sharp buttons.
5. **Shadow:** soft headline glow only — no bright tiny overprint / no doubled baked photo text.
6. **Claims:** scoreboard “Design Intent / Targets — Not Certified.” Footer **Polymer Solutions LLC**. Studio lead: “Phyto-Board is led by…”
7. Dual-track commons band + Netlify contact form pages restyled to match.
8. Simpler grids matching mocks — fewer competing effects.

## Assumptions

1. Entity: Polymer Solutions LLC; product brand Phyto-Board™; contact info@phyto-board.com.
2. Performance numbers are **design intent / targets** — not certified.
3. Dual track: commercial (book, kits, licensing) + open Field Guide commons.
4. `system.html` redirects to `index.html#system`.

## What Jim should supply next

| Asset | Why |
|-------|-----|
| Production photography | Replace mock-derived crops when ready |
| OG image 1200×630 PNG | Stronger social previews |
| Field Guide outline / link | Wire Open Library CTA |
| Validated test reports | Promote badges from design intent → validated |

## Deploy checklist

- [ ] Drop on Netlify; verify Forms → `contact`
- [ ] Test CTA → `/contact.html` and form → `/thank-you`
- [ ] Custom domain + HTTPS
