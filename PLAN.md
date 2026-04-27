# PLAN — Cycle 2 (Builder): Ethos Bridge + Visit Email Fallback

## What changes

### Task 1: Ethos bridge section
- `index.html` — insert `<section class="ethos">` between `</section>` end of services and `<section class="stylists">`
- Copy: three fragments "Considered cuts. Honest color. Slow conversation."
- Thin copper rule above, cream eyebrow label below
- `style.css` — add `.ethos` block: espresso bg, Cormorant Garamond italic, generous vertical padding

### Task 2: Visit email fallback
- `index.html` — add email link block between `.visit__address` and `.visit__note`
- Copy: "Email us at hello@atelier.studio" (mailto link)
- `style.css` — add `.visit__email` rule: copper-tinted link, underline on hover

### Regenerate
- `style.min.css` — npx clean-css-cli after CSS edits

## Files changed
- `/Users/modica/projects/salon-site/index.html`
- `/Users/modica/projects/salon-site/style.css`
- `/Users/modica/projects/salon-site/style.min.css`

## Success criterion
- Ethos band visible between Services and Stylists with espresso bg, copper rule, italic Cormorant
- Visit section shows mailto:hello@atelier.studio link
- No regressions to hamburger, services runway, or form fallback from 5fa0b54

## Scope
~40 lines HTML + ~60 lines CSS
