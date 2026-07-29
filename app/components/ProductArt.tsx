export function TrussArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="trussBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#233047" />
          <stop offset="100%" stopColor="#141c2b" />
        </linearGradient>
        <linearGradient id="railTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7ccd6" />
          <stop offset="100%" stopColor="#8b93a3" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#trussBg)" />
      {[40, 95, 150, 205].map((y, idx) => (
        <g key={y}>
          <rect x="-20" y={y} width="460" height="14" rx="3" fill="url(#railTop)" transform={`rotate(-6 200 ${y})`} opacity={0.95 - idx * 0.06} />
          {Array.from({ length: 11 }).map((_, i) => {
            const x = -10 + i * 40;
            return (
              <path
                key={i}
                d={`M${x} ${y - 6} L${x + 22} ${y + 26} L${x + 4} ${y + 32} L${x + 26} ${y + 58}`}
                stroke="#e8b93a"
                strokeWidth="3"
                fill="none"
                opacity={0.5}
                transform={`rotate(-6 200 ${y})`}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export function BlockArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="blockBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#26334c" />
          <stop offset="100%" stopColor="#151d2e" />
        </linearGradient>
        <linearGradient id="blockFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7dbe3" />
          <stop offset="100%" stopColor="#a3aab8" />
        </linearGradient>
        <linearGradient id="blockSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7d8494" />
          <stop offset="100%" stopColor="#565e6e" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#blockBg)" />
      <g transform="translate(60,60)">
        <polygon points="0,60 180,20 260,55 80,100" fill="url(#blockFace)" />
        <polygon points="80,100 260,55 260,120 80,168" fill="url(#blockSide)" />
        <polygon points="0,60 80,100 80,168 0,128" fill="#3f4757" />
        {[62, 118, 174].map((cx) => (
          <ellipse key={cx} cx={cx} cy={44 - (cx - 62) * 0.15} rx="20" ry="11" fill="#1c2434" opacity="0.85" />
        ))}
        {[102, 158, 214].map((cx) => (
          <ellipse key={cx} cx={cx} cy={cx * 0.34 - 12} rx="17" ry="9" fill="#1c2434" opacity="0.6" />
        ))}
      </g>
    </svg>
  );
}

export function CustomArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="custBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#212c42" />
          <stop offset="100%" stopColor="#121a29" />
        </linearGradient>
        <linearGradient id="custBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9c65a" />
          <stop offset="100%" stopColor="#b98c1c" />
        </linearGradient>
        <linearGradient id="custBarSteel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7ccd6" />
          <stop offset="100%" stopColor="#8b93a3" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#custBg)" />
      {[30, 62, 94, 126, 158, 190].map((y, i) => (
        <rect
          key={y}
          x="20"
          y={y}
          width="360"
          height="18"
          rx="4"
          fill={i % 3 === 0 ? "url(#custBar)" : "url(#custBarSteel)"}
          transform={`skewX(-18) translate(${i * 6},0)`}
          opacity={0.95 - i * 0.05}
        />
      ))}
    </svg>
  );
}
