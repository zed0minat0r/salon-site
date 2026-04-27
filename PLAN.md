# PLAN — Cycle 0: Atelier Salon Site Scaffold

## What changes
- `index.html` — full single-page site: nav, hero, services (h-scroll lock), stylists, gallery, visit, contact, footer
- `style.css` — all styles, section-divided, mobile-first
- `main.js` — scroll-lock (craft-site pattern), word-reveal observer, nav scroll, form handling
- `README.md` — project doc
- `.github/workflows/pages.yml` — GH Pages deploy
- `assets/` — placeholder dir

## Sections in order
1. Nav: fixed, transparent → solid on scroll, Book Now CTA
2. Hero: full-viewport, word-by-word headline, layered botanical SVG silhouettes at bottom, scroll hint
3. Services: horizontal scroll-lock runway (craft-site process-runway/track/fp pattern), 5 panels
4. Stylists: 3-card grid/stack
5. Gallery: staggered 3-col grid, 9 placeholders, hover lift
6. Visit: address/hours, parchment bg
7. Contact/Booking: form → Formspree placeholder
8. Footer

## Success criterion
- Zero console errors
- H-scroll lock works desktop + mobile
- Word reveal fires on load
- Nav solidifies on scroll
- Pages deploy runs on push to main

## Scope
~800 LOC HTML, ~900 LOC CSS, ~200 LOC JS
