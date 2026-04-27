# AGENT-PLAN — Cycle 1: Atelier Salon Site

**Cycle:** 1 (first refinement pass on brand-new scaffold)
**Live:** https://zed0minat0r.github.io/salon-site/
**Theme:** De-fabricate, then polish, then audit, then score.
**Rationale:** Cycle 0 scaffold ships with realistic-sounding fake people, fake credentials, and a real-looking NYC address. That is the highest-risk problem on the live site — it must be neutralized before any visual polish or scoring. After Builder neutralizes, Spark refines the silhouette/hero composition, Pixel does the first-ever mobile alignment sweep at 375/414, and Nigel scores from a cold prospective-client perspective with strict 5.5–7.5 expectations.

---

## Execution order

### 1. Builder — De-fabricate placeholder content
**Why now:** The scaffold contains fabricated-but-real-sounding details that violate the "no invented data" guardrail: stylist names with specific credential claims (Camille — "12 years NYC and London", Marcus — "trained under two Vidal Sassoon alumni"), a specific NYC street address (148 West 26th Street, Suite 4, New York NY 10001), and specific hours. None of this is verified. A prospective client could try to walk in.

**Specific instructions:**
- Replace the three stylist cards' specific names + biographical credentials with role-based placeholders that read as a *demo template*, not a real team. Examples: "Senior Stylist", "Color Director", "Texture Specialist". Bios should describe a *role* generically, not a person's history. Or: clearly mark the section "Sample stylist lineup — replace with real team" via a small ribbon/eyebrow.
- Replace `alt` text references that name "Camille / Marcus / Sasha" so they no longer imply real portrait photography of real people.
- Replace the specific Visit address with a clearly placeholder format (e.g. "[Studio Address — coming soon]" or "Your City, Your Street") OR add a visible "Sample location" eyebrow. Same for the suite number.
- Hours are fine as a sample but add small note "sample hours" if displayed prominently.
- Footer copyright "© 2026 Atelier Studio" — leave, but ensure no implied location.
- Keep the "Atelier" brand name, the palette, the typography, the layout, the silhouette scene, and the horizontal scroll-lock — those are the design, not the fabricated content.

**Memory guardrails:**
- No fabricated data — no fake stylist credentials, no fake addresses (`feedback_no_invented_fight_data`).
- Apps must NOT look AI-generated (`feedback_unique_design`) — placeholder copy should still feel editorial, not "Lorem ipsum."
- No dev-content / template-marketplace language on the live demo (`feedback_no_dev_content`) — do NOT add "demo" banners or "sample template" headers visible to visitors.
- Respectful tone in any visible copy.
- Frame B / replace-when-adding does not apply here (this is removal of bad data, not feature pile-on).

**Exit criteria:**
- Zero specific real-sounding street addresses on the live page.
- Zero stylist names that imply specific real people with specific verifiable credentials.
- Page still reads as polished editorial salon site (no "TBD" / "Lorem ipsum" / "placeholder" visible).
- Live URL renders cleanly post-deploy. Verify via Playwright at desktop + mobile.
- Single commit. Update CHANGELOG-AGENT.md.

---

### 2. Spark — Hero & silhouette refinement (Frame A vs Frame B)
**Why now:** The silhouette scene is the signature element the customer specifically asked for ("cool silhouette scenes"). Cycle 0 ships a first pass with three stacked SVG layers and large fronds — risk of reading template-y. Customer also called out hero word-reveal timing as polishable.

**Specific instructions:**
- Build TWO frames as A/B candidates and commit both to a comparison branch or document both before picking one.
  - **Frame A — Bigger swing:** Reimagine the silhouette scene composition. Could be: shift to art-deco architectural silhouette (less tropical foliage, more salon/mirror/chair forms), add subtle parallax on scroll, or replace the layered fronds with a more editorial single-element silhouette (e.g. a single tall vase/bottle profile in copper). Spark Frame A gets to break the current pattern.
  - **Frame B — Refined polish:** Keep the existing 3-layer structure. Refine spacing, opacity stacking, color grading on the silhouettes. Tighten the word-reveal timing on the hero headline (current may stagger too slow or too fast — verify on live). Polish gallery hover micro-interactions. **Frame B keeps content count** — do not strip a layer or remove fronds.
- Pick one frame, ship it. Document the alternative in the commit message.
- Verify via Playwright on the live URL post-deploy at 1440 desktop and 375 mobile — do not trust headless theory.

**Memory guardrails:**
- Replace when adding (`feedback_simplicity_over_polish`) — if Frame A introduces a new silhouette element, remove or replace the old one. No piling on.
- Frame B keeps content count (`feedback_frame_b_richness`) — refine, don't strip.
- No ghost numbers / large faded background numerals (`feedback_no_ghost_numbers`) — the service panels currently have "01 / 02 / 03" numbers that are visible/intentional, NOT ghosted background. Leave them as-is. Do not add ghosted numerals anywhere else.
- Apps must NOT look AI-generated — the silhouette scene must feel intentional and editorial, not "AI added some tropical leaves."
- Sites must be fun to scroll (`feedback_interesting_scroll`) — the horizontal scroll-lock is good, the hero word-reveal is good. Do not flatten.
- Verify visually via Playwright, not theory.

**Forbidden sections this cycle:**
- Services horizontal scroll-lock structure — do not modify panel count, panel order, or the runway pattern. Polish only if needed.
- Stylists section copy — Builder owns that this cycle.
- Visit address — Builder owns that this cycle.

**Exit criteria:**
- One frame shipped to live, both documented in commit.
- Hero scene either visibly different (Frame A) or visibly tighter (Frame B).
- Word-reveal timing feels intentional on live URL.
- No layer or content count reduction without a replacement.
- Update CHANGELOG-AGENT.md.

---

### 3. Pixel — Mobile alignment sweep at 375 / 414
**Why now:** First-ever pass on a brand-new site. The horizontal scroll-lock has a known mobile fallback to vertical — must be verified clean. Hero word-reveal must wrap properly. Form fields, gallery grid, stylist cards, visit columns all untested at small widths.

**Specific instructions:**
- Test at exactly 375px and 414px viewport widths via Playwright against the live URL (not localhost).
- Audit center-alignment consistency across all sections (`feedback_pixel_alignment` — this is the standing Pixel mandate).
- Specifically verify:
  1. Hero headline doesn't break awkwardly mid-word at 375. Word-reveal still fires. Eyebrow + sub + actions stack cleanly centered.
  2. Silhouette scene scales — does not get cropped weirdly or block hero copy.
  3. Services horizontal scroll-lock falls back to a clean vertical stack on mobile (verify the fallback exists and is tidy; if not, that's a finding for Builder cycle 2).
  4. Stylists grid stacks to single column with proper spacing.
  5. Gallery grid — masonry collapses cleanly. No images broken or overflowing.
  6. Visit two-column collapses to stacked.
  7. Contact form — all inputs full-width on mobile, tap targets ≥44x44px, labels readable.
  8. Footer — wordmark / nav / social / copyright all stack cleanly.
  9. Nav hamburger appears, links collapse, hamburger tap target is adequate.
- Check for horizontal overflow at body/html level (no x-scroll bar except inside the services runway when desktop).
- Font sizes ≥ 14px for any body copy on mobile.
- Report findings as discrete fixes Refiner / Builder cycle 2 can pick up. Pixel can ship CSS fixes itself if the issue is purely a media-query value.

**Memory guardrails:**
- Pixel ALWAYS audits center-alignment on mobile 375/414 (`feedback_pixel_alignment`).
- Verify visual changes via Playwright, not theory.
- Respectful tone in findings.
- Do not remove animations / glows / effects to "fix" mobile (`feedback_nigel_no_removal` extends to all polish agents — only adjust, do not strip).

**Exit criteria:**
- Concrete findings list (each: section, viewport, issue, suggested fix) committed to AUDIT.md or directly to a Pixel-findings section in CHANGELOG-AGENT.md.
- Any low-risk CSS fixes shipped (overflow guards, tap-target padding, line-height tweaks).
- Update CHANGELOG-AGENT.md.

---

### 4. Nigel — First audit + cycle 2 priorities
**Why now:** Brand-new site, first scoring pass. Customer wants strict cold-prospect-client scoring (5.5–7.5 range without real photography / real reviews). After Builder de-fabricates, Spark polishes, and Pixel audits, Nigel scores the result and sets cycle 2 direction.

**Specific instructions:**
- Score the LIVE URL after agents 1–3 complete and deploy. Do not score localhost or theory.
- Score from the perspective of a real prospective salon client landing cold via a Google search — would they trust this? Would they book?
- Expected score range: **5.5–7.5**. Do not start at 7+. New site, stock photography, no real reviews, no real address — there is no way it earns above 7.5.
- Provide a Top-3 priority list for cycle 2. Concrete, actionable, scoped to one agent each.
- DO NOT recommend removing animations, glows, the silhouette scene, the horizontal scroll-lock, hover effects, or word-reveal — Nigel only adds or improves, never strips quality (`feedback_nigel_no_removal`).
- DO NOT recommend ghost-number / faded-background-numeral motifs (`feedback_no_ghost_numbers`).

**Memory guardrails:**
- Nigel scores stricter (`feedback_nigel_stricter`) — 5.5 floor for new sites without real assets.
- Nigel never removes quality (`feedback_nigel_no_removal`).
- No ghost numbers.
- Apps must NOT look AI-generated — flag if any section reads template-y, but do NOT prescribe "remove."
- Respectful tone — frame as opportunities, not blame. Never call user a bottleneck.

**Forbidden recommendations:**
- "Remove the silhouette" — never. Refine, replace, or improve only.
- "Strip the horizontal scroll-lock" — never. It's a customer-requested signature element.
- "Add ghost numerals to backgrounds" — explicitly banned.
- "Add fake testimonials" — never. If review-section gap is the recommendation, frame it as "add a placeholder structure ready to receive real reviews when collected."

**Exit criteria:**
- Score logged to SCORES.log (numeric, 5.5–7.5 expected).
- AUDIT.md updated with current state + Top-3 cycle 2 priorities.
- Each priority names a target agent + axis.
- Update CHANGELOG-AGENT.md.

---

## Cycle 1 success
- Live site no longer carries fabricated personal/location data.
- Hero / silhouette feels more intentional than cycle 0.
- Mobile alignment audited at 375/414 with findings logged.
- Score on record. Cycle 2 priorities set.

## Cycle 1 forbidden across all agents
- Adding fake testimonials, fake reviews, fake location maps, fake "as featured in" logos.
- Adding cron jobs.
- Removing the silhouette scene, horizontal scroll-lock, hover effects, animations, or word-reveal.
- Adding ghost-numeral backgrounds.
- Calling the user a bottleneck or framing waiting on assets as a blocker — frame as collaborative.
- Trusting headless renders — every visual claim verified via Playwright on the live URL.
