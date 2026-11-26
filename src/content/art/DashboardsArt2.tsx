export function DashboardsArt2() {
  return (
    <svg
      className="art"
      viewBox="0 0 400 250"
      role="img"
      aria-label="Illustration: a dashboard filling with live data"
    >
      <defs>
        <linearGradient id="ddag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="ddav" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="ddal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="ddabg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3F4FF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <pattern id="ddadt" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D9DCF0" />
        </pattern>
        <filter id="ddaf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#ddabg)" />
      <rect width="400" height="250" fill="url(#ddadt)" opacity=".55" />
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.040;0.100;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 10"
          keyTimes="0;0.040;0.100;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="18" y="16" width="112" height="56" rx="11" fill="#fff" stroke="#E3E6F2" />
        <rect x="30" y="27" width="44" height="6" rx="3" fill="#D9DCE8" />
        <rect x="30" y="40" width="58" height="12" rx="5" fill="#0B1020" />
      </g>
      <path
        d="M90 58 C 100 52, 106 62, 116 44"
        fill="none"
        stroke="#6366F1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="40;40;0;0;40"
          keyTimes="0;0.120;0.200;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.090;0.150;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 10"
          keyTimes="0;0.090;0.150;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="144" y="16" width="112" height="56" rx="11" fill="#fff" stroke="#E3E6F2" />
        <rect x="156" y="27" width="44" height="6" rx="3" fill="#D9DCE8" />
        <rect x="156" y="40" width="58" height="12" rx="5" fill="#0B1020" />
      </g>
      <path
        d="M216 58 C 226 52, 232 62, 242 44"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="40;40;0;0;40"
          keyTimes="0;0.170;0.250;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.140;0.200;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 10;0 10;0 0;0 0;0 10"
          keyTimes="0;0.140;0.200;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="270" y="16" width="112" height="56" rx="11" fill="#fff" stroke="#E3E6F2" />
        <rect x="282" y="27" width="44" height="6" rx="3" fill="#D9DCE8" />
        <rect x="282" y="40" width="58" height="12" rx="5" fill="#0B1020" />
      </g>
      <path
        d="M342 58 C 352 52, 358 62, 368 44"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="40;40;0;0;40"
          keyTimes="0;0.220;0.300;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.200;0.260;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.200;0.260;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="18" y="84" width="236" height="152" rx="12" fill="#fff" stroke="#E3E6F2" />
        <path d="M30 110 H242 M30 146 H242 M30 182 H242" stroke="#EEF0F6" />
        <path d="M30 214 H242" stroke="#E0E3EE" />
      </g>
      <rect x="36" y="214" width="16" height="0" rx="5" fill="url(#ddav)">
        <animate
          attributeName="height"
          values="0;0;34;34;0"
          keyTimes="0;0.300;0.420;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;180;180;214"
          keyTimes="0;0.300;0.420;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="62" y="214" width="16" height="0" rx="5" fill="#C7CCFF">
        <animate
          attributeName="height"
          values="0;0;52;52;0"
          keyTimes="0;0.335;0.455;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;162;162;214"
          keyTimes="0;0.335;0.455;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="88" y="214" width="16" height="0" rx="5" fill="url(#ddav)">
        <animate
          attributeName="height"
          values="0;0;44;44;0"
          keyTimes="0;0.370;0.490;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;170;170;214"
          keyTimes="0;0.370;0.490;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="114" y="214" width="16" height="0" rx="5" fill="#C7CCFF">
        <animate
          attributeName="height"
          values="0;0;72;72;0"
          keyTimes="0;0.405;0.525;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;142;142;214"
          keyTimes="0;0.405;0.525;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="140" y="214" width="16" height="0" rx="5" fill="url(#ddav)">
        <animate
          attributeName="height"
          values="0;0;60;60;0"
          keyTimes="0;0.440;0.560;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;154;154;214"
          keyTimes="0;0.440;0.560;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="166" y="214" width="16" height="0" rx="5" fill="#C7CCFF">
        <animate
          attributeName="height"
          values="0;0;86;86;0"
          keyTimes="0;0.475;0.595;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;128;128;214"
          keyTimes="0;0.475;0.595;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="192" y="214" width="16" height="0" rx="5" fill="url(#ddav)">
        <animate
          attributeName="height"
          values="0;0;74;74;0"
          keyTimes="0;0.510;0.630;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;140;140;214"
          keyTimes="0;0.510;0.630;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="218" y="214" width="16" height="0" rx="5" fill="#C7CCFF">
        <animate
          attributeName="height"
          values="0;0;100;100;0"
          keyTimes="0;0.545;0.665;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="214;214;114;114;214"
          keyTimes="0;0.545;0.665;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <path
        d="M44 190 C 66 170, 90 184, 112 160 S 168 134, 196 120 S 226 104, 234 98"
        fill="none"
        stroke="url(#ddal)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="260"
        strokeDashoffset="260"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="260;260;0;0;260"
          keyTimes="0;0.560;0.720;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="234" cy="98" r="3" fill="none" stroke="#22D3EE" strokeWidth="1.6" opacity="0">
        <animate
          attributeName="r"
          values="3;3;14;14"
          keyTimes="0;0.720;0.840;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;.9;0;0"
          keyTimes="0;0.720;0.840;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="234" cy="98" r="4.4" fill="#22D3EE" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;.7;.72;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.600;0.660;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 6;0 6;0 0;0 0;0 6"
          keyTimes="0;0.600;0.660;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="190" y="74" width="62" height="30" rx="8" fill="#0B1020" />
        <rect x="199" y="83" width="26" height="5" rx="2.5" fill="#fff" opacity=".9" />
        <rect x="199" y="93" width="42" height="4" rx="2" fill="#fff" opacity=".45" />
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.240;0.300;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 8;0 8;0 0;0 0;0 8"
          keyTimes="0;0.240;0.300;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="266" y="84" width="116" height="152" rx="12" fill="#fff" stroke="#E3E6F2" />
      </g>
      <circle cx="324" cy="144" r="30" fill="none" stroke="#EEF0F6" strokeWidth="10" />
      <circle
        cx="324"
        cy="144"
        r="30"
        fill="none"
        stroke="url(#ddal)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="188.5"
        strokeDashoffset="188.5"
        transform="rotate(-90 324 144)"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="188.5;188.5;52;52;188.5"
          keyTimes="0;.34;.6;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.600;0.660;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;0 0;0 0;0 0"
          keyTimes="0;0.600;0.660;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="324" cy="144" r="4" fill="#4F46E5" />
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.620;0.680;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 4;0 4;0 0;0 0;0 4"
          keyTimes="0;0.620;0.680;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="286" cy="196" r="4" fill="#6366F1" />
        <rect x="296" y="193" width="64" height="6" rx="3" fill="#E3E6F0" />
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.680;0.740;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 4;0 4;0 0;0 0;0 4"
          keyTimes="0;0.680;0.740;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <circle cx="286" cy="214" r="4" fill="#22D3EE" />
        <rect x="296" y="211" width="50" height="6" rx="3" fill="#E3E6F0" />
      </g>
    </svg>
  );
}
