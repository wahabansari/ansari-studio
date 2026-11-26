import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { ServicesArt1 } from "@/content/art/ServicesArt1";
import { ServicesArt2 } from "@/content/art/ServicesArt2";
import { ServicesArt3 } from "@/content/art/ServicesArt3";
import { ServicesArt4 } from "@/content/art/ServicesArt4";
import { ServicesArt5 } from "@/content/art/ServicesArt5";
import { ServicesArt6 } from "@/content/art/ServicesArt6";
import { ServicesArt7 } from "@/content/art/ServicesArt7";

export function ServicesContent() {
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
                Services
              </Up>
              <Up className="h1" as="h1" k={1}>
                Services that build, modernize and integrate your software.
              </Up>
              <Up className="lead" as="p" k={2}>
                Five services, each matched to a clear business need. Not sure which you need? We will tell
                you where to start.
              </Up>
            </div>
            <Up className="hdark" k={3} style={{ padding: "6px" }}>
              <ServicesArt1 />
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="mb">
            <Link className="cell c4" href="/services/product-engineering">
              <span className="fig">01</span>
              <h3>Product Engineering</h3>
              <p>Your product ships, and keeps shipping.</p>
              <span className="more">
                {"View service "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
              <div className="bleed">
                <ServicesArt2 />
              </div>
            </Link>
            <Link className="cell c4" href="/services/modernization">
              <span className="fig">02</span>
              <h3>{"Website & Web App Modernization"}</h3>
              <p>Old software stops holding you back.</p>
              <span className="more">
                {"View service "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
              <div className="bleed">
                <ServicesArt3 />
              </div>
            </Link>
            <Link className="cell c4" href="/services/dashboards-portals">
              <span className="fig">03</span>
              <h3>{"Dashboards & Client Portals"}</h3>
              <p>Everyone works from the same numbers.</p>
              <span className="more">
                {"View service "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
              <div className="bleed">
                <ServicesArt4 />
              </div>
            </Link>
            <Link className="cell c6 row" href="/services/maintenance-retainer">
              <div className="tx">
                <span className="fig">04</span>
                <h3>{"Maintenance & Ongoing Development"}</h3>
                <p>Your software stays healthy while you run the business.</p>
                <span className="more">
                  {"View service "}
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </div>
              <ServicesArt5 />
            </Link>
            <Link className="cell c6 row dk" href="/services/automation-ai">
              <div className="tx">
                <span className="fig">05</span>
                <h3>{"AI Integrations & Workflow Automation"}</h3>
                <p>Your team stops doing repetitive work.</p>
                <span className="more">
                  {"View service "}
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </div>
              <ServicesArt6 />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <Reveal className="mb">
            <div className="cell dk c5">
              <span className="fig">Find your fit</span>
              <h3 style={{ fontSize: "1.25rem", letterSpacing: "-.03em" }}>Which service do I need?</h3>
              <p>Pick the sentence that sounds most like your week. We will point you to where to start.</p>
              <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                <ServicesArt7 />
              </div>
            </div>
            <div className="cell pkl c7">
              <Link href="/services/product-engineering">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M221.86,47.24a14,14,0,0,0-13.11-13.1c-12.31-.73-43.77.39-69.88,26.5L133.52,66H74.35a13.9,13.9,0,0,0-9.89,4.1L30.11,104.44a14,14,0,0,0,7.94,23.76l39.13,5.46,45.16,45.16L127.8,218a14,14,0,0,0,23.76,7.92l34.35-34.35a13.91,13.91,0,0,0,4.1-9.89V122.48l5.35-5.35h0C221.46,91,222.59,59.56,221.86,47.24ZM38.11,115a2,2,0,0,1,.49-2L72.94,78.58A2,2,0,0,1,74.35,78h47.17L77.87,121.64l-38.14-5.32A1.93,1.93,0,0,1,38.11,115ZM178,181.65a2,2,0,0,1-.59,1.41L143.08,217.4a2,2,0,0,1-3.4-1.11l-5.32-38.16L178,134.48Zm8.87-73h0L128,167.51,88.49,128l58.87-58.88a78.47,78.47,0,0,1,60.69-23A2,2,0,0,1,209.88,48,78.47,78.47,0,0,1,186.88,108.64ZM100,190.31C95.68,199.84,81.13,222,40,222a6,6,0,0,1-6-6c0-41.13,22.16-55.68,31.69-60a6,6,0,1,1,5,10.92c-7,3.17-22.53,13.52-24.47,42.91,29.39-1.94,39.74-17.52,42.91-24.47a6,6,0,1,1,10.92,5Z" />
                  </g>
                </svg>
                <div>
                  <small>Need something new built</small>
                  <b>Product Engineering</b>
                </div>
                <span className="go2">
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
                <div>
                  <small>Existing software is slow or hard to change</small>
                  <b>{"Website & Web App Modernization"}</b>
                </div>
                <span className="go2">
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/dashboards-portals">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z" />
                  </g>
                </svg>
                <div>
                  <small>Data is spread across spreadsheets and emails</small>
                  <b>{"Dashboards & Client Portals"}</b>
                </div>
                <span className="go2">
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/maintenance-retainer">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z" />
                  </g>
                </svg>
                <div>
                  <small>Live product with no in-house developer</small>
                  <b>{"Maintenance & Ongoing Development"}</b>
                </div>
                <span className="go2">
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/automation-ai">
                <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                  <g fill="#22D3EE" fillOpacity=".42">
                    <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" />
                  </g>
                  <g fill="#4F46E5">
                    <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
                  </g>
                </svg>
                <div>
                  <small>Team loses hours to copy-paste and manual follow-ups</small>
                  <b>{"AI Integrations & Workflow Automation"}</b>
                </div>
                <span className="go2">
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </Link>
            </div>
          </Reveal>
          <p className="sm" style={{ marginTop: "14px" }}>
            {"Not sure about automation yet? "}
            <Link href="/automation-audit" style={{ color: "#4338CA", fontWeight: "600" }}>
              Start with the free automation audit
            </Link>
            .
          </p>
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
          <h2 className="h2">Not sure where to start?</h2>
          <p className="lead">Discuss your project and we will point you to the right service.</p>
          <div className="row">
            <Link className="btn btn-w" href="/contact">
              {"Discuss your project "}
              <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
