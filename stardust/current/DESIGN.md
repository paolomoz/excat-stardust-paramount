---
name: Paramount.com (current state)
description: Bold editorial display type and flat saturated color blocking for a global house of entertainment brands.
colors:
  midnight-navy: "#000A3C"
  electric-blue: "#0064FF"
  paper-white: "#FFFFFF"
  magenta-pop: "#D63384"
  true-black: "#000000"
typography:
  display:
    fontFamily: "Paramount Vista Sans, 'Arial Narrow', sans-serif"
    fontSize: "160px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  headline:
    fontFamily: "Paramount Vista Sans, 'Arial Narrow', sans-serif"
    fontSize: "112px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  body:
    fontFamily: "Peak Sans, Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.33
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
  brand-tile:
    backgroundColor: "{colors.midnight-navy}"
    rounded: "{rounded.none}"
---

# Design System: Paramount.com (current state)

## 1. Overview

**Creative North Star: "The Marquee"**

Paramount.com reads like the front of a theater marquee: enormous type, saturated color, and the stars themselves doing the selling. The system is built on two flat, confident color fields — midnight navy and electric blue — that block the page into bold horizontal bands. There is no gradient, no shadow, no soft edge; depth is created purely by swapping one saturated field for another. Oversized condensed display type ("WE ARE", "FUTURE") runs at 112–160px and frequently sits behind or around full-bleed IP photography, so the page feels like a billboard rather than a brochure.

It explicitly rejects the sterile media-holding-company look (press-release walls, boardroom stock photography) and the streaming-app content-grid. The company fronts its joy: SpongeBob mid-leap, Star Trek, RuPaul — the IP is the emotional payload, the corporate message is the frame.

**Key Characteristics:**
- Flat, saturated color blocking (navy ↔ electric blue ↔ white)
- Oversized condensed editorial display type
- Full-bleed IP photography as the hero
- Hard rectangular tiles, zero border-radius (circles only for marks)
- Three-word declarative headlines

## 2. Colors

A two-color flat system — navy and electric blue — with white for relief and a rare magenta pop.

### Primary
- **Electric Blue** (#0064FF): The signal color. Carries entire section backgrounds ("MORE OF WHAT YOU LOVE"), the giant kinetic display words ("WE ARE", "FUTURE"), links, and the primary CTA fill. High-energy, almost neon, but pure blue rather than tech-cyan.

### Neutral
- **Midnight Navy** (#000A3C): The anchor. Dominant page background and the default text color. Nearly-black but unmistakably blue — gives the whole site a cinematic, after-dark feel.
- **Paper White** (#FFFFFF): Body background and reversed text on navy/blue fields. Also the gaps between image tiles.
- **True Black** (#000000): Occasional hard ink for icons.

### Tertiary
- **Magenta Pop** (#D63384): A rare accent for hover/highlight moments. Appears on <2% of surfaces.

### Named Rules
**The Two-Field Rule.** Structure is built by alternating two saturated fields — navy and electric blue — never by borders or shadows. If a section needs separating, it gets a different field, not a divider line.

## 3. Typography

**Display Font:** Paramount Vista Sans, condensed (fallback 'Arial Narrow', sans-serif)
**Body Font:** Peak Sans (fallback Helvetica, Arial, sans-serif)

**Character:** A proprietary condensed grotesque for display paired with a clean humanist sans for body. The condensed display is built to run enormous — it is the brand's loudest instrument. The body face is quiet and utilitarian by deliberate contrast.

### Hierarchy
- **Display** (700, 160px, line-height 0.9): Hero statements only — "WE ARE", the script Paramount lockup's surrounding words.
- **Headline** (700, 112px, uppercase, line-height 0.9): Section titles — "WHAT YOU LOVE", "FUTURE".
- **Body** (400, 18px, line-height 1.33): Brand descriptions, paragraphs. Quiet, even, no frills.
- **Label** (400–600, ~16px): Nav items, CTA labels, footer links.

### Named Rules
**The Three-Word Rule.** Display type carries statements of three words or fewer. If it needs a sentence, it is body copy, not display.

## 4. Elevation

Completely flat. No box-shadows were observed anywhere on the homepage. Depth and hierarchy are conveyed exclusively through flat color-field swaps and the scale of type and imagery. Image tiles butt against each other with thin white gaps rather than floating on shadows.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift. A tile is distinguished by its photography and its hard edge, never by elevation.

## 5. Components

### Buttons
- **Shape:** Hard rectangle (0px radius).
- **Primary:** Electric-blue fill, white label, ~16px×40px padding ("JOIN US", "ALL BRANDS").
- **Hover / Focus:** Subtle — relies on the rare magenta accent or a brightness shift.

### Cards / Containers (Brand Tiles)
- **Corner Style:** Hard rectangle (0px).
- **Background:** Full-bleed IP photograph; navy gap between tiles.
- **Shadow Strategy:** None (see Elevation).
- **Layout:** 4-column portrait-tile grid, 12 tiles, in the electric-blue "MORE OF WHAT YOU LOVE" band.

### Navigation
- **Style:** Minimal, transparent over the navy hero. Circular logo mark top-left, four pillars (About / News / Careers / Investors), hamburger on small screens. White text on navy.

### Signature Component — Rotating IP Hero
A full-bleed hero where a script "Paramount / A SKYDANCE CORPORATION" wordmark sits over an electric-blue "WE ARE" SVG, with auto-rotating IP photography (SpongeBob, Zoe, NCIS, RuPaul, Star Trek) cycling behind via a slick carousel. The single most load-bearing and most cinematic surface on the site.

## 6. Do's and Don'ts

### Do:
- **Do** block the page into flat fields of midnight navy (#000A3C) and electric blue (#0064FF).
- **Do** run display type enormous (112–160px) and condensed, in three-word statements.
- **Do** let real IP photography carry the emotion — front the shows, not the org chart.
- **Do** keep tiles hard-cornered (0px) and shadowless.

### Don't:
- **Don't** introduce gradients, glassmorphism, or neon-on-dark tech aesthetics.
- **Don't** turn the page into a press-release wall or boardroom-stock-photo corporate site.
- **Don't** make it look like the Paramount+ streaming app (endless content carousels).
- **Don't** soften the edges — no rounded cards, no drop shadows.
