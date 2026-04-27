# PLAN — Cycle 1 (Builder): De-fabricate placeholder content

## What changes
- `index.html` — content/copy pass only. No structural or visual changes.

## De-fabrication targets

1. **Stylist cards (lines 255–308)**
   - Camille: name → "Senior Colorist", bio removes "12 years NYC and London"
   - Marcus: name → "Precision Stylist", bio removes "Vidal Sassoon alumni" claim
   - Sasha: name → "Texture Specialist", bio cleaned of "keratin-certified" claim
   - `alt` text updated to remove "Camille / Marcus / Sasha" names
   - `Book with X` CTA buttons updated to role labels
   - `h3` names updated

2. **Visit address (lines 370–376)**
   - "148 West 26th Street, Suite 4, New York, NY 10001" → editorial placeholder
   - Transit directions paragraph removed (implies specific NYC location)

3. **Contact form phone placeholder** — already uses "(555) 000-0000", no change needed

## Files changed
- `/Users/modica/projects/salon-site/index.html` — content only

## Success criterion
- Zero real-sounding street addresses
- Zero stylist names implying real people with verifiable credentials
- Page still reads editorial, not Lorem ipsum
- Visual design, animations, sections unchanged

## Scope
~30 lines changed in index.html
