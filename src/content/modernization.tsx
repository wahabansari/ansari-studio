import { ProjectCards } from "@/components/work/ProjectCard";
import { FaqList } from "@/components/FaqList";
import { FAQS } from "@/data/faqs";
import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { ModernizationArt1 } from "@/content/art/ModernizationArt1";
import { ModernizationArt2 } from "@/content/art/ModernizationArt2";

export function ModernizationContent() {
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
                {"Website & Web App Modernization"}
              </Up>
              <Up className="h1" as="h1" k={1}>
                Make your slow, ageing website faster and easier to change.
              </Up>
              <Up className="lead" as="p" k={2}>
                We measure first, then improve in small, safe steps while your site stays live.
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
              <ModernizationArt1 />
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="mb">
            <div className="cell dk c5 r3 pin">
              <span className="fig">Sound familiar?</span>
              <h3>Problems we solve</h3>
              <p>If one of these sounds like you, we should talk.</p>
              <Link className="btn btn-w" href="/contact">
                {"Discuss your project "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </Link>
            </div>
            <div className="cell prb c7">
              <span className="big">01</span>
              <h3>Slow pages customers notice</h3>
            </div>
            <div className="cell prb c7">
              <span className="big">02</span>
              <h3>Small changes take weeks and break other things</h3>
            </div>
            <div className="cell prb c7">
              <span className="big">03</span>
              <h3>Hard to find developers for the old system</h3>
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
            <div className="cell c5 r4 dart">
              <ModernizationArt2 />
            </div>
            <div className="cell dr c7">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M208,88H152V32Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z" />
                </g>
              </svg>
              <h3>A speed and code review with a written plan</h3>
              <span className="n">01</span>
            </div>
            <div className="cell dr c7">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
                </g>
              </svg>
              <h3>Measurable performance fixes</h3>
              <span className="n">02</span>
            </div>
            <div className="cell dr c7">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z" />
                </g>
              </svg>
              <h3>A step-by-step move to a modern platform</h3>
              <span className="n">03</span>
            </div>
            <div className="cell dr c7">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,80l-96,56L32,80l96-56Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M229.18,173a6,6,0,0,1-2.16,8.2l-96,56a6,6,0,0,1-6,0l-96-56a6,6,0,0,1,6-10.36l93,54.23,93-54.23A6,6,0,0,1,229.18,173ZM221,122.82l-93,54.23L35,122.82a6,6,0,0,0-6,10.36l96,56a6,6,0,0,0,6,0l96-56a6,6,0,0,0-6-10.36ZM26,80a6,6,0,0,1,3-5.18l96-56a6,6,0,0,1,6,0l96,56a6,6,0,0,1,0,10.36l-96,56a6,6,0,0,1-6,0l-96-56A6,6,0,0,1,26,80Zm17.91,0L128,129.05,212.09,80,128,31Z" />
                </g>
              </svg>
              <h3>Documentation for your team</h3>
              <span className="n">04</span>
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
          <Reveal className="mb">
            <div className="cell stc c4">
              <span className="big">01</span>
              <h3>Measure and plan</h3>
              <i className="bar" />
            </div>
            <div className="cell stc c4">
              <span className="big">02</span>
              <h3>Fix and migrate in small releases</h3>
              <i className="bar" />
            </div>
            <div className="cell stc c4">
              <span className="big">03</span>
              <h3>Report before and after results</h3>
              <i className="bar" />
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
          <ProjectCards names={["Sunhub", "AussieMotor"]} />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="mb">
            <div className="cell dk c4 pin">
              <span className="fig">FAQ</span>
              <h3>Questions we hear often</h3>
              <p>Anything else? Ask us directly and you get a reply within one business day.</p>
              <Link className="btn btn-w" href="/contact">
                {"Ask a question "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </Link>
            </div>
            <div className="cell c8 fqc">
              <FaqList items={FAQS["modernization"]} />
            </div>
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
