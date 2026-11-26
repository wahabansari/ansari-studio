export function ProductEngineeringArt2() {
  return (
    <svg
      className="art"
      viewBox="0 0 400 250"
      role="img"
      aria-label="Illustration: a product screen being built and launched"
    >
      <defs>
        <linearGradient id="dpeg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="dpev" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="dpel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="dpebg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3F4FF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <pattern id="dpedt" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D9DCF0" />
        </pattern>
        <filter id="dpef" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#dpebg)" />
      <rect width="400" height="250" fill="url(#dpedt)" opacity=".55" />
      <rect x="22" y="16" width="356" height="222" rx="14" fill="#fff" stroke="#E3E6F2" />
      <path d="M22 42 H378" stroke="#EEF0F6" />
      <circle cx="38" cy="29" r="3.6" fill="#D9DCE8" />
      <circle cx="50" cy="29" r="3.6" fill="#D9DCE8" />
      <circle cx="62" cy="29" r="3.6" fill="#D9DCE8" />
      <text x="188" y="33" fontSize="10.5" fill="#8A91A8" opacity="1">
        <animate
          attributeName="opacity"
          values="1;1;0;0;1"
          keyTimes="0;.6;.66;.97;1"
          dur="10s"
          repeatCount="indefinite"
        />
        v0.1 draft
      </text>
      <text x="188" y="33" fontSize="10.5" fontWeight="600" fill="#4F46E5" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;.66;.7;.95;1"
          dur="10s"
          repeatCount="indefinite"
        />
        v1.0 live
      </text>
      <rect x="34" y="56" height="14" rx="7" fill="url(#dpev)" width="0">
        <animate
          attributeName="width"
          values="0;0;72;72;0"
          keyTimes="0;0.050;0.150;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="34" y="80" height="14" rx="7" fill="#EEF0FA" width="0">
        <animate
          attributeName="width"
          values="0;0;72;72;0"
          keyTimes="0;0.100;0.200;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="34" y="104" height="14" rx="7" fill="#EEF0FA" width="0">
        <animate
          attributeName="width"
          values="0;0;72;72;0"
          keyTimes="0;0.150;0.250;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="34" y="128" height="14" rx="7" fill="#EEF0FA" width="0">
        <animate
          attributeName="width"
          values="0;0;72;72;0"
          keyTimes="0;0.200;0.300;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="122" y="56" height="12" rx="6.0" fill="#0B1020" width="0">
        <animate
          attributeName="width"
          values="0;0;130;130;0"
          keyTimes="0;0.260;0.360;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="122" y="76" height="7" rx="3.5" fill="#E3E6F0" width="0">
        <animate
          attributeName="width"
          values="0;0;210;210;0"
          keyTimes="0;0.300;0.400;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
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
          values="0 14;0 14;0 0;0 0;0 14"
          keyTimes="0;0.360;0.420;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="122" y="94" width="244" height="66" rx="12" fill="url(#dpev)" />
        <rect x="138" y="110" width="112" height="9" rx="4.5" fill="#fff" opacity=".92" />
        <rect x="138" y="126" width="158" height="6" rx="3" fill="#fff" opacity=".5" />
        <rect x="138" y="140" width="58" height="14" rx="7" fill="#fff" />
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.460;0.520;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 12;0 12;0 0;0 0;0 12"
          keyTimes="0;0.460;0.520;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="122" y="172" width="116" height="52" rx="10" fill="#F7F8FC" stroke="#E6E8F0" />
        <rect x="134" y="184" width="46" height="7" rx="3.5" fill="#D9DCE8" />
      </g>
      <path
        d="M134 214 C 156 196, 170 218, 190 200 S 218 198, 226 188"
        fill="none"
        stroke="#6366F1"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="110"
        strokeDashoffset="110"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="110;110;0;0;110"
          keyTimes="0;0.520;0.660;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.520;0.580;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 12;0 12;0 0;0 0;0 12"
          keyTimes="0;0.520;0.580;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="250" y="172" width="116" height="52" rx="10" fill="#F7F8FC" stroke="#E6E8F0" />
        <rect x="262" y="184" width="46" height="7" rx="3.5" fill="#D9DCE8" />
      </g>
      <path
        d="M262 214 C 284 196, 298 218, 318 200 S 346 198, 354 188"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="110"
        strokeDashoffset="110"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="110;110;0;0;110"
          keyTimes="0;0.580;0.720;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="300 110;300 110;190 148;190 148;160 150;160 150;300 200;300 200"
          keyTimes="0;.28;.5;.58;.64;.7;.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <path
          d="M0 0 L0 17 L4.6 13 L8 20 L10.8 18.8 L7.4 12 L13 12 Z"
          fill="#0B1020"
          stroke="#fff"
          strokeWidth="1.2"
        />
      </g>
      <circle cx="160" cy="148" r="2" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0">
        <animate
          attributeName="r"
          values="2;2;20;20"
          keyTimes="0;0.640;0.740;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;.9;0;0"
          keyTimes="0;0.640;0.740;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;0.720;0.780;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 6;0 6;0 0;0 0;0 6"
          keyTimes="0;0.720;0.780;0.9;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <rect x="286" y="20" width="82" height="18" rx="9" fill="#EEF0FF" stroke="#C7CCFF" />
        <circle cx="299" cy="29" r="3.2" fill="#22D3EE" />
        <text x="308" y="33" fontSize="10" fontWeight="600" fill="#4F46E5">
          Launched
        </text>
      </g>
      <circle cx="318.0" cy="30" r="2.6" fill="#22D3EE" opacity="0">
        <animate
          attributeName="cy"
          values="30;30;60;60"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="318.0;318.0;297;297"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;0;0"
          keyTimes="0;.72;.76;.86;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="322.8" cy="30" r="2.6" fill="#8B5CF6" opacity="0">
        <animate
          attributeName="cy"
          values="30;30;68;68"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="322.8;322.8;313;313"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;0;0"
          keyTimes="0;.72;.76;.86;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="328.8" cy="30" r="2.6" fill="#F472B6" opacity="0">
        <animate
          attributeName="cy"
          values="30;30;64;64"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="328.8;328.8;333;333"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;0;0"
          keyTimes="0;.72;.76;.86;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="334.8" cy="30" r="2.6" fill="#6366F1" opacity="0">
        <animate
          attributeName="cy"
          values="30;30;60;60"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="334.8;334.8;353;353"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;0;0"
          keyTimes="0;.72;.76;.86;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="339.0" cy="30" r="2.6" fill="#22D3EE" opacity="0">
        <animate
          attributeName="cy"
          values="30;30;54;54"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cx"
          values="339.0;339.0;367;367"
          keyTimes="0;.72;.82;1"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;0;0"
          keyTimes="0;.72;.76;.86;1"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
