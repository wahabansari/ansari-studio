import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { MaintenanceArt1 } from "@/content/art/MaintenanceArt1";

export function MaintenanceContent() {
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
                {"Maintenance & Ongoing Development"}
              </Up>
              <Up className="h1" as="h1" k={1}>
                Ongoing development and maintenance from a team that knows your code.
              </Up>
              <Up className="lead" as="p" k={2}>
                Updates, fixes, monitoring and small improvements every month, with priorities you set and a
                clear monthly report.
              </Up>
              <Up className="row" k={3}>
                <Link className="btn btn-p" href="/contact">
                  {"Discuss your project "}
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </Link>
              </Up>
            </div>
            <Up className="hwin" k={3} style={{ padding: "0" }}>
              <MaintenanceArt1 />
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Sound familiar?</span>
              <h2 className="h2">Problems we solve</h2>
            </div>
          </Reveal>
          <Reveal className="mb">
            <div className="cell c4">
              <span className="num">01</span>
              <h3>You have a live product but no in-house developer</h3>
            </div>
            <div className="cell c4">
              <span className="num">02</span>
              <h3>Every new freelancer has to learn your code again</h3>
            </div>
            <div className="cell c4">
              <span className="num">03</span>
              <h3>Updates and security patches keep slipping</h3>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Deliverables</span>
              <h2 className="h2">What we deliver</h2>
            </div>
          </Reveal>
          <Reveal className="mb">
            <div className="cell c6">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z" />
                </g>
              </svg>
              <h3>Updates and security</h3>
            </div>
            <div className="cell c6">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z" />
                </g>
              </svg>
              <h3>Monitoring</h3>
            </div>
            <div className="cell c6">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" />
                </g>
              </svg>
              <h3>Bug fixes and small features</h3>
            </div>
            <div className="cell c6">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M208,88H152V32Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z" />
                </g>
              </svg>
              <h3>A monthly report</h3>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Process</span>
              <h2 className="h2">How it works</h2>
            </div>
          </Reveal>
          <Reveal className="tl" style={{ "--n": "3" } as CSSProperties}>
            <div className="st">
              <small>01</small>
              <h3 className="h3">{"Agree the month's priorities"}</h3>
            </div>
            <div className="st">
              <small>02</small>
              <h3 className="h3">Work through them, urgent issues first</h3>
            </div>
            <div className="st">
              <small>03</small>
              <h3 className="h3">Report what shipped</h3>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Work</span>
              <h2 className="h2">Proof</h2>
              <p className="lead">Real projects delivered for clients.</p>
            </div>
          </Reveal>
          <Reveal className="mb">
            <a className="cell wk c6" href="https://sunhub.com" target="_blank" rel="noopener">
              <div className="top">
                <span className="fig">{" Marketplaces & stores"}</span>
                <span className="go">
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </div>
              <h3>Sunhub</h3>
              <p>Solar equipment marketplace for business buyers and sellers.</p>
              <div className="meta">
                <span className="pill">{"Website & Web App Modernization"}</span>
              </div>
            </a>
            <a className="cell wk c6" href="#">
              <div className="top">
                <span className="fig">{" Design"}</span>
                <span className="go">
                  <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                  </svg>
                </span>
              </div>
              <h3>Talha Estate</h3>
              <p>Concept: property listing website.</p>
              <div className="meta">
                <span className="pill">{"Maintenance & Ongoing Development"}</span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="h2">Frequently asked questions</h2>
            </div>
          </Reveal>
          <Reveal className="faq">
            <details>
              <summary>What is included?</summary>
              <p>
                Updates, security patches, monitoring, bug fixes and small features, with a monthly report on
                what shipped.
              </p>
            </details>
            <details>
              <summary>How are hours and pricing agreed?</summary>
              <p>Flexibly, per client, and in writing before we start.</p>
            </details>
            <details>
              <summary>How fast do you respond to urgent issues?</summary>
              <p>
                {
                  "Urgent issues come first in the month's plan, and every message gets a reply within one business day."
                }
              </p>
            </details>
            <details>
              <summary>Can we stop at any time?</summary>
              <p>Yes. There is no long lock-in, and you keep the code, documentation and accounts.</p>
            </details>
          </Reveal>
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
          <h2 className="h2">Have a product to build or improve?</h2>
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
