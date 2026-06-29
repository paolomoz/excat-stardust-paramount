<!--
_provenance:
  writtenBy: stardust:uplift (Phase 3)
  writtenAt: 2026-06-29T15:05:00Z
  againstInput: https://www.paramount.com/
  mode: Mode A (brand-faithful — palette + typography pinned)
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/uplift-improvements.md
    - stardust/uplift-questions.md
-->

# Direction — Paramount.com uplift (3 variants)

**Brand-faithful (Mode A).** Palette pinned to Midnight Navy `#000A3C`,
Electric Blue `#0064FF`, Paper White `#FFFFFF`, Magenta Pop `#D63384`.
Typography pinned to Paramount Vista Sans (display) + Peak Sans (body).
Captured IP photography reused in semantic positions. No invented colors
or fonts. IA preserved: hero → brand portfolio → careers → footer.

## Variant A — Faithful + improvements

Role: risk-averse green-light. "Yes, that's us, with the obvious fixes."
Composition: same IA as captured.
Motion: static (no cinematic layer).
Improvements applied (from uplift-improvements.md):
1. **Brand grid hierarchy** — break the 4×3 logo wall: feature Paramount+ at 2× weight, give the rest a deliberate scale rhythm instead of equal tiles.
2. **Single hero claim** — keep "WE ARE Paramount" + the rotating IP, but demote the competing "MORE OF / WHAT YOU LOVE" into the section below so the first viewport lands one proposition.
3. **Tonal relief** — introduce a paper-white band between the navy careers section and the footer so they stop merging; add a subtle navy→deep-navy value shift to break the monotone scroll.
4. **Careers band with IP energy** — keep the employee portrait but frame it against an electric-blue field with a kinetic display headline, so it reads as Paramount, not generic recruiting.
5. **Accent discipline** — use Magenta Pop (#D63384) intentionally on CTA hover and one focal underline.

## Variant B — What if we amplified the IP photography?

Role: design-team motivator. The brand's underused capability foregrounded.
What if: "What if the IP photography breathed at editorial scale instead of being cropped into a 12-up logo wall?"
Captured trait amplified: IP / brand photography (uplift-questions.md § Picked B)
Evidence: 5 hero IP stills @1280×956 + 12 brand stills @767×767, all first-party, currently cropped to equal thumbnails.
Composition: lead with ONE full-bleed featured brand (Paramount+ / Star Trek still) at 3:2; below it an asymmetric editorial mosaic where flagship brands get 2× weight and supporting brands tile smaller. Photo-first cards with title overlays in the lower band. The careers section becomes a full-bleed portrait with overlaid kinetic headline. Differentiated from A by: (a) asymmetric mosaic vs A's weighted-but-gridded layout, (b) full-bleed featured-brand lead module A doesn't have.
Motion: static (no cinematic layer).

## Variant C — What if motion was part of the identity?

Role: visionary pitch. The brand's third dimension — kinetic.
What if: "What if Paramount Vista Sans stopped being a hero trick and became the page's structural voice — in motion?"
Cinematic register: `kinetic-display` (auto-picked from PRODUCT.md Brand Personality — display-typography signature, "WE ARE" lockup as structural language).
Captured trait amplified: display typography (uplift-questions.md § Picked C) — the trait `kinetic-display` naturally amplifies through motion.
Evidence: Paramount Vista Sans at 112–160px used in only 2 moments on the captured page; reserved, not structural.
Composition: identical IA to A — the bet is motion, not layout. Same hero, same portfolio order, same careers band, same footer.
Motion: cinematic, register `kinetic-display` — "WE ARE" unmasks letter-by-letter on load via clip-path; section headers wipe in left-to-right on scroll; the hero IP cross-fades on a timed loop; giant display words track/parallax against scroll. Static reference (`home-C-proposed.html`) + cinematic surface (`home-C-cinematic.html`). Full reduced-motion fallback.

## Differentiation check (must be ≥ 2 changes per pair)
- A vs B: (1) weighted-grid vs asymmetric editorial mosaic; (2) B adds a full-bleed featured-brand lead module; (3) B's careers is full-bleed portrait vs A's blue-field band. ✓
- A vs C: (1) C adds the kinetic motion runtime (letter-unmask, scroll-wipe, parallax); (2) C cross-fades hero IP vs A's static hero; (3) C promotes display type into every section header. ✓
- B vs C: (1) different axis entirely — B = composition/photography, C = motion/typography; (2) B restructures the grid, C keeps A's IA; (3) C carries the motion runtime B never loads. ✓
