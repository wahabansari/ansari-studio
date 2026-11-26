# Ansari Product Engineering — Logo pack (Concept A · Monogram)

A custom "A" made of two engineered slabs. The gap at the top is deliberate negative space; the blue crossbar is the layer that connects them.

All SVG text is converted to vector paths (Inter Variable), so the files need no fonts and render the same everywhere.

## Folders

| Folder | What's inside |
| --- | --- |
| `svg/horizontal/` | **Primary logo**: symbol beside "Ansari / Product Engineering". Use it in website headers, documents and proposals. |
| `svg/horizontal-tagline/` | Horizontal logo plus "Build. Modernize. Integrate." Use it in hero sections, covers and pitch material. |
| `svg/stacked/` | Symbol above the wordmark. Use it for centred and square layouts. |
| `svg/stacked-tagline/` | Stacked logo plus the tagline. |
| `svg/symbol/` | Symbol only, for small spaces or where the name already appears nearby. |
| `svg/app-icon/` | Symbol on a rounded or square tile in blue, ink or white. |
| `png/`, `webp/` | Raster exports with transparent backgrounds. Lockups come at 400, 800 and 1600 px wide; symbols and icons at 64 to 1024 px. |
| `favicon/` | Website favicon set (see below). |
| `social/` | LinkedIn and profile avatars. |

Each logo comes in four colour versions:
- `color-light`: for white and light backgrounds.
- `color-dark`: for dark backgrounds such as #070B16 and #0A1022.
- `mono-black`: one colour (ink).
- `mono-white`: one colour (white).

## Colours (taken from the existing website)

| Role | Light background | Dark background |
| --- | --- | --- |
| Symbol, "Ansari" | Ink `#0A1022` | White `#FFFFFF` |
| Crossbar, tagline | Electric Blue `#2E4FE3` | Blue 300 `#8FA3FF` |
| "Product Engineering" | Muted `#4B5565` | `#A3ADC2` |

On the blue app icon the crossbar is ink `#0A1022`. On the ink app icon it is Blue 300.

## Typography

- "Ansari": Inter Variable, weight 720, −2% tracking.
- "Product Engineering": Inter Variable, weight 540, +1% tracking.
- Tagline: Inter Variable, weight 560.
- Character variants used: cv02, cv03, cv04, cv11, the same as the website.

## Clear space and minimum size

- **Clear space:** keep a free margin around the logo at least as tall as the crossbar × 2. That is about 1/5 of the symbol height.
- **Minimum size:**
  - Horizontal logo: 120 px wide on screen, 30 mm in print.
  - Symbol: 16 px. Below 24 px, use the favicon tile.
- **Don'ts:** don't recolour, stretch, rotate, outline, add shadows or glows, or put the logo on busy photos without a solid panel.

## Favicon setup

Copy the `favicon/` files to your site's public folder and add:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

`favicon.svg` switches to the white and Blue 300 version automatically in dark mode.

## Accessible use in a header

```html
<a href="/" aria-label="Ansari Product Engineering — home">
  <img src="/logo/ansari-pe-horizontal-color-dark.svg" alt="Ansari Product Engineering" height="40">
</a>
```

When the logo is inlined as SVG, keep its `<title>` and `role="img"`.

## Note

This mark is an original design, but it has not been checked against trademark registers. Run a trademark search before formal registration.
