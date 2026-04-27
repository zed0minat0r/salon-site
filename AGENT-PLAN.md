# AGENT-PLAN — Atelier Salon Site

## Cycle 3 — 2026-04-27
**Axis:** Honest pre-launch trust signals + production HTML cleanup
**Live:** https://zed0minat0r.github.io/salon-site/
**Score baseline:** 6.4 (cycle 2)
**Score target this cycle:** 6.7–7.0 (cap 7.5 remains until real photography + real reviews + real address all land)

**Rationale:** Cycle 2 closed at 6.4 with three real wins (form fallback, ethos bridge, mobile floors). The 640de2e horizontal scroll-lock fix landed cleanly between cycles and must not be touched. Cycle 3 attacks Nigel's cycle 2 top three priorities directly: P1 honest gallery framing (no real photos in hand → swap "The proof" headline + replace stock-portfolio framing with credible pre-launch language), P2 single real social-proof beat (pre-launch waitlist CTA — fabricated testimonials are explicitly forbidden), P3 production HTML hygiene (action="#", remove TODO comments, hide footer social block until handles exist). Falling back to standard four-agent rotation (Builder → Spark → Pixel → Nigel).

---

## Memory rules every agent MUST respect

- Apps must NOT look AI-generated.
- NO fabricated content — no fake stylist names, addresses, reviews, phone numbers, Instagram handles, opening dates pulled from thin air.
- Spark replaces when adding, never piles on.
- Frame B keeps content count.
- NO ghost numbers.
- Nigel never removes glows, animations, or effects — only adds or improves.
- Pixel must audit center-alignment at 375 and 414.
- Nigel scores from a real prospective client's perspective; baseline is strict, cap 7.5 holds.
- Respectful tone — never blame the user for blockers.
- DO NOT call mcp__plugin_imessage_imessage__reply / DO NOT TEXT THE USER. Only the Coordinator (this dispatch) texts.

---

## Cooldowns — DO NOT TOUCH this cycle

- Hero silhouette scene (Spark cycle 1).
- Service panel structure (Spark cycle 1; 640de2e scroll-lock fix is fresh — leave alone unless a real bug surfaces).
- Ethos bridge typography (Spark cycle 2 just refined).
- Stylist names / bios (Builder cycle 1 neutralized).
- Tap target / mobile center-alignment globals (Pixel cycle 2 floors at 13px).
- Horizontal scroll-lock JS + CSS in `main.js` and the `.services-runway` / `.services-sticky` / `.services-track` blocks. Including `SLIDE_FRAC`, runway height, dot-click logic, and the panel 5 mobile title.

---

## Agent execution order

### 1. Builder — honest pre-launch trust signals + HTML hygiene

**Scope:**

**P1 — gallery framing.** Replace `<h2 class="section-title">The proof.</h2>` (index.html:350) with a pre-launch credible alternative. Acceptable patterns: "Opening this fall." or "A studio in the making." or "Portfolio in progress." Pair with a sub-line that frames the existing imagery as inspiration / mood, not portfolio (e.g. "Our reference board, while we open the doors. Real work to follow."). Do NOT invent an Instagram handle. Do NOT invent a precise opening month — "this fall" / "later this year" is acceptable hedge language.

**P2 — pre-launch waitlist beat.** Insert ONE editorial pull-quote-styled block. Best placement: between Stylists and Gallery, OR inside the Visit section right above the booking form. Cormorant italic, copper hairline rule, single sentence: "Doors open this fall — join the list for first appointments." Pair with a single CTA button (`.btn--copper` or matching existing CTA pattern) whose `href="#contact"` scrolls to the existing booking form (the form already has a mailto fallback; no new endpoint needed). NO fabricated testimonial. NO fake initials + neighborhood. Pre-launch waitlist is the explicit substitute Nigel approved in AUDIT.md cycle 2 P2.

**P3 — production HTML cleanup.**
- `index.html:452` — change `action="https://formspree.io/f/PLACEHOLDER"` to `action="#"`. JS already intercepts.
- `index.html:405` — remove `<!-- TODO: replace with studio address before launch -->` comment. Keep "Studio address coming soon" copy — that is honest pre-launch language.
- `index.html:448` — remove `<!-- TODO: replace action URL with real Formspree endpoint... -->` comment.
- `index.html:545–551` — remove the entire footer social block (the two `href="#"` Instagram + TikTok links and their `<!-- TODO -->` comment) since no real handles exist. Keep the rest of the footer intact. If footer grid looks gappy after removal, leave layout adjustment for Pixel.

**Files Builder may touch:** `/Users/modica/projects/salon-site/index.html`, `/Users/modica/projects/salon-site/style.css` (only if waitlist block needs new minor styles — reuse existing `.ethos__statement` / copper-rule patterns where possible), `/Users/modica/projects/salon-site/style.min.css` (regenerate if `style.css` changed), `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md`.

**Files Builder must NOT touch:** `main.js`, `.services-runway` / `.services-sticky` / `.services-track` CSS, ethos bridge typography (cooldown), hero silhouette CSS (cooldown), stylist cards (cooldown), section-heading mobile center-alignment globals (cooldown), `btn--outline-sm` 44px min-height (cooldown).

**Commit message:** `builder cycle 3: honest pre-launch framing — gallery headline, waitlist beat, HTML hygiene`

---

### 2. Spark — Frame B polish on Builder's new beats

**Scope:**
- Frame B refinement on the new gallery headline + sub-line and the new pre-launch waitlist block ONLY.
- Apply Aesop / Le Labo editorial restraint: Cormorant ligatures, letter-spacing tightening (-0.012em on display), copper hairline radial-fade rule consistent with the ethos bridge treatment. The waitlist block should feel like a sibling of the ethos bridge — same family, distinct beat.
- If adding a visual treatment (e.g. faint copper vignette, hairline border-top), REPLACE something — never pile on. If nothing needs replacing, add nothing. Restraint is the win condition.
- Frame B keeps content count. No copy stripped. No second sentence added to the waitlist beat.
- The CTA button on the waitlist beat may receive copper-hover / underline-reveal treatment but must remain a single button.

**Files Spark may touch:** `/Users/modica/projects/salon-site/style.css` (Frame B section comments scoped to the two new beats), `/Users/modica/projects/salon-site/style.min.css`, `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md`.

**Files Spark must NOT touch:** `index.html` markup (Builder owns copy), `main.js`, anything Builder did not just add, ethos bridge CSS (cooldown), services CSS (cooldown), hero CSS (cooldown), stylist cards (cooldown).

**Commit message:** `spark cycle 3: frame B polish on gallery framing + waitlist beat`

---

### 3. Pixel — mobile alignment audit at 375 / 414

**Scope:**
- Audit ALL changed areas (new gallery headline + sub-line, new waitlist block, footer post-social-removal) at 375px AND 414px.
- Verify center-alignment of `.section-eyebrow` / `.section-title` / `.section-sub` on the new gallery copy.
- Verify the waitlist block CTA hits 44px tap target.
- Verify footer balances visually after the social block removal. If the 3-col grid looks gappy, collapse to 2-col on desktop or re-balance — whatever keeps it intentional.
- Verify no x-overflow at 375 / 414.
- Font-size floor 13px globally — confirm no new copy regressed below.
- No structural redesigns. If audit finds a structural problem, flag it for cycle 4 instead of inventing a fix.

**Files Pixel may touch:** `/Users/modica/projects/salon-site/style.css` (mobile media queries scoped to new beats + footer), `/Users/modica/projects/salon-site/style.min.css`, `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md`.

**Files Pixel must NOT touch:** Desktop type scale (cooldown — Pixel cycle 2 just set floors), services-runway, hero, ethos bridge typography, `index.html`.

**Commit message:** `pixel cycle 3: mobile audit on gallery framing + waitlist + post-social-removal footer`

---

### 4. Nigel — re-score from prospective-client lens

**Scope:**
- Re-score every section with cycle 3 changes considered. Overwrite `AUDIT.md` with cycle 3 audit (no history file — current state).
- Score from a cold prospective client's perspective. Cap remains 7.5 until real photography + real reviews + real address land.
- Honest pre-launch framing should LIFT trust scores in Gallery (was 6.8) and the Visit / Stylists transition area, because honest framing reads more credible than stock-as-portfolio with "The proof" headline. But the cap holds — score should land 6.7–7.0, not above.
- Removing the footer social block does NOT count as removing quality (no glow / animation / effect was removed — only placeholder dead links). Builder removed the dead links; Nigel does not flag this as a regression.
- Write `AUDIT.md` cycle 4 priorities with target agent tags (Builder / Spark / Pixel). Append SCORES.log with format: `YYYY-MM-DD HH:MM <score> <focus axis>`.
- Note explicitly whether the trust ceiling moved at all this cycle, and what the next gate is (real photography? real reviews? real address?).
- Respectful tone — never frame the missing real assets as user fault. The user is a collaborator; the gating is structural, not personal.

**Files Nigel may touch:** `/Users/modica/projects/salon-site/AUDIT.md`, `/Users/modica/projects/salon-site/SCORES.log`, `/Users/modica/projects/salon-site/CHANGELOG-AGENT.md`.

**Files Nigel must NOT touch:** Any source files. Nigel does not write or remove code.

**Commit message:** `nigel cycle 3: score <X.X> — <one-line summary>`

---

*Coordinator cycle 3 dispatch complete. Four agents in order: Builder → Spark → Pixel → Nigel.*
