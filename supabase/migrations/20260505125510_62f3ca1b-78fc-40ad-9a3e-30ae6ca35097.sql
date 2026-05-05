-- Create public media bucket for large video/audio assets
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

-- Public read access for streaming <video>/<audio>
create policy "Public read access for media"
on storage.objects
for select
using (bucket_id = 'media');