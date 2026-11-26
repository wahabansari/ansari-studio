export function ContactArt1() {
  return (
    <svg className="art" viewBox="0 0 540 400" role="img" aria-label="Illustration: a message and a reply">
      <defs>
        <linearGradient id="cthg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="cthl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="cthf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <circle cx="30" cy="28" r="4" fill="rgba(255,255,255,.22)" />
      <circle cx="46" cy="28" r="4" fill="rgba(255,255,255,.22)" />
      <circle cx="62" cy="28" r="4" fill="rgba(255,255,255,.22)" />
      <text x="84" y="32" fontSize="11" fill="#B0B5CB">
        New message
      </text>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.08;.92;1"
          dur="9s"
          repeatCount="indefinite"
        />
        <rect
          x="40"
          y="70"
          width="300"
          height="96"
          rx="18"
          fill="rgba(255,255,255,.08)"
          stroke="rgba(255,255,255,.2)"
        />
        <rect x="62" y="94" width="210" height="8" rx="4" fill="rgba(255,255,255,.35)" />
        <rect x="62" y="114" width="250" height="8" rx="4" fill="rgba(255,255,255,.2)" />
        <rect x="62" y="134" width="150" height="8" rx="4" fill="rgba(255,255,255,.2)" />
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;.3;.38;.62;.66"
          dur="9s"
          repeatCount="indefinite"
        />
        <rect
          x="330"
          y="196"
          width="86"
          height="34"
          rx="17"
          fill="rgba(99,102,241,.25)"
          stroke="rgba(165,180,252,.5)"
        />
        <circle cx="356" cy="213" r="3.5" fill="#E0E4FF">
          <animate attributeName="cy" values="213;209;213" dur=".9s" repeatCount="indefinite" />
        </circle>
        <circle cx="373" cy="213" r="3.5" fill="#E0E4FF">
          <animate attributeName="cy" values="213;209;213" dur=".9s" begin=".15s" repeatCount="indefinite" />
        </circle>
        <circle cx="390" cy="213" r="3.5" fill="#E0E4FF">
          <animate attributeName="cy" values="213;209;213" dur=".9s" begin=".3s" repeatCount="indefinite" />
        </circle>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;.6;.7;.94;1"
          dur="9s"
          repeatCount="indefinite"
        />
        <rect x="170" y="196" width="330" height="100" rx="18" fill="url(#cthg)" fillOpacity=".9" />
        <text x="192" y="228" fontSize="13.5" fontWeight="620" fill="#fff">
          Thanks for your message.
        </text>
        <text x="192" y="250" fontSize="11.5" fill="#E6F6FF">
          You will get a reply within
        </text>
        <text x="192" y="268" fontSize="11.5" fill="#E6F6FF">
          one business day.
        </text>
      </g>
      <g className="bob">
        <rect
          x="40"
          y="330"
          width="170"
          height="28"
          rx="14"
          fill="rgba(255,255,255,.06)"
          stroke="rgba(255,255,255,.2)"
        />
        <circle cx="56" cy="344" r="3.5" fill="#67E8F9" />
        <text x="67" y="348" fontSize="10.5" fill="#E6E9F5">
          US, UK and Europe hours
        </text>
      </g>
    </svg>
  );
}
