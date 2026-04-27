# AUDIT — Atelier Salon Site
## Cycle 2 — 2026-04-27
**Axis:** Trust architecture
**Score:** 6.4 / 10 (delta: +0.3 from cycle 1 baseline of 6.1)
**Live URL:** https://zed0minat0r.github.io/salon-site/

---

## Scoring context

Scored from the perspective of a prospective salon client who landed cold — perhaps via a Google search for a NYC-area urban-luxury salon. The 90-second question: does this site give me enough reason to submit a booking request, pick up the phone, or send an email?

Cycle 2 delivered three meaningful cycles of work: an ethos bridge section, a form fallback so the booking path no longer hard-fails, and a mobile-polish pass. The score moves from 6.1 to 6.4. Progress is genuine but modest — the cap of 7.5 exists for correct structural reasons (no real photography, no real reviews, no real address), and those gaps remain fully open.

---

## What landed this cycle (per commit)

- **5fa0b54** — 3 critical bugs fixed: hamburger now fires on mobile, services section no longer leaves a scroll-void after panel 5, form fallback replaced dead Formspree PLACEHOLDER with a mailto: draft open + inline success state.
- **4454330** — QA diagnostic commit (no user-facing change; surfaces 7 issues for prioritisation).
- **85e7b01** — Ethos bridge section ("Considered cuts. Honest color. Slow conversation.") inserted between Services and Stylists; email fallback added to Visit section.
- **d6c9f09** — Spark Frame B: Cormorant ligatures enabled, letter-spacing tightened to -0.012em on ethos statement, copper rule upgraded from solid bar to radial-fade hairline, faint copper radial vignette on espresso band.
- **e9d4a88** — Pixel: font floors to 13px on hero eyebrow, ethos label, service price, form labels, footer links; visit email tap target 44px; footer nav min-width 44px.

---

## What works (confidence-builders)

- **Form is no longer a dead end.** The mailto: fallback is genuinely clever — a visitor who fills in the form now gets affirmative feedback (inline success state) and an email draft opens pre-filled. For a pre-launch demo, this is a real improvement over the error the PLACEHOLDER endpoint would have produced.
- **Ethos bridge earns its position.** "Considered cuts. Honest color. Slow conversation." in Cormorant italic at clamp(2rem–3.5rem) with the copper radial-fade hairline rule is restrained and editorial. It lands as a beat of breathing room between the scroll-heavy services section and the stock-portrait stylists section. The radial vignette on the espresso band is subtle enough to add warmth without reading as a design asset.
- **Horizontal scroll-lock services remain the site's strongest differentiator.** The scroll-void bug is gone. The five-panel experience with copper price-rule dividers and progress dots is genuinely more engaging than any competitor salon site I would expect to encounter. This section alone lifts the overall impression.
- **Mobile passes basic usability.** The 13px font floors mean no text is reading below readable threshold on a 375px device. Tap targets at 44px across hamburger, booking CTAs, and visit email link mean no frustrating mis-taps.
- **Visual language is coherent.** Espresso/cream/copper palette, Cormorant + DM Sans pairing, and the art-deco silhouette scene are consistent across every section. The site does not look assembled from different template fragments.

---

## What's still off (actual problems)

- **"Studio address coming soon" is still there.** This is the single biggest trust-breaker from a cold client's perspective. A salon with no address is not a salon — it is a landing page. Hours, email, and a well-formatted visit section all create the expectation that a real place exists. "Coming soon" undercuts every good thing the design accomplishes. Score impact: this keeps the Visit section at 4.8. A real client who scrolls this far and finds no address will close the tab.
- **Stock photography is the elephant in every room.** Hero image, all five service panels, all three stylist portraits, all nine gallery images are Unsplash. The stylists section headline "Meet your stylists" over stock-model portraits remains the most nakedly placeholder moment on the site. "The proof." gallery heading followed by generic Unsplash hair photography does not demonstrate this studio's work — it demonstrates that Unsplash has salon photos.
- **No social proof whatsoever.** Zero reviews, zero testimonials, zero press mentions, zero client count or service count. Every luxury salon at this price point (cuts from $85, color from $140) earns trust through social proof. Without it, a prospective client comparing two salons will default to the one with Google reviews, even if this site is better-designed.
- **The ethos bridge, while well-executed, is currently the loudest trust signal.** That is a problem. The most convincing piece of copy on the site is a three-sentence philosophy statement, not evidence of actual work, real people, or a physical location. The bridge earns its place aesthetically but cannot carry the trust load it is being asked to carry.
- **Form still has a visible PLACEHOLDER comment in the HTML source.** A motivated client who checks source (not unheard-of for someone spending $140+ on a color service) will see `action="https://formspree.io/f/PLACEHOLDER"` and a `<!-- TODO -->` comment. Minor, but the mailto fallback is the functional path — the dead action URL should be swapped to `action="#"` or removed until a real endpoint exists, to avoid the fallback feeling like an accident.

---

## Section-by-section breakdown

### NAV — 7.5
No change from cycle 1. Still the cleanest section: transparent-to-frosted-glass, copper CTA, 44px hamburger. Scores as before.

### HERO — 7.8
No change from cycle 1. Still the strongest section. The word-reveal headline, warm brass glow, and art-deco silhouette scene remain the most distinctive design moves on the site.

### SERVICES (horizontal scroll-lock) — 7.7
Scroll-void bug is fixed. The experience now transitions cleanly out of panel 5. Small upward tick for the bug fix; otherwise unchanged.

### ETHOS BRIDGE — 7.2
New this cycle. The editorial statement and copper rule are well-executed. The radial vignette is a nice touch. Score held slightly below the hero because it is adding atmosphere rather than evidence. As a typographic moment it succeeds; as a trust-builder it is limited.

### STYLISTS — 5.8
No change from cycle 1. The de-fabricated role titles remain correctly non-invented. The Unsplash portraits remain the trust gap they were. No improvement this cycle.

### GALLERY — 6.8
No change from cycle 1. Nine Unsplash images with the L-corner hover treatment. Looks good. Proves nothing about this salon.

### VISIT — 5.2
Small improvement from cycle 1's 4.8 — the addition of the mailto: email link (`hello@atelier.studio`) gives a visitor an alternative contact channel, which is meaningful. The hours are clean. The "Studio address coming soon" remains a hard trust deduction. Not quite 5.8 because the email link helps but the missing address is still a significant blocker.

### CONTACT / BOOKING FORM — 6.2
Meaningful improvement from cycle 1's 5.2. The form itself was always well-designed. The mailto fallback means a prospective client who fills it in and submits will now get a usable outcome — an email draft opens pre-filled with their inquiry. The inline success state gives affirmative feedback. The `PLACEHOLDER` action URL technically still sits in the markup and would be worth addressing, but the JS intercept catches it cleanly. Real improvement.

### FOOTER — 7.0
No change from cycle 1. Still clean, still placeholder social links pointing to `#`.

---

## Score summary

| Section            | Cycle 1 | Cycle 2 |
|--------------------|---------|---------|
| Nav                | 7.5     | 7.5     |
| Hero               | 7.8     | 7.8     |
| Services           | 7.6     | 7.7     |
| Ethos Bridge       | —       | 7.2     |
| Stylists           | 5.8     | 5.8     |
| Gallery            | 6.8     | 6.8     |
| Visit              | 4.8     | 5.2     |
| Contact / Form     | 5.2     | 6.2     |
| Footer             | 7.0     | 7.0     |
| **Overall**        | **6.1** | **6.4** |

---

## Cycle 3 top-3 priorities

### Priority 1 — Real photography: at minimum the hero and gallery (Builder + human input)
**Why first:** Stock photography is now the primary trust ceiling. The ethos bridge and scroll-lock services create a design impression that the photography directly contradicts. A real client looking at "The proof." followed by Unsplash images concludes the salon has no work to show.
**Acceptance criteria:** At minimum 3 gallery images are real work from this studio (actual client results). Alternatively, a clear editorial framing — "Opening soon — follow us on Instagram for our work" with a real Instagram link — is a legitimate pre-launch alternative that is more honest than stock-as-portfolio. If real photos cannot land this cycle, the gallery section headline must change from "The proof." to something that does not invite the comparison.

### Priority 2 — One real social proof signal in any form (Builder)
**Why second:** The site has no reviews, no testimonial, no client count, no press mention. A luxury salon charging $85+ for a cut earns that rate through social trust. Even one real, attributed testimonial ("I've been going to Atelier for three years — the precision of the cut is unlike anything I've had before. — M.R., Lower East Side") would move the needle more than any typographic refinement.
**Acceptance criteria:** One testimonial block exists on the page, formatted as an editorial pull-quote (Cormorant italic, copper rule), and the quote is attributed even if partially anonymised (first name + neighbourhood is sufficient). Fabricated generic phrases ("Best salon ever!" — Anonymous) are worse than nothing and must not appear. If no real testimonial exists yet, a "Join our waitlist" mechanism or "Opening [Month] 2026" launch countdown is a legitimate pre-launch alternative.

### Priority 3 — Replace `action="PLACEHOLDER"` with `action="#"` and clean TODO comments from production HTML (Builder)
**Why third:** The mailto fallback works and is a real improvement. But the PLACEHOLDER endpoint and visible TODO comments in the HTML source are sloppy on a live public URL. A client who views source — or a developer evaluating this salon's credibility — will see the scaffold underneath the polish. This is a 10-minute fix.
**Acceptance criteria:** `action` attribute on the contact form is either a live Formspree endpoint or `action="#"` (letting the JS intercept handle it cleanly). All `<!-- TODO -->` comments visible in production HTML are removed or moved to a separate dev-notes file. Footer social links point to real URLs or the social links block is removed until real accounts exist.

---

*Nigel cycle 2 audit complete. Score 6.4. Cap of 7.5 remains in force until real photography, real reviews, and real address land.*
