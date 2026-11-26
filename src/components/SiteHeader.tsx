"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowIcon, LogoMark } from "@/components/brand";
import { EASE } from "@/components/motion";
import { SERVICE_BY_SLUG, type ServiceSlug } from "@/data/services";

const TOP_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
] as const;

const MEGA_COLUMNS: { title: string; services: ServiceSlug[] }[] = [
  { title: "Build", services: ["product-engineering", "modernization"] },
  { title: "Connect", services: ["dashboards-portals", "automation-ai"] },
  { title: "Run", services: ["maintenance-retainer"] },
];

const GET_STARTED = [
  { href: "/contact", title: "Discuss your project", text: "Tell us what you need" },
  { href: "/automation-audit", title: "Free automation audit", text: "Find what to automate first" },
  { href: "/process", title: "How we work", text: "Four clear steps" },
] as const;

const MOBILE_LINKS = [
  { href: "/services", label: "Services" },
  ...TOP_LINKS,
  { href: "/partners", label: "Partners" },
  { href: "/automation-audit", label: "Free audit" },
] as const;

const isCurrent = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const [stuck, setStuck] = useState(false);

  // The header stays pinned; once the page scrolls it gains a dark glass backdrop and slims down.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setStuck(y > 24));

  // Close the mobile menu when the route changes (state adjusted during render, no effect needed).
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={stuck ? "hd stuck" : "hd"}>
      <div className="in">
        <Link className="logo" href="/" aria-label="Ansari Product Engineering home">
          <LogoMark variant="light" className="lgl" />
          <LogoMark variant="dark" className="lgd" />
          <span>
            Ansari <b>Product Engineering</b>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="links">
            <li className="dd">
              <Link href="/services" className={isCurrent(pathname, "/services") ? "on" : undefined}>
                Services
                <svg
                  className="chev"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 4.5 6 8l3.5-3.5" />
                </svg>
              </Link>
              <div className="mega">
                <div className="mg">
                  {MEGA_COLUMNS.map((column) => (
                    <div className="col" key={column.title}>
                      <h5>{column.title}</h5>
                      {column.services.map((slug) => {
                        const service = SERVICE_BY_SLUG[slug];
                        return (
                          <Link href={service.href} key={slug}>
                            <b>{service.name}</b>
                            <small>{service.summary}</small>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                  <div className="col">
                    <h5>Get started</h5>
                    {GET_STARTED.map((item) => (
                      <Link href={item.href} key={item.href}>
                        <b>{item.title}</b>
                        <small>{item.text}</small>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mgf">
                  <Link className="all" href="/services">
                    See all services <ArrowIcon />
                  </Link>
                  <Link className="pr" href="/automation-audit">
                    <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                      <g fill="#22D3EE" fillOpacity=".42">
                        <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" />
                      </g>
                      <g fill="#A5B4FC">
                        <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
                      </g>
                    </svg>
                    <span>
                      <b>Free automation audit</b>
                      <small>Find out what your team could stop doing by hand.</small>
                    </span>
                    <em>Get your audit &rsaquo;</em>
                  </Link>
                </div>
              </div>
            </li>
            {TOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={isCurrent(pathname, link.href) ? "on" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="act">
          <Link className="btn btn-o" href="/automation-audit">
            Free audit
          </Link>
          <Link className="btn btn-p" href="/contact">
            Discuss your project <ArrowIcon />
          </Link>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              setOpenedAt(pathname);
              setOpen((value) => !value);
            }}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mnav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <ul>
              {MOBILE_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.05 + index * 0.05 }}
                >
                  <Link href={link.href} className={isCurrent(pathname, link.href) ? "on" : undefined}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.4 }}
            >
              <Link className="btn btn-p" href="/contact">
                Discuss your project <ArrowIcon />
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
