import React from 'react';

export const AbstractHeroIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Left flowing ribbons */}
      <path
        d="M 100 50 Q 120 150, 100 250 Q 80 350, 100 450 Q 120 550, 100 600"
        fill="#FF6B6B"
        strokeLinecap="round"
      />
      <path
        d="M 140 50 Q 165 150, 140 250 Q 115 350, 140 450 Q 165 550, 140 600"
        fill="#4ECDC4"
        strokeLinecap="round"
      />
      <path
        d="M 180 50 Q 210 150, 180 250 Q 150 350, 180 450 Q 210 550, 180 600"
        fill="#FFE66D"
        strokeLinecap="round"
      />

      {/* Left-center ribbons */}
      <path
        d="M 250 0 Q 270 120, 250 240 Q 230 360, 250 480 Q 270 600, 250 650"
        fill="#95E1D3"
        strokeLinecap="round"
      />
      <path
        d="M 290 0 Q 315 120, 290 240 Q 265 360, 290 480 Q 315 600, 290 650"
        fill="#FF8C94"
        strokeLinecap="round"
      />

      {/* Center Eye */}
      <g transform="translate(400, 300)">
        {/* Outer circle */}
        <circle cx="0" cy="0" r="80" fill="#2D3561" />
        {/* Middle circle */}
        <circle cx="0" cy="0" r="50" fill="#F5F5F5" />
        {/* Inner circle (pupil) */}
        <circle cx="0" cy="0" r="25" fill="#2D3561" />
        {/* Highlight */}
        <circle cx="-8" cy="-8" r="10" fill="#F5F5F5" opacity="0.8" />
      </g>

      {/* Right-center ribbons */}
      <path
        d="M 510 0 Q 485 120, 510 240 Q 535 360, 510 480 Q 485 600, 510 650"
        fill="#A8E6CF"
        strokeLinecap="round"
      />
      <path
        d="M 550 0 Q 520 120, 550 240 Q 580 360, 550 480 Q 520 600, 550 650"
        fill="#FFDAB9"
        strokeLinecap="round"
      />

      {/* Right flowing ribbons */}
      <path
        d="M 620 50 Q 590 150, 620 250 Q 650 350, 620 450 Q 590 550, 620 600"
        fill="#B4A7D6"
        strokeLinecap="round"
      />
      <path
        d="M 660 50 Q 635 150, 660 250 Q 685 350, 660 450 Q 635 550, 660 600"
        fill="#FFB6B9"
        strokeLinecap="round"
      />
      <path
        d="M 700 50 Q 680 150, 700 250 Q 720 350, 700 450 Q 680 550, 700 600"
        fill="#FEC8D8"
        strokeLinecap="round"
      />
    </svg>
  );
};
