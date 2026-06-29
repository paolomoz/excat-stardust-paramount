---
name: Paramount.com — Variant B (Photography re-foregrounded)
description: The brand's underused capability — IP photography — breathing at editorial scale.
colors:
  midnight-navy: "#000A3C"
  deep-navy: "#00072B"
  electric-blue: "#0064FF"
  paper-white: "#FFFFFF"
  magenta-pop: "#D63384"
typography:
  display:
    fontFamily: "Paramount Vista Sans, 'Arial Narrow', sans-serif"
    fontSize: "clamp(64px, 11vw, 160px)"
    fontWeight: 700
    lineHeight: 0.9
  headline:
    fontFamily: "Paramount Vista Sans, 'Arial Narrow', sans-serif"
    fontSize: "clamp(40px, 7vw, 112px)"
    fontWeight: 700
    lineHeight: 0.92
  body:
    fontFamily: "Peak Sans, Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
  full: "50%"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "16px 40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
  featured-brand:
    backgroundColor: "{colors.midnight-navy}"
    rounded: "{rounded.none}"
---

# Design System: Paramount.com — Variant B

## 1. Overview

**Creative North Star: "The Editorial House"**

Variant B bets on the asset Paramount already owns but crops too small: first-party IP photography. Instead of a 4×3 wall of equal thumbnails, the portfolio becomes an editorial spread — one full-bleed featured brand leading at 3:2, then an asymmetric mosaic where flagships get 2× canvas and supporting brands play smaller. Photography is the layout, not a tile inside it. Title overlays sit in the lower band of each image; the navy/blue fields become the matting around the pictures. Same palette, same type, same IP — but the page now reads like a magazine cover rather than a logo directory.

**Key Characteristics:**
- Full-bleed featured-brand lead module (3:2)
- Asymmetric editorial photo mosaic (flagships 2× weight)
- Title overlays in the lower image band
- Photography as layout; color fields as matting
- Full-bleed portrait careers section

## 2. Colors

Identical palette to A (Mode A pinned). Here navy and blue are **matting** around photography rather than the dominant fields.

### Primary
- **Electric Blue** (#0064FF): Overlay labels, CTA fill, the one full-bleed accent band.

### Neutral
- **Midnight Navy** (#000A3C): Matting between images, default text.
- **Deep Navy** (#00072B): Image overlay scrims (lower-band gradient-free flat scrim for legibility).
- **Paper White** (#FFFFFF): Reversed text on imagery, captions.

### Tertiary
- **Magenta Pop** (#D63384): CTA hover + active filter state.

### Named Rules
**The Matting Rule.** Color fields exist to frame photography, never to compete with it. If a field is bigger than the photo it borders, the composition is wrong.

## 3. Typography

**Display Font:** Paramount Vista Sans, condensed.
**Body Font:** Peak Sans.

**Character:** Same pairing as A. Here display type works as **overlay** — set over the lower band of imagery — so it reads as a magazine cover line, not a standalone banner.

### Hierarchy
- **Display** (700, clamp 64–160px, lh 0.9): Hero + featured-brand cover line.
- **Headline** (700, clamp 40–112px, uppercase): Section + brand-name overlays.
- **Body** (400, 18px, lh 1.5): Brand descriptions, captions.
- **Label** (600, 16px): Nav, overlay eyebrows, CTA.

### Named Rules
**The Cover-Line Rule.** Brand names overlay the lower third of their image, never float on a separate color block.

## 4. Elevation

Flat. No shadows. The only depth is the flat scrim behind overlay text for legibility — a solid deep-navy band at reduced opacity, never a gradient.

### Named Rules
**The Scrim, Not Shadow Rule.** Legibility over imagery comes from a flat color scrim, never a drop shadow or blur.

## 5. Components

### Buttons
- **Shape:** Hard rectangle (0px).
- **Primary:** Electric-blue fill, white label.
- **Ghost:** Transparent + white label over imagery.
- **Hover:** Magenta-pop.

### Featured-Brand Lead (signature, NEW)
- Full-bleed 3:2 IP still (e.g. Star Trek / Paramount+) spanning the viewport width.
- Brand name as a display cover-line over the lower band; one-line descriptor + ghost CTA.

### Editorial Mosaic
- Asymmetric grid: flagship brands 2×2, supporting brands 1×1.
- Each tile is photo-first with a lower-band overlay label; navy matting between.

### Careers — Full-bleed Portrait
- The employee portrait goes full-bleed with an overlaid kinetic display headline ("SHAPE THE FUTURE"), not a portrait-on-navy band.

### Navigation
- Transparent over the featured image; circular mark + 4 pillars + hamburger.

## 6. Do's and Don'ts

### Do:
- **Do** lead with one full-bleed featured brand at 3:2.
- **Do** weight flagships 2× in the mosaic.
- **Do** overlay brand names on the lower image band with a flat scrim.
- **Do** keep palette and type pinned to brand.

### Don't:
- **Don't** rebuild the equal-weight 4×3 logo wall.
- **Don't** use gradients, glassmorphism, or drop shadows for legibility — use a flat scrim.
- **Don't** let a color field upstage the photo it borders.
- **Don't** soften edges — hard rectangles only.
