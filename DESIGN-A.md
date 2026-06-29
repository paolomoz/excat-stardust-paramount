---
name: Paramount.com — Variant A (Faithful + improvements)
description: Tomorrow's version of the site you have today — the marquee, fixed.
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
    letterSpacing: "normal"
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
  button-primary-hover:
    backgroundColor: "{colors.magenta-pop}"
    textColor: "{colors.paper-white}"
  brand-tile:
    backgroundColor: "{colors.midnight-navy}"
    rounded: "{rounded.none}"
---

# Design System: Paramount.com — Variant A

## 1. Overview

**Creative North Star: "The Marquee, Fixed"**

Variant A keeps everything that makes Paramount.com recognisably itself — the midnight-navy/electric-blue flat fields, the oversized condensed display type, the first-party IP photography — and applies the five obvious fixes. The brand grid gains hierarchy (Paramount+ leads at 2× weight). The hero lands one claim. A paper-white relief band breaks the navy-on-navy monotone before the footer. The careers band borrows the page's own energy. The magenta accent earns a defined job. Nothing is reinvented; the marquee just stops looking like 2018.

**Key Characteristics:**
- Flat navy / electric-blue color blocking (unchanged)
- Oversized condensed display type (unchanged)
- Weighted brand grid (NEW: featured flagship + scale rhythm)
- One paper-white relief band (NEW: breaks monotone scroll)
- Disciplined magenta accent on hover

## 2. Colors

A two-field flat system — navy and electric blue — with white relief and a rare magenta pop. Adds one **deep-navy** (#00072B) as a subtle value step so long navy stretches gain depth without leaving the palette.

### Primary
- **Electric Blue** (#0064FF): Section grounds, display words, CTA fill, links.

### Neutral
- **Midnight Navy** (#000A3C): Anchor background + default text.
- **Deep Navy** (#00072B): A one-step-darker value for the footer / lower band, so navy sections stop merging.
- **Paper White** (#FFFFFF): Body background, reversed text, the new relief band.

### Tertiary
- **Magenta Pop** (#D63384): CTA hover + one focal underline. ≤5% of any screen.

### Named Rules
**The Two-Field Rule.** Structure is built by alternating navy and electric blue — never by borders or shadows.

## 3. Typography

**Display Font:** Paramount Vista Sans, condensed.
**Body Font:** Peak Sans.

**Character:** Proprietary condensed grotesque (display) + clean humanist sans (body). The display is the loudest instrument; body stays quiet by design.

### Hierarchy
- **Display** (700, clamp 64–160px, lh 0.9): Hero statement only.
- **Headline** (700, clamp 40–112px, uppercase, lh 0.92): Section titles.
- **Body** (400, 18px, lh 1.5): Brand descriptions. (Loosened from the captured 1.33 to a readable 1.5.)
- **Label** (600, 16px): Nav, CTA, footer.

### Named Rules
**The Three-Word Rule.** Display type carries statements of three words or fewer.

## 4. Elevation

Flat. No shadows. Depth comes from flat-field swaps, the new deep-navy value step, and type/imagery scale.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift.

## 5. Components

### Buttons
- **Shape:** Hard rectangle (0px).
- **Primary:** Electric-blue fill, white label, 16×40px.
- **Hover:** Magenta-pop fill (the accent's defined job).

### Cards / Containers (Brand Tiles)
- **Corner:** Hard rectangle (0px). Full-bleed IP photo, navy gap.
- **Hierarchy (NEW):** Featured flagship tile spans 2×2; supporting brands tile 1×1 in a deliberate rhythm rather than a 4×3 equal wall.

### Navigation
- Transparent over navy hero; circular mark + 4 pillars + hamburger. White on navy.

### Signature Component — Rotating IP Hero
Script "Paramount" wordmark over the electric-blue "WE ARE" lockup, with auto-rotating IP photography behind. Single focal claim; the "MORE OF / WHAT YOU LOVE" line demotes to the section below.

## 6. Do's and Don'ts

### Do:
- **Do** block the page into flat fields of navy (#000A3C) and electric blue (#0064FF).
- **Do** give the brand grid hierarchy — feature the flagship.
- **Do** run display type enormous and condensed, three words or fewer.
- **Do** let real IP photography carry the emotion.

### Don't:
- **Don't** introduce gradients, glassmorphism, or neon-on-dark tech aesthetics.
- **Don't** rebuild the brand grid as an equal-weight logo wall.
- **Don't** turn the page into a press-release wall.
- **Don't** soften edges — no rounded cards, no drop shadows.
