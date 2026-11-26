export function AutomationArt2() {
  return (
    <svg
      className="art"
      viewBox="0 0 400 250"
      role="img"
      aria-label="Illustration: an automated workflow with a person reviewing"
    >
      <defs>
        <linearGradient id="daug" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="dauv" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="daul" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366F1" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="daubg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3F4FF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <pattern id="daudt" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D9DCF0" />
        </pattern>
        <filter id="dauf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#daubg)" />
      <rect width="400" height="250" fill="url(#daudt)" opacity=".55" />
      <path d="M180 54 H220" fill="none" stroke="#E0E3EE" strokeWidth="1.6" />
      <path className="dflow" d="M180 54 H220" fill="none" stroke="url(#daul)" strokeWidth="1.8" />
      <path d="M300 86 V152" fill="none" stroke="#E0E3EE" strokeWidth="1.6" />
      <path className="dflow" d="M300 86 V152" fill="none" stroke="url(#daul)" strokeWidth="1.8" />
      <path d="M220 184 H180" fill="none" stroke="#E0E3EE" strokeWidth="1.6" />
      <path className="dflow" d="M220 184 H180" fill="none" stroke="url(#daul)" strokeWidth="1.8" />
      <path d="M100 216 V232 M100 232 H300" stroke="#E0E3EE" strokeWidth="0" />
      <rect x="20" y="22" width="160" height="64" rx="14" fill="#fff" stroke="#E0E3EE" />
      <rect
        x="20"
        y="22"
        width="160"
        height="64"
        rx="14"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.6"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.040;0.080;0.240;0.280;1"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="50" cy="54" r="15" fill="url(#daug)" />
      <circle className="nd" cx="50" cy="54" r="4" fill="#fff" />
      <text x="74" y="52" fontSize="12.5" fontWeight="600" fill="#0B1020">
        New enquiry
      </text>
      <text x="74" y="68" fontSize="10" fill="#5E667B">
        Form received
      </text>
      <rect x="220" y="22" width="160" height="64" rx="14" fill="#fff" stroke="#E0E3EE" />
      <rect
        x="220"
        y="22"
        width="160"
        height="64"
        rx="14"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.6"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.280;0.320;0.480;0.520;1"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="250" cy="54" r="15" fill="url(#daug)" />
      <circle className="nd" cx="250" cy="54" r="4" fill="#fff" />
      <text x="274" y="52" fontSize="12.5" fontWeight="600" fill="#0B1020">
        AI sorts it
      </text>
      <text x="274" y="68" fontSize="10" fill="#5E667B">
        Drafts the reply
      </text>
      <rect x="220" y="152" width="160" height="64" rx="14" fill="#fff" stroke="#E0E3EE" />
      <rect
        x="220"
        y="152"
        width="160"
        height="64"
        rx="14"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.6"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.520;0.560;0.720;0.760;1"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="250" cy="184" r="15" fill="url(#daug)" />
      <circle className="nd" cx="250" cy="184" r="4" fill="#fff" />
      <text x="274" y="182" fontSize="12.5" fontWeight="600" fill="#0B1020">
        Person reviews
      </text>
      <text x="274" y="198" fontSize="10" fill="#5E667B">
        Approves or edits
      </text>
      <rect x="20" y="152" width="160" height="64" rx="14" fill="#fff" stroke="#E0E3EE" />
      <rect
        x="20"
        y="152"
        width="160"
        height="64"
        rx="14"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.6"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.760;0.800;0.960;1.000;1"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="50" cy="184" r="15" fill="url(#daug)" />
      <circle className="nd" cx="50" cy="184" r="4" fill="#fff" />
      <text x="74" y="182" fontSize="12.5" fontWeight="600" fill="#0B1020">
        Reply and CRM
      </text>
      <text x="74" y="198" fontSize="10" fill="#5E667B">
        Sent and recorded
      </text>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.120;0.130;0.260;0.270;1"
          dur="8s"
          repeatCount="indefinite"
        />
        <circle r="6" fill="#22D3EE" filter="url(#dauf)">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M180 54 H220"
            keyPoints="0;0;1;1"
            keyTimes="0;0.120;0.260;1"
            calcMode="linear"
          />
        </circle>
        <circle r="3" fill="#fff">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M180 54 H220"
            keyPoints="0;0;1;1"
            keyTimes="0;0.120;0.260;1"
            calcMode="linear"
          />
        </circle>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.360;0.370;0.500;0.510;1"
          dur="8s"
          repeatCount="indefinite"
        />
        <circle r="6" fill="#22D3EE" filter="url(#dauf)">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M300 86 V152"
            keyPoints="0;0;1;1"
            keyTimes="0;0.360;0.500;1"
            calcMode="linear"
          />
        </circle>
        <circle r="3" fill="#fff">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M300 86 V152"
            keyPoints="0;0;1;1"
            keyTimes="0;0.360;0.500;1"
            calcMode="linear"
          />
        </circle>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.600;0.610;0.740;0.750;1"
          dur="8s"
          repeatCount="indefinite"
        />
        <circle r="6" fill="#22D3EE" filter="url(#dauf)">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M220 184 H180"
            keyPoints="0;0;1;1"
            keyTimes="0;0.600;0.740;1"
            calcMode="linear"
          />
        </circle>
        <circle r="3" fill="#fff">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M220 184 H180"
            keyPoints="0;0;1;1"
            keyTimes="0;0.600;0.740;1"
            calcMode="linear"
          />
        </circle>
      </g>
      <g opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;1;1;0"
          keyTimes="0;.5;.56;.78;.84"
          dur="8s"
          repeatCount="indefinite"
        />
        <rect x="232" y="124" width="132" height="22" rx="11" fill="#EEF0FF" stroke="#C7CCFF" />
        <path
          d="M244 135 l4 4 l7 -8"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="262" y="139" fontSize="10.5" fill="#4F46E5">
          Approved by a person
        </text>
      </g>
      <g className="bob">
        <rect x="120" y="224" width="160" height="20" rx="10" fill="#EEF0FF" stroke="#C7CCFF" />
        <circle cx="136" cy="234" r="3.4" fill="#22D3EE" />
        <text x="146" y="238" fontSize="10.5" fill="#4F46E5">
          Runs without manual work
        </text>
      </g>
    </svg>
  );
}
