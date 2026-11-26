import { ProjectCards } from "@/components/work/ProjectCard";
import { FaqList } from "@/components/FaqList";
import { FAQS } from "@/data/faqs";
import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { ProductEngineeringArt1 } from "@/content/art/ProductEngineeringArt1";
import { ProductEngineeringArt2 } from "@/content/art/ProductEngineeringArt2";

export function ProductEngineeringContent() {
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
                Product Engineering
              </Up>
              <Up className="h1" as="h1" k={1}>
                Product engineering for startups and growing businesses.
              </Up>
              <Up className="lead" as="p" k={2}>
                Web products, MVPs and new features, with a written scope, weekly progress and a clean
                handover.
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
              <ProductEngineeringArt1 />
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
              <h3>An idea but no team to build it</h3>
            </div>
            <div className="cell prb c7">
              <span className="big">02</span>
              <h3>A roadmap stalled waiting for developers</h3>
            </div>
            <div className="cell prb c7">
              <span className="big">03</span>
              <h3>Past projects that ran over time and budget</h3>
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
              <ProductEngineeringArt2 />
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
              <h3>MVPs to test your idea with real users</h3>
              <span className="n">01</span>
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
              <h3>New features for an existing product</h3>
              <span className="n">02</span>
            </div>
            <div className="cell dr c7">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z" />
                </g>
              </svg>
              <h3>Web apps that work on every device</h3>
              <span className="n">03</span>
            </div>
            <div className="cell dr c7">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z" />
                </g>
              </svg>
              <h3>Integrations with payments, CRMs and everyday tools</h3>
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
              <h3>Agree the scope in writing</h3>
              <i className="bar" />
            </div>
            <div className="cell stc c4">
              <span className="big">02</span>
              <h3>Build in weekly steps you can review</h3>
              <i className="bar" />
            </div>
            <div className="cell stc c4">
              <span className="big">03</span>
              <h3>Launch and hand over</h3>
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
          <ProjectCards names={["Verdira", "Vapestore"]} />
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
              <FaqList items={FAQS["product-engineering"]} />
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
