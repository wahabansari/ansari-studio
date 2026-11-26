import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal, RevealLink, Up } from "@/components/motion";
import { AutomationArt1 } from "@/content/art/AutomationArt1";

export function AutomationContent() {
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
                {"AI Integrations & Workflow Automation"}
              </Up>
              <Up className="h1" as="h1" k={1}>
                AI integrations and workflow automation that give your team hours back.
              </Up>
              <Up className="lead" as="p" k={2}>
                We connect your forms, CRM, inbox and other tools so routine work happens on its own — and add
                AI only to the steps where it clearly helps, with a person reviewing anything important.
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
              <AutomationArt1 />
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
              <h3>Details are copied between tools by hand</h3>
            </div>
            <div className="cell c4">
              <span className="num">02</span>
              <h3>Enquiries wait in an inbox</h3>
            </div>
            <div className="cell c4">
              <span className="num">03</span>
              <h3>Someone builds the same report every week</h3>
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
                  <path d="M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z" />
                </g>
              </svg>
              <h3>Lead capture and CRM updates</h3>
            </div>
            <div className="cell c6">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
                </g>
              </svg>
              <h3>Automatic replies and follow-ups</h3>
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
              <h3>Scheduled reports</h3>
            </div>
            <div className="cell c6">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z" />
                </g>
              </svg>
              <h3>AI-assisted sorting and drafting</h3>
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
              <h3 className="h3">Map how the work moves today</h3>
            </div>
            <div className="st">
              <small>02</small>
              <h3 className="h3">Build and test the workflow</h3>
            </div>
            <div className="st">
              <small>03</small>
              <h3 className="h3">Hand over with documentation and optional upkeep</h3>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <RevealLink className="mb" href="/automation-audit" style={{ display: "block" }}>
            <div
              className="cell dk c12"
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span className="fig">Free to start</span>
                <h3 style={{ fontSize: "1.15rem" }}>Free automation audit</h3>
                <p>See where automation could save your team time before you commit to anything.</p>
              </div>
              <span className="btn btn-w">
                {"Get your audit "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </span>
            </div>
          </RevealLink>
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
              <summary>What can you automate?</summary>
              <p>
                Most repetitive work that follows clear rules: capturing leads, updating your CRM, sending
                replies and follow-ups, and building regular reports.
              </p>
            </details>
            <details>
              <summary>Do we need to change our tools?</summary>
              <p>No. We connect the tools you already use.</p>
            </details>
            <details>
              <summary>Who owns the workflows and data?</summary>
              <p>You do. Workflows, documentation and data stay with you.</p>
            </details>
            <details>
              <summary>Is our data safe?</summary>
              <p>
                We only connect what is needed, agree access with you first, and keep a person in the loop for
                anything important.
              </p>
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
