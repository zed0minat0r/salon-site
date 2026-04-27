# Salon-site — agent rules

This file is loaded automatically as context. Read it before touching anything.

## Verification — non-negotiable

**Never claim "fixed" from a static screenshot or single computed-style snapshot.** Scroll-driven UI must be tested by actually scrolling through the section in Playwright at multiple positions.

For any change to scroll-locks, sticky pins, scroll-reveal animations, or anything driven by `window.scrollY`:

1. Open the live URL (or local server) in Playwright
2. Locate the section's `getBoundingClientRect().top + window.scrollY` and `offsetHeight`
3. Scroll to **at least 5 positions** through the runway (10%, 30%, 50%, 70%, 90%)
4. Capture transform / scrollX / scrollWidth / element bounds at each position
5. Test on **both** desktop (1440×900) **and** mobile via `playwright.devices['iPhone 13']` (390×664) and `devices['iPhone SE (3rd gen)']` (375×667)
6. Take screenshots at each sample point and inspect them visually

Running `scrollIntoView()` once and reading state at top-of-section is **not verification** — it tests the boring case where translate is 0. The bug always lives mid-runway.

If the UI involves transforms applied by JS based on scroll progress, you must verify the transform value at multiple scroll positions, not just one.

## Disabling a feature is not a fix

The horizontal scroll-lock is the **whole point of this site** — the customer specifically asked for it. If it breaks on mobile, you fix the breakage, you do not bail out of the JS, you do not collapse the layout to a vertical stack, you do not hide the feature behind a media-query guard. Removing the thing the customer asked for is not a solution; it is a regression dressed as a fix.

The previous bug (panels sliding offscreen on mobile) happened because the CSS flipped `.services-track` to `flex-direction: column` while the JS still applied a horizontal translate. The right fix was to keep the row-layout track on mobile and tune panel content for narrow viewport — **not** to disable the JS slide. Both pieces — CSS and JS — must agree that mobile slides horizontally.

If you ever find yourself adding `if (mobileMQ.matches) return;` to a scroll handler driving a feature the user explicitly asked for, stop and fix the underlying mismatch instead.

## Brand & content

- **Name:** "Atelier" (working title — easy to rename later)
- **Aesthetic:** urban-luxury editorial, Aesop / Le Labo restraint
- **Palette:** espresso / cream / parchment / copper / brass
- **Customer ask:** silhouette scenes + horizontally-locking sections. Keep that visible.

### Content honesty rules

- **Do NOT invent stylist names, addresses, phone numbers, reviews, Instagram handles, opening dates, or testimonials.** The user has not provided real ones. Generic placeholder names ("Camille / Marcus / Sasha") have already been removed once — do not re-introduce them.
- Stylist cards use role labels ("Senior Colorist", "Precision Stylist", "Texture Specialist") with neutral bios — leave them.
- Address is "Studio address coming soon" and stays that way until the user provides one.
- Form submits via `mailto:hello@atelier.studio` fallback (`main.js`) because no real Formspree endpoint is wired.
- Gallery is honest pre-launch framing ("The studio takes shape" + "Mood references" caption) — do not change to "The proof" or any portfolio language.
- Waitlist beat says "Doors open this fall" — no specific dates.

### Look-and-feel

- Apps must NOT look AI-generated. Break default Claude patterns. Editorial restraint, not template polish.
- **No ghost numbers** (large faded background numerals behind content) — the user finds them awkward.
- Frame B (Spark) refines spacing/typography on rich sections but **never strips content count**.
- Spark replaces when adding — never piles glow-on-glow or rule-on-rule.
- Nigel never recommends removing glows / animations / effects — only adds or improves.

## Agent behavior in /loop cycles

- **NO per-agent texting.** Only the orchestrator sends iMessage status. Every agent prompt must explicitly include "DO NOT call mcp__plugin_imessage_imessage__reply / DO NOT TEXT THE USER."
- Each cycle: Coordinator writes AGENT-PLAN.md → Builder → Spark → Pixel → Nigel, each commits before the next runs.
- Pixel always audits center-alignment at 375 + 414 mobile.
- Nigel scores from a real prospective salon client lens. Strict cap **7.5** until real photography + real reviews + real address all land.
- Respectful tone — never call the user a bottleneck.

## After every CSS edit

Regenerate `style.min.css`:

```sh
cd /Users/modica/projects/salon-site && npx clean-css-cli -o style.min.css style.css
```

`index.html` references `style.min.css` for production. Editing `style.css` without regenerating means the live site serves stale styles.

## Scroll-lock specifics (current state)

- `services-runway` height: **480vh** (5 panels)
- `SLIDE_FRAC` in `main.js` `onScroll()` and dot-click handler: **0.85** (slide takes 85% of budget; 15% dwells on panel 5)
- Mobile (≤768px): `.services-track` is `flex-direction: column`, JS bails with `transform: ''` and `setActiveDot(0)`
- If you tune any of these three values, all three need to stay coherent — verify with the multi-position Playwright test before claiming done.
