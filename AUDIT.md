# AUDIT — Atelier Salon Site
## Cycle 1 — 2026-04-27
**Axis:** Conversion friction
**Score:** 6.1 / 10
**Live URL:** https://zed0minat0r.github.io/salon-site/

---

## Scoring context

Scored from the perspective of a prospective salon client who landed cold via a Google search. The standard: would this person trust the studio enough to submit a booking request within 90 seconds?

Expected range for a new site with stock photography, no real address, no real reviews: 5.5–7.5. This site lands at **6.1** — genuinely above average in craft and visual coherence, but conversion friction from missing trust signals prevents it from reaching "I'm booking today."

---

## Section-by-section breakdown

### NAV — 7.5
Strong. Transparent → frosted-glass on scroll is executed cleanly. The copper `Book Now` CTA in the nav is correctly prominent. Hamburger tap target passes 44px. Wordmark is legible and appropriately editorial. Minor concern: nav link font-size (0.75rem / 12px) is at the small end but is a deliberate all-caps label pattern, not a readability failure at desktop.

### HERO — 7.8
The strongest section. The Cormorant Garamond word-reveal with stagger + skewY is distinctive and not template-pattern. Headline copy ("Where the haircut feels considered.") is well-written — specific enough to feel editorial, soft enough to be non-threatening. The warm brass radial glow reads atmospheric. The art-deco silhouette scene with colonnade arches, spires, and stepped plinth is the right move — more architectural authority than tropical fronds. The slow drift animations on back/mid layers add depth without noise. Hero sub-copy and action buttons are clean. The vertical scroll cue (copper-to-transparent line) is a good touch.

Penalty: hero is left-aligned on desktop, which is intentional and correct for editorial. On mobile, actions column-stack but remain left-aligned — Pixel flagged this as intentional. No penalty.

### SERVICES (horizontal scroll-lock) — 7.6
This is the signature experience the customer asked for and it delivers. The vertical-to-horizontal lock is well-implemented: the runway/sticky/track pattern is technically sound, the progress dots correctly mirror panel position, and the 80/20 scroll budget gives a proper dwell on the final panel. The copper rule above each price-CTA row (Spark Frame B contribution) is a clean typographic upgrade over raw gap spacing.

The panel photography is generic Unsplash salon stock, which is expected at this stage. The "01–05" display numerals at 10% opacity register as intentional panel counting, not ghost-numeral decoration — correct.

Penalty: on mobile, the horizontal lock correctly falls back to vertical stacking. The stacked panels are clean but tall (90vw, max 560px). A prospective client on mobile sees a wall of five full-screen images before reaching Stylists — scroll fatigue risk. Not a fix for this cycle, flagged for cycle 2.

### STYLISTS — 5.8
This section is where conversion friction concentrates. The role labels (Senior Colorist / Precision Stylist / Texture Specialist) are correctly non-fabricated after Builder's de-fabrication pass. The bios are generic but not dishonest. The card layout, 4:5 portrait aspect ratio, and hover lift are well-executed.

However: the Unsplash portraits are of clearly stock-photo subjects. "Meet the team" framing over stock faces will immediately register as placeholder to any discerning visitor. There is no mechanism — even a note — that frames this as a live-demo state. From a cold client's perspective this reads as a salon that doesn't want you to know who works there, which is a trust-reducing signal. The "Book a color service" CTAs work but land on the contact form, not a named stylist — the chain is broken.

### GALLERY — 6.8
Nine images, varied grid with tall and wide variants. The desaturate-to-color reveal on hover is well-executed — the filter transition from 75% saturation to full reads as intentional editorial curation rather than lazy lightbox. The copper L-corner bracket on hover is the right accent at this scale. Grid composition avoids monotony.

Penalty: every image is generic Unsplash salon photography. A prospective client looking for evidence of this specific studio's work receives none. The section headline "The proof." sets an expectation the stock photos cannot fulfill.

### VISIT — 4.8
The weakest section from a conversion standpoint. "Studio address coming soon" is a significant trust gap — a client cannot verify this studio exists in physical space. This is correctly attributed to Builder's de-fabrication (an invented NYC address was worse), but from a cold client's 90-second read, "Studio address coming soon" is a concrete reason not to book. The hours are present and formatted cleanly. The two-column layout collapses properly on mobile.

Note: this is a pre-launch placeholder situation, not a design failure. Framed as the highest-priority content unlock for cycle 2.

### CONTACT / BOOKING FORM — 5.2
The form is well-structured: six fields, clean label typography, copper focus glow on active inputs, 24-hour confirmation message, and optimistic loading state. The UX of the form itself is better than most salon sites.

Critical conversion-friction issue: the `action` attribute points to `https://formspree.io/f/PLACEHOLDER`. This form will return an error or go nowhere when a real visitor submits. On a live public URL, a broken booking form is a hard conversion blocker. A motivated client who fills in all six fields and hits "Send Request" will receive an error response — and leave.

Secondary: no phone number displayed, no WhatsApp link, no alternative booking channel. The entire conversion chain runs through one form endpoint that currently does not work.

### FOOTER — 7.0
Clean. The 3-column grid (brand / nav / social) collapses to 1-column on mobile. The wordmark, tagline ("Made by hand — one appointment at a time."), and copper social link hover states are well-executed. Social links are present but point to `#` — no real Instagram or TikTok destination. This reads as expected placeholder to visitors who notice it, but it removes a trust signal (an active Instagram with real client work is a common proxy for "this salon is real and active").

---

## Score summary

| Section           | Score |
|-------------------|-------|
| Nav               | 7.5   |
| Hero              | 7.8   |
| Services          | 7.6   |
| Stylists          | 5.8   |
| Gallery           | 6.8   |
| Visit             | 4.8   |
| Contact / Form    | 5.2   |
| Footer            | 7.0   |
| **Overall**       | **6.1** |

---

## Top-3 priorities for cycle 2

### Priority 1 — Fix the broken form endpoint (Builder)
The Formspree action URL is `PLACEHOLDER`. On a live URL, any visitor who submits the form receives an error. This is the highest-severity conversion-friction issue on the site. Builder should replace the `PLACEHOLDER` with a working Formspree endpoint (free tier is sufficient for demo purposes) or swap to a mailto fallback with a clear "we'll be in touch" confirmation. Until this is resolved, the entire booking funnel is non-functional.

Target agent: Builder
Axis: Conversion / trust

### Priority 2 — Add a trust bridge above the stylists section (Spark)
The Stylists section currently reads as stock-photo placeholders with role titles, which a discerning visitor will clock within 5 seconds. Spark should introduce a brief editorial bridge element — not fake reviews, not fabricated credentials — between Services and Stylists that builds ambient trust. Options: a pull-quote strip with a single editorial philosophy statement in large Cormorant type, or a narrow "philosophy" band (espresso background, cream type, copper rule) that articulates the studio's approach. This gives the section above the stylist cards something to land on before the visitor reaches the "who is this actually?" moment.

Target agent: Spark
Axis: Trust / editorial coherence

### Priority 3 — Add an alternative contact channel in the Visit section (Builder)
"Studio address coming soon" paired with a broken form endpoint means a visitor who wants to engage has no fallback. Builder should add a phone number or email address to the Visit section — even a placeholder format that the client will swap with real contact data — and a secondary CTA like a tel: or mailto: link. This does not require a real address. It signals the studio is reachable, which partially compensates for the missing physical location.

Target agent: Builder
Axis: Conversion / trust

---

*Nigel audit complete. Next cycle should focus on conversion path integrity before further visual polish.*
