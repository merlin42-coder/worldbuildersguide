import { Lock, Play } from "lucide-react";
import { AbstractThumb } from "./AbstractThumb";
import type { WatchItem } from "@/content/watchContent";

interface Props {
  item: WatchItem;
  featured?: boolean;
}

export const WatchCard = ({ item, featured = false }: Props) => {
  return (
    <article
      className={`group card-hover bg-elevated border ${
        featured ? "border-sage/40" : "border-hairline"
      } overflow-hidden cursor-pointer flex flex-col`}
    >
      <div className="relative">
        <AbstractThumb variant={item.variant} className="border-0 border-b border-hairline" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30">
          <div className="w-12 h-12 rounded-full bg-sage/95 text-background flex items-center justify-center">
            {item.isFree ? <Play size={18} className="ml-0.5" /> : <Lock size={16} />}
          </div>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isFree ? (
            <span className="text-[10px] uppercase tracking-[0.18em] bg-sage text-background px-2 py-0.5 rounded-sm font-medium">
              Free
            </span>
          ) : (
            <span className="text-[10px] uppercase tracking-[0.18em] bg-background/70 backdrop-blur text-ink-muted border border-hairline px-2 py-0.5 rounded-sm flex items-center gap-1">
              <Lock size={9} /> Premium
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-[10px] tracking-wider bg-background/70 backdrop-blur text-ink-muted border border-hairline px-2 py-0.5 rounded-sm">
            {item.duration}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="eyebrow text-ink-subtle mb-2">{item.category}</div>
        <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted line-clamp-2">{item.description}</p>
        <div className="mt-4 pt-4 border-t border-hairline text-xs text-ink-subtle">
          {item.brand}
        </div>
      </div>
    </article>
  );
};
