## Why your upload is failing

- Lovable chat has a hard **20 MB per file** limit. Your earlier uploads (the smaller MP4s and audio) slipped under it; 40 MB files won't.
- Even if we could squeeze them in, dropping 40 MB files into `public/videos/` makes every page load ship more bytes and slows your build. `public/` is the wrong home for heavy media.

## The fix: use Lovable Cloud Storage

You already have Lovable Cloud enabled. We'll create a public storage bucket, you upload the big files straight to it from the Cloud → Storage screen (no 20 MB chat limit there), and the site loads them by URL.

### Steps

1. **Create a public storage bucket** called `media` (via a migration so RLS is set correctly):
   - Bucket is public-read so `<video>` / `<audio>` tags can stream it without auth.
   - Write access stays restricted (only you via the Cloud dashboard).

2. **You upload the files** in Cloud → Storage → `media` bucket. Suggested folder layout matching the current filenames:
   ```text
   media/
     videos/
       spotify-product-world.mp4
       airbnb-product-world.mp4
       youtube-music-product-world.mp4
       revolut-product-world.mp4
       spotify-vs-youtube-music.mp4
     audio/
       spotify-deep-dive.m4a
       airbnb-deep-dive.m4a
       youtube-music-deep-dive.m4a
       revolut-deep-dive.m4a
     thumbs/
       *.jpg   (optional — can keep these in /public since they're small)
   ```
   Storage has no 20 MB cap from the dashboard, so 40 MB files are fine.

3. **Switch `src/content/watchContent.ts`** so each `mediaUrl` (and optionally `thumbnailUrl`) points at the storage public URL instead of `/videos/...`. Pattern:
   ```text
   https://zjephlkiesyzsgwtlbrv.supabase.co/storage/v1/object/public/media/videos/<file>.mp4
   ```
   I'll add a tiny helper (e.g. `mediaUrl("videos/spotify-product-world.mp4")`) so the base URL isn't repeated on every entry and is easy to change later.

4. **Delete the now-unused large files from `public/videos/`** so the repo and build stay light. Thumbnails in `public/thumbs/` can stay — they're tiny.

5. **No code changes needed in `MediaModal` / `WatchCard` / `Watch.tsx`** — they already render whatever URL is in the content file. This is purely a content + bucket change.

### What you'll do vs. what I'll do

- I'll: create the bucket + policies, add the URL helper, rewrite `watchContent.ts` to use storage URLs, remove the big files from `public/videos/`.
- You'll: open Cloud → Storage → `media` after I create it, drag the 40 MB files into the matching folders, then refresh the site.

### Out of scope for this pass

- Signed/private URLs (not needed since the watch page is public anyway).
- A custom upload UI inside the app — the Cloud dashboard is enough for occasional uploads.
- Re-encoding the files smaller. If you want, I can add an ffmpeg pass later to produce a lighter web-optimized version, but it's not required.

Approve this and I'll set up the bucket and rewire the content.