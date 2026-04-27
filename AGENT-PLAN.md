# AGENT-PLAN — Atelier Salon Site

**Cycle:** 2
**Date:** 2026-04-27
**Live URL:** https://zed0minat0r.github.io/salon-site/
**Score baseline (cycle 1 close):** 6.1 / 10
**Score target (cycle 2 close):** 6.4 – 6.8 (strict cap 7.5 until real photography + real reviews + real address all land)

---

## P1 status: DONE — mark and skip

P1 (form action URL) was resolved in commit `5fa0b54`. Verified this cycle:

- `index.html` line 440 still carries the cosmetic `action="https://formspree.io/f/PLACEHOLDER"`, BUT
- `main.js` lines 204–241 intercept the submit with `e.preventDefault()`, build an `encodeURIComponent` body across all six fields, open `mailto:hello@atelier.studio?subject=...&body=...` in a new tab, AND show the inline confirmation state.

The conversion path is no longer dead-on-submit. Builder this cycle should NOT touch the form. The placeholder string is intentionally left as a "swap when Formspree is provisioned" sentinel; the JS interceptor is the live path.

Budget moves to P2 (ethos bridge) and P3 (Visit contact fallback).

---

## Dispatch — 4 agents, in execution order

### Agent 1 — Builder

**Scope:** Implement P2 (editorial ethos bridge above Stylists) + P3 (Visit contact fallback).

**P2 — Editorial philosophy bridge:**
- Insert a new section element between the closing `</section>` of `services` (around line ~265) and the opening `<section class="stylists" id="stylists">` (line 267).
- Class: `philosophy` or `ethos-bridge`. Single-row band, espresso background (`var(--espresso)` or `var(--ink)`), cream type, copper rule above and/or below.
- Content: a single brand-voice ethos line in Cormorant Garamond, large display weight. Suggested copy (Builder may refine within voice, but DO NOT attribute to a person):
  - *"Considered cuts. Honest color. Slow conversation."*
  - or *"We work slowly, on purpose."*
  - or *"One chair. One appointment. Unhurried."*
- This is brand voice, NOT a fake reviewer quote. No quote marks attributed to a name. No fabricated "—Camille" attributions.
- Add CSS in `style.css` — copper rule top/bottom (1px solid `var(--copper)` with 60–80% opacity), generous vertical padding (clamp 80px–140px), centered text, max-width container ~720–820px.
- Cormorant Garamond is already loaded for hero word-reveal — reuse the existing display font stack hero h1 uses.

**P3 — Visit section contact fallback:**
- File: `index.html`, around lines 392–397 (`.visit__address` and `.visit__note`).
- Below the existing "Studio address coming soon" line, add a tasteful contact line. Use the same email used by the form interceptor for consistency: `hello@atelier.studio` (placeholder domain — honest interim, NOT a fake number).
- Render as a `mailto:` link, copper hover, sized to match `.visit__address` typography.
- Optional second short line: brand-voice note like "We answer email within one business day." — no fabricated SLAs, no fake response volumes.
- Do NOT add a phone number — user has not provided one and we will not fabricate one.

**Files Builder may touch:**
- `/Users/modica/projects/salon-site/index.html` (insert ethos bridge, edit Visit section)
- `/Users/modica/projects/salon-site/style.css` (new `.philosophy` / `.ethos-bridge` rules + minor `.visit__contact` styling)
- `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md` (append cycle 2 Builder line)

**Files Builder must NOT touch:**
- `main.js` (form interceptor is correct; do not undo the mailto fallback)
- The `action="https://formspree.io/f/PLACEHOLDER"` attribute — leave it; the JS overrides it
- Hero silhouette scene (Spark cycle 1 cooldown)
- Service panel structure / runway 420vh / SLIDE_FRAC 1.0 (cycle 1 fix — do not undo)
- Service panel copper rules (Spark cycle 1 cooldown)
- Stylist names, role labels, bios (cycle 1 cooldown — neutralized correctly)
- Gallery hover treatment (Spark cycle 1 cooldown)
- Mobile nav `.nav__links { pointer-events: none }` rule (cycle 1 critical fix — do not undo)

**Commit message format:**
`builder cycle 2: ethos bridge above Stylists + Visit email fallback (P2/P3)`

---

### Agent 2 — Spark (Frame B polish)

**Scope:** Frame B polish on the new ethos bridge Builder just landed. Refine, do not replace; do not add an additional section.

**Allowed moves:**
- Tighten Cormorant rendering: `font-feature-settings: "liga", "dlig", "kern"`, optional `font-style: italic` on a single anchor word, optical letter-spacing (`-0.01em` to `-0.02em` on display sizes).
- Adjust copper rule: experiment with rule weight (1px vs hairline 0.5px), width (full-bleed vs ~120–180px centered ornamental rule), or replace one rule with a small copper diamond/dot ornament.
- Vertical rhythm: refine padding so the bridge feels weighted, not floating. Compare to Aesop ethos bands — slow, generous space.
- May add ONE atmospheric detail (subtle texture, faint grain overlay, or copper gradient wash) IF it replaces something else. Do not pile on. Frame B keeps content count — the single ethos line stays a single ethos line.

**Forbidden moves:**
- NO ghost numbers / large faded background numerals (memory: `feedback_no_ghost_numbers`)
- Do NOT remove glows, animations, or copper accents anywhere on the site (memory: `feedback_nigel_no_removal` — applies to Spark too in spirit)
- Do NOT touch hero silhouette, services panels, gallery, stylist cards
- Do NOT add a fake reviewer attribution under the ethos line. The line stands alone in brand voice.

**Files Spark may touch:**
- `/Users/modica/projects/salon-site/style.css` (only the ethos-bridge / philosophy rules Builder added)
- `/Users/modica/projects/salon-site/index.html` (only inside the new ethos bridge section — NOT for adding new copy, only for adding `<span>` wrappers needed to style a single anchor word)
- `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md`

**Files Spark must NOT touch:**
- All cooldown sections listed under Builder
- `main.js` (no behavior changes from Spark this cycle)

**Commit message format:**
`spark cycle 2: Frame B polish on ethos bridge — Cormorant ligatures, copper rule weight`

---

### Agent 3 — Pixel (mobile alignment audit)

**Scope:** Audit the new ethos bridge + check no layout shift was introduced anywhere else by Builder/Spark changes. Mandate per memory: **center-alignment consistency at 375px and 414px.**

**Specific audit points:**
1. Ethos bridge at 375px: text centered? Container max-width respected? No horizontal overflow? Copper rule(s) render at correct visual weight on retina mobile?
2. Ethos bridge at 414px: same checks; verify the bridge doesn't compress so tightly that line breaks make it look stub-paragraph-y vs intentional editorial.
3. Visit section: new email line — vertical rhythm above/below? Centered? Tap target ≥44px on the `mailto:` link? Copper hover state visible / accessible focus ring?
4. Regression sweep: Hero, Services (mobile stack fallback), Stylists grid, Gallery, Footer — no layout shift caused by inserting a new section into the page flow.
5. Body / html `overflow-x: clip` still holds — no new x-scroll introduced.
6. Section-heading center-alignment globals (cycle 1 fix) still in place.

**Allowed fixes:**
- Pixel may make tightly-scoped CSS adjustments to the new ethos-bridge or `.visit__contact` rules if the audit finds alignment / tap-target issues.
- Pixel may NOT redesign — if audit finds a structural problem, flag it for cycle 3 instead of inventing a fix.

**Files Pixel may touch:**
- `/Users/modica/projects/salon-site/style.css` (mobile media queries only, scoped to bridge / visit-contact)
- `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md`

**Files Pixel must NOT touch:**
- All cooldown sections
- `main.js`
- `index.html` (audits visually; flags issues to be fixed in CSS)

**Commit message format:**
`pixel cycle 2: mobile audit 375/414 of ethos bridge + Visit email fallback`

---

### Agent 4 — Nigel (re-score + cycle 3 priorities)

**Scope:** Re-score the site from a prospective salon client perspective. Strict cap 7.5 until real photography + real reviews + real address all land. Overwrite AUDIT.md with a cycle 2 audit (no history file — the file represents current state).

**Required deliverables:**
1. Section-by-section breakdown with scores (Nav, Hero, Services, Ethos Bridge [new], Stylists, Gallery, Visit, Contact/Form, Footer).
2. Overall score with one-line rationale tied to a single conversion-friction or trust axis.
3. Top-3 priorities for cycle 3, each tagged with target agent (Builder / Spark / Pixel) and axis.
4. Append one line to `SCORES.log` — format: `YYYY-MM-DD HH:MM <score> <axis>`.

**Nigel guardrails (memory-anchored):**
- NEVER recommend removing glows, animations, copper accents, silhouette layers, or any quality element. Only "add" or "improve" recommendations (memory: `feedback_nigel_no_removal`).
- Score from a real prospective client perspective, not a designer perspective (memory: `feedback_nigel_stricter`).
- Cap at 7.5 until real address + real photography + real reviews land.
- Do NOT recommend ghost numerals, fake reviews, fake credentials, fabricated stylist names, fabricated phone numbers, or invented client testimonials in cycle 3 priorities (memory: `feedback_no_invented_fight_data` extends to all fabricated content).
- Frame respectfully — never call the user a bottleneck for missing real photography / real address (memory: `feedback_respectful_tone`).

**Files Nigel may touch:**
- `/Users/modica/projects/salon-site/AUDIT.md` (overwrite with cycle 2 audit)
- `/Users/modica/projects/salon-site/SCORES.log` (append one line)
- `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md` (append cycle 2 Nigel line)

**Files Nigel must NOT touch:**
- `index.html`, `style.css`, `main.js` — Nigel does not write code

**Commit message format:**
`nigel cycle 2: score <X.X> — <axis name>`

---

## Memory rules — must be respected by every agent this cycle

These are loaded from `/Users/modica/.claude/projects/-Users-modica/memory/MEMORY.md`. Re-stated here so every agent sees them:

1. **Apps must NOT look AI-generated** (`feedback_unique_design`) — every change should reinforce Atelier's distinct urban-luxury editorial voice, not flatten toward generic salon templates.
2. **Nigel never removes quality** (`feedback_nigel_no_removal`) — applies to Nigel above; restated for Spark in spirit.
3. **Spark replaces when adding** (`feedback_simplicity_over_polish`) — applies to Agent 2.
4. **Frame B keeps content count** (`feedback_frame_b_richness`) — the ethos bridge is a single ethos line; Spark must not turn it into a multi-element section.
5. **NO ghost numbers** (`feedback_no_ghost_numbers`) — large faded background numerals are forbidden anywhere on the site.
6. **NO fabricated content** (`feedback_no_invented_fight_data`) — no fake stylist names, fake addresses, fake reviews, fake phone numbers, fake testimonials, fake credentials. Builder cycle 1 already de-fabricated; do not re-introduce.
7. **Pixel audits center-alignment at 375/414 every cycle** (`feedback_pixel_alignment`) — mandatory, not optional.
8. **Nigel scores strict** (`feedback_nigel_stricter`) — real-client lens, capped 7.5 until real photo + real reviews + real address.
9. **Respectful tone** (`feedback_respectful_tone`) — every agent's commit messages and audits frame collaboratively, never blame the user for blockers.

---

## Cooldowns — do NOT touch this cycle

- Hero silhouette scene (Spark cycle 1 just landed it)
- Service panel copper-rule structure (Spark cycle 1)
- Service runway height 420vh + SLIDE_FRAC 1.0 (cycle 1 critical fix)
- Gallery hover treatment / L-corner (Spark cycle 1)
- Stylist names / role labels / bios (Builder cycle 1 neutralized correctly)
- Mobile `.nav__links { pointer-events: none }` rule (cycle 1 critical fix)
- Section heading center-alignment globals (Pixel cycle 1)
- `btn--outline-sm` 44px min-height (Pixel cycle 1)
- Eyebrow / spec font-size 13px on mobile (Pixel cycle 1)
- Form `mailto:` interceptor in `main.js` (cycle 1 critical fix)

---

## Rationale (one line)

Decision rules: P1 closed in 5fa0b54 → score 6.1 below 8.5 polish gate → no stuck-loop signal in last 4 changelog entries → fall back to standard rotation (Builder → Spark → Pixel → Nigel) targeting trust-bridge + Visit fallback, the two cycle 1 priorities the score gate left open.
