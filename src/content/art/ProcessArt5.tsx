export function ProcessArt5() {
  return (
    <svg className="art" viewBox="0 0 360 240" role="img" aria-label="Handover">
      <defs>
        <linearGradient id="ps3g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="ps3l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="ps3f" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <rect width="360" height="240" rx="20" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.12)" />
      <g stroke="rgba(255,255,255,.05)">
        <path d="M40 0V240" />
        <path d="M80 0V240" />
        <path d="M120 0V240" />
        <path d="M160 0V240" />
        <path d="M200 0V240" />
        <path d="M240 0V240" />
        <path d="M280 0V240" />
        <path d="M320 0V240" />
        <path d="M0 40H360" />
        <path d="M0 80H360" />
        <path d="M0 120H360" />
        <path d="M0 160H360" />
        <path d="M0 200H360" />
      </g>
      <rect
        x="34"
        y="104"
        width="130"
        height="96"
        rx="14"
        fill="rgba(255,255,255,.07)"
        stroke="rgba(255,255,255,.2)"
      />
      <path d="M34 128 H164" stroke="rgba(255,255,255,.12)" />
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;-4 -16;-4 -16;0 0"
          keyTimes="0;.12;.3;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <rect
          x="28"
          y="84"
          width="142"
          height="24"
          rx="10"
          fill="rgba(99,102,241,.35)"
          stroke="rgba(165,180,252,.6)"
        />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 40;0 40;0 -8;0 -8;0 40"
          keyTimes="0;.16;.38;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <circle cx="99" cy="84" r="11" fill="none" stroke="#67E8F9" strokeWidth="2.5" />
        <path
          d="M99 95 V122 M99 108 h8 M99 117 h6"
          stroke="#67E8F9"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;.14;.3;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </g>
      <rect
        x="192"
        y="62"
        width="140"
        height="34"
        rx="12"
        fill="rgba(255,255,255,.06)"
        stroke="rgba(255,255,255,.16)"
      />
      <text x="212" y="83" fontSize="11.5" fill="#E6E9F5">
        Code
      </text>
      <circle cx="314" cy="79" r="9" fill="rgba(34,211,238,.12)" stroke="#67E8F9" strokeOpacity=".6" />
      <path
        d="M310 79 l3 3.2 l5.5 -6.4"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="16"
        strokeDashoffset="16"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="16;16;0;0;16"
          keyTimes="0;0.340;0.400;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <rect
        x="192"
        y="108"
        width="140"
        height="34"
        rx="12"
        fill="rgba(255,255,255,.06)"
        stroke="rgba(255,255,255,.16)"
      />
      <text x="212" y="129" fontSize="11.5" fill="#E6E9F5">
        Accounts
      </text>
      <circle cx="314" cy="125" r="9" fill="rgba(34,211,238,.12)" stroke="#67E8F9" strokeOpacity=".6" />
      <path
        d="M310 125 l3 3.2 l5.5 -6.4"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="16"
        strokeDashoffset="16"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="16;16;0;0;16"
          keyTimes="0;0.470;0.530;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <rect
        x="192"
        y="154"
        width="140"
        height="34"
        rx="12"
        fill="rgba(255,255,255,.06)"
        stroke="rgba(255,255,255,.16)"
      />
      <text x="212" y="175" fontSize="11.5" fill="#E6E9F5">
        Documentation
      </text>
      <circle cx="314" cy="171" r="9" fill="rgba(34,211,238,.12)" stroke="#67E8F9" strokeOpacity=".6" />
      <path
        d="M310 171 l3 3.2 l5.5 -6.4"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="16"
        strokeDashoffset="16"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="16;16;0;0;16"
          keyTimes="0;0.600;0.660;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.760;0.820;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 0"
          keyTimes="0;0.760;0.820;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <rect x="200" y="196" width="124" height="28" rx="14" fill="url(#ps3g)" />
        <text x="262" y="214" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#fff">
          Yours to keep
        </text>
      </g>
    </svg>
  );
}
