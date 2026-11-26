export function ProcessArt6() {
  return (
    <svg
      className="art"
      viewBox="0 0 960 230"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Illustration: a weekly build and review rhythm"
    >
      <defs>
        <linearGradient id="wk1g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="wk1l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="wk1f" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <path d="M40 50 V196" stroke="rgba(255,255,255,.08)" />
      <text x="48" y="36" fontSize="11" letterSpacing="1.5" fill="rgba(255,255,255,.45)">
        MON
      </text>
      <path d="M220 50 V196" stroke="rgba(255,255,255,.08)" />
      <text x="228" y="36" fontSize="11" letterSpacing="1.5" fill="rgba(255,255,255,.45)">
        TUE
      </text>
      <path d="M400 50 V196" stroke="rgba(255,255,255,.08)" />
      <text x="408" y="36" fontSize="11" letterSpacing="1.5" fill="rgba(255,255,255,.45)">
        WED
      </text>
      <path d="M580 50 V196" stroke="rgba(255,255,255,.08)" />
      <text x="588" y="36" fontSize="11" letterSpacing="1.5" fill="rgba(255,255,255,.45)">
        THU
      </text>
      <path d="M760 50 V196" stroke="rgba(255,255,255,.08)" />
      <text x="768" y="36" fontSize="11" letterSpacing="1.5" fill="rgba(255,255,255,.45)">
        FRI
      </text>
      <rect x="40" y="70" height="26" rx="13" fill="#A5B4FC" fillOpacity=".85" width="0">
        <animate
          attributeName="width"
          values="0;150;150;0"
          keyTimes="0;.28;.88;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <text x="54" y="87" fontSize="11" fontWeight="600" fill="#07080D">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.3;.88;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        Plan the week
      </text>
      <rect x="220" y="112" height="26" rx="13" fill="#6366F1" fillOpacity=".85" width="0">
        <animate
          attributeName="width"
          values="0;330;330;0"
          keyTimes="0;.28;.88;1"
          dur="8s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <text x="234" y="129" fontSize="11" fontWeight="600" fill="#07080D">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.3;.88;1"
          dur="8s"
          begin="0.5s"
          repeatCount="indefinite"
        />
        Build
      </text>
      <rect x="220" y="146" height="26" rx="13" fill="#8B5CF6" fillOpacity=".85" width="0">
        <animate
          attributeName="width"
          values="0;150;150;0"
          keyTimes="0;.28;.88;1"
          dur="8s"
          begin="1.4s"
          repeatCount="indefinite"
        />
      </rect>
      <text x="234" y="163" fontSize="11" fontWeight="600" fill="#07080D">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.3;.88;1"
          dur="8s"
          begin="1.4s"
          repeatCount="indefinite"
        />
        Test
      </text>
      <rect x="580" y="146" height="26" rx="13" fill="#22D3EE" fillOpacity=".85" width="0">
        <animate
          attributeName="width"
          values="0;150;150;0"
          keyTimes="0;.28;.88;1"
          dur="8s"
          begin="2.4s"
          repeatCount="indefinite"
        />
      </rect>
      <text x="594" y="163" fontSize="11" fontWeight="600" fill="#07080D">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.3;.88;1"
          dur="8s"
          begin="2.4s"
          repeatCount="indefinite"
        />
        Review with you
      </text>
      <g>
        <circle cx="760" cy="82" r="13" fill="rgba(34,211,238,.15)" stroke="#22D3EE" />
        <path
          className="ck"
          d="M754 82 l4 4 l8 -9"
          fill="none"
          stroke="#67E8F9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="782" y="86" fontSize="11.5" fill="#CFF7FF">
          Working software
        </text>
      </g>
      <rect x="40" y="206" width="880" height="2" rx="1" fill="rgba(255,255,255,.1)" />
      <rect x="40" y="206" height="2" rx="1" fill="url(#wk1l)" width="0">
        <animate
          attributeName="width"
          values="0;880;880;0"
          keyTimes="0;.9;.96;1"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
