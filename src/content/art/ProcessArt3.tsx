export function ProcessArt3() {
  return (
    <svg className="art" viewBox="0 0 360 240" role="img" aria-label="Written scope">
      <defs>
        <linearGradient id="ps1g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="ps1l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="ps1f" x="-80%" y="-80%" width="260%" height="260%">
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
        y="26"
        width="190"
        height="188"
        rx="14"
        fill="rgba(255,255,255,.07)"
        stroke="rgba(255,255,255,.2)"
      />
      <rect x="52" y="44" width="70" height="9" rx="4.5" fill="rgba(255,255,255,.5)" />
      <rect x="52" y="70" height="8" rx="4.0" fill="rgba(255,255,255,.26)" width="0">
        <animate
          attributeName="width"
          values="0;0;146;146;0"
          keyTimes="0;0.080;0.200;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="52" y="96" height="8" rx="4.0" fill="rgba(255,255,255,.26)" width="0">
        <animate
          attributeName="width"
          values="0;0;120;120;0"
          keyTimes="0;0.160;0.280;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="52" y="122" height="8" rx="4.0" fill="rgba(255,255,255,.26)" width="0">
        <animate
          attributeName="width"
          values="0;0;138;138;0"
          keyTimes="0;0.240;0.360;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="52" y="148" height="8" rx="4.0" fill="rgba(255,255,255,.26)" width="0">
        <animate
          attributeName="width"
          values="0;0;100;100;0"
          keyTimes="0;0.320;0.440;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="52" y="174" height="8" rx="4.0" fill="rgba(255,255,255,.26)" width="0">
        <animate
          attributeName="width"
          values="0;0;126;126;0"
          keyTimes="0;0.400;0.520;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.660;0.720;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;0 0;0 0;0 0"
          keyTimes="0;0.660;0.720;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <g transform="translate(196 50)">
          <circle r="20" fill="url(#ps1g)" />
          <path
            d="M-8 0 l6 6 l11 -12"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.300;0.360;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 0"
          keyTimes="0;0.300;0.360;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <rect
          x="244"
          y="62"
          width="98"
          height="30"
          rx="15"
          fill="rgba(99,102,241,.2)"
          stroke="rgba(165,180,252,.5)"
        />
        <circle cx="260" cy="77" r="3.5" fill="#A5B4FC" />
        <text x="271" y="81" fontSize="11" fill="#E0E4FF">
          Scope
        </text>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.420;0.480;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 0"
          keyTimes="0;0.420;0.480;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <rect
          x="244"
          y="108"
          width="116"
          height="30"
          rx="15"
          fill="rgba(99,102,241,.2)"
          stroke="rgba(165,180,252,.5)"
        />
        <circle cx="260" cy="123" r="3.5" fill="#A5B4FC" />
        <text x="271" y="127" fontSize="11" fill="#E0E4FF">
          Timeline
        </text>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.540;0.600;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 0"
          keyTimes="0;0.540;0.600;0.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
        <rect
          x="244"
          y="154"
          width="90"
          height="30"
          rx="15"
          fill="rgba(99,102,241,.2)"
          stroke="rgba(165,180,252,.5)"
        />
        <circle cx="260" cy="169" r="3.5" fill="#A5B4FC" />
        <text x="271" y="173" fontSize="11" fill="#E0E4FF">
          Price
        </text>
      </g>
      <rect x="244" y="198" height="5" rx="2.5" fill="#22D3EE" width="0">
        <animate
          attributeName="width"
          values="0;0;96;96;0"
          keyTimes="0;0.550;0.750;.9;1"
          dur="8s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
