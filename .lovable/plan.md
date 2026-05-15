## Fixes

**1. Pure white background**
- `src/index.css`: `--background`, `--surface` → `0 0% 100%`. Keep `--elevated` / `--elevated-2` slightly off-white so cards still have separation (e.g. `40 25% 97%` and `40 20% 94%`).

**2. Navigation bar — no wrapping at any size**
- `Nav.tsx`: rename "PRODUCT WORLD" → "Watch" in the nav links array (label only; route stays `/watch`). The long label is what causes the tablet wrap shown in the mockup.
- Reduce horizontal gap from `gap-9` → `gap-6 lg:gap-8`.
- Switch nav breakpoint from `md` → `lg` so tablets get the mobile menu instead of a cramped wrap. Same for the "Watch breakdowns" header CTA and burger toggle.
- Keep wordmark hidden on `<sm`, prevent flex shrinking with `shrink-0` on logo + CTA.

**3. Background illustrations not overlapping text**
- `HeroDiagrams.tsx`: wrap content so it sits behind, not on top of, the headline column.
  - Lower z-index isn't the issue (text already has `z-10`); the visual problem is the PROBLEM box and FLOW/RISKS sketches sitting under the headline + subcopy area at this viewport.
  - Move PROBLEM sketch from `top-6 left-4` → only render at `lg:` and shift to `lg:left-6 lg:top-4`, smaller (140×80).
  - Hide BOTTOM-CENTER FLOW/RISKS until `xl:` (it currently sits over the buttons + tagline).
  - Hide BOTTOM-LEFT USER JOURNEY until `xl:` too — it overlaps the tagline.
  - Drop container opacity from `0.28` back to `0.18` so any residual overlap reads as a watermark, not competing text.

**4. Equal-size CTAs**
- `index.css`: make `.btn-default` match `.btn-primary` height (`h-10` instead of `h-9`) and add `min-w-[170px]` to both so "Watch breakdowns" and "Build your world" render the same width. Or apply `min-w` directly in `Hero.tsx` to keep the global buttons untouched — preferred: scoped fix in Hero only.
- In `Hero.tsx`, wrap both links with a shared class: `inline-flex items-center justify-center min-w-[190px] h-11`.

**5. Underline only under text, not whitespace**
- `Hero.tsx`: the gold squiggle currently spans the full block width (`w-[88%]`). The `<span>` containing "Make it make sense." is `block`, so it stretches.
- Change the wrapping span to `inline-block` (so its width = text width), and set the SVG to `w-full` of that inline-block. Drop the hardcoded `viewBox` width assumption — keep `preserveAspectRatio="none"` so the curve scales to the actual text width on every breakpoint.

## Files touched
- `src/index.css` — background tokens
- `src/components/site/Nav.tsx` — label, gaps, breakpoint
- `src/components/site/HeroDiagrams.tsx` — opacity + per-sketch breakpoints/positions
- `src/components/site/Hero.tsx` — CTA sizing, underline span becomes inline-block
