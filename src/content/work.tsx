import { countByCategory } from "@/data/projects";
import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkArt1 } from "@/content/art/WorkArt1";

export function WorkContent() {
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
                Work
              </Up>
              <Up className="h1" as="h1" k={1}>
                Selected work.
              </Up>
              <Up className="lead" as="p" k={2}>
                Marketplaces, web apps, stores and websites we have built and handed over.
              </Up>
            </div>
            <Up className="hdark" k={3} style={{ padding: "6px" }}>
              <WorkArt1 />
            </Up>
          </div>
        </div>
      </section>
      <WorkGrid />
      <section className="sec t">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Categories</span>
              <h2 className="h2">Browse by type</h2>
            </div>
          </Reveal>
          <Reveal className="mb">
            <div className="cell cat c3">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z" />
                </g>
              </svg>
              <div className="big">{countByCategory("Web apps")}</div>
              <h3>Web apps</h3>
              <p>Applications built end to end.</p>
            </div>
            <div className="cell cat c3">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,64l-12.16,66.86A16,16,0,0,1,196.1,144H70.55L56,64Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z" />
                </g>
              </svg>
              <div className="big">{countByCategory("Marketplaces & stores")}</div>
              <h3>{"Marketplaces & stores"}</h3>
              <p>Buying and selling online.</p>
            </div>
            <div className="cell cat c3">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V90H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V102H218v98A2,2,0,0,1,216,202Z" />
                </g>
              </svg>
              <div className="big">{countByCategory("Websites")}</div>
              <h3>Websites</h3>
              <p>Clear, easy-to-update sites.</p>
            </div>
            <div className="cell cat c3">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M128,48,68.32,70.38a8,8,0,0,0-5.08,6.17L40,216l139.45-23.24a8,8,0,0,0,6.17-5.08L208,128Zm-4,104a20,20,0,1,1,20-20A20,20,0,0,1,124,152Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M246,92.68a13.94,13.94,0,0,0-4.1-9.9L173.21,14.1a14,14,0,0,0-19.8,0L124.68,42.83,66.22,64.76a14,14,0,0,0-8.9,10.8L34.08,215A6,6,0,0,0,40,222a6.61,6.61,0,0,0,1-.08l139.44-23.24a14,14,0,0,0,10.81-8.9l21.92-58.46,28.74-28.74A13.92,13.92,0,0,0,246,92.68Zm-66,92.89a2,2,0,0,1-1.54,1.27L57.49,207l52.87-52.88a26,26,0,1,0-8.48-8.48L49,198.53l20.17-121A2,2,0,0,1,70.43,76l56.06-21L201,129.51ZM110,132a14,14,0,1,1,14,14A14,14,0,0,1,110,132ZM233.41,94.1,208,119.51,136.48,48,161.9,22.58a2,2,0,0,1,2.83,0l68.68,68.69a2,2,0,0,1,0,2.83Z" />
                </g>
              </svg>
              <div className="big">{countByCategory("Concept designs")}</div>
              <h3>Concept designs</h3>
              <p>Our own design studies, not client work.</p>
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
