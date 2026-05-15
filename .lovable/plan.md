## Typography Update Plan

### Overview
Replace Fraunces with Literata for headings, tighten line-heights, remove editorial letter-spacing, and adjust weights to create a grounded, guide-like reading experience.

### Changes

#### 1. Font Loading (`index.html`)
- Replace Fraunces Google Font link with **Literata** (weights 500, 600)
- Update Inter weights to **400, 500, 600** (remove 300, 700 to avoid ultra-thin or unnecessarily heavy weights)

#### 2. Tailwind Config (`tailwind.config.ts`)
- Update `fontFamily.display` to `Literata` (keep `serif` fallback)

#### 3. Global CSS (`src/index.css`)
- Change heading font-family from Fraunces to **Literata**
- Remove `letter-spacing: -0.02em` from headings (normal spacing)
- Set base heading styles:
  - `h1`: font-weight **600**, line-height **1.12**
  - `h2, h3`: font-weight **500**, line-height **1.25**
  - `h4`: font-weight **500**
- Body stays Inter 400 with line-height 1.6

#### 4. Component Tweaks
- **Hero.tsx**: Remove `tracking-tight` from h1 (already covered by base CSS); adjust `leading-[1.02]` → `leading-[1.12]`
- **Footer.tsx**: Remove `tracking-tight` from footer brand link
- **Nav.tsx**: Change logo wordmark from `font-semibold` to `font-medium` (Inter 500)
- **Page H1s** (WorkWithUs, Method, UseCases, NotFound): Adjust overly tight `leading-[1.05]` → `leading-[1.12]`
- **FinalCTA.tsx**: Adjust `leading-[1.05]` → `leading-[1.15]`

#### 5. Constraints Respected
- No layout, spacing, or content changes
- No color changes
- Font sizes remain as-is
- All-caps labels (eyebrows) preserved where they exist
- No new all-caps introduced

### Outcome
Headings shift from airy/editorial (Fraunces, tight tracking, ultra-tight line-height) to a calm, readable, confident guide feel (Literata, normal spacing, balanced line-heights). Body remains Inter for clarity.