export default function BuildingArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 520" className={className} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b7ea8" />
          <stop offset="55%" stopColor="#9fb7d1" />
          <stop offset="100%" stopColor="#dfe8ee" />
        </linearGradient>
        <linearGradient id="towerA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1c2534" />
          <stop offset="100%" stopColor="#2c374a" />
        </linearGradient>
        <linearGradient id="towerB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3a4457" />
          <stop offset="100%" stopColor="#232c3c" />
        </linearGradient>
      </defs>
      <rect width="700" height="520" fill="url(#sky)" />
      <g opacity="0.55" fill="#f4f7fa">
        <ellipse cx="120" cy="90" rx="70" ry="22" />
        <ellipse cx="175" cy="80" rx="55" ry="18" />
        <ellipse cx="560" cy="70" rx="60" ry="18" />
      </g>

      {/* background tower */}
      <rect x="60" y="150" width="160" height="330" fill="url(#towerB)" />
      {Array.from({ length: 9 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={78 + c * 36} y={172 + r * 33} width="22" height="20" fill="#7f93ab" opacity="0.5" />
        ))
      )}

      {/* main tower */}
      <polygon points="230,480 230,120 430,80 470,480" fill="url(#towerA)" />
      {Array.from({ length: 11 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <rect
            key={`m-${r}-${c}`}
            x={252 + c * 40}
            y={140 + r * 30 - c * 2}
            width="26"
            height="18"
            fill="#9fd4ec"
            opacity="0.35"
          />
        ))
      )}
      {/* gold accent stripe */}
      <polygon points="230,330 470,330 470,360 230,360" fill="#f0b90b" opacity="0.92" />

      {/* front low wing */}
      <polygon points="430,480 430,260 640,300 640,480" fill="#39465c" />
      <polygon points="430,260 640,300 640,320 430,282" fill="#4a5972" />
      {Array.from({ length: 6 }).map((_, c) => (
        <rect key={c} x={452 + c * 30} y={330} width="18" height="120" fill="#20293a" opacity="0.6" />
      ))}

      <rect x="0" y="480" width="700" height="40" fill="#141a24" />
    </svg>
  );
}
