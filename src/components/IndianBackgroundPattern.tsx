export const IndianBackgroundPattern = () => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="25%" stopColor="#2d1b1a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="75%" stopColor="#1a2d2b" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </linearGradient>

        <radialGradient id="accentGrad1" cx="20%" cy="20%">
          <stop offset="0%" stopColor="#d97706" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="accentGrad2" cx="80%" cy="80%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="accentGrad3" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>

        {/* Mandala pattern */}
        <pattern
          id="mandalaDots"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="60" cy="60" r="2" fill="#d97706" opacity="0.08" />
          <circle cx="30" cy="30" r="1" fill="#dc2626" opacity="0.06" />
          <circle cx="90" cy="30" r="1" fill="#f59e0b" opacity="0.06" />
          <circle cx="30" cy="90" r="1" fill="#f59e0b" opacity="0.06" />
          <circle cx="90" cy="90" r="1" fill="#dc2626" opacity="0.06" />
        </pattern>

        {/* Geometric lines pattern */}
        <pattern
          id="geometricLines"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="200"
            y2="200"
            stroke="#d97706"
            strokeWidth="0.5"
            opacity="0.04"
          />
          <line
            x1="200"
            y1="0"
            x2="0"
            y2="200"
            stroke="#dc2626"
            strokeWidth="0.5"
            opacity="0.03"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="#f59e0b"
            strokeWidth="0.5"
            opacity="0.04"
          />
        </pattern>
      </defs>

      {/* Main background */}
      <rect width="1920" height="1080" fill="url(#bgGradient)" />

      {/* Accent gradients */}
      <circle cx="300" cy="200" r="600" fill="url(#accentGrad1)" />
      <circle cx="1600" cy="900" r="700" fill="url(#accentGrad2)" />
      <circle cx="960" cy="540" r="800" fill="url(#accentGrad3)" />

      {/* Geometric patterns - Indian inspired */}
      <rect width="1920" height="1080" fill="url(#geometricLines)" />
      <rect width="1920" height="1080" fill="url(#mandalaDots)" />

      {/* Decorative Indian motifs - Top left corner */}
      <g opacity="0.06">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#d97706"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#d97706"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="#d97706"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="none"
          stroke="#d97706"
          strokeWidth="1"
        />
      </g>

      {/* Decorative Indian motifs - Bottom right corner */}
      <g opacity="0.05">
        <circle
          cx="1820"
          cy="980"
          r="90"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
        />
        <circle
          cx="1820"
          cy="980"
          r="70"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1"
        />
        <circle
          cx="1820"
          cy="980"
          r="50"
          fill="none"
          stroke="#dc2626"
          strokeWidth="0.8"
        />
        <circle
          cx="1820"
          cy="980"
          r="30"
          fill="none"
          stroke="#dc2626"
          strokeWidth="0.8"
        />
      </g>

      {/* Decorative diamond pattern - Top right */}
      <g opacity="0.04">
        <polygon
          points="1800,150 1850,100 1900,150 1850,200"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <polygon
          points="1900,200 1950,150 2000,200 1950,250"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1"
        />
      </g>

      {/* Decorative lines - bottom */}
      <g opacity="0.05">
        <line
          x1="200"
          y1="1000"
          x2="500"
          y2="1000"
          stroke="#d97706"
          strokeWidth="2"
        />
        <line
          x1="1420"
          y1="1000"
          x2="1720"
          y2="1000"
          stroke="#dc2626"
          strokeWidth="2"
        />
      </g>

      {/* Subtle noise/grain overlay for texture */}
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
      </defs>
      <rect
        width="1920"
        height="1080"
        fill="#000"
        fillOpacity="0.02"
        filter="url(#noise)"
      />
    </svg>
  );
};
