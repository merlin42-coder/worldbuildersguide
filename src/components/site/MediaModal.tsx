import { useEffect, useRef } from "react";
import { X, Headphones } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AbstractThumb } from "./AbstractThumb";
import type { WatchItem } from "@/content/watchContent";

interface Props {
  item: WatchItem | null;
  onClose: () => void;
}

export const MediaModal = ({ item, onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const open = !!item;

  // Pause on close
  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      audioRef.current?.pause();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-5xl w-[92vw] p-0 bg-elevated border border-hairline-strong [&>button]:hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">{item?.title ?? "Media"}</DialogTitle>
        <DialogDescription className="sr-only">{item?.description ?? ""}</DialogDescription>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/70 hover:bg-background backdrop-blur border border-hairline text-ink-muted hover:text-ink flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>

        {item?.mediaType === "video" && (
          <div className="bg-background">
            <video
              ref={videoRef}
              src={item.mediaUrl}
              controls
              autoPlay
              preload="metadata"
              playsInline
              className="w-full aspect-video bg-black"
            />
            <div className="px-6 py-5 border-t border-hairline">
              <div className="eyebrow text-ink-subtle">{item.category} · {item.brand}</div>
              <h3 className="mt-2 font-display text-xl md:text-2xl text-ink leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </div>
          </div>
        )}

        {item?.mediaType === "audio" && (
          <div className="bg-background">
            <div className="relative">
              <AbstractThumb variant={item.variant} className="border-0 aspect-[16/8]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-sage/15 border border-sage/40 text-sage flex items-center justify-center">
                  <Headphones size={16} strokeWidth={1.6} />
                </span>
                <div>
                  <div className="eyebrow text-sage">Deep Dive · {item.duration}</div>
                  <h3 className="mt-1 font-display text-xl md:text-2xl text-ink leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-5">
              <audio
                ref={audioRef}
                src={item.mediaUrl}
                controls
                autoPlay
                preload="metadata"
                className="w-full"
              />
              <p className="mt-4 text-sm text-ink-muted">{item.description}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
