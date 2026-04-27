# Atelier — Hair & Beauty Studio

**Live:** https://zed0minat0r.github.io/salon-site/

Urban-luxury editorial salon site. Single-page, vanilla JS, no build step.

## Palette
| Token | Hex |
|---|---|
| Espresso | `#1f1a17` |
| Cream | `#f5efe7` |
| Parchment | `#ece4d6` |
| Copper | `#c08e6c` |
| Brass | `#a78c5c` |

## Typography
- Display: Cormorant Garamond (Google Fonts)
- Body: DM Sans (Google Fonts)

## Sections
1. Nav — fixed, transparent to solid on scroll, animated underline links
2. Hero — full-viewport, word-by-word headline reveal, layered botanical SVG silhouettes
3. Services — horizontal scroll-lock (5 panels, craft-site process-runway pattern)
4. Stylists — 3-card grid
5. Gallery — staggered 3-col masonry, 9 images
6. Visit — address + hours, parchment bg
7. Contact — booking form (Formspree, replace placeholder URL)
8. Footer — wordmark, nav links, social placeholders

## Dev notes
- Form action in `index.html` needs a real Formspree endpoint (`https://formspree.io/f/XXXXXXXX`)
- Social hrefs in footer are `#` placeholders
- Brand name is the text "Atelier" — search-replace to rename
- Deployed via `.github/workflows/pages.yml` on push to `main`
- To rename: find/replace "Atelier" across index.html, README.md
