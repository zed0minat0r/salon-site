# BUGS.md — Atelier Salon Site
## QA Diagnostic — 2026-04-25 (urgent customer report)

Tested: https://zed0minat0r.github.io/salon-site/?v=diag
Viewports: 390x844 (iPhone 13, Safari UA) + 1440x900 (Desktop)

---

### BUG 1 [CRITICAL] — Mobile hamburger is completely unclickable
**File:** style.css (mobile block, ~line 1088) + main.js (hamburger IIFE, line 26)
**Viewport:** 390px mobile

The `.nav__links` element is `position: fixed`, has `pointer-events: auto`, and its bounding rect overlaps the hamburger button even when the menu is CLOSED (bottom edge of navLinks at y=30.7, hamburger sits at y=8–52). The navLinks element intercepts all pointer events on the hamburger, making it completely unclickable. Playwright confirmed: "navLinks intercepts pointer events" — timeout after 30s trying to click the hamburger.

**Data:**
- hamburgerRect: top=8, left=326, right=370, bottom=52
- navLinksRect: top=-262, bottom=30.7, left=0, right=390
- navLinksPointerEvents: "auto"
- navLinksOverlapsHamburger: true

**Fix needed:** Add `pointer-events: none` to `.nav__links` when closed; toggle to `pointer-events: auto` only when `.is-open`.

---

### BUG 2 [CRITICAL] — Booking form submits to PLACEHOLDER Formspree endpoint
**File:** index.html line 440
**Viewport:** Both

`action="https://formspree.io/f/PLACEHOLDER"` — every form submission returns a Formspree error page. This is the primary conversion action on the site. Already flagged by Nigel cycle 1 but NOT fixed.

---

### BUG 3 [MAJOR] — Desktop services section: entire mid-section is a blank dark void
**File:** style.css line 492 (`.services-runway { height: 500vh; }`)
**Viewport:** 1440px desktop

The horizontal scroll-lock WORKS (track.style.transform shows active translate at scroll position), but the runway is 4500px tall. After the last service panel scrolls through, the user is left staring at a solid espresso-colored blank section for ~1800px of vertical scroll before the stylists section appears. Visually this looks completely broken — a massive empty region in the middle of the page. Same issue is visible in the desktop screenshot: huge black gap between the services section and stylists cards.

**Note:** The scroll logic itself is functional. The issue is the runway height (500vh) combined with the dwell region. The last 20% of the 500vh runway (900px on this viewport) is intentional dwell time — but visually the sticky panel just sits frozen with no indication to keep scrolling.

---

### BUG 4 [MAJOR] — Mobile: stylists section and gallery are invisible (blank parchment/espresso blocks)
**Viewport:** 390px mobile
**Screenshot evidence:** After the 5 stacked service panels, the page shows a large blank parchment-colored block (stylists section) with no visible card content, then a blank dark block (gallery), then small contact form content, then footer.

The `.reveal-up` elements start at `opacity: 0; transform: translateY(28px)` and require IntersectionObserver to fire. On mobile the full-page screenshot captures elements that never enter the viewport during static load — but the real issue is that the blank regions look broken to any user who doesn't actively scroll. Combined with Bug 1 (hamburger unclickable), users can't navigate to these sections either.

---

### BUG 5 [MODERATE] — `var nav` declared twice in main.js hamburger IIFE (strict mode violation)
**File:** main.js lines 9 and 53
**Viewport:** Both

The hamburger IIFE has `'use strict'` at the top of the file (line 6). Inside the IIFE, `var nav = document.getElementById('nav')` is declared at line 53, but `nav` is already in scope from the outer scroll IIFE (lines 9–23). In strict mode with function scoping this is a silent redeclaration, not a throw — but it's a code quality defect that could mask bugs. No thrown JS error observed in Playwright.

---

### BUG 6 [MODERATE] — Social links go nowhere (#)
**File:** index.html lines 534, 539
**Viewport:** Both

Both footer social links (Instagram, TikTok) use `href="#"`, which scrolls to top of page rather than linking to actual profiles. The TODO comment is present but the links are live and mislead users.

---

### BUG 7 [LOW] — Visit section: "Studio address coming soon" is live content
**File:** index.html line 395
**Viewport:** Both

Placeholder text is live on the customer-facing URL. No map, no address. Customers looking to visit have no actionable information.

---

### Summary table

| # | Severity | Description | Fix location |
|---|----------|-------------|--------------|
| 1 | CRITICAL | Hamburger unclickable — navLinks intercepts pointer events | style.css mobile nav block |
| 2 | CRITICAL | Form submits to PLACEHOLDER endpoint — all bookings lost | index.html line 440 |
| 3 | MAJOR | Desktop: ~1800px blank void in services scroll section | style.css .services-runway |
| 4 | MAJOR | Mobile: stylists + gallery invisible (opacity:0, never revealed on screenshot) | style.css reveal-up / JS IntersectionObserver |
| 5 | MODERATE | var nav redeclared in strict mode file | main.js line 53 |
| 6 | MODERATE | Social links are dead (#) | index.html footer |
| 7 | LOW | Address placeholder is live | index.html line 395 |

**Console errors:** 0 JS errors thrown
**Network errors:** 0 404s — all Unsplash images load, CSS/JS load
**Screenshots saved:** /tmp/salon-broken-iphone.png, /tmp/salon-broken-desktop.png
