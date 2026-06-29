---
name: Paramount.com — Variant C (Kinetic display)
description: The brand's third dimension — Paramount Vista Sans as structural voice, in motion.
colors:
  midnight-navy: "#000A3C"
  deep-navy: "#00072B"
  electric-blue: "#0064FF"
  paper-white: "#FFFFFF"
  magenta-pop: "#D63384"
typography:
  display:
    fontFamily: "Paramount Vista Sans, 'Arial Narrow', sans-serif"
    fontSize: "clamp(64px, 12vw, 200px)"
    fontWeight: 700
    lineHeight: 0.88
  headline:
    fontFamily: "Paramount Vista Sans, 'Arial Narrow', sans-serif"
    fontSize: "clamp(48px, 8vw, 130px)"
    fontWeight: 700
    lineHeight: 0.9
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
  brand-tile:
    backgroundColor: "{colors.midnight-navy}"
    rounded: "{rounded.none}"
---

# Design System: Paramount.com — Variant C

## 1. Overview

**Creative North Star: "Type in Motion"**

Variant C keeps Variant A's exact information architecture — same hero, same portfolio order, same careers band, same footer — and makes one bet: motion is part of the Paramount identity. Paramount Vista Sans stops being a two-moment hero trick and becomes the page's structural voice, kinetic. "WE ARE" unmasks letter-by-letter on load. Section headers wipe in left-to-right on scroll. The hero IP photography cross-fades on a timed loop (SpongeBob → Zoe → NCIS → RuPaul → Star Trek), the way the live site's slick carousel already does. Giant display words track against scroll. The palette, the type, the photography, the layout — all identical to A. The only added dimension is time.

**Key Characteristics:**
- `kinetic-display` motion register (letter-unmask, scroll-wipe, parallax)
- Hero IP cross-fade loop (reuses captured slick-carousel behavior)
- Display type promoted into every section header — in motion
- Identical IA to Variant A (the bet is motion, not layout)
- Full `prefers-reduced-motion` fallback to the static surface

## 2. Colors

Identical pinned palette to A. Motion never changes color; it changes timing.

### Primary
- **Electric Blue** (#0064FF): Display words, section grounds, CTA, the kinetic fill behind unmasking type.

### Neutral
- **Midnight Navy** (#000A3C): Anchor background + text.
- **Deep Navy** (#00072B): Lower-band value step.
- **Paper White** (#FFFFFF): Reversed text, relief band.

### Tertiary
- **Magenta Pop** (#D63384): CTA hover; the accent that "catches up" to a word as it finishes tracking.

### Named Rules
**The Color-Is-Constant Rule.** Motion animates position, scale, mask, and opacity — never hue. The palette is the same at rest and in flight.

## 3. Typography

**Display Font:** Paramount Vista Sans, condensed (pushed larger here — up to 200px — because motion gives the scale a reason).
**Body Font:** Peak Sans.

**Character:** The display face becomes the page's spine. Words arrive (clip-path unmask), travel (scroll parallax), and settle. Body stays still and quiet so the motion reads as intentional, not chaotic.

### Hierarchy
- **Display** (700, clamp 64–200px, lh 0.88): Hero + every promoted section header. Animated entrance.
- **Headline** (700, clamp 48–130px): Sub-section heads, scroll-wipe entrance.
- **Body** (400, 18px, lh 1.5): Static. Never animated beyond a gentle fade.
- **Label** (600, 16px): Nav, CTA.

### Named Rules
**The One-Mover Rule.** Within any viewport, only the display type performs the signature motion. Body and imagery support; they do not compete for the eye.

## 4. Elevation

Flat. No shadows. Depth is now partly temporal — type arriving on a Z-plane via scale + mask reads as depth without a single box-shadow.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift; motion supplies the only dynamism.

## 5. Components

### Buttons
- Hard rectangle (0px), electric-blue fill, white label; magenta hover.

### Brand Tiles
- Same weighted grid as A, but tiles reveal on scroll with a staggered clip-path wipe.

### Signature Component — Kinetic Hero
- "WE ARE" unmasks letter-by-letter (`clip-path: inset` staggered 120ms) on load.
- Script "Paramount" wordmark fades up after the lockup completes.
- IP photography cross-fades on a 4s timed loop behind the type.

### Navigation
- Transparent over navy hero; circular mark + 4 pillars + hamburger.

## 6. Do's and Don'ts

### Do:
- **Do** keep the exact IA of Variant A — motion is the only added dimension.
- **Do** animate position/scale/mask/opacity, never hue.
- **Do** reuse the captured IP cross-fade behavior in the hero.
- **Do** ship a full `prefers-reduced-motion` fallback to the static surface.

### Don't:
- **Don't** restructure the layout (that's Variant B's job).
- **Don't** animate more than the display type per viewport.
- **Don't** use motion to hide weak content — every animated element exists at rest too.
- **Don't** introduce gradients, glassmorphism, or shadows.
