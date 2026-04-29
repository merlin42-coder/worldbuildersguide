import { Play, Headphones } from "lucide-react";
import { AbstractThumb } from "./AbstractThumb";
import type { WatchItem } from "@/content/watchContent";

interface Props {
  item: WatchItem;
  featured?: boolean;
  onPlay?: (item: WatchItem) => void;
}

export const WatchCard = ({ item, featured = false, onPlay }: Props) => {
  const isAudio = item.mediaType === "audio";

  return (
    <button
      type="button"
      onClick={() => onPlay?.(item)}
      className={`group card-hover bg-elevated border ${
        featured ? "border-sage/40" : "border-hairline"
      } overflow-hidden cursor-pointer flex flex-col text-left w-full`}
    >
      <div className="relative">
        <AbstractThumb variant={item.variant} className="border-0 border-b border-hairline" />
        {isAudio && <div className="absolute inset-0 bg-background/45" />}

        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
              isAudio
                ? "bg-background/85 backdrop-blur border border-sage/50 text-sage"
                : "bg-sage/95 text-background"
            }`}
          >
            {isAudio ? (
              <Headphones size={16} strokeWidth={1.6} />
            ) : (
              <Play size={18} className="ml-0.5" />
            )}
          </div>
        </div>

        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm font-medium border ${
              isAudio
                ? "bg-background/70 backdrop-blur text-sage border-sage/40"
                : "bg-background/70 backdrop-blur text-ink border-hairline"
            }`}
          >
            {isAudio ? "Deep Dive" : item.category === "Head to Head" ? "Head to Head" : "Watch"}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-[10px] tracking-wider bg-background/70 backdrop-blur text-ink-muted border border-hairline px-2 py-0.5 rounded-sm">
            {item.duration}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="eyebrow text-ink-subtle mb-2">{item.category}</div>
        <h3 className="font-display text-lg md:text-xl text-ink leading-snug">{item.title}</h3>
        <p className="mt-2 text-sm text-ink-muted line-clamp-2">{item.description}</p>
        <div className="mt-4 pt-4 border-t border-hairline text-xs text-ink-subtle">
          {item.brand}
        </div>
      </div>
    </button>
  );
};
