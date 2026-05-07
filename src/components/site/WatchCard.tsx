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
      } rounded-lg overflow-hidden cursor-pointer flex flex-col text-left w-full`}
    >
      <div className="relative">
        {item.thumbnailUrl ? (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-elevated-2 border-b border-hairline">
            <img
              src={item.thumbnailUrl}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <AbstractThumb variant={item.variant} className="border-0 border-b border-hairline" />
        )}
        {isAudio && (
          <div className="absolute inset-0 bg-background/55 mix-blend-multiply" />
        )}
        {isAudio && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "hsl(var(--accent-sage) / 0.18)" }}
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg ${
              isAudio
                ? "bg-background/85 backdrop-blur border border-sage/50 text-sage"
                : "bg-sage text-background"
            }`}
          >
            {isAudio ? (
              <Headphones size={16} strokeWidth={1.8} />
            ) : (
              <Play size={18} className="ml-0.5" fill="currentColor" />
            )}
          </div>
        </div>

        <div className="absolute top-3 right-3">
          <span className="tag backdrop-blur">{item.duration}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="eyebrow text-ink-subtle mb-2">{item.category}</div>
        <h3 className="font-display text-lg md:text-xl text-ink leading-snug">{item.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
        <div className="mt-4 pt-4 border-t border-hairline text-xs text-ink-subtle">
          {item.brand}
        </div>
      </div>
    </button>
  );
};
