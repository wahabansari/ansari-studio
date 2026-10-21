/**
 * Case studies, copied from the design's "CaseStudy" and "ProjectThumb" components.
 * Every figure here is the client's own published result as written in the design.
 */
export const CASE_ORDER = [
  "sunhub",
  "verdira",
  "aussiemotor",
  "vapestore",
  "silcolabs",
  "cennetsol",
  "talhaestate",
  "digestivecare",
  "selecthealth",
] as const;

export type CaseSlug = (typeof CASE_ORDER)[number];

export interface CaseStudy {
  name: string;
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
    /** Backdrop behind the screenshot (shows while the image loads). */
    background: string;
    alt: string;
  };
}

export const CASES: Record<CaseSlug, CaseStudy> = {
  sunhub: {
    name: "Sunhub",
    eyebrow: "Performance & modernization · Solar marketplace",
    client: "Solar equipment marketplace, United States",
    service: "Modernization & performance",
    serviceHref: "/services/modernization",
    role: "Senior frontend engineer and performance owner",
    status: "Live in production",
    link: "https://sunhub.com",
    linkLabel: "Visit sunhub.com",
    titleA: "A solar marketplace made",
    titleB: "30% faster — without a rewrite.",
    lead: "Sunhub connects buyers and sellers of solar equipment across the United States. The live marketplace worked, but it was slow to load and slow to change.",
    short:
      "We measured what was slowing Sunhub down, removed it in small, safe releases and made the live marketplace 30% faster on the same platform — with no downtime and no rewrite.",
    results: [
      ["30%", "Measured performance improvement, before vs after"],
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
      "Buyers get faster pages on every device, releases are lighter, and the team kept shipping features throughout. The 30% figure is an aggregate measured before and after the work.",
    thumb: {
      background: "linear-gradient(135deg,#2A1206 0%,#5A1E08 55%,#8A3410 100%)",
      alt: "Sunhub solar marketplace homepage on desktop and mobile",
    },
  },
  verdira: {
    name: "Verdira",
    eyebrow: "Web application · Healthcare practice partner",
    client: "Ophthalmology practice partner, United States",
    service: "Product engineering",
    serviceHref: "/services/product-engineering",
    role: "Application rebuild and secure client access",
    status: "Live in production",
    link: "https://verdira.com",
    linkLabel: "Visit verdira.com",
    titleA: "From brochure website",
    titleB: "to a secure client platform.",
    lead: "Verdira gives retiring ophthalmologists a permanent home for their practice. Its static website could not let clients sign in to private material.",
    short:
      "We rebuilt Verdira’s static website as a web application with secure, password-protected client areas — while keeping the public pages fast and fully visible to search engines.",
    results: [
      ["Live", "Secure client areas running in production"],
      ["Fast", "Public pages still static and search-friendly"],
      ["Ready", "Codebase organized by feature for what comes next"],
    ],
    challenge:
      "A static site has no idea who is visiting. Verdira needed private areas for clients without slowing down, or hiding, the public pages that already brought in enquiries.",
    approach: [
      "Kept the public pages static, cacheable and indexable.",
      "Separated private client areas at the routing level so they never leak into search results or caches.",
      "Enforced access on the server — a hidden link alone never protects content.",
      "Reorganized the code by feature so new capabilities land in one place.",
    ],
    outcome:
      "Clients now sign in to their own protected area, the public site is as fast as before, and the platform is ready for role-based access next.",
    thumb: {
      background: "linear-gradient(135deg,#0B1A17 0%,#16302B 60%,#24443D 100%)",
      alt: "Verdira ophthalmology practice website homepage on desktop and mobile",
    },
  },
  aussiemotor: {
    name: "AussieMotor",
    eyebrow: "Marketplace migration · Automotive",
    client: "Automotive marketplace, Australia",
    service: "Modernization & performance",
    serviceHref: "/services/modernization",
    role: "Migration team member — dashboards and reusable interface components",
    status: "Live",
    link: "https://aussiemotor.com.au",
    linkLabel: "Visit aussiemotor.com.au",
    titleA: "Moving a large car marketplace",
    titleB: "to a modern platform.",
    lead: "AussieMotor helps Australians buy and sell new and used cars, compare models and find dealers. Its old website platform was holding the product back.",
    short:
      "As part of the migration team, we helped move a large car marketplace from a legacy website platform to a modern web application, building seller dashboards and a reusable component library.",
    results: [
      ["Migrated", "Marketplace moved off the legacy platform"],
      ["Dashboards", "Seller interfaces for managing listings"],
      ["Reusable", "Shared component library for faster features"],
    ],
    challenge:
      "A marketplace with search, listings, comparisons, dealers and seller accounts had outgrown a platform designed for simple websites.",
    approach: [
      "Rebuilt key screens as reusable interface components.",
      "Built dashboard interfaces so sellers can manage their ads.",
      "Kept search, filters and listings consistent across the new platform.",
      "Worked within the wider migration plan and release schedule.",
    ],
    outcome:
      "The marketplace runs on a modern platform with consistent components, so new features are faster to build and easier to maintain.",
    thumb: {
      background: "linear-gradient(135deg,#0B1023 0%,#1A2558 60%,#3B5BF0 130%)",
      alt: "AussieMotor car marketplace homepage on desktop and mobile",
    },
  },
  vapestore: {
    name: "Vapestore",
    eyebrow: "E-commerce · Online retail, UK",
    client: "Online vape retailer, United Kingdom",
    service: "Product engineering",
    serviceHref: "/services/product-engineering",
    role: "Sole frontend engineer",
    status: "Live in production",
    link: "https://www.vapestore.co.uk",
    linkLabel: "Visit vapestore.co.uk",
    titleA: "A complete online store,",
    titleB: "built front to back by one engineer.",
    lead: "Vapestore is a UK online shop for e-liquids, vape kits, pods and coils, with free UK delivery over £20 and orders shipped seven days a week. Customers needed to browse a large catalog and pay comfortably on any device.",
    short:
      "We independently built the full storefront for Vapestore, a production UK e-commerce shop: catalog, multibuy offers, cart and an integrated payment workflow, tuned for phones, tablets and desktops.",
    results: [
      ["End to end", "Storefront built by a single engineer"],
      ["Integrated", "Payment workflow from cart to checkout"],
      ["Every device", "Performance tuned for mobile and desktop"],
    ],
    challenge:
      "An online store lives or dies on speed and checkout. With a large catalog, many brands and multibuy offers, the storefront had to stay fast on phones and make paying effortless.",
    approach: [
      "Built a clear catalog with category menus, brand filters and fast browsing.",
      "Made multibuy offers and delivery thresholds visible in the bag, so customers see savings before checkout.",
      "Connected cart and checkout to the payment provider.",
      "Optimized images and loading for phones first, then tested across browsers and screen sizes.",
    ],
    outcome:
      "Customers browse, add to bag and pay smoothly on any device, on a storefront the business keeps extending.",
    thumb: {
      background: "linear-gradient(135deg,#0A0A0A 0%,#1A1A1A 55%,#2B3A0E 100%)",
      alt: "Vapestore online shop homepage on desktop and mobile",
    },
  },
  silcolabs: {
    name: "SilcoLabs",
    eyebrow: "SaaS web application · Clinical labs",
    client: "Clinical lab software company",
    service: "Product engineering",
    serviceHref: "/services/product-engineering",
    role: "Frontend engineer for the web application and website",
    status: "Live",
    link: "https://www.silcolabs.com",
    linkLabel: "Visit silcolabs.com",
    titleA: "Clinical lab software",
    titleB: "that labs can run their day on.",
    lead: "SilcoLabs is lab management software for diagnostic labs and clinics. Labs needed one place to register patients, track tests and deliver reports without paperwork.",
    short:
      "We built the interface for SilcoLabs, a web application that lets diagnostic labs manage patients, track tests and deliver reports, along with the marketing website that explains it.",
    results: [
      ["One place", "Patients, tests and reports in a single application"],
      ["Branded", "Report templates labs customize to their own identity"],
      ["Tracked", "Every test followed from sample to delivered report"],
    ],
    challenge:
      "Lab staff work fast under pressure. Screens had to show what is pending, what is ready and what has been sent at a glance, and report templates had to fit each lab’s identity.",
    approach: [
      "Designed dashboards around daily lab work: tests in progress, turnaround and reports sent.",
      "Built patient profiles with history and quick re-ordering of tests.",
      "Created customizable report templates with a live preview.",
      "Built the public website so labs understand the product and can get started.",
    ],
    outcome:
      "Labs manage patients, tests and reports from one clear application, and patients receive their results faster.",
    thumb: {
      background: "linear-gradient(135deg,#1B1846 0%,#312C85 60%,#4F62EE 120%)",
      alt: "SilcoLabs clinical lab software homepage on desktop and mobile",
    },
  },
  cennetsol: {
    name: "Cennetsol",
    eyebrow: "Company website · Software services",
    client: "Software services company",
    service: "Product engineering",
    serviceHref: "/services/product-engineering",
    role: "Website build with motion design",
    status: "Delivered",
    link: "",
    linkLabel: "",
    titleA: "A company website",
    titleB: "with motion that tells the story.",
    lead: "Cennetsol wanted a marketing website that explained its services clearly and felt modern from the first scroll.",
    short:
      "We built a responsive company website with purposeful animation and clearly structured service sections, so visitors understand what the company does within seconds.",
    results: [
      ["Animated", "Motion that guides attention instead of distracting"],
      ["Structured", "A clear section for every service"],
      ["Responsive", "Consistent on phones, tablets and desktops"],
    ],
    challenge:
      "Service companies often sound alike. Cennetsol needed a website that stood out visually while staying easy to scan.",
    approach: [
      "Structured the content around services and the outcomes they deliver.",
      "Added scroll-based animation that reveals key messages in order.",
      "Built every section to adapt cleanly to small screens.",
      "Kept motion light so pages still load quickly.",
    ],
    outcome:
      "A modern, memorable website that presents the company’s services clearly and gives the team a solid base to grow on.",
    thumb: {
      background: "#1C1917",
      alt: "Cennetsol software studio website homepage on desktop and mobile",
    },
  },
  talhaestate: {
    name: "Talha Estate",
    eyebrow: "Website · Real estate",
    client: "Real-estate agency",
    service: "Product engineering",
    serviceHref: "/services/product-engineering",
    role: "Interface redesign and build",
    status: "Delivered",
    link: "",
    linkLabel: "",
    titleA: "A property website",
    titleB: "that is easy to browse and update.",
    lead: "Talha Estate needed a modern website that presents listings clearly and lets the team update properties without a developer.",
    short:
      "We designed and built a modern real-estate website with structured property cards, clean typography and simple listing management, plus reliable email delivery for enquiries.",
    results: [
      ["Structured", "Property cards with the details buyers look for"],
      ["Self-managed", "Staff update listings without code"],
      ["Reliable", "Enquiry emails delivered every time"],
    ],
    challenge:
      "Buyers compare many properties quickly. Listings had to be consistent, easy to scan and easy for staff to keep current.",
    approach: [
      "Redesigned the interface with clear typography and generous spacing.",
      "Built structured property cards with the key facts up front.",
      "Set up custom listing fields so staff can add and edit properties.",
      "Configured trusted email delivery for contact enquiries.",
    ],
    outcome:
      "Visitors find and compare properties faster, and the agency keeps its listings up to date on its own.",
    thumb: {
      background: "#5B3A26",
      alt: "Talha Estate property listing website homepage on desktop and mobile",
    },
  },
  digestivecare: {
    name: "Digestive Care",
    eyebrow: "Healthcare website · Patient portal",
    client: "Gastroenterology practice, Florida, United States",
    service: "Dashboards & portals",
    serviceHref: "/services/dashboards-portals",
    role: "Website design and build",
    status: "Live",
    link: "https://digestivecarepl.com",
    linkLabel: "Visit digestivecarepl.com",
    titleA: "A healthcare website",
    titleB: "that helps patients book with confidence.",
    lead: "Digestive Care serves patients in the Brandon and Tampa Bay area. Patients needed one trusted place to learn about procedures, book and reach their portal.",
    short:
      "We built a responsive healthcare website with an integrated patient portal, matched it to the practice’s branding and shaped every page around the appointment-booking workflow.",
    results: [
      ["Integrated", "Patient portal reachable from every page"],
      ["Bookable", "Pages built around the appointment workflow"],
      ["On brand", "Theme customized to the practice’s identity"],
    ],
    challenge:
      "Patients often arrive anxious and with questions about procedures. The website had to explain clearly and make booking the obvious next step.",
    approach: [
      "Organized services and patient education into clear sections.",
      "Linked the patient portal and appointment booking prominently.",
      "Customized the theme to match the practice’s branding.",
      "Set up reliable email delivery for patient messages.",
    ],
    outcome:
      "Patients can read about their procedure, book an appointment and open their portal from one trustworthy website.",
    thumb: {
      background: "linear-gradient(135deg,#0E1E3D 0%,#1F3B73 60%,#4A80D6 130%)",
      alt: "Digestive Care gastroenterology website homepage on desktop and mobile",
    },
  },
  selecthealth: {
    name: "Select & Health",
    eyebrow: "Design system · Healthcare platform",
    client: "Patient-facing healthcare platform",
    service: "Product engineering",
    serviceHref: "/services/product-engineering",
    role: "Design system and UX audit",
    status: "Handed over to development",
    link: "",
    linkLabel: "",
    titleA: "A design system",
    titleB: "for a patient-facing health platform.",
    lead: "Select & Health needed its platform to look and behave consistently — and to be quick for developers to build accurately.",
    short:
      "We designed a component-based design system for a patient-facing healthcare platform, focused on usability, accessibility and a fast, accurate handoff to developers.",
    results: [
      ["Consistent", "One library of components and design tokens"],
      ["Accessible", "Readable, usable patterns by default"],
      ["Faster handoff", "Developers build from a single source"],
    ],
    challenge:
      "Inconsistent screens confuse patients and slow developers down. The platform needed shared rules for color, type and components.",
    approach: [
      "Audited existing screens for usability and consistency issues.",
      "Defined tokens for color, typography and spacing.",
      "Designed reusable components for common patient tasks.",
      "Documented usage so developers could build exactly what was designed.",
    ],
    outcome:
      "Designers and developers now work from one system, so new screens are consistent and accessible by default.",
    thumb: {
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
