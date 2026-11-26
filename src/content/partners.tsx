import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal, Up } from "@/components/motion";
import { PartnersArt1 } from "@/content/art/PartnersArt1";

export function PartnersContent() {
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
                Partners
              </Up>
              <Up className="h1" as="h1" k={1}>
                White-label development for agencies and studios.
              </Up>
              <Up className="lead" as="p" k={2}>
                You bring the client and the brief. We build it, under your brand.
              </Up>
            </div>
            <Up className="hdark" k={3} style={{ padding: "6px" }}>
              <PartnersArt1 />
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Fit</span>
              <h2 className="h2">When agencies bring us in</h2>
            </div>
          </Reveal>
          <Reveal className="mb">
            <div className="cell c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z" />
                </g>
              </svg>
              <h3>Your team is at capacity</h3>
              <p>A client project needs senior engineers and you cannot hire in time.</p>
            </div>
            <div className="cell c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M224,80l-96,56L32,80l96-56Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M229.18,173a6,6,0,0,1-2.16,8.2l-96,56a6,6,0,0,1-6,0l-96-56a6,6,0,0,1,6-10.36l93,54.23,93-54.23A6,6,0,0,1,229.18,173ZM221,122.82l-93,54.23L35,122.82a6,6,0,0,0-6,10.36l96,56a6,6,0,0,0,6,0l96-56a6,6,0,0,0-6-10.36ZM26,80a6,6,0,0,1,3-5.18l96-56a6,6,0,0,1,6,0l96,56a6,6,0,0,1,0,10.36l-96,56a6,6,0,0,1-6,0l-96-56A6,6,0,0,1,26,80Zm17.91,0L128,129.05,212.09,80,128,31Z" />
                </g>
              </svg>
              <h3>A client needs skills you do not have</h3>
              <p>Work outside your usual skills, delivered under your brand.</p>
            </div>
            <div className="cell c4">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z" />
                </g>
              </svg>
              <h3>You want a steady, ongoing development team</h3>
              <p>A reliable team for ongoing development.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec t">
        <div className="wrap">
          <Reveal className="head">
            <div>
              <span className="eyebrow">Partnership</span>
              <h2 className="h2">How white-label works</h2>
            </div>
          </Reveal>
          <Reveal className="tl" style={{ "--n": "4" } as CSSProperties}>
            <div className="st">
              <small>01</small>
              <h3 className="h3">Share the brief</h3>
            </div>
            <div className="st">
              <small>02</small>
              <h3 className="h3">Get a written scope</h3>
            </div>
            <div className="st">
              <small>03</small>
              <h3 className="h3">We build under your brand</h3>
            </div>
            <div className="st">
              <small>04</small>
              <h3 className="h3">Hand over to you</h3>
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
          <h2 className="h2">Want to work together?</h2>
          <p className="lead">Tell us about your agency and the kind of projects you take on.</p>
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
