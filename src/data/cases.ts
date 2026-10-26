/**
 * Case studies — selected project experience.
 * Every line describes work that was actually done. No invented metrics, no claimed
 * results we cannot stand behind: where a figure cannot be verified, it is not printed.
 * No screenshot file exists for Vapestore, so its thumb has no image and renders the
 * branded fallback panel. Technology names are deliberately left out of every write-up:
 * each one describes what changed for the client, not what it was built with.
 */
/** Order of the Work grid; "Next project" on a case study follows it. */
export const CASE_ORDER = [
  "sunhub",
  "verdira",
  "aussiemotor",
  "vapestore",
  "silcolabs",
  "digestivecare",
  "cennetsol",
  "talhaestate",
  "selecthealth",
] as const;

export type CaseSlug = (typeof CASE_ORDER)[number];

export interface CaseStudy {
  name: string;
  /** Caption of the small project card used on Home and the service pages. */
  card: { label: string; title: string };
  eyebrow: string;
  client: string;
  service: string;
  serviceHref: string;
  role: string;
  status: string;
  link: string;
  linkLabel: string;
  titleA: string;
  titleB: string;
  lead: string;
  short: string;
  results: [value: string, label: string][];
  challenge: string;
  approach: string[];
  outcome: string;
  thumb: {
    /** Screenshot file, when one exists. Projects without one render the branded fallback. */
    image?: string;
    /** Backdrop behind the screenshot (shows while the image loads). */
    background: string;
    alt: string;
  };
}

export const CASES: Record<CaseSlug, CaseStudy> = {
  sunhub: {
    name: "Sunhub",
    card: { label: "Sunhub · Solar marketplace, US", title: "Faster marketplace, without a rewrite" },
    eyebrow: "Performance & modernization · Solar marketplace",
    client: "Solar equipment marketplace, United States",
    service: "Website & Web App Modernization",
    serviceHref: "/services/modernization",
    role: "Performance engineering, contributed to the product team",
    status: "Live in production",
    link: "https://sunhub.com",
    linkLabel: "Visit sunhub.com",
    titleA: "A live marketplace made",
    titleB: "faster — without a rewrite.",
    lead: "Sunhub connects buyers and sellers of solar equipment across the United States. The live marketplace worked, but it was slow to load and slow to change.",
    short:
      "We measured what was slowing Sunhub down and removed it in small, safe releases — lighter builds, smarter loading, compressed images — on the same platform, with no downtime and no rewrite.",
    results: [
      ["Faster", "Page loads measured and improved before vs after"],
      ["Zero", "Maintenance windows — every fix shipped live"],
      ["Leaner", "Smaller builds with unused code and assets removed"],
    ],
    challenge:
      "Slow page loads were the visible symptom. Underneath, every page shipped more than it needed, unused assets had piled up and nothing loaded in priority order. The marketplace could not go offline, and existing pages had to behave exactly as before.",
    approach: [
      "Audited the build, assets and images to rank the real causes of slowness.",
      "Removed unused code and assets so every page ships less.",
      "Loaded heavy, below-the-fold sections only when needed, keeping first content instant.",
      "Resized and compressed images to match how they are actually displayed.",
    ],
    outcome:
      "Buyers get faster pages on every device, releases are lighter, and the team kept shipping features throughout the work.",
    thumb: {
      image: "/work/sunhub.webp",
      background: "linear-gradient(135deg,#2A1206 0%,#5A1E08 55%,#8A3410 100%)",
      alt: "Sunhub solar marketplace homepage on desktop and mobile",
    },
  },
  verdira: {
    name: "Verdira",
    card: { label: "Verdira · Practice partner, US", title: "From brochure site to secure client platform" },
    eyebrow: "Web application · Website to client platform",
    client: "Ophthalmology practice partner, United States",
    service: "Product Engineering",
    serviceHref: "/services/product-engineering",
    role: "Website migration with secure client areas",
    status: "Live in production",
    link: "https://verdira.com",
    linkLabel: "Visit verdira.com",
    titleA: "From a brochure website",
    titleB: "to a secure client platform.",
    lead: "Verdira gives retiring ophthalmologists a permanent home for their practice. Its original website could not let clients sign in to private material.",
    short:
      "We moved Verdira from a website builder to a custom web application and added password-protected client areas — keeping the public pages fast and fully visible to search engines — then launched it and handed it over.",
    results: [
      ["Migrated", "Website rebuilt as a custom web application"],
      ["Protected", "Password-protected areas for private client material"],
      ["Handed over", "Launched and handed to the client"],
    ],
    challenge:
      "The original site was a static brochure: no accounts, no private areas. Verdira needed password-protected client material without slowing down — or hiding — the public pages that already brought in enquiries.",
    approach: [
      "Rebuilt the site as a custom application, keeping the content and structure clients knew.",
      "Kept the public pages fast, cacheable and fully visible to search engines.",
      "Separated private client areas so they never leak into search results or caches.",
      "Enforced access on the server — a hidden link alone never protects content.",
      "Launched and handed over with the codebase ready to extend.",
    ],
    outcome:
      "The practice runs its own site: clients sign in to protected areas, public pages stay fast and indexable, and new capabilities can land without another migration.",
    thumb: {
      image: "/work/verdira.webp",
      background: "linear-gradient(135deg,#0B1A17 0%,#16302B 60%,#24443D 100%)",
      alt: "Verdira ophthalmology practice website homepage on desktop and mobile",
    },
  },
  aussiemotor: {
    name: "AussieMotor",
    card: { label: "AussieMotor · Car marketplace", title: "A large marketplace moved to a modern platform" },
    eyebrow: "Frontend development · Automotive marketplace",
    client: "Automotive marketplace, Australia",
    service: "Website & Web App Modernization",
    serviceHref: "/services/modernization",
    role: "End-to-end frontend development and maintenance, with the project's designer",
    status: "Live",
    link: "https://aussiemotor.com.au",
    linkLabel: "Visit aussiemotor.com.au",
    titleA: "Moving a large car marketplace",
    titleB: "to a modern platform.",
    lead: "AussieMotor helps Australians buy and sell new and used cars, compare models and find dealers. Its old website platform was holding the product back.",
    short:
      "We took end-to-end responsibility for the frontend — building the marketplace's screens and seller dashboards and keeping them maintained — in close collaboration with the project's designer, as the platform moved off its legacy stack.",
    results: [
      ["Front to back", "End-to-end frontend development and maintenance"],
      ["Dashboards", "Seller interfaces for managing listings"],
      ["With design", "Built in collaboration with the project's designer"],
    ],
    challenge:
      "A marketplace with search, listings, comparisons, dealers and seller accounts needs a frontend that stays consistent and fast while the platform underneath is being replaced.",
    approach: [
      "Built and maintained the marketplace's frontend screens end to end.",
      "Built dashboard interfaces so sellers can manage their ads.",
      "Worked with the project's designer to turn designs into accurate, reusable components.",
      "Kept search, filters and listings consistent across the new platform.",
    ],
    outcome:
      "The marketplace runs on a modern platform with a frontend built and maintained end to end, so new features ship faster and stay consistent.",
    thumb: {
      image: "/work/aussiemotor.webp",
      background: "linear-gradient(135deg,#0B1023 0%,#1A2558 60%,#3B5BF0 130%)",
      alt: "AussieMotor car marketplace homepage on desktop and mobile",
    },
  },
  vapestore: {
    name: "Vapestore",
    card: {
      label: "Vapestore · Online retail, UK",
      title: "A complete online store, built for fast checkout",
    },
    eyebrow: "E-commerce · Online retail, UK",
    client: "Online vape retailer, United Kingdom",
    service: "Product Engineering",
    serviceHref: "/services/product-engineering",
    role: "Complete frontend and API integration",
    status: "Live",
    link: "https://www.vapestore.co.uk",
    linkLabel: "Visit vapestore.co.uk",
    titleA: "A complete online store,",
    titleB: "built for fast browsing and checkout.",
    lead: "Vapestore is a UK online shop for e-liquids, vape kits, pods and coils. Customers needed to browse a large catalog and pay comfortably on any device.",
    short:
      "We built the complete frontend for Vapestore's production UK store — catalog, multibuy offers, cart and payment workflow — integrated it with the store's APIs, and tuned it for phones, tablets and desktops.",
    results: [
      ["Complete", "Full storefront frontend, catalog to checkout"],
      ["Integrated", "Cart and payment workflow connected to the store's APIs"],
      ["Every device", "Performance tuned for mobile and desktop"],
    ],
    challenge:
      "An online store lives or dies on speed and checkout. With a large catalog, many brands and multibuy offers, the storefront had to stay fast on phones and make paying effortless.",
    approach: [
      "Built a clear catalog with category menus, brand filters and fast browsing.",
      "Made multibuy offers and delivery thresholds visible in the bag, so customers see savings before checkout.",
      "Connected cart and checkout to the payment provider through the store's APIs.",
      "Optimized images and loading for phones first, then tested across browsers and screen sizes.",
    ],
    outcome:
      "Customers browse, add to bag and pay smoothly on any device, on a complete storefront frontend built for the long run.",
    thumb: {
      // No screenshot exists for this project; ProjectThumb renders the branded fallback.
      background: "linear-gradient(135deg,#0A0A0A 0%,#1A1A1A 55%,#2B3A0E 100%)",
      alt: "Vapestore online shop",
    },
  },
  silcolabs: {
    name: "SilcoLabs",
    card: { label: "SilcoLabs · Laboratory software", title: "Lab work in one clear application" },
    eyebrow: "SaaS web application · Laboratory operations",
    client: "Laboratory software company",
    service: "Product Engineering",
    serviceHref: "/services/product-engineering",
    role: "Frontend engineer for the web application and website",
    status: "Live",
    link: "https://www.silcolabs.com",
    linkLabel: "Visit silcolabs.com",
    titleA: "Laboratory software",
    titleB: "that labs can run their day on.",
    lead: "SilcoLabs is lab management software for testing laboratories. Labs needed one place to track samples, run tests and deliver reports without paperwork.",
    short:
      "We built the interface for SilcoLabs, a web application that lets laboratories track samples and tests and deliver reports, along with the marketing website that explains it.",
    results: [
      ["One place", "Samples, tests and reports in a single application"],
      ["Branded", "Report templates labs customize to their own identity"],
      ["Tracked", "Every test followed from sample to delivered report"],
    ],
    challenge:
      "Lab staff work fast under pressure. Screens had to show what is pending, what is ready and what has been sent at a glance, and report templates had to fit each lab's identity.",
    approach: [
      "Designed dashboards around daily lab work: tests in progress, turnaround and reports sent.",
      "Built sample and test views with history and quick re-ordering.",
      "Created customizable report templates with a live preview.",
      "Built the public website so labs understand the product and can get started.",
    ],
    outcome:
      "Labs track samples, tests and reports from one clear application, instead of juggling spreadsheets and paperwork.",
    thumb: {
      image: "/work/silcolabs.webp",
      background: "linear-gradient(135deg,#1B1846 0%,#312C85 60%,#4F62EE 120%)",
      alt: "SilcoLabs laboratory software homepage on desktop and mobile",
    },
  },
  cennetsol: {
    name: "Cennetsol",
    card: { label: "Cennetsol · Software services", title: "A company website, built and kept current" },
    eyebrow: "Company website · Software services",
    client: "Software services company",
    service: "Product Engineering",
    serviceHref: "/services/product-engineering",
    role: "Website build, SEO and ongoing management",
    status: "Delivered",
    link: "",
    linkLabel: "",
    titleA: "A company website",
    titleB: "built, found and kept current.",
    lead: "Cennetsol wanted a marketing website that explained its services clearly and felt modern from the first scroll — and a team that keeps it working after launch.",
    short:
      "We built a responsive company website with purposeful animation and clearly structured service sections, then took on its SEO and ongoing management so it keeps improving after launch.",
    results: [
      ["Animated", "Motion that guides attention instead of distracting"],
      ["Found", "Search visibility managed as part of the engagement"],
      ["Ongoing", "The site stays current under our management"],
    ],
    challenge:
      "Service companies often sound alike. Cennetsol needed a website that stood out visually, stayed easy to scan, and did not fade from search after launch.",
    approach: [
      "Structured the content around services and the outcomes they deliver.",
      "Added scroll-based animation that reveals key messages in order.",
      "Set up and manage SEO so the site stays visible in search.",
      "Keep the site updated and improved as an ongoing engagement.",
    ],
    outcome:
      "A modern, memorable website that presents the company's services clearly — and keeps improving under ongoing management.",
    thumb: {
      image: "/work/cennetsol.webp",
      background: "#1C1917",
      alt: "Cennetsol software studio website homepage on desktop and mobile",
    },
  },
  talhaestate: {
    name: "Talha Estate",
    card: { label: "Talha Estate · Real estate", title: "A property website the team runs on its own" },
    eyebrow: "Property website · Real estate",
    client: "Real-estate agency",
    service: "Product Engineering",
    serviceHref: "/services/product-engineering",
    role: "Website build, social media setup and handover",
    status: "Delivered",
    link: "",
    linkLabel: "",
    titleA: "A property website",
    titleB: "the team runs on its own.",
    lead: "Talha Estate needed a modern website that presents listings clearly — and the ability to update properties and share them online without a developer.",
    short:
      "We built the agency's property website, set up its social media presence alongside it, and handed everything over with the team able to run both on its own.",
    results: [
      ["Editable", "A site the team can update without code"],
      ["Social-ready", "Social media set up alongside the site"],
      ["Handed over", "A clean handover with everything documented"],
    ],
    challenge:
      "Buyers compare many properties quickly, and listings go stale fast. The agency needed a site that is easy to browse, easy for staff to keep current, and backed by a visible social presence.",
    approach: [
      "Built the property website with structured, easy-to-scan listings.",
      "Set up custom fields so staff can add and edit properties themselves.",
      "Set up the agency's social media presence alongside the site.",
      "Handed over the site and social accounts with everything documented.",
    ],
    outcome:
      "The agency runs its website and social media on its own, with a modern site that presents listings clearly.",
    thumb: {
      image: "/work/talhaestate.webp",
      background: "#5B3A26",
      alt: "Talha Estate property listing website homepage on desktop and mobile",
    },
  },
  digestivecare: {
    name: "Digestive Care",
    card: {
      label: "Digestive Care · Healthcare, US",
      title: "A healthcare website that helps patients book",
    },
    eyebrow: "Healthcare website · Patient portal",
    client: "Gastroenterology practice, Florida, United States",
    service: "Dashboards & Client Portals",
    serviceHref: "/services/dashboards-portals",
    role: "Website with patient-portal integration",
    status: "Live",
    link: "https://digestivecarepl.com",
    linkLabel: "Visit digestivecarepl.com",
    titleA: "A healthcare website",
    titleB: "that helps patients book with confidence.",
    lead: "Digestive Care serves patients in the Brandon and Tampa Bay area. Patients needed one trusted place to learn about procedures, book and reach their portal.",
    short:
      "We built a responsive website for the practice and integrated its patient-portal solution, matched it to the practice's branding and shaped every page around the appointment-booking workflow.",
    results: [
      ["Integrated", "Patient portal reachable from every page"],
      ["Bookable", "Pages built around the appointment workflow"],
      ["On brand", "Theme customized to the practice's identity"],
    ],
    challenge:
      "Patients often arrive anxious and with questions about procedures. The website had to explain clearly and make booking the obvious next step.",
    approach: [
      "Built the practice's responsive website.",
      "Integrated the practice's patient-portal solution and linked it prominently.",
      "Customized the theme to match the practice's branding.",
      "Set up reliable email delivery for patient messages.",
    ],
    outcome:
      "Patients can read about their procedure, book an appointment and open their portal from one trustworthy website.",
    thumb: {
      image: "/work/digestivecare.webp",
      background: "linear-gradient(135deg,#0E1E3D 0%,#1F3B73 60%,#4A80D6 130%)",
      alt: "Digestive Care gastroenterology website homepage on desktop and mobile",
    },
  },
  selecthealth: {
    name: "Select & Health",
    card: { label: "Select & Health · Healthcare platform", title: "Landing pages and a design system" },
    eyebrow: "Landing pages & design system · Healthcare platform",
    client: "Patient-facing healthcare platform",
    service: "Product Engineering",
    serviceHref: "/services/product-engineering",
    role: "Landing-page and design-system design",
    status: "Handed over to development",
    link: "",
    linkLabel: "",
    titleA: "Landing pages and a design system",
    titleB: "for a patient-facing health platform.",
    lead: "Select & Health needed its platform to present itself clearly — and to look and behave consistently as its developers build.",
    short:
      "We designed the platform's landing pages and a component-based design system, focused on usability and a fast, accurate handoff to the developers building from it.",
    results: [
      ["Designed", "Landing pages and a shared component library"],
      ["Consistent", "One set of tokens for color, type and spacing"],
      ["Faster handoff", "Developers build from a single source"],
    ],
    challenge:
      "Inconsistent screens confuse patients and slow developers down. The platform needed clear landing pages plus shared rules for color, type and components.",
    approach: [
      "Designed landing pages that present the platform and its promise clearly.",
      "Defined tokens for color, typography and spacing.",
      "Designed reusable components for common patient tasks.",
      "Documented usage so developers could build exactly what was designed.",
    ],
    outcome:
      "The platform's marketing pages and product screens now come from one design system, so everything stays consistent as development continues.",
    thumb: {
      image: "/work/selecthealth.webp",
      background: "#2A2366",
      alt: "Select & Health patient platform homepage on desktop and mobile",
    },
  },
};

export function nextCase(slug: CaseSlug): CaseSlug {
  return CASE_ORDER[(CASE_ORDER.indexOf(slug) + 1) % CASE_ORDER.length];
}

export function isCaseSlug(value: string): value is CaseSlug {
  return (CASE_ORDER as readonly string[]).includes(value);
}
