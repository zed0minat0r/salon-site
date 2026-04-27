# PLAN — Builder Cycle 3: Honest Gallery Framing + Waitlist Beat + HTML Hygiene

**Files touched:** index.html, style.css, style.min.css (regenerated), CHANGELOG-AGENT.md
**Scope:** ~60 lines changed across 2 source files

## P1 — Gallery framing (index.html)
- Line 349: eyebrow "Our work" -> "Pre-launch"
- Line 350: headline "The proof." -> "The studio takes shape."
- Add .section-sub below h2: "Real client work will live here once we open. Until then, here is the mood we are building toward."
- Add .gallery__mood-caption below grid: "Mood references" (copper/cream-60, centered, low weight)

## P2 — Pre-launch waitlist beat (index.html + style.css)
- Insert new .waitlist section between STYLISTS and GALLERY
- Cormorant italic pull line + copper rule + single CTA button
- Button href="mailto:hello@atelier.studio?subject=Waitlist"
- Parchment background, max-width 720px centered, generous vertical padding
- New CSS: .waitlist, .waitlist__inner, .waitlist__rule, .waitlist__statement, .waitlist__cta

## P3 — Production HTML cleanup (index.html)
- Line 405: remove TODO comment, keep "Studio address coming soon" copy
- Line 448: remove TODO comment
- Line 452: action="https://formspree.io/f/PLACEHOLDER" -> action="#"
- Lines 544-556: remove entire footer social block (TODO comment + two dead href="#" links)

## Success criteria
- Gallery headline replaced, honest pre-launch framing
- Waitlist beat renders between Stylists and Gallery
- form action="#", no TODO comments, no footer social dead links

**Commit:** builder cycle 3: honest pre-launch framing — gallery headline, waitlist beat, HTML hygiene
