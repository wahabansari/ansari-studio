export function InsightsArt4() {
  return (
    <svg
      className="art"
      viewBox="0 0 400 250"
      role="img"
      aria-label="Illustration: a slow page becoming fast through safe steps"
    >
      <defs>
        <linearGradient id="i10g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="i10v" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="i10l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="i10bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3F4FF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <pattern id="i10dt" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D9DCF0" />
        </pattern>
        <filter id="i10f" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#i10bg)" />
      <rect width="400" height="250" fill="url(#i10dt)" opacity=".55" />
      <rect x="18" y="18" width="170" height="146" rx="12" fill="#fff" stroke="#E3E6F2" />
      <path d="M18 40 H188" stroke="#EEF0F6" />
      <circle cx="32" cy="29" r="3" fill="#D9DCE8" />
      <circle cx="43" cy="29" r="3" fill="#D9DCE8" />
      <text x="174" y="33" textAnchor="end" fontSize="10.5" fontWeight="600" fill="#5E667B">
        Before
      </text>
      <rect x="212" y="18" width="170" height="146" rx="12" fill="#fff" stroke="#E3E6F2" />
      <path d="M212 40 H382" stroke="#EEF0F6" />
      <circle cx="226" cy="29" r="3" fill="#D9DCE8" />
      <circle cx="237" cy="29" r="3" fill="#D9DCE8" />
      <text x="368" y="33" textAnchor="end" fontSize="10.5" fontWeight="600" fill="#5E667B">
        After
      </text>
      <rect x="32" y="52" height="9" rx="4" fill="#CBD0E0" width="0">
        <animate
          attributeName="width"
          values="0;0;90;90;0"
          keyTimes="0;0.100;0.300;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="32" y="68" height="6" rx="4" fill="#CBD0E0" width="0">
        <animate
          attributeName="width"
          values="0;0;138;138;0"
          keyTimes="0;0.300;0.500;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="32" y="80" height="6" rx="4" fill="#CBD0E0" width="0">
        <animate
          attributeName="width"
          values="0;0;118;118;0"
          keyTimes="0;0.500;0.700;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="32" y="96" height="36" rx="8" fill="#D5D9E8" width="0">
        <animate
          attributeName="width"
          values="0;0;138;138;0"
          keyTimes="0;0.550;0.750;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 160 52;360 160 52"
          dur="1.1s"
          repeatCount="indefinite"
        />
        <circle cx="160" cy="52" r="6.5" fill="none" stroke="#D5D9E8" strokeWidth="2" />
        <path
          d="M160 45.5 a6.5 6.5 0 0 1 6.5 6.5"
          fill="none"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <rect x="32" y="144" width="138" height="6" rx="3" fill="#EEF0F6" />
      <rect x="32" y="144" height="6" rx="3" fill="#A5ABD0" width="0">
        <animate
          attributeName="width"
          values="0;0;92;92;0"
          keyTimes="0;0.080;0.700;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="226" y="52" height="9" rx="4" fill="#0B1020" width="0">
        <animate
          attributeName="width"
          values="0;0;90;90;0"
          keyTimes="0;0.100;0.160;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="226" y="68" height="6" rx="4" fill="#E3E6F0" width="0">
        <animate
          attributeName="width"
          values="0;0;138;138;0"
          keyTimes="0;0.140;0.200;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="226" y="80" height="6" rx="4" fill="#E3E6F0" width="0">
        <animate
          attributeName="width"
          values="0;0;118;118;0"
          keyTimes="0;0.180;0.240;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.220;0.280;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 10"
          keyTimes="0;0.220;0.280;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="226" y="96" width="138" height="36" rx="8" fill="url(#i10g)" />
      </g>
      <rect x="226" y="144" width="138" height="6" rx="3" fill="#EEF0F6" />
      <rect x="226" y="144" height="6" rx="3" fill="url(#i10l)" width="0">
        <animate
          attributeName="width"
          values="0;0;138;138;0"
          keyTimes="0;0.080;0.240;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.300;0.360;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;0 0;0 0;0 0"
          keyTimes="0;0.300;0.360;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="344" cy="52" r="10" fill="#EEF0FF" stroke="#C7CCFF" />
        <path
          d="M339 52 l3.4 3.6 l6 -7"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path className="dflow" d="M190 92 H210" stroke="#C7CCFF" strokeWidth="1.6" strokeDasharray="3 4" />
      <path
        d="M205 87 l5 5 l-5 5"
        fill="none"
        stroke="#818CF8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="18" y="180" width="112" height="32" rx="16" fill="#fff" stroke="#E3E6F2" />
      <rect x="18" y="180" width="112" height="32" rx="16" fill="#EEF0FF" stroke="#818CF8" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.160;0.200;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="36" cy="196" r="8" fill="#EEF0F6" />
      <circle cx="36" cy="196" r="8" fill="url(#i10g)" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.160;0.200;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <text x="52" y="200" fontSize="11.5" fontWeight="600" fill="#0B1020">
        Measure
      </text>
      <rect x="144" y="180" width="112" height="32" rx="16" fill="#fff" stroke="#E3E6F2" />
      <rect x="144" y="180" width="112" height="32" rx="16" fill="#EEF0FF" stroke="#818CF8" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.420;0.460;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="162" cy="196" r="8" fill="#EEF0F6" />
      <circle cx="162" cy="196" r="8" fill="url(#i10g)" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.420;0.460;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <text x="178" y="200" fontSize="11.5" fontWeight="600" fill="#0B1020">
        Migrate
      </text>
      <rect x="270" y="180" width="112" height="32" rx="16" fill="#fff" stroke="#E3E6F2" />
      <rect x="270" y="180" width="112" height="32" rx="16" fill="#EEF0FF" stroke="#818CF8" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.680;0.720;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="288" cy="196" r="8" fill="#EEF0F6" />
      <circle cx="288" cy="196" r="8" fill="url(#i10g)" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.680;0.720;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <text x="304" y="200" fontSize="11.5" fontWeight="600" fill="#0B1020">
        Verify
      </text>
      <rect x="18" y="226" width="364" height="4" rx="2" fill="#EEF0F6" />
      <rect x="18" y="226" height="4" rx="2" fill="url(#i10l)" width="0">
        <animate
          attributeName="width"
          values="0;0;364;364;0"
          keyTimes="0;0.120;0.820;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
