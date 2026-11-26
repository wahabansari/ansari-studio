export function HomeArt1() {
  return (
    <svg
      className="art"
      viewBox="0 0 540 400"
      role="img"
      aria-label="Illustration: build, modernize and integrate pipeline"
    >
      <defs>
        <linearGradient id="hhg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="hhl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="hhf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <circle cx="30" cy="28" r="4" fill="rgba(255,255,255,.22)" />
      <circle cx="46" cy="28" r="4" fill="rgba(255,255,255,.22)" />
      <circle cx="62" cy="28" r="4" fill="rgba(255,255,255,.22)" />
      <text x="84" y="32" fontSize="11" fill="#B0B5CB">
        Delivery
      </text>
      <rect
        x="398"
        y="16"
        width="118"
        height="24"
        rx="12"
        fill="rgba(255,255,255,.05)"
        stroke="rgba(255,255,255,.2)"
      />
      <circle cx="416" cy="28" r="3.5" fill="#22D3EE" />
      <circle className="ping" cx="416" cy="28" r="3.5" fill="none" stroke="#22D3EE" />
      <text x="428" y="32" fontSize="10.5" fill="#E6E9F5">
        In progress
      </text>
      <path
        d="M135 140 C135 175 150 203 180 203"
        fill="none"
        stroke="rgba(255,255,255,.14)"
        strokeWidth="1.5"
      />
      <path
        className="dflow"
        d="M135 140 C135 175 150 203 180 203"
        fill="none"
        stroke="url(#hhl)"
        strokeWidth="1.6"
      />
      <path
        d="M275 238 C275 275 290 301 320 301"
        fill="none"
        stroke="rgba(255,255,255,.14)"
        strokeWidth="1.5"
      />
      <path
        className="dflow"
        d="M275 238 C275 275 290 301 320 301"
        fill="none"
        stroke="url(#hhl)"
        strokeWidth="1.6"
      />
      <path d="M415 336 V356" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" />
      <g>
        <rect
          x="40"
          y="70"
          width="190"
          height="70"
          rx="16"
          fill="rgba(255,255,255,.07)"
          stroke="rgba(255,255,255,.18)"
        />
        <circle cx="72" cy="105" r="16" fill="url(#hhg)" />
        <path
          d="M72 97 l9 5 -9 5 -9 -5z M63 108 l9 5 9 -5"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text x="98" y="101" fontSize="14" fontWeight="600" fill="#fff">
          Build
        </text>
        <text x="98" y="119" fontSize="10.5" fill="#B0B5CB">
          Products and MVPs
        </text>
      </g>
      <g>
        <rect
          x="180"
          y="168"
          width="190"
          height="70"
          rx="16"
          fill="rgba(255,255,255,.07)"
          stroke="rgba(255,255,255,.18)"
        />
        <circle cx="212" cy="203" r="16" fill="url(#hhg)" />
        <path
          d="M205 199 a8 8 0 0 1 14 -2 M219 193 v5 h-5 M219 207 a8 8 0 0 1 -14 2 M205 213 v-5 h5"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="238" y="199" fontSize="14" fontWeight="600" fill="#fff">
          Modernize
        </text>
        <text x="238" y="217" fontSize="10.5" fill="#B0B5CB">
          Faster, easier to change
        </text>
      </g>
      <g>
        <rect
          x="320"
          y="266"
          width="190"
          height="70"
          rx="16"
          fill="rgba(255,255,255,.07)"
          stroke="rgba(255,255,255,.18)"
        />
        <circle cx="352" cy="301" r="16" fill="url(#hhg)" />
        <path
          d="M347 301 h10 M344 297 a4 4 0 0 0 0 8 M360 297 a4 4 0 0 1 0 8"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text x="378" y="297" fontSize="14" fontWeight="600" fill="#fff">
          Integrate
        </text>
        <text x="378" y="315" fontSize="10.5" fill="#B0B5CB">
          Your tools, connected
        </text>
      </g>
      <circle r="6" fill="#67E8F9" filter="url(#hhf)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M135 140 C135 175 150 203 180 203" />
      </circle>
      <circle r="3" fill="#fff">
        <animateMotion dur="3s" repeatCount="indefinite" path="M135 140 C135 175 150 203 180 203" />
      </circle>
      <circle r="6" fill="#A5B4FC" filter="url(#hhf)">
        <animateMotion
          dur="3s"
          begin="1.5s"
          repeatCount="indefinite"
          path="M275 238 C275 275 290 301 320 301"
        />
      </circle>
      <circle r="3" fill="#fff">
        <animateMotion
          dur="3s"
          begin="1.5s"
          repeatCount="indefinite"
          path="M275 238 C275 275 290 301 320 301"
        />
      </circle>
      <rect
        x="346"
        y="356"
        width="164"
        height="32"
        rx="16"
        fill="rgba(34,211,238,.12)"
        stroke="rgba(34,211,238,.5)"
      />
      <path
        className="ck"
        d="M363 372 l5 5 l9 -10"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="388" y="376" fontSize="11" fill="#CFF7FF">
        Live and handed over
      </text>
      <g className="bob">
        <rect
          x="28"
          y="176"
          width="124"
          height="26"
          rx="13"
          fill="rgba(255,255,255,.06)"
          stroke="rgba(255,255,255,.18)"
        />
        <circle cx="44" cy="189" r="3.5" fill="#A5B4FC" />
        <text x="54" y="193" fontSize="10.5" fill="#E6E9F5">
          Written scope
        </text>
      </g>
      <g className="bob" style={{ animationDelay: "-2.2s" }}>
        <rect
          x="40"
          y="296"
          width="132"
          height="26"
          rx="13"
          fill="rgba(255,255,255,.06)"
          stroke="rgba(255,255,255,.18)"
        />
        <circle cx="56" cy="309" r="3.5" fill="#67E8F9" />
        <text x="66" y="313" fontSize="10.5" fill="#E6E9F5">
          Weekly progress
        </text>
      </g>
      <text x="40" y="386" fontSize="10" letterSpacing="2" fill="rgba(255,255,255,.35)">
        BUILD. MODERNIZE. INTEGRATE.
      </text>
    </svg>
  );
}
