export function AboutArt1() {
  return (
    <svg
      className="art"
      viewBox="0 0 540 400"
      role="img"
      aria-label="Illustration: one team working with clients in the US, UK and Europe"
    >
      <defs>
        <linearGradient id="abng" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="abnl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="abnf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <circle
        className="dflow"
        cx="270"
        cy="200"
        r="92"
        fill="none"
        stroke="rgba(165,180,252,.25)"
        strokeDasharray="3 7"
      />
      <path d="M270 200 L270.0 72.0" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
      <path className="dflow" d="M270 200 L270.0 72.0" fill="none" stroke="url(#abnl)" strokeWidth="1.6" />
      <circle r="6" fill="#67E8F9" filter="url(#abnf)">
        <animateMotion dur="2.6s" begin="0.0s" repeatCount="indefinite" path="M270 200 L270.0 72.0" />
      </circle>
      <circle r="2.8" fill="#fff">
        <animateMotion dur="2.6s" begin="0.0s" repeatCount="indefinite" path="M270 200 L270.0 72.0" />
      </circle>
      <path d="M270 200 L422.4 264.0" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
      <path className="dflow" d="M270 200 L422.4 264.0" fill="none" stroke="url(#abnl)" strokeWidth="1.6" />
      <circle r="6" fill="#67E8F9" filter="url(#abnf)">
        <animateMotion dur="2.6s" begin="0.5s" repeatCount="indefinite" path="M270 200 L422.4 264.0" />
      </circle>
      <circle r="2.8" fill="#fff">
        <animateMotion dur="2.6s" begin="0.5s" repeatCount="indefinite" path="M270 200 L422.4 264.0" />
      </circle>
      <path d="M270 200 L117.6 264.0" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
      <path className="dflow" d="M270 200 L117.6 264.0" fill="none" stroke="url(#abnl)" strokeWidth="1.6" />
      <circle r="6" fill="#67E8F9" filter="url(#abnf)">
        <animateMotion dur="2.6s" begin="1.0s" repeatCount="indefinite" path="M270 200 L117.6 264.0" />
      </circle>
      <circle r="2.8" fill="#fff">
        <animateMotion dur="2.6s" begin="1.0s" repeatCount="indefinite" path="M270 200 L117.6 264.0" />
      </circle>
      <g className="bob" style={{ animationDelay: "-0.0s" }}>
        <rect
          x="204.0"
          y="54.0"
          width="132"
          height="36"
          rx="18"
          fill="#0E1020"
          stroke="rgba(255,255,255,.22)"
        />
        <circle cx="222.0" cy="72.0" r="4" fill="#67E8F9" />
        <circle
          className="ping"
          cx="222.0"
          cy="72.0"
          r="4"
          fill="none"
          stroke="#67E8F9"
          style={{ animationDelay: "-0.0s" }}
        />
        <text x="234.0" y="76.0" fontSize="11.5" fill="#E6E9F5" fontWeight="560">
          United States
        </text>
      </g>
      <g className="bob" style={{ animationDelay: "-0.9s" }}>
        <rect
          x="356.4"
          y="246.0"
          width="132"
          height="36"
          rx="18"
          fill="#0E1020"
          stroke="rgba(255,255,255,.22)"
        />
        <circle cx="374.4" cy="264.0" r="4" fill="#67E8F9" />
        <circle
          className="ping"
          cx="374.4"
          cy="264.0"
          r="4"
          fill="none"
          stroke="#67E8F9"
          style={{ animationDelay: "-0.6s" }}
        />
        <text x="386.4" y="268.0" fontSize="11.5" fill="#E6E9F5" fontWeight="560">
          Europe
        </text>
      </g>
      <g className="bob" style={{ animationDelay: "-1.8s" }}>
        <rect
          x="51.6"
          y="246.0"
          width="132"
          height="36"
          rx="18"
          fill="#0E1020"
          stroke="rgba(255,255,255,.22)"
        />
        <circle cx="69.6" cy="264.0" r="4" fill="#67E8F9" />
        <circle
          className="ping"
          cx="69.6"
          cy="264.0"
          r="4"
          fill="none"
          stroke="#67E8F9"
          style={{ animationDelay: "-1.2s" }}
        />
        <text x="81.6" y="268.0" fontSize="11.5" fill="#E6E9F5" fontWeight="560">
          United Kingdom
        </text>
      </g>
      <circle cx="270" cy="200" r="40" fill="url(#abng)" />
      <circle className="ping" cx="270" cy="200" r="40" fill="none" stroke="#A5B4FC" />
      <path d="M256 218 L270 182 H277 L263 218 Z M281 190 L291 218 H284 L276 199 Z" fill="#fff" />
      <text
        x="270"
        y="262"
        fontSize="10.5"
        letterSpacing="1.5"
        textAnchor="middle"
        fill="rgba(255,255,255,.5)"
      >
        ONE TEAM
      </text>
    </svg>
  );
}
