# CHANGELOG-AGENT — Atelier Salon Site

## 2026-04-27 — Spark (cycle 2)

2026-04-27 13:00 spark — Frame B: liga/dlig ligatures + letter-spacing -0.012em on ethos statement, copper hairline radial-fade rule (replaced solid 1.5px bar), faint copper radial vignette on espresso band (replaced flat bg), hairline border-top above eyebrow label (no content removed), ref Aesop/Le Labo editorial restraint

---

## 2026-04-27 — Builder (cycle 2)

2026-04-27 16:00 builder — cycle 2: ethos bridge (espresso band, copper rule, Cormorant italic "Considered cuts. Honest color. Slow conversation.") inserted between Services and Stylists; Visit section email fallback (mailto:hello@atelier.studio, copper link color, hover underline) added; style.min.css regenerated (per PLAN.md)

---

## 2026-04-27 — Nigel (cycle 1)

2026-04-27 14:00 nigel — focus axis: conversion-friction, top issue: Formspree endpoint is PLACEHOLDER — booking form is non-functional on live URL, entire conversion path is broken

---

## 2026-04-27 — Pixel (cycle 1)

### Audit results — 375px / 414px

**NAV:** PASS. Hamburger 44x44px. Mobile nav links 44px tap height with padding 14px. CTA hidden on mobile. Brand wordmark 44px min-height aligned.

**HERO:** PASS. Word-reveal fires. Left-aligned editorial copy — intentional design, not drift. hero__actions stacks col on mobile. hero__sub clamp(0.95rem, 1.6vw, 1.1rem) = 15.2px min, fine. sun-glow min 500px width but fully contained by hero overflow:hidden, no body x-scroll.

**SILHOUETTE:** PASS at 375px. preserveAspectRatio xMidYMax slice scales correctly — centre grand arch (x 540–900 in 1440 viewBox) stays within visible slice region. No clipping artifact.

**SERVICES (mobile stack fallback):** PASS. services-runway height:auto, services-sticky position:relative, services-track flex-direction:column. 5 panels stack cleanly. JS guard exits gracefully (budget<=0). Progress dots hidden on mobile. service-fp height 100vw capped at 420px on <=414.

**STYLISTS:** PASS. Single-column grid. Cards render cleanly. No overflow.

**GALLERY:** PASS. 2-col at <=768, 1-col at <=414. gallery__item--wide resets to span 1. No overflow.

**VISIT:** PASS after fix. Two-col collapses to single-col. Text centered post-fix.

**CONTACT FORM:** PASS. form-row collapses to 1-col. All inputs min-height 44px. form-footer stacks col on mobile.

**FOOTER:** PASS. 3-col grid to 1-col. footer__nav wraps centered. Social links centered.

**HORIZONTAL OVERFLOW:** PASS. html/body overflow-x:clip. hero overflow:hidden contains sun-glow. No x-scroll at either viewport.

**CONSOLE ERRORS:** Not auditable statically — JS is simple and defensive (early returns on missing elements).

### Issues found and fixed

1. **Section headings not centered on mobile** (Pixel mandate) — FIXED. Added mobile rule: `.section-eyebrow`, `.section-title`, `.section-sub` all `text-align: center` at <=768px. Also centered `.visit__address` and `.visit__note`. Released `.section-sub` max-width cap (540px) on mobile.

2. **`btn--outline-sm` tap target** — FIXED. Added `min-height: 44px` to stylist card Book CTAs. Previous height ~40px (padding 10px + 12px font-size * 1.65 line-height).

3. **Eyebrow / spec font-size 11.2px** — FIXED on mobile. `.section-eyebrow` and `.stylist-card__spec` bumped to `0.8125rem` (13px) at <=768px. Desktop values remain design-intent small-caps.

### Flagged for future cycles (not fixed — design or desktop only)

- Nav link / button font-sizes (0.75–0.8rem = 12–12.8px) are desktop design intent (all-caps label pattern). Leave for Nigel to score.
- `hero__scroll-label` at 0.65rem is aria-hidden="true" — not an a11y concern.
- service-fp__num large display digits (opacity 0.10) are design ghost numbers at layout level — NOT eyebrow-pattern ghost numerals. OK per plan notes.

2026-04-27 12:00 pixel — cycle 1: centered section headings on mobile, fixed btn--outline-sm tap target (added min-height:44px), bumped eyebrow/spec font-sizes to 13px on mobile
2026-04-27 13:15 pixel — cycle 2: bumped hero__eyebrow/ethos__label/service-fp__price/form labels/footer links to 13px min; fixed visit email mailto tap target (inline-flex 44px); footer nav links min-width:44px; all verified clean at 375+414px

---

## 2026-04-27 — Spark (cycle 1)

2026-04-27 spark — Frame B: art-deco silhouette scene (replaced palm fronds), warm brass radial glow (replaced flat dark ceiling), copper rule on service panels (replaced gap spacing), gallery L-corner accent (replaced scale-only hover), ref Aesop/Le Labo editorial restraint

---

## 2026-04-25 — Builder (cycle 1)

De-fabrication pass — all changes in `index.html`:

1. **Stylist name "Camille"** (line 265) — removed. Role label: "Senior Colorist"
   - Before bio: "12 years formulating color in NYC and London"
   - After bio: generic role description, no tenure/city claim
   - alt updated; CTA: "Book with Camille" → "Book a color service"

2. **Stylist name "Marcus"** (line 278) — removed. Role label: "Precision Stylist"
   - Before bio: "Trained under two Vidal Sassoon alumni"
   - After bio: describes approach, no named training lineage
   - alt updated; CTA: "Book with Marcus" → "Book a cut"

3. **Stylist name "Sasha"** (line 291) — removed. Role label: "Texture Specialist"
   - Before bio: "keratin-certified, bond repair expert"
   - After bio: approach-based, no certification claim
   - alt updated; CTA: "Book with Sasha" → "Book a treatment"

4. **Visit address** — removed "148 West 26th Street, Suite 4, New York, NY 10001"
   - After: "Studio address coming soon" + TODO comment

5. **Visit transit note** — removed NYC-specific directions (23rd St 1/C/E, 28th St, 7th Ave lots)
   - After: neutral placeholder directing to contact form

2026-04-25 14:00 builder — cycle 1 de-fabricate: neutralized 3 stylist names/credentials, NYC address, transit directions (per PLAN.md)

---

## 2026-04-25 — Builder (cycle 0)

2026-04-25 builder — cycle 0 scaffold: hero silhouette scene, horizontal scroll-lock services (5 panels), stylists grid, gallery, visit, contact form, footer, GH Pages workflow (per PLAN.md)
2026-04-25 coordinator — scheduled: Builder, Spark, Pixel, Nigel; focus: de-fabricate then polish then audit then score; forbidden: services-runway-structure (Spark), stylist-copy (Spark), visit-address (Spark), remove-animations (Nigel), ghost-numerals (all), fake-reviews (all)
2026-04-25 15:00 qa — 390px+1440px urgent diagnostic: 2 critical bugs found (hamburger blocked by navLinks overlay, PLACEHOLDER form endpoint), plus 5 additional issues
