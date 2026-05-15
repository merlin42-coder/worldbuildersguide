## Goal

Add the 3 Booking.com items to the landing/watch library, add BOOKING to the "Products we've broken down so far" strip, and fully purge the auto-regenerated Supabase scaffolding so the repo stays credential-free for GitHub Pages.

## Current state (verified)

- All 9 videos and 6 audio files (including the 3 new Booking ones) are in `public/videos/` and `public/audio/`. Filenames match the user's spec:
  - `public/videos/booking-product-world.mp4`
  - `public/videos/airbnb-vs-booking.mp4`
  - `public/audio/booking-deep-dive.m4a`
- `.env` is gone. Good.
- `src/integrations/supabase/{client,types}.ts` and `supabase/config.toml` have been auto-regenerated since the last cleanup. Need to delete again.
- `src/lib/media.ts` already resolves to `${BASE_URL}<path>` — so `mediaUrl("videos/booking-product-world.mp4")` serves the local file. No URL changes needed.
- `src/pages/Home.tsx` line 18: `STUDIED_PRODUCTS = ["SPOTIFY", "AIRBNB", "REVOLUT", "YOUTUBE MUSIC", "WISE"]`.

## Changes

### 1. Add 3 Booking entries in `src/content/watchContent.ts`

Append to the existing arrays in their respective category sections:

- **Product Worlds** — `booking-product-world`
  - title: "Inside Booking"
  - brand: "Booking"
  - duration: "7 min"
  - description: "Why Booking turns travel chaos into a clear next step"
  - mediaUrl: `mediaUrl("videos/booking-product-world.mp4")`
  - thumbnailUrl: `/thumbs/booking-product-world.jpg` (file may not exist yet → falls back to `AbstractThumb`, matches existing pattern)
  - variant: 3, mediaType: "video", published: true

- **Deep Dives** — `booking-deep-dive`
  - title: "Booking, deep dive"
  - brand: "Booking"
  - duration: "18 min"
  - description: "How Booking turns the most stressful part of travel — picking where to stay — into something you can finish in five minutes."
  - mediaUrl: `mediaUrl("audio/booking-deep-dive.m4a")`
  - thumbnailUrl: `/thumbs/booking-product-world.jpg`
  - variant: 3, mediaType: "audio", published: true

- **Head to Head** — `airbnb-vs-booking`
  - title: "Airbnb vs Booking"
  - brand: "Airbnb · Booking"
  - duration: "8 min"
  - description: "One sells you a place to belong. The other sells you a place to sleep tonight. Two very different ideas of what travel feels like."
  - mediaUrl: `mediaUrl("videos/airbnb-vs-booking.mp4")`
  - thumbnailUrl: `/thumbs/airbnb-vs-booking.jpg`
  - variant: 5, mediaType: "video", published: true

### 2. Add BOOKING to `src/pages/Home.tsx`

```ts
const STUDIED_PRODUCTS = ["SPOTIFY", "AIRBNB", "BOOKING", "REVOLUT", "YOUTUBE MUSIC", "WISE"];
```

### 3. Purge Supabase again

Delete:
- `src/integrations/supabase/client.ts`
- `src/integrations/supabase/types.ts`
- `src/integrations/supabase/` (the whole folder)
- `supabase/config.toml`
- `supabase/` folder

Confirm `package.json` has no `@supabase/supabase-js` (it was already removed; will re-verify).

Note: Lovable's backend tooling tends to regenerate `client.ts`/`types.ts`/`config.toml` automatically when Lovable Cloud is enabled on the project. To stop this from coming back after every regeneration, **disable Lovable Cloud** for this project from Connectors → Lovable Cloud once you're happy with the cleanup. I'll flag this in the final message.

### 4. Verify

- `rg -n "supabase|VITE_SUPABASE" src package.json` → should return nothing.
- Visual check that all three Booking cards appear in the right Watch sections and BOOKING shows in the Home strip.

## Notes

- No thumbnails for the new Booking items yet — they'll use the `AbstractThumb` fallback automatically (same as the previous batch). If you want bespoke thumbnails, say the word and I'll generate them.
- `mediaUrl` already prefixes with `import.meta.env.BASE_URL`, so when you set `base` in `vite.config.ts` for the GitHub Pages subpath later, every video/audio URL adjusts automatically.