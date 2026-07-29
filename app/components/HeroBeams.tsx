export default function HeroBeams({ className = "" }: { className?: string }) {
  // Stylised original illustration of precast concrete beams receding in
  // perspective with steel rebar lattices tying them together — evokes the
  // factory floor without reproducing any photograph.
  const rows = [0, 1, 2, 3, 4, 5];

  return (
    <svg
      viewBox="0 0 1200 820"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2436" />
          <stop offset="100%" stopColor="#0c1220" />
        </linearGradient>
        <linearGradient id="beamTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c8798" />
          <stop offset="100%" stopColor="#aab3c2" />
        </linearGradient>
        <linearGradient id="beamSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5364" />
          <stop offset="100%" stopColor="#2c3444" />
        </linearGradient>
        <linearGradient id="vignette" x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="#0a1220" stopOpacity="1" />
          <stop offset="45%" stopColor="#0a1220" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0a1220" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1200" height="820" fill="url(#floorGrad)" />

      {/* ceiling structure hints */}
      <g stroke="#2a3346" strokeWidth="2" opacity="0.6">
        <path d="M-50 90 L1250 40" />
        <path d="M-50 60 L1250 10" />
        {[150, 350, 550, 750, 950, 1150].map((x) => (
          <line key={x} x1={x} y1={x * -0.04 + 60} x2={x - 40} y2={x * -0.04 + 300} />
        ))}
      </g>

      {/* rows of beams in perspective, vanishing toward upper-left */}
      {rows.map((i) => {
        const y = 260 + i * 92;
        const shrink = i * 10;
        const leftX = -60 + shrink * 0.4;
        const rightX = 1260 - shrink * 2.2;
        const topY = y - 30 + i * 2;
        const beamH = 34;
        return (
          <g key={i}>
            <polygon
              points={`${leftX},${topY} ${rightX},${topY - 40} ${rightX},${topY - 40 + beamH} ${leftX},${topY + beamH}`}
              fill="url(#beamTop)"
              opacity={0.9 - i * 0.05}
            />
            <polygon
              points={`${leftX},${topY + beamH} ${rightX},${topY - 40 + beamH} ${rightX},${topY - 40 + beamH + 22} ${leftX},${topY + beamH + 22}`}
              fill="url(#beamSide)"
              opacity={0.9 - i * 0.05}
            />
            {/* rebar lattice ties */}
            {Array.from({ length: 14 }).map((_, t) => {
              const tx = leftX + (t / 13) * (rightX - leftX);
              const ty = topY + (t / 13) * (-40);
              return (
                <path
                  key={t}
                  d={`M${tx} ${ty - 4} L${tx + 10} ${ty + beamH + 8} L${tx - 6} ${ty + beamH + 14} L${tx + 14} ${ty + beamH + 30}`}
                  fill="none"
                  stroke="#8a93a3"
                  strokeWidth="2.4"
                  opacity="0.55"
                />
              );
            })}
          </g>
        );
      })}

      <rect width="1200" height="820" fill="url(#vignette)" />
    </svg>
  );
}
