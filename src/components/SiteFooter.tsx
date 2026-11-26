import Link from "next/link";
import { LogoMark } from "@/components/brand";
import { SERVICES } from "@/data/services";
import { COPYRIGHT_YEAR, SERVICE_AREA, SITE_TAGLINE, SLOGAN } from "@/lib/site";

const COMPANY_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/insights", label: "Insights" },
] as const;

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="fg">
          <div>
            <Link className="logo" href="/" aria-label="Ansari Product Engineering home">
              <LogoMark variant="dark" />
              <span>
                Ansari <b>Product Engineering</b>
              </span>
            </Link>
            <p className="sm">{SITE_TAGLINE}</p>
            <p className="sm" style={{ marginTop: 6 }}>
              {SERVICE_AREA}
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get started</h4>
            <ul>
              <li>
                <Link href="/contact">Discuss your project</Link>
              </li>
              <li>
                <Link href="/automation-audit">Automation audit</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>
            © {COPYRIGHT_YEAR} Ansari Product Engineering. {SLOGAN}
          </span>
          <span>
            <Link href="/terms#privacy">Privacy</Link> &nbsp;·&nbsp; <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
