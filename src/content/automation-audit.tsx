import type { CSSProperties } from "react";
import { Reveal, Up } from "@/components/motion";
import { AuditForm } from "@/components/forms/AuditForm";
import { AutomationAuditArt1 } from "@/content/art/AutomationAuditArt1";

export function AutomationAuditContent() {
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
                Free automation audit
              </Up>
              <Up className="h1" as="h1" k={1}>
                Find out what to automate first. Free.
              </Up>
              <Up className="lead" as="p" k={2}>
                A short review of how work moves through your business, and a written list of what to automate
                first. No commitment.
              </Up>
            </div>
            <Up className="hdark" k={3} style={{ padding: "6px" }}>
              <AutomationAuditArt1 />
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">The audit</span>
              <h2 className="h2">What you get</h2>
            </div>
          </Reveal>
          <Reveal className="mb">
            <div className="cell c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,80l-96,56L32,80l96-56Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M229.18,173a6,6,0,0,1-2.16,8.2l-96,56a6,6,0,0,1-6,0l-96-56a6,6,0,0,1,6-10.36l93,54.23,93-54.23A6,6,0,0,1,229.18,173ZM221,122.82l-93,54.23L35,122.82a6,6,0,0,0-6,10.36l96,56a6,6,0,0,0,6,0l96-56a6,6,0,0,0-6-10.36ZM26,80a6,6,0,0,1,3-5.18l96-56a6,6,0,0,1,6,0l96,56a6,6,0,0,1,0,10.36l-96,56a6,6,0,0,1-6,0l-96-56A6,6,0,0,1,26,80Zm17.91,0L128,129.05,212.09,80,128,31Z" />
                </g>
              </svg>
              <h3>A map of how your work moves today</h3>
            </div>
            <div className="cell c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
                </g>
              </svg>
              <h3>A short list of what to automate first</h3>
            </div>
            <div className="cell c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M208,88H152V32Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z" />
                </g>
              </svg>
              <h3>A plain-language recommendation</h3>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Three steps</span>
              <h2 className="h2">How it works</h2>
            </div>
          </Reveal>
          <Reveal className="tl" style={{ "--n": "3" } as CSSProperties}>
            <div className="st">
              <small>01</small>
              <h3 className="h3">Tell us your tools and routine work</h3>
            </div>
            <div className="st">
              <small>02</small>
              <h3 className="h3">We review how work moves</h3>
            </div>
            <div className="st">
              <small>03</small>
              <h3 className="h3">You receive the written audit</h3>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="mb">
            <div className="cell c8">
              <AuditForm />
            </div>
            <div className="cell dk c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" />
                </g>
              </svg>
              <span className="fig">No commitment</span>
              <h3 style={{ fontSize: "1.15rem" }}>Free to start</h3>
              <p>The audit is the first step. You decide what happens next.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
