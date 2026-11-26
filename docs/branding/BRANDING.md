# Ansari Product Engineering — Branding

This is the single reference for how the brand looks and what the site actually uses. Every value below is taken from the live code (`src/app/site.css`, `src/app/extras.css`, `src/components/motion.tsx`). If the code and this file disagree, the code wins; then fix this file.

Machine-readable copy: [`brand-tokens.json`](./brand-tokens.json). Logo files: [`logo-pack/`](./logo-pack/). Older PDF guideline (pre-redesign, blue palette): `Ansari_Studio_Brand_Guidelines_v2_0.pdf`.

## 1. Identity

| Item | Value |
| --- | --- |
| Name | Ansari Product Engineering |
| Slogan | Build. Modernize. Integrate. |
| One-line description | We build, modernize and integrate the software growing businesses run on. |
| Audience | Startups and growing companies, mainly in the US, UK and Europe |
| Founder | Muhammad Wahab Ansari |
| Tone | Plain, practical, specific. No hype, no invented metrics, clients or reviews. |

## 2. Colours

The design is built on a near-black "night" surface, an indigo → violet → cyan accent family, and cool-grey neutrals. CSS variables are declared once in `src/app/site.css` under `:root`.

### 2.1 Core tokens (CSS variables)

| Token | Hex | Used for |
| --- | --- | --- |
| `--ink` | `#0B1020` | Headings and body text on light surfaces; logo slabs on light; dark buttons |
| `--night` | `#07080D` | Hero and dark-cell background; theme colour |
| `--ind` | `#6366F1` | Primary accent (indigo): logo crossbar on light, bullets, focus rings, checks |
| `--ind2` | `#4F46E5` | Accent for text and links on light (eyebrows, "more" links, active states) |
| `--vio` | `#8B5CF6` | Gradient mid-stop (progress bar, headline accent) |
| `--cy` | `#22D3EE` | Cyan highlight: status dots, glyph fills, data-flow lines |
| `--ind-t` | `#EEF0FF` | Indigo tint: selected chips, callouts, icon backplates |
| `--mut` | `#4A5168` | Body / secondary text on light |
| `--mut2` | `#5E667B` | Labels, captions, small meta text on light |
| `--line` | `#E6E8F0` | Hairlines, card borders, grid gaps |
| `--soft` | `#F7F8FC` | Alternate section background (`.sec.t`) |

### 2.2 Gradients

| Name | Definition | Used for |
| --- | --- | --- |
| CTA | `linear-gradient(135deg, #4F46E5, #6D4DF0)` (`--cta`) | Primary buttons |
| Header CTA | `linear-gradient(135deg, #6366F1, #8B5CF6)` | Primary button over the dark hero |
| Progress | `linear-gradient(90deg, #6366F1, #8B5CF6, #22D3EE)` | Scroll progress bar, eyebrow dot (`135deg`, indigo → cyan) |
| Headline accent | `linear-gradient(100deg, #67E8F9, #A5B4FC 55%, #C4B5FD)` | `<em>` inside hero H1 |
| Hero aurora | Radial blobs: indigo `rgba(99,102,241,.5–.7)`, violet `rgba(139,92,246,.35–.5)`, cyan `rgba(34,211,238,.3)` | Animated hero / CTA backgrounds |

### 2.3 Colours on dark surfaces

| Hex | Role |
| --- | --- |
| `#F4F5FA` | Primary text on night |
| `#E6E9F5` | Nav links and pills on night |
| `#B0B5CB` | Lead / secondary text on night |
| `#A4A9C0`, `#C9CEE3` | Muted logo text, breadcrumbs, pills |
| `#A5B4FC` | Eyebrows, links, logo crossbar on night (light indigo) |
| `#67E8F9` | Check icons, gradient start (light cyan) |
| `#C4B5FD` | Gradient end (light violet) |
| `#14163A`, `#0F1226` | Raised dark panels (timeline dots, consent banner) |
| `#F472B6` | Rare pink accent used inside illustrations only |

### 2.4 Light-surface neutrals (supporting)

`#FFFFFF` page · `#F7F8FC` / `#F5F6FF` / `#F9FAFF` soft panels · `#FBFBFF` card hover · `#E6E8F0` / `#E3E6F4` hairlines · `#D6DAE6` input borders · `#D5D9FB` / `#D5D9FF` / `#C7CBFF` indigo-tinted borders · `#A9B0C6` / `#C6CBDB` strong rules.

### 2.5 Semantic / feedback

| Use | Hex |
| --- | --- |
| Form error text / border / fill | `#B91C1C` / `#FECACA` / `#FEF2F2` |

### 2.6 Contrast notes

- `--ink` on white: 17:1. `--mut` on white: 7.6:1. `--mut2` on white: 5.6:1 (all pass AA for body text).
- `--ind2` (`#4F46E5`) on white: 6.3:1 (passes AA). Do not use `--ind` (`#6366F1`, 4.5:1 borderline) for small text on white.
- `#B0B5CB` on `#07080D`: 9.6:1.

### 2.7 Logo colours vs. site colours

The logo pack in `logo-pack/` was drawn with Electric Blue `#2E4FE3` / Blue 300 `#8FA3FF`. The redesigned site draws the same mark with the **indigo crossbar** (`#6366F1` on light, `#A5B4FC` on dark) via `LogoMark` in `src/components/brand.tsx`. Files in `public/brand/` (used by JSON-LD and favicons) are still the blue pack. If you want the two to match, regenerate the pack with the indigo crossbar; do not recolour files by hand.

## 3. Typography

| Item | Value |
| --- | --- |
| Family | **Inter** (variable, weights 100–900), loaded with `next/font/google` as `--font-inter` |
| Fallbacks | `system-ui, -apple-system, "Segoe UI", sans-serif` |
| OpenType features | `font-feature-settings: "cv02", "cv03", "cv04", "cv11"`; `font-optical-sizing: auto` |
| Smoothing | `-webkit-font-smoothing: antialiased` |
| Body | 15px / 1.6, weight 450 |

### Scale

| Role | Class | Size | Weight | Tracking |
| --- | --- | --- | --- | --- |
| H1 | `.h1` | `clamp(1.9rem, 3.5vw, 3rem)`, line-height 1.08 | 640 | −0.038em |
| H2 | `.h2` | `clamp(1.35rem, 2.1vw, 1.85rem)`, 1.15 | 640 | −0.03em |
| H3 / card title | `.h3`, `.cell h3` | 1rem, 1.3 | 620 | −0.018em |
| Lead | `.lead` | 1rem, 1.65, max 520px | 450 | — |
| Small | `.sm` | .85rem, 1.6 | 450 | — |
| Eyebrow | `.eyebrow` | .72rem, uppercase | 620 | +0.12em |
| Figure label | `.fig` | .68rem, uppercase | 650 | +0.14em |
| Button | `.btn` | .86rem | 600 | −0.005em |

Weights in use: 450, 520, 550, 560, 580, 590, 600, 620, 640, 650.

## 4. Logo

- Primary file: `logo-pack/svg/horizontal/` (symbol + "Ansari / Product Engineering").
- The mark is an "A" made of two engineered slabs with a connecting crossbar. In code: `LogoMark` (`src/components/brand.tsx`), variants `light` (white slabs, `#A5B4FC` bar) for dark surfaces and `dark` (`#0B1020` slabs, `#6366F1` bar) for light surfaces.
- Wordmark: "Ansari" at weight 650 + "Product Engineering" at weight 450 in `--mut2` (or `#A4A9C0` on dark).
- Clear space ≈ 2× the crossbar height; minimum width 120px (horizontal), symbol 16px.
- Don't recolour, stretch, rotate, outline, add shadows/glows, or place on busy photos. Run a trademark search before formal registration.

## 5. Shape, spacing and layout

| Token | Value |
| --- | --- |
| Content width | `.wrap` max 1160px, side padding 28px (20px under 560px) |
| Section rhythm | `.sec` padding 72px (52px under 560px); alternate sections use `.sec.t` (`--soft`) |
| Hero | `.hero` padding 132px 0 64px (reserves room for the absolute header) |
| Bento grid | `.mb` — 12-column grid, 1px `--line` gap, 22px outer radius, cells span 3/4/5/6/7/8/12 |
| Card padding | 26px 28px |
| Radii | Bento 22px · hero art 22px · inputs 12px · pills/buttons 999px · header buttons 4px · mega menu 18px |
| Breakpoints | 980px (nav collapses, grids stack), 900px, 560px |
| Header | Absolute, 76px tall; mega menu on hover/focus; burger + full-screen menu under 980px |
| Footer | 4 columns (1.6fr 1fr 1fr 1fr), 48px top padding |

## 6. Components (what the site is made of)

| Component | File | Notes |
| --- | --- | --- |
| Header + mega menu + mobile menu | `src/components/SiteHeader.tsx` | Client; active link via `usePathname`; menu animated with Framer Motion |
| Footer | `src/components/SiteFooter.tsx` | Server |
| Hero (utility pages) | `src/components/PageHero.tsx` | Dark hero with crumbs, used by detail/utility pages |
| CTA band | `src/components/CtaBand.tsx` | Gradient closing section |
| Forms | `src/components/forms/` | `ContactForm`, `AuditForm`, shared `useLeadForm` |
| Work grid | `src/components/work/WorkGrid.tsx` | Filterable, animated layout |
| Case study / thumb | `src/components/work/CaseStudy.tsx`, `ProjectThumb.tsx` | |
| Insights list / article | `src/components/insights/` | |
| Page content (designed pages) | `src/content/*.tsx`, illustrations in `src/content/art/` | Converted from the approved design |

Button variants: `.btn-p` (gradient primary), `.btn-g` (white, grey border), `.btn-o` (outline, header), `.btn-d` (glass on dark), `.btn-w` (white on dark/CTA), `.btn-s` (small).

## 7. Motion

All animation is done with **Framer Motion** (`framer-motion`), except decorative SVG/CSS loops baked into the illustrations (data-flow dashes, floating chips, hero aurora). Everything respects `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` plus a CSS reduced-motion block).

| Motion | Where | Spec |
| --- | --- | --- |
| Easing | everywhere | `cubic-bezier(0.2, 0.7, 0.2, 1)` (`EASE` in `motion.tsx`, `--e` in CSS) |
| Hero entrance (`Up`) | hero text, buttons, art | opacity 0→1, y 18→0, 0.9s, delay = step × 0.09s |
| Scroll reveal (`Reveal`) | section heads, bento grids | opacity 0→1, y 24→0, 0.75s, once, 12% in view |
| Link reveal (`RevealLink`) | one block-level link | same as `Reveal` |
| Page transition | `src/app/template.tsx` | opacity 0→1, y 12→0, 0.6s on every navigation |
| Scroll progress | `ScrollProgress` | `useScroll` + `useSpring` → `scaleX` on a 2px gradient bar |
| Mobile menu | `SiteHeader` | `AnimatePresence`; fade 0.25s, items stagger 0.05s, burger morphs to ✕ |
| Work filter | `WorkGrid` | `layout` + `AnimatePresence popLayout`; 0.45s scale/opacity |
| Form errors | forms | slide-down fade 0.3s |
| Consent banner | `ConsentBanner` | rise-in 0.5s |

## 8. Imagery and iconography

- Illustrations are inline SVG (`src/content/art/*`), drawn on dark glass panels with indigo → cyan gradients, rounded 16px cards and animated data-flow lines. No stock photography, no emoji.
- Icons are duotone Phosphor-style glyphs: cyan fill at 42% opacity under a solid `#4F46E5` (light surfaces) or `#A5B4FC` (dark surfaces) outline.
- Project screenshots live in `public/work/` (WebP, 16:10).

## 9. Voice and content rules

- Say what is true and checkable. No invented clients, numbers, certifications or testimonials.
- Short sentences, plain words, outcomes before technology.
- Primary CTA: **Discuss your project** → `/contact`. Secondary: **Book a 30-minute call** → `/contact#book`. Lead magnet: **Free automation audit** → `/automation-audit`.
- Region line: "Working with clients worldwide, mainly in the US, UK and Europe."
