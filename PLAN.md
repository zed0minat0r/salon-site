# PLAN — Horizontal Scroll-Lock Fix (3 bugs)

**Files touched:** index.html, style.css, main.js, style.min.css
**Scope:** ~20 lines changed across 3 files + regenerate minified CSS

## Bug 1 — Panel 5 mobile title overflow (index.html)
- Line 239: "Brows, Nails & Add-ons" → "Brows & Add-ons" (drop "Nails,")
- style.css: add @media (max-width: 480px) rule on .service-fp__title:
  font-size: clamp(2rem, 7vw, 2.6rem)

## Bug 2 — Dead scroll zone (index.html + style.css)
- index.html line 164: remove the .section-sub paragraph
- style.css .services__intro padding: change to
  clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px) clamp(40px, 5vw, 60px)
- Add copper bottom rule on .services__intro::after (thin 1px rule)

## Bug 3 — Zero dwell on panel 5 (main.js + style.css)
- main.js line 120: SLIDE_FRAC = 1.0 -> 0.85
- main.js dot-click handler: use (budget * SLIDE_FRAC / segments) * i
- style.css .services-runway height: 420vh -> 480vh

## Success criteria
- Desktop: pin happens almost immediately at section entry
- Panel 5 lands with scroll-dwell before unpin
- Mobile 375px: panel 5 title fits 1-2 lines

**Commit:** fix: horizontal scroll-lock — intro tightened, panel 5 dwell, mobile title fit
