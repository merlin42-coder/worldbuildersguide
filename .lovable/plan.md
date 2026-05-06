# Sync the Watch library with cloud storage

The current files in the `media` bucket are:

**videos/**: airbnb-product-world, revolut-vs-wise, spotify-product-world, spotify-vs-youtube-music, wise-product-world, youtube-music-product-world
**audio/**: airbnb-deep-dive, revolut-deep-dive, spotify-deep-dive, wise-deep-dive, youtube-music-deep-dive

I'll update `src/content/watchContent.ts` so the library matches.

## Changes to the library

**Add — Product Worlds**

- **Inside Wise** → `videos/wise-product-world.mp4`. Variant 4. Copy in the same voice as the other Product Worlds (about Wise's clarity around international transfers and FX).

**Add — Deep Dives**

- **Wise, deep dive** → `audio/wise-deep-dive.m4a`. Variant 4.

**Add — Head to Head**

- **Revolut vs Wise** → `videos/revolut-vs-wise.mp4`. Variant 5. Description framing the contrast between Revolut's "all-in-one money OS" feel and Wise's "send money abroad, no surprises" feel.

**Publish**

- Flip `revolut-deep-dive` from `published: false` to `true`.

## Thumbnails

The new entries will fall back to the existing CSS-rendered `AbstractThumb` (variants 4 and 5) since there are no images for Wise / Revolut-vs-Wise in `public/thumbs/` yet. Same pattern as the unpublished Revolut deep dive used. If you want bespoke JPGs, drop them into `public/thumbs/` and I'll wire them up.

## Files touched

- `src/content/watchContent.ts` — add 3 new items, publish 1, remove 1.

No other code changes needed — `Watch.tsx`, `WatchCard`, and `MediaModal` already render whatever is in `publishedWatchContent`.