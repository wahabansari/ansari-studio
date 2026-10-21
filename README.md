# Ansari Studio Website

## Overview

A modern, production-ready marketing website for Ansari Studio built with **Next.js 16**, **React 19.3**, and **Tailwind CSS v4**. The site showcases the studio's services, portfolio case studies, process, and provides interactive forms for automation audits and general contact.

## Live Preview

The site is deployed and serves as the primary digital presence for Ansari Studio.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Cache Components)
- **UI Library**: [React 19.3](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (theme-driven via CSS `@theme`)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Fonts**: [Inter Variable](https://rsms.me/inter/) (local), [JetBrains Mono](https://www.jetbrains.com/mono/) (Google Fonts)

## Key Features

- **Service Pages**: Dedicated pages for Product Engineering, Modernization, Automation & AI, Dashboards & Portals, and Maintenance & Retainer
- **Portfolio/Work**: Case studies with detailed project pages, dynamic routing via `[slug]`
- **Insights**: Blog-style content including lead follow-up automation guide
- **Automation Audit**: Interactive audit form with API route handling
- **Contact**: Contact form with service selection chips and Cal.com booking integration
- **SEO**: Built-in `sitemap.ts`, `robots.ts`, and per-page metadata
- **Animations**: View Transitions API with reduced-motion support
- **Forms**: Server-side form handling with Resend integration (optional, gracefully degrades)
- **Performance**: Static site generation where possible, optimized fonts and assets

## Project Structure

```
src/
├── app/              # Next.js App Router pages and API routes
├── components/       # Reusable React components
├── data/             # Static data (case studies, etc.)
├── fonts/            # Local font files
└── lib/              # Utilities, form handling, site config
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm (or yarn/pnpm)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

### Linting & Formatting

```bash
npm run lint
npx tsc --noEmit
npx prettier --write "src/**/*.{ts,tsx,css}"
```

## Environment Variables

For form functionality (contact/audit):

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | No | Resend API key for sending emails |
| `CONTACT_TO_EMAIL` | No | Recipient email address |
| `CONTACT_FROM_EMAIL` | No | Sender email (defaults to Resend onboarding email) |

If not configured, forms will log submissions in development and show a friendly message in production.

## Design System

The site follows a strict design system defined in `src/app/globals.css` with theme tokens:
- Colors: `ink`, `night`, `mist`, `line`, `brand`, `mint`, etc.
- Typography: Inter Variable with custom features
- Breakpoints: Custom `max-[900px]` responsive behavior
- Motion: Respects `prefers-reduced-motion`

## Contributing

This is the production website for Ansari Studio. For development guidelines, see `CLAUDE.md` and `AGENTS.md`.

## License

Private - All rights reserved.
