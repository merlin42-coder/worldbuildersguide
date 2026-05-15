// Faint hand-drawn-feel sketch diagrams behind the hero.
// Pure inline SVG, semantic ink color, opacity ~10%.
// Hidden on mobile to keep the hero clean.

const stroke = "currentColor";

const Label = ({ x, y, children, size = 9 }: { x: number | string; y: number | string; children: string; size?: number }) => (
  <text
    x={x}
    y={y}
    fontFamily="Inter, sans-serif"
    fontSize={size}
    letterSpacing="1.2"
    fill={stroke}
  >
    {children}
  </text>
);

export const HeroDiagrams = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 hidden md:block text-ink"
    style={{ opacity: 0.18 }}
  >
    {/* TOP-LEFT — PROBLEM */}
    <svg
      className="absolute top-4 left-4 lg:left-6 hidden lg:block"
      width={140}
      height={80}
      viewBox="0 0 180 100"
      fill="none"
    >
      <rect x="1" y="1" width={178} height={98} stroke={stroke} strokeWidth="1" />
      <Label x="8" y="14">PROBLEM</Label>
      <text x="8" y="34" fontFamily="Inter" fontSize="9" fill={stroke}>Too much complexity.</text>
      <text x="8" y="50" fontFamily="Inter" fontSize="9" fill={stroke}>Unclear choices.</text>
      <text x="8" y="66" fontFamily="Inter" fontSize="9" fill={stroke}>Teams misaligned.</text>
      <text x="8" y="82" fontFamily="Inter" fontSize="9" fill={stroke}>Outcome unknown.</text>
    </svg>

    {/* TOP-CENTER — IDEA → DEFINE → BUILD → ITERATE + LEARN loop */}
    <svg
      className="absolute top-2 left-1/2 -translate-x-1/2 hidden lg:block"
      width={420}
      height={120}
      viewBox="0 0 420 120"
      fill="none"
    >
      <rect x="50" y="10" width={14} height={14} strokeDasharray="2 2" stroke={stroke} strokeWidth="0.6" />
      <text x="55" y="20" fontFamily="Inter" fontSize="8" fill={stroke}>?</text>
      {[
        { x: 90, label: "IDEA" },
        { x: 170, label: "DEFINE" },
        { x: 250, label: "BUILD" },
        { x: 330, label: "ITERATE" },
      ].map((b) => (
        <g key={b.label}>
          <rect x={b.x} y="40" width={60} height={22} stroke={stroke} strokeWidth="0.6" />
          <text x={b.x + 30} y="54" textAnchor="middle" fontFamily="Inter" fontSize="8" fill={stroke}>
            {b.label}
          </text>
        </g>
      ))}
      {[150, 230, 310].map((x) => (
        <g key={x}>
          <line x1={x} y1="51" x2={x + 20} y2="51" stroke={stroke} strokeWidth="0.6" />
          <polyline points={`${x + 16},48 ${x + 20},51 ${x + 16},54`} stroke={stroke} strokeWidth="0.6" fill="none" />
        </g>
      ))}
      <rect x="220" y="86" width={60} height={22} stroke={stroke} strokeWidth="0.6" />
      <text x="250" y="100" textAnchor="middle" fontFamily="Inter" fontSize="8" fill={stroke}>LEARN</text>
      <line x1="250" y1="62" x2="250" y2="86" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.6" />
      <line x1="220" y1="97" x2="200" y2="97" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.6" />
      <line x1="200" y1="97" x2="200" y2="62" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.6" />
    </svg>

    {/* TOP-RIGHT — SYSTEM OVERVIEW */}
    <svg
      className="absolute top-6 right-4 lg:right-10 hidden lg:block"
      width={220}
      height={140}
      viewBox="0 0 220 140"
      fill="none"
    >
      <rect x="1" y="1" width={218} height={138} stroke={stroke} strokeWidth="0.7" />
      <Label x="8" y="14">SYSTEM OVERVIEW (WIP)</Label>
      {[
        { x: 20, y: 30, w: 50, h: 22, label: "USERS" },
        { x: 85, y: 30, w: 60, h: 22, label: "JOURNEY" },
        { x: 158, y: 30, w: 55, h: 22, label: "OUTCOMES" },
        { x: 35, y: 90, w: 60, h: 22, label: "SIGNALS" },
        { x: 130, y: 90, w: 65, h: 22, label: "FEEDBACK" },
      ].map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} stroke={stroke} strokeWidth="0.6" />
          <text x={b.x + b.w / 2} y={b.y + 14} textAnchor="middle" fontFamily="Inter" fontSize="7" fill={stroke}>
            {b.label}
          </text>
        </g>
      ))}
      <line x1="70" y1="41" x2="85" y2="41" stroke={stroke} strokeWidth="0.5" />
      <line x1="145" y1="41" x2="158" y2="41" stroke={stroke} strokeWidth="0.5" />
      <line x1="65" y1="52" x2="65" y2="90" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.5" />
      <line x1="95" y1="101" x2="130" y2="101" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.5" />
      <line x1="180" y1="90" x2="180" y2="52" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.5" />
    </svg>

    {/* MID-RIGHT — USER NEED venn */}
    <svg
      className="absolute top-1/2 right-4 lg:right-16 -translate-y-1/4 hidden lg:block"
      width={180}
      height={180}
      viewBox="0 0 180 180"
      fill="none"
    >
      <Label x="60" y="14">USER NEED</Label>
      <circle cx="65" cy="65" r="34" stroke={stroke} strokeWidth="0.7" />
      <circle cx="115" cy="65" r="34" stroke={stroke} strokeWidth="0.7" />
      <circle cx="90" cy="105" r="34" stroke={stroke} strokeWidth="0.7" />
      <text x="42" y="55" fontFamily="Inter" fontSize="7" fill={stroke}>VIABLE</text>
      <text x="115" y="55" fontFamily="Inter" fontSize="7" fill={stroke}>FEASIBLE</text>
      <text x="64" y="135" fontFamily="Inter" fontSize="7" fill={stroke}>MEANINGFUL</text>
      <line x1="90" y1="148" x2="90" y2="162" stroke={stroke} strokeWidth="0.5" />
      <polyline points="86,158 90,162 94,158" stroke={stroke} strokeWidth="0.5" fill="none" />
      <text x="74" y="175" fontFamily="Inter" fontSize="7" fill={stroke}>SWEET SPOT</text>
    </svg>

    {/* BOTTOM-LEFT — USER JOURNEY */}
    <svg
      className="absolute bottom-4 left-4 lg:left-10 hidden xl:block"
      width={320}
      height={170}
      viewBox="0 0 320 170"
      fill="none"
    >
      <Label x="0" y="10">USER JOURNEY (DRAFT)</Label>
      {["DISCOVER", "DEFINE", "BUILD", "USE", "EVOLVE"].map((l, i) => {
        const cx = 20 + i * 60;
        return (
          <g key={l}>
            <circle cx={cx} cy="35" r="10" stroke={stroke} strokeWidth="0.7" />
            <line x1={cx} y1="48" x2={cx} y2="58" stroke={stroke} strokeWidth="0.5" />
            <polyline points={`${cx - 3},55 ${cx},58 ${cx + 3},55`} stroke={stroke} strokeWidth="0.5" fill="none" />
            <text x={cx} y="70" textAnchor="middle" fontFamily="Inter" fontSize="7" fill={stroke}>{l}</text>
            {i < 4 && <line x1={cx + 10} y1="35" x2={cx + 50} y2="35" stroke={stroke} strokeWidth="0.5" />}
          </g>
        );
      })}
      {/* wireframe rectangle */}
      <rect x="0" y="95" width={120} height={70} stroke={stroke} strokeWidth="0.6" />
      <rect x="8" y="103" width={50} height={34} stroke={stroke} strokeWidth="0.5" />
      <line x1="8" y1="103" x2="58" y2="137" stroke={stroke} strokeWidth="0.4" />
      <line x1="58" y1="103" x2="8" y2="137" stroke={stroke} strokeWidth="0.4" />
      <line x1="8" y1="146" x2="100" y2="146" stroke={stroke} strokeWidth="0.4" />
      <line x1="8" y1="155" x2="80" y2="155" stroke={stroke} strokeWidth="0.4" />
      <text x="135" y="118" fontFamily="Inter" fontSize="7" fill={stroke}>structure</text>
      <text x="135" y="128" fontFamily="Inter" fontSize="7" fill={stroke}>tbd</text>
      <text x="135" y="148" fontFamily="Inter" fontSize="7" fill={stroke}>content</text>
      <text x="135" y="158" fontFamily="Inter" fontSize="7" fill={stroke}>tbd</text>
    </svg>

    {/* BOTTOM-CENTER — FLOW + RISKS */}
    <svg
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden xl:block"
      width={360}
      height={140}
      viewBox="0 0 360 140"
      fill="none"
    >
      <Label x="0" y="10">FLOW (DRAFT)</Label>
      {["Input", "Process", "Result"].map((l, i) => {
        const x = i * 90;
        return (
          <g key={l}>
            <rect x={x} y="20" width={60} height={22} stroke={stroke} strokeWidth="0.6" />
            <text x={x + 30} y="34" textAnchor="middle" fontFamily="Inter" fontSize="8" fill={stroke}>{l}</text>
            {i < 2 && (
              <>
                <line x1={x + 60} y1="31" x2={x + 90} y2="31" stroke={stroke} strokeWidth="0.5" />
                <polyline points={`${x + 86},28 ${x + 90},31 ${x + 86},34`} stroke={stroke} strokeWidth="0.5" fill="none" />
              </>
            )}
          </g>
        );
      })}
      {/* dashed loops back */}
      <line x1="30" y1="42" x2="30" y2="58" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.5" />
      <line x1="210" y1="42" x2="210" y2="58" strokeDasharray="2 2" stroke={stroke} strokeWidth="0.5" />
      <text x="0" y="74" fontFamily="Inter" fontSize="7" fill={stroke}>missing  link</text>

      <Label x="200" y="68">RISKS</Label>
      <text x="200" y="82" fontFamily="Inter" fontSize="7" fill={stroke}>• Complexity creep</text>
      <text x="200" y="94" fontFamily="Inter" fontSize="7" fill={stroke}>• Misalignment</text>
      <text x="200" y="106" fontFamily="Inter" fontSize="7" fill={stroke}>• Unclear scope</text>
      <text x="305" y="94" fontFamily="Inter" fontSize="7" fill={stroke}>resolve</text>
      <text x="305" y="104" fontFamily="Inter" fontSize="7" fill={stroke}>this</text>

      <polygon points="20,108 30,124 10,124" stroke={stroke} strokeWidth="0.6" fill="none" />
      <text x="20" y="120" textAnchor="middle" fontFamily="Inter" fontSize="8" fill={stroke}>!</text>
    </svg>

    {/* BOTTOM-RIGHT — STRUCTURE tree + WIP note */}
    <svg
      className="absolute bottom-2 right-4 lg:right-10 hidden lg:block"
      width={220}
      height={180}
      viewBox="0 0 220 180"
      fill="none"
    >
      <Label x="0" y="10">STRUCTURE (WORKING)</Label>
      <rect x="90" y="20" width={40} height={18} stroke={stroke} strokeWidth="0.6" />
      <line x1="110" y1="38" x2="110" y2="50" stroke={stroke} strokeWidth="0.5" />
      <line x1="40" y1="50" x2="180" y2="50" stroke={stroke} strokeWidth="0.5" />
      {[40, 90, 140, 180].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="50" x2={x} y2="62" stroke={stroke} strokeWidth="0.5" />
          <rect x={x - 18} y="62" width={36} height={18} strokeDasharray="2 2" stroke={stroke} strokeWidth="0.5" />
        </g>
      ))}
      <text x="0" y="120" fontFamily="Inter" fontSize="7" fill={stroke}>★</text>
      <text x="14" y="120" fontFamily="Inter" fontSize="7" fill={stroke}>THIS PAGE IS A WORK IN PROGRESS.</text>
      <text x="14" y="134" fontFamily="Inter" fontSize="7" fill={stroke}>THE WORLD IS REAL.</text>
      <text x="14" y="148" fontFamily="Inter" fontSize="7" fill={stroke}>THE REST IS STILL BEING FIGURED OUT.</text>
    </svg>
  </div>
);
