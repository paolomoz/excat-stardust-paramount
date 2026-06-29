# Page-shape brief — home, Variant A (Faithful + improvements)

Design language: DESIGN-A.md / DESIGN-A.json. Mode A pinned palette + type.
Content source: stardust/current/pages/index.json + _brand-extraction.json voice.
Assets: ../current/assets/media/ (IP stills, brand tiles), ../current/assets/fonts/.

## Sections (IA preserved)

1. **header** · data-intent="audience routing" · data-layout="contained"
   - Transparent over navy hero. Circular logo mark (use a CSS circle with "P") top-left; nav pillars About / News / Careers / Investors; hamburger at mobile.

2. **hero** · data-intent="emotional hook" · data-layout="full-bleed" · data-media="image"
   - Navy ground. Giant electric-blue "WE ARE" display word (clamp 64–160px). Script "Paramount" wordmark (../current/assets/media/wordmark-white-tech.svg) centered over it. One rotating IP still (SpongeBob, 1280×956) as the focal image. Single claim — the "MORE OF / WHAT YOU LOVE" line is NOT here (demoted to section below). Eyebrow: "A SKYDANCE CORPORATION".
   - FIX #2 (single hero claim).

3. **brands** · data-intent="value proposition" · data-layout="grid" · data-items="12"
   - Electric-blue ground band, headline "MORE OF WHAT YOU LOVE" (uppercase display).
   - FIX #1: weighted grid — Paramount+ featured tile spans 2×2, other 11 brands tile in a deliberate rhythm (not equal 4×3). Each tile = full-bleed IP photo + brand-name overlay label + one-line description from index.json body[].

4. **careers** · data-intent="drive action" · data-layout="split-media"
   - FIX #4: electric-blue field (not navy) with kinetic display headline "SHAPE THE FUTURE", employee portrait (career-person-01-720x738), body copy, primary CTA "JOIN US".

5. **relief** (NEW) · data-intent="tonal break" · data-layout="contained"
   - FIX #3: a thin paper-white band with the Paramount wordmark/short statement, separating careers from footer so navy sections stop merging.

6. **footer** · data-intent="navigation + legal" · data-layout="grid"
   - Deep-navy (#00072B) ground (value step). Column link lists (About/News/Careers/Investors), streaming brand text logos, legal row from index.json.

## Improvements applied: 5 (all from uplift-improvements.md).
## Accent discipline (FIX #5): magenta only on CTA hover + one focal underline.
