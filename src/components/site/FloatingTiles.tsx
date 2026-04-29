const tiles = [
  { name: "Spotify", meta: "Discovery as a feed", anim: "float-tile" },
  { name: "Airbnb", meta: "Place as a story", anim: "float-tile-2" },
  { name: "Revolut", meta: "Money as control", anim: "float-tile-3" },
  { name: "YouTube Music", meta: "Library as a search", anim: "float-tile-4" },
];

const Mini = ({ idx }: { idx: number }) => {
  // tiny abstract sparkline / bars per tile
  if (idx === 0) {
    return (
      <svg viewBox="0 0 120 50" className="w-full h-12">
        {[8, 22, 14, 30, 18, 36, 24, 40, 28, 46, 20, 32].map((h, i) => (
          <rect key={i} x={i * 10 + 2} y={50 - h} width="6" height={h} fill="hsl(var(--accent-sage))" opacity={0.4 + (i % 4) * 0.15} />
        ))}
      </svg>
    );
  }
  if (idx === 1) {
    return (
      <svg viewBox="0 0 120 50" className="w-full h-12">
        <path d="M 0 40 Q 20 10 40 25 T 80 20 T 120 30" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1.5" />
        <circle cx="40" cy="25" r="2.5" fill="hsl(var(--accent-sage))" />
        <circle cx="80" cy="20" r="2.5" fill="hsl(var(--accent-sage))" />
      </svg>
    );
  }
  if (idx === 2) {
    return (
      <svg viewBox="0 0 120 50" className="w-full h-12">
        <circle cx="60" cy="25" r="18" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1" />
        <circle cx="60" cy="25" r="10" fill="none" stroke="hsl(var(--ink))" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="60" cy="25" r="3" fill="hsl(var(--accent-sage))" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 50" className="w-full h-12">
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={4 + i * 24} y={10 + (i % 2) * 4} width="18" height="32" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1" opacity={0.4 + i * 0.1} />
      ))}
    </svg>
  );
};

export const FloatingTiles = () => {
  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[520px]">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative grid grid-cols-2 gap-5 md:gap-6 p-2 md:p-4 h-full">
        {tiles.map((t, i) => (
          <div
            key={t.name}
            className={`${t.anim} bg-elevated border border-hairline rounded-lg p-5 flex flex-col justify-between ${
              i === 0 ? "md:translate-y-6" : ""
            } ${i === 1 ? "md:-translate-y-2" : ""} ${i === 2 ? "md:-translate-y-4" : ""} ${i === 3 ? "md:translate-y-3" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-subtle">{`0${i + 1}`}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            </div>
            <div className="mt-6">
              <Mini idx={i} />
            </div>
            <div className="mt-6">
              <div className="font-display text-base md:text-lg text-ink">{t.name}</div>
              <div className="text-xs text-ink-muted mt-1">{t.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
