import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { AboutArt1 } from "@/content/art/AboutArt1";

export function AboutContent() {
  return (
    <>
      <section className="hero c">
        <div className="hbg dk2" aria-hidden="true">
          <div className="sg">
            <i className="g1" />
            <i className="g2" />
            <i className="g3" />
            <i className="g4" />
            <i className="g5" />
          </div>
          <div className="gr" />
        </div>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Up className="eyebrow" as="span" k={0}>
                About
              </Up>
              <Up className="h1" as="h1" k={1}>
                We build software that makes businesses more capable, not more complicated.
              </Up>
              <Up className="lead" as="p" k={2}>
                Ansari Product Engineering is a product engineering company. We help startups and growing
                businesses build new products, modernize existing software and connect the tools they run on.
              </Up>
            </div>
            <Up className="hdark" k={3} style={{ padding: "6px" }}>
              <svg
                className="art"
                viewBox="0 0 320 200"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Illustration: worldwide reach"
              >
                <defs>
                  <linearGradient id="abhg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#6366F1" />
                    <stop offset="1" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
                <circle cx="160" cy="100" r="62" fill="none" stroke="rgba(255,255,255,.22)" />
                <ellipse cx="160" cy="100" rx="62" ry="22" fill="none" stroke="rgba(255,255,255,.14)" />
                <ellipse
                  className="spin"
                  cx="160"
                  cy="100"
                  rx="24"
                  ry="62"
                  fill="none"
                  stroke="rgba(255,255,255,.25)"
                />
                <circle
                  className="dflow"
                  cx="160"
                  cy="100"
                  r="86"
                  fill="none"
                  stroke="rgba(165,180,252,.35)"
                  strokeDasharray="3 7"
                />
                <circle className="nd" cx="118" cy="78" r="5" fill="#67E8F9" />
                <circle className="ping" cx="118" cy="78" r="5" fill="none" stroke="#67E8F9" />
                <circle
                  className="nd"
                  cx="196"
                  cy="70"
                  r="5"
                  fill="#A5B4FC"
                  style={{ animationDelay: "-1s" }}
                />
                <circle
                  className="ping"
                  cx="196"
                  cy="70"
                  r="5"
                  fill="none"
                  stroke="#A5B4FC"
                  style={{ animationDelay: "-1s" }}
                />
                <circle
                  className="nd"
                  cx="178"
                  cy="124"
                  r="5"
                  fill="#C4B5FD"
                  style={{ animationDelay: "-2s" }}
                />
                <path
                  className="dflow"
                  d="M118 78 Q160 40 196 70 M196 70 Q205 108 178 124"
                  fill="none"
                  stroke="url(#abhg)"
                  strokeWidth="1.4"
                />
              </svg>
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="cols3">
            <Link href="/services/product-engineering">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M221.86,47.24a14,14,0,0,0-13.11-13.1c-12.31-.73-43.77.39-69.88,26.5L133.52,66H74.35a13.9,13.9,0,0,0-9.89,4.1L30.11,104.44a14,14,0,0,0,7.94,23.76l39.13,5.46,45.16,45.16L127.8,218a14,14,0,0,0,23.76,7.92l34.35-34.35a13.91,13.91,0,0,0,4.1-9.89V122.48l5.35-5.35h0C221.46,91,222.59,59.56,221.86,47.24ZM38.11,115a2,2,0,0,1,.49-2L72.94,78.58A2,2,0,0,1,74.35,78h47.17L77.87,121.64l-38.14-5.32A1.93,1.93,0,0,1,38.11,115ZM178,181.65a2,2,0,0,1-.59,1.41L143.08,217.4a2,2,0,0,1-3.4-1.11l-5.32-38.16L178,134.48Zm8.87-73h0L128,167.51,88.49,128l58.87-58.88a78.47,78.47,0,0,1,60.69-23A2,2,0,0,1,209.88,48,78.47,78.47,0,0,1,186.88,108.64ZM100,190.31C95.68,199.84,81.13,222,40,222a6,6,0,0,1-6-6c0-41.13,22.16-55.68,31.69-60a6,6,0,1,1,5,10.92c-7,3.17-22.53,13.52-24.47,42.91,29.39-1.94,39.74-17.52,42.91-24.47a6,6,0,1,1,10.92,5Z" />
                </g>
              </svg>
              <h3>Build</h3>
              <p>New products, MVPs and features.</p>
              <span className="more">
                {"Learn more "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
            </Link>
            <Link href="/services/modernization">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z" />
                </g>
              </svg>
              <h3>Modernize</h3>
              <p>Faster, easier-to-change software.</p>
              <span className="more">
                {"Learn more "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
            </Link>
            <Link href="/services/automation-ai">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M185,127,127,185a24,24,0,0,1-33.94,0L71,162.91A24,24,0,0,1,71,129L129,71a24,24,0,0,1,33.94,0L185,93.09A24,24,0,0,1,185,127Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M236.24,19.76a6,6,0,0,0-8.48,0L173.94,73.57l-6.79-6.78a30,30,0,0,0-42.42,0L100,91.51l-7.76-7.75a6,6,0,0,0-8.48,8.48L91.51,100,66.79,124.73a30,30,0,0,0,0,42.42l6.78,6.79L19.76,227.76a6,6,0,1,0,8.48,8.48l53.82-53.81,6.79,6.78a30,30,0,0,0,42.42,0L156,164.49l7.76,7.75a6,6,0,0,0,8.48-8.48L164.49,156l24.72-24.73a30,30,0,0,0,0-42.42l-6.78-6.79,53.81-53.82A6,6,0,0,0,236.24,19.76Zm-113.45,161a18,18,0,0,1-25.46,0L75.27,158.67a18,18,0,0,1,0-25.46L100,108.49,147.51,156Zm57.94-57.94L156,147.51,108.49,100l24.72-24.73a18,18,0,0,1,25.46,0l22.06,22.06a18,18,0,0,1,0,25.46ZM90.43,34.23a6,6,0,0,1,11.14-4.46l8,20a6,6,0,1,1-11.14,4.46Zm-64,59.54a6,6,0,0,1,7.8-3.34l20,8a6,6,0,1,1-4.46,11.14l-20-8A6,6,0,0,1,26.43,93.77Zm203.14,68.46a6,6,0,0,1-7.8,3.34l-20-8a6,6,0,0,1,4.46-11.14l20,8A6,6,0,0,1,229.57,162.23Zm-64,59.54a6,6,0,1,1-11.14,4.46l-8-20a6,6,0,0,1,11.14-4.46Z" />
                </g>
              </svg>
              <h3>Integrate</h3>
              <p>Your tools, connected and automated.</p>
              <span className="more">
                {"Learn more "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <div className="split">
            <Reveal className="head">
              <span className="eyebrow">Principles</span>
              <h2 className="h2">What we believe</h2>
              <p className="lead">Four ideas that shape how we scope, build and hand over every project.</p>
            </Reveal>
            <Reveal>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M220.06,84a102.06,102.06,0,1,1-24.31-32.27l24-24a6,6,0,0,1,8.48,8.49l-96,96a6,6,0,1,1-8.48-8.49l29.39-29.4a42,42,0,1,0,16.78,31.24,6,6,0,1,1,12-.68A54,54,0,1,1,161.7,85.83l25.54-25.55a89.91,89.91,0,1,0,22,28.93A6,6,0,1,1,220.06,84Z" />
                  </g>
                </svg>
                <div>
                  <h3>Practical over flashy</h3>
                  <p>A real business result before any buzzword.</p>
                </div>
              </div>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z" />
                  </g>
                </svg>
                <div>
                  <h3>Clear over clever</h3>
                  <p>Scope, pricing and next steps that are easy to understand.</p>
                </div>
              </div>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z" />
                  </g>
                </svg>
                <div>
                  <h3>Evidence over claims</h3>
                  <p>We show the work and measure the results.</p>
                </div>
              </div>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z" />
                  </g>
                </svg>
                <div>
                  <h3>Built for the long term</h3>
                  <p>Maintainable code and a proper handover.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="dband">
        <div className="hbg" aria-hidden="true">
          <div className="mesh" />
          <div className="rib" />
          <div className="au a1" />
          <div className="au a2" />
          <div className="au a3" />
          <div className="gr" />
        </div>
        <div className="wrap">
          <div className="grid2">
            <Reveal>
              <span className="eyebrow">Where we work</span>
              <h2 className="h2">One team, working worldwide.</h2>
              <p className="lead">
                We work mainly with clients in the United States, the United Kingdom and Europe, with hours
                that overlap theirs.
              </p>
              <div className="reg">
                <span>United States</span>
                <span>United Kingdom</span>
                <span>Europe</span>
              </div>
            </Reveal>
            <Reveal>
              <AboutArt1 />
            </Reveal>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <Reveal className="head">
              <span className="eyebrow">Working together</span>
              <h2 className="h2">How we work with you</h2>
              <p className="lead">Simple, predictable and easy to plan around.</p>
            </Reveal>
            <Reveal>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M200,152l-40,40L96,176,40,136,72.68,70.63,128,56l55.32,14.63L183.6,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M252.51,108.8,227,57.75a14,14,0,0,0-18.78-6.27L182.66,64.26,129.53,50.2a6.1,6.1,0,0,0-3.06,0L73.34,64.26,47.79,51.48A14,14,0,0,0,29,57.75L3.49,108.8a14,14,0,0,0,6.26,18.78L36.9,141.16l55.61,39.72a6,6,0,0,0,2,.94l64,16A6.08,6.08,0,0,0,160,198a6,6,0,0,0,4.24-1.76l55.31-55.31,26.7-13.35a14,14,0,0,0,6.26-18.78Zm-53,35.16-35.8-28.68a6,6,0,0,0-8,.45c-18.65,18.79-39.5,16.42-52.79,7.92a2,2,0,0,1-.94-1.5,1.9,1.9,0,0,1,.51-1.55L146.43,78h33.86l28.41,56.82ZM14.11,115.69a2,2,0,0,1,.11-1.52L39.74,63.11a2,2,0,0,1,1.8-1.1,2,2,0,0,1,.89.21l22.21,11.1L37.32,128l-22.21-11.1A2,2,0,0,1,14.11,115.69Zm144.05,69.67-59.6-14.9L47.66,134.1,76.84,75.75,128,62.21l14.8,3.92a5.92,5.92,0,0,0-3,1.57L94.1,112.05a14,14,0,0,0,2.39,21.72c20.22,12.92,44.75,10.49,63.8-5.89L191,152.5Zm83.73-69.67a2,2,0,0,1-1,1.16L218.68,128,191.36,73.32l22.21-11.1a2,2,0,0,1,1.53-.11,2,2,0,0,1,1.16,1l25.52,51.06A2,2,0,0,1,241.89,115.69Zm-112,101.76a6,6,0,0,1-7.27,4.37L80.89,211.39a5.88,5.88,0,0,1-2-.94L52.52,191.64a6,6,0,1,1,7-9.77L84.91,200l40.61,10.15A6,6,0,0,1,129.88,217.45Z" />
                  </g>
                </svg>
                <div>
                  <h3>One point of contact</h3>
                  <p>The same person from first call to handover.</p>
                </div>
              </div>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M208,88H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V96A8,8,0,0,0,208,88Zm-80,72a20,20,0,1,1,20-20A20,20,0,0,1,128,160Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-82-94a26,26,0,0,0-6,51.29V184a6,6,0,0,0,12,0V165.29A26,26,0,0,0,128,114Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,128,154Z" />
                  </g>
                </svg>
                <div>
                  <h3>You own all code and documentation</h3>
                  <p>Code, documentation and accounts are handed over to you.</p>
                </div>
              </div>
              <div className="lr">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M213.09,172.48a96,96,0,0,1-80.41,51.41l3.17-16.44a8,8,0,0,0-2-6.95l-19.74-20.33a8,8,0,0,1-1.44-8.69l13.7-30.74a8,8,0,0,1,8.38-4.67l22.82,3.08a8.11,8.11,0,0,1,3.12,1.11ZM116.71,95,129,88.24a7.46,7.46,0,0,0,1.5-1.07l26.91-24.33A8,8,0,0,0,159,53l-10.5-18.81A96.62,96.62,0,0,0,128,32,95.61,95.61,0,0,0,67.78,53.23L56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l2.69.58L89.2,100a8,8,0,0,1,6.94-4h16.71A7.9,7.9,0,0,0,116.71,95Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.55,89.55,0,0,1-7.46,35.86l-46.69-28.71a13.94,13.94,0,0,0-5.46-2l-22.82-3.07A14.06,14.06,0,0,0,121.06,138h-9.92a2,2,0,0,1-1.8-1.13l-3.8-7.86a13.94,13.94,0,0,0-9.66-7.59l-10.71-2.3L94.4,103a2,2,0,0,1,1.74-1h16.71a13.9,13.9,0,0,0,6.76-1.75l12.25-6.75a14.73,14.73,0,0,0,2.62-1.88l26.91-24.33a13.93,13.93,0,0,0,2.83-17.21L161,44.25A90.16,90.16,0,0,1,218,128ZM144.6,39.54l9.15,16.39a2,2,0,0,1-.41,2.46L126.43,82.72a1.84,1.84,0,0,1-.37.27l-12.25,6.76a2,2,0,0,1-1,.25H96.14A14,14,0,0,0,84,97L73.18,115.91a2,2,0,0,1-.19-.35L61.5,84.89a2,2,0,0,1,0-1.48L72.68,57.06A89.9,89.9,0,0,1,144.6,39.54ZM38,128A89.52,89.52,0,0,1,49.38,84.23a13.85,13.85,0,0,0,.89,4.87l11.49,30.67a13.94,13.94,0,0,0,10.16,8.78l21.44,4.6a2,2,0,0,1,1.38,1.09l3.8,7.86a14.07,14.07,0,0,0,12.6,7.9h4.56l-8.49,19a14,14,0,0,0,2.51,15.2l.1.11,19.68,20.26a2,2,0,0,1,.46,1.7L127.7,218A90.1,90.1,0,0,1,38,128Zm102.08,89.19,1.67-8.6a14.07,14.07,0,0,0-3.47-12.16l-.1-.11L118.5,176.06a2,2,0,0,1-.33-2.14l13.7-30.73A2,2,0,0,1,134,142l22.82,3.08a2,2,0,0,1,.78.27L205,174.55A90.18,90.18,0,0,1,140.08,217.19Z" />
                  </g>
                </svg>
                <div>
                  <h3>Remote-first</h3>
                  <p>Hours that overlap US, UK and European teams.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="ctab">
        <div className="hbg" aria-hidden="true">
          <div className="mesh" />
          <div className="rib" />
          <div className="au a1" />
          <div className="au a2" />
          <div className="au a3" />
          <div className="gr" />
        </div>
        <Reveal className="wrap">
          <h2 className="h2">Have a project in mind?</h2>
          <p className="lead">Tell us what you need. You get a reply within one business day.</p>
          <div className="row">
            <Link className="btn btn-w" href="/contact">
              {"Discuss your project "}
              <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
              </svg>
            </Link>
            <Link className="btn btn-d" href="/contact#book">
              Book a 30-minute call
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
