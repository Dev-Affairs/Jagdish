import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className = '', size = 48 }: LogoIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background soft highlight */}
      <circle cx="50" cy="50" r="48" fill="white" className="opacity-10 group-hover:opacity-20 transition-opacity" />

      {/* Chimney features - left side of roof */}
      <rect x="20" y="20" width="3.5" height="16" fill="#00A859" rx="1" />
      <rect x="25.5" y="23" width="3.5" height="13" fill="#1E293B" rx="1" />

      {/* Outer Green Roof - pointed chevron */}
      <path 
        d="M 12 38 L 50 14 L 88 38" 
        stroke="#00A859" 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Accent Inner Roof line */}
      <path 
        d="M 22 31 L 50 18 L 78 31" 
        stroke="#00A859" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Big Circular Eyes - Green with reflective highlights */}
      {/* Left eye */}
      <circle cx="32" cy="48" r="14" fill="#00A859" />
      <circle cx="32" cy="48" r="5" fill="#111827" />
      <circle cx="34" cy="46" r="2" fill="white" />

      {/* Right eye */}
      <circle cx="68" cy="48" r="14" fill="#00A859" />
      <circle cx="68" cy="48" r="5" fill="#111827" />
      <circle cx="70" cy="46" r="2" fill="white" />

      {/* Center Black Triangle Nose */}
      <polygon points="50,44 40,54 60,54" fill="#111827" />

      {/* Left structural support bar (diagonal thin dark line on the right eye as shown in logo) */}
      <line x1="63" y1="36" x2="57" y2="60" stroke="#111827" strokeWidth="4.5" strokeLinecap="round" />

      {/* Dynamic Swooshes / waves at bottom right */}
      {/* Green swoosh */}
      <path 
        d="M 52 74 C 62 76 72 72 82 64" 
        stroke="#00A859" 
        strokeWidth="3.5" 
        fill="none" 
        strokeLinecap="round" 
      />
      {/* Second green swoosh */}
      <path 
        d="M 58 80 C 66 82 76 78 84 69" 
        stroke="#00A859" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
      />

      {/* Anchor "J" cursive path at bottom center */}
      <path 
        d="M 50 52 L 49 76 C 49 84 37 86 28 86 C 20 86 18 80 28 78 C 38 76 56 76 66 70" 
        stroke="#111827" 
        strokeWidth="5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
