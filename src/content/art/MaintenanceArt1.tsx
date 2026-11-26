export function MaintenanceArt1() {
  return (
    <svg
      className="art"
      viewBox="0 0 400 250"
      role="img"
      aria-label="Illustration: a healthy system being kept up to date"
    >
      <defs>
        <linearGradient id="hmag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="hmav" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="hmal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="hmabg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3F4FF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <pattern id="hmadt" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D9DCF0" />
        </pattern>
        <filter id="hmaf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#hmabg)" />
      <rect width="400" height="250" fill="url(#hmadt)" opacity=".55" />
      <rect x="18" y="16" width="176" height="220" rx="12" fill="#fff" stroke="#E3E6F2" />
      <circle
        className="dflow"
        cx="106"
        cy="98"
        r="56"
        fill="none"
        stroke="#C7CCFF"
        strokeWidth="1.4"
        strokeDasharray="3 7"
      />
      <g>
        <circle r="8" fill="#fff" stroke="#6366F1" strokeWidth="2" />
        <circle r="2.8" fill="#6366F1" />
        <animateMotion dur="12s" begin="-0s" repeatCount="indefinite" path="M106 42 a56 56 0 1 1 -0.01 0" />
      </g>
      <g>
        <circle r="8" fill="#fff" stroke="#22D3EE" strokeWidth="2" />
        <circle r="2.8" fill="#22D3EE" />
        <animateMotion dur="12s" begin="-3s" repeatCount="indefinite" path="M106 42 a56 56 0 1 1 -0.01 0" />
      </g>
      <g>
        <circle r="8" fill="#fff" stroke="#8B5CF6" strokeWidth="2" />
        <circle r="2.8" fill="#8B5CF6" />
        <animateMotion dur="12s" begin="-6s" repeatCount="indefinite" path="M106 42 a56 56 0 1 1 -0.01 0" />
      </g>
      <g>
        <circle r="8" fill="#fff" stroke="#F472B6" strokeWidth="2" />
        <circle r="2.8" fill="#F472B6" />
        <animateMotion dur="12s" begin="-9s" repeatCount="indefinite" path="M106 42 a56 56 0 1 1 -0.01 0" />
      </g>
      <path
        d="M106 62 L136 74 V98 C136 118 124 132 106 138 C88 132 76 118 76 98 V74 Z"
        fill="#F7F8FF"
        stroke="url(#hmag)"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="106" cy="100" r="8" fill="none" stroke="#6366F1" strokeWidth="1.6" opacity="0">
        <animate
          attributeName="r"
          values="8;8;40;40"
          keyTimes="0;0.100;0.400;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;.9;0;0"
          keyTimes="0;0.100;0.400;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="106" cy="100" r="8" fill="none" stroke="#22D3EE" strokeWidth="1.6" opacity="0">
        <animate
          attributeName="r"
          values="8;8;40;40"
          keyTimes="0;0.600;0.900;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;.9;0;0"
          keyTimes="0;0.600;0.900;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <path
        d="M92 100 l10 10 l19 -21"
        fill="none"
        stroke="#4F46E5"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="50"
        strokeDashoffset="50"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="50;50;0;0;50"
          keyTimes="0;0.080;0.180;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M30 200 H70 l7 -16 l9 30 l8 -26 l6 12 H182"
        fill="none"
        stroke="#E3E6F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 200 H70 l7 -16 l9 30 l8 -26 l6 12 H182"
        fill="none"
        stroke="url(#hmal)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="46 260"
      >
        <animate attributeName="stroke-dashoffset" values="40;-262" dur="2.6s" repeatCount="indefinite" />
      </path>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.060;0.120;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.060;0.120;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="206" y="16" width="176" height="46" rx="12" fill="#fff" stroke="#E3E6F2" />
        <text x="256" y="44" fontSize="12" fontWeight="580" fill="#0B1020">
          Updates and security
        </text>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.060;0.120;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.060;0.120;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="230" cy="39" r="10" fill="#fff" stroke="#D9DCE8" />
        <path
          d="M226 39 l3.2 3.4 l5.6 -6.6"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18"
          strokeDashoffset="18"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="18;18;0;0;18"
            keyTimes="0;0.200;0.250;.9;1"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.160;0.220;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.160;0.220;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="206" y="73" width="176" height="46" rx="12" fill="#fff" stroke="#E3E6F2" />
        <text x="256" y="101" fontSize="12" fontWeight="580" fill="#0B1020">
          Monitoring
        </text>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.160;0.220;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.160;0.220;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="230" cy="96" r="10" fill="#fff" stroke="#D9DCE8" />
        <path
          d="M226 96 l3.2 3.4 l5.6 -6.6"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18"
          strokeDashoffset="18"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="18;18;0;0;18"
            keyTimes="0;0.370;0.420;.9;1"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.260;0.320;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.260;0.320;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="206" y="130" width="176" height="46" rx="12" fill="#fff" stroke="#E3E6F2" />
        <text x="256" y="158" fontSize="12" fontWeight="580" fill="#0B1020">
          Bug fixes
        </text>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.260;0.320;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.260;0.320;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="230" cy="153" r="10" fill="#fff" stroke="#D9DCE8" />
        <path
          d="M226 153 l3.2 3.4 l5.6 -6.6"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18"
          strokeDashoffset="18"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="18;18;0;0;18"
            keyTimes="0;0.540;0.590;.9;1"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.360;0.420;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.360;0.420;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="206" y="187" width="176" height="46" rx="12" fill="#fff" stroke="#E3E6F2" />
        <text x="256" y="215" fontSize="12" fontWeight="580" fill="#0B1020">
          Monthly report
        </text>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.360;0.420;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.360;0.420;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="230" cy="210" r="10" fill="#fff" stroke="#D9DCE8" />
        <path
          d="M226 210 l3.2 3.4 l5.6 -6.6"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18"
          strokeDashoffset="18"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="18;18;0;0;18"
            keyTimes="0;0.710;0.760;.9;1"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
