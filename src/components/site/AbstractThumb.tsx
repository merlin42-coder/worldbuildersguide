interface Props {
  variant: 1 | 2 | 3 | 4 | 5;
  label?: string;
  className?: string;
}

/**
 * Abstract, CSS-rendered "thumbnails" used in place of stock photos.
 * Each variant is a quiet product-world diagram in sage + ink tones.
 */
export const AbstractThumb = ({ variant, label, className = "" }: Props) => {
  return (
    <div
      className={`relative w-full aspect-[16/9] overflow-hidden bg-elevated border border-hairline ${className}`}
    >
      {variant === 1 && (
        <svg viewBox="0 0 320 180" className="w-full h-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="hsl(var(--accent-sage))" stopOpacity="0.18" />
              <stop offset="1" stopColor="hsl(var(--accent-sage))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="320" height="180" fill="url(#g1)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={i * 28 + 10} y1="20" x2={i * 28 + 10} y2="160" stroke="hsl(var(--hairline-strong))" strokeWidth="0.5" />
          ))}
          <circle cx="220" cy="90" r="38" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1" opacity="0.7" />
          <circle cx="220" cy="90" r="6" fill="hsl(var(--accent-sage))" />
          <line x1="40" y1="140" x2="180" y2="140" stroke="hsl(var(--ink))" strokeOpacity="0.4" strokeWidth="2" />
          <line x1="40" y1="148" x2="120" y2="148" stroke="hsl(var(--ink))" strokeOpacity="0.2" strokeWidth="2" />
        </svg>
      )}
      {variant === 2 && (
        <svg viewBox="0 0 320 180" className="w-full h-full">
          <rect width="320" height="180" fill="hsl(var(--elevated))" />
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * 30 + 15}
                y={r * 24 + 18}
                width="22"
                height="16"
                fill="none"
                stroke="hsl(var(--hairline-strong))"
                strokeWidth="0.5"
                opacity={0.35 + ((r + c) % 4) * 0.15}
              />
            ))
          )}
          <rect x={45} y={66} width={70} height={48} fill="hsl(var(--accent-sage))" opacity="0.18" stroke="hsl(var(--accent-sage))" strokeWidth="1" />
        </svg>
      )}
      {variant === 3 && (
        <svg viewBox="0 0 320 180" className="w-full h-full">
          <rect width="320" height="180" fill="hsl(var(--elevated))" />
          <line x1="160" y1="0" x2="160" y2="180" stroke="hsl(var(--hairline-strong))" strokeWidth="0.5" />
          <circle cx="80" cy="90" r="40" fill="none" stroke="hsl(var(--ink))" strokeOpacity="0.5" strokeWidth="1" />
          <circle cx="80" cy="90" r="22" fill="none" stroke="hsl(var(--ink))" strokeOpacity="0.3" strokeWidth="1" />
          <rect x="220" y="55" width="70" height="70" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1" />
          <rect x="232" y="67" width="46" height="46" fill="hsl(var(--accent-sage))" opacity="0.2" />
        </svg>
      )}
      {variant === 4 && (
        <svg viewBox="0 0 320 180" className="w-full h-full">
          <rect width="320" height="180" fill="hsl(var(--elevated))" />
          <path d="M 20 140 Q 100 40, 180 100 T 300 60" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1.2" />
          <path d="M 20 150 Q 100 90, 180 130 T 300 110" fill="none" stroke="hsl(var(--ink))" strokeOpacity="0.35" strokeWidth="1" />
          {[40, 100, 180, 240, 300].map((x, i) => (
            <circle key={i} cx={x} cy={[120, 60, 100, 80, 60][i]} r="3" fill="hsl(var(--accent-sage))" />
          ))}
        </svg>
      )}
      {variant === 5 && (
        <svg viewBox="0 0 320 180" className="w-full h-full">
          <rect width="320" height="180" fill="hsl(var(--elevated))" />
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x={30 + i * 52} y={140 - i * 18} width="40" height={20 + i * 18} fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="1" opacity={0.35 + i * 0.12} />
          ))}
          <line x1="20" y1="140" x2="300" y2="140" stroke="hsl(var(--hairline-strong))" />
        </svg>
      )}

      {label && (
        <div className="absolute bottom-2 left-3 text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          {label}
        </div>
      )}
    </div>
  );
};
