// Public URL helper for files stored in the Lovable Cloud "media" bucket.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export const mediaUrl = (path: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/media/${path.replace(/^\/+/, "")}`;
