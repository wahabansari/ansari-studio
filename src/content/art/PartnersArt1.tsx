export function PartnersArt1() {
  return (
    <svg className="art" viewBox="0 0 540 400" role="img" aria-label="Illustration: hand-off flow">
      <defs>
        <linearGradient id="pthg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="pthl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="pthf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <path d="M164 200 H196" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
      <path className="dflow" d="M164 200 H196" fill="none" stroke="url(#pthl)" strokeWidth="1.6" />
      <circle r="6" fill="#67E8F9" filter="url(#pthf)">
        <animateMotion dur="2.2s" begin="0.0s" repeatCount="indefinite" path="M164 200 H196" />
      </circle>
      <circle r="2.8" fill="#fff">
        <animateMotion dur="2.2s" begin="0.0s" repeatCount="indefinite" path="M164 200 H196" />
      </circle>
      <path d="M344 200 H376" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
      <path className="dflow" d="M344 200 H376" fill="none" stroke="url(#pthl)" strokeWidth="1.6" />
      <circle r="6" fill="#67E8F9" filter="url(#pthf)">
        <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite" path="M344 200 H376" />
      </circle>
      <circle r="2.8" fill="#fff">
        <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite" path="M344 200 H376" />
      </circle>
      <rect
        x="16"
        y="150"
        width="148"
        height="100"
        rx="18"
        fill="rgba(255,255,255,.07)"
        stroke="rgba(255,255,255,.18)"
      />
      <circle cx="46" cy="184" r="14" fill="url(#pthg)" />
      <circle className="nd" cx="46" cy="184" r="4" fill="#fff" />
      <text x="32" y="220" fontSize="13.5" fontWeight="620" fill="#fff">
        Your agency
      </text>
      <text x="32" y="238" fontSize="10.5" fill="#B0B5CB">
        Brief and client
      </text>
      <rect
        x="196"
        y="150"
        width="148"
        height="100"
        rx="18"
        fill="rgba(255,255,255,.07)"
        stroke="rgba(255,255,255,.18)"
      />
      <circle cx="226" cy="184" r="14" fill="url(#pthg)" />
      <circle className="nd" cx="226" cy="184" r="4" fill="#fff" />
      <text x="212" y="220" fontSize="13.5" fontWeight="620" fill="#fff">
        Our team
      </text>
      <text x="212" y="238" fontSize="10.5" fill="#B0B5CB">
        Scopes and builds
      </text>
      <rect
        x="376"
        y="150"
        width="148"
        height="100"
        rx="18"
        fill="rgba(255,255,255,.07)"
        stroke="rgba(255,255,255,.18)"
      />
      <circle cx="406" cy="184" r="14" fill="url(#pthg)" />
      <circle className="nd" cx="406" cy="184" r="4" fill="#fff" />
      <text x="392" y="220" fontSize="13.5" fontWeight="620" fill="#fff">
        Your client
      </text>
      <text x="392" y="238" fontSize="10.5" fill="#B0B5CB">
        Gets your brand
      </text>
      <g className="bob">
        <rect
          x="196"
          y="84"
          width="148"
          height="28"
          rx="14"
          fill="rgba(99,102,241,.22)"
          stroke="rgba(165,180,252,.5)"
        />
        <circle cx="214" cy="98" r="3.5" fill="#A5B4FC" />
        <text x="226" y="102" fontSize="11" fill="#E0E4FF">
          White-label
        </text>
      </g>
      <g className="bob" style={{ animationDelay: "-2s" }}>
        <rect
          x="150"
          y="296"
          width="240"
          height="30"
          rx="15"
          fill="rgba(34,211,238,.1)"
          stroke="rgba(34,211,238,.45)"
        />
        <path
          className="ck"
          d="M168 311 l5 5 l9 -10"
          fill="none"
          stroke="#67E8F9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="192" y="315" fontSize="11" fill="#CFF7FF">
          Delivered under your name
        </text>
      </g>
    </svg>
  );
}
