# Page-shape brief — home, Variant C (Kinetic display)

Design language: DESIGN-C.md / DESIGN-C.json. Mode A pinned palette + type.
Register: kinetic-display (DESIGN-C.json extensions.motion.register).
Bet: motion is part of the identity. IA IDENTICAL to Variant A — only motion added.
Outputs: home-C-proposed.html (static reference) + home-C-cinematic.html (motion).

## Sections (IDENTICAL IA to Variant A)

1. **header** · data-intent="audience routing" · data-layout="contained"
   - Same as A. id="nav" for the scrolled-state runtime hook.

2. **hero** · data-intent="emotional hook" · data-layout="full-bleed" · data-media="image"
   - Same composition as A. MOTION: "WE ARE" letters wrapped in [data-split]-style spans, unmask letter-by-letter on load (clip-path/blur). Script wordmark fades up after. Hero IP photography cross-fades on a 4s timed loop (SpongeBob → Zoe → NCIS → RuPaul → Star Trek — the 5 captured stills) inside .hero-marquee for parallax.

3. **brands** · data-intent="value proposition" · data-layout="grid" · data-items="12"
   - Same weighted grid as A. Headline "MORE OF WHAT YOU LOVE" uses .display-head .word spans for scroll-driven clip-path left-to-right wipe. Tiles carry [data-tile-anim] for staggered scroll reveal.

4. **careers** · data-intent="drive action" · data-layout="split-media"
   - Same as A. Headline "SHAPE THE FUTURE" as .display-head word-wipe. Body [data-split].

5. **relief** · data-intent="tonal break" · data-layout="contained"
   - Same as A.

6. **footer** · data-intent="navigation + legal" · data-layout="grid"
   - Same as A. .site-footer__wordmark clip-path wipe-up.

## Motion contract
- Lenis smooth scroll (lenis.min.js / .css copied to prototypes/).
- Canonical motion runtime (motion-runtime.md) embedded inline, animConfig tuned for kinetic-display (parallax.translate 30, cards.slide 48, cards.stagger 0.16).
- <noscript> block forces all motion-hidden states visible.
- prefers-reduced-motion: reduce neutralizes everything → renders identical to home-C-proposed.html.
- The Color-Is-Constant Rule: animate position/scale/mask/opacity, never hue.
- The One-Mover Rule: only display type performs signature motion per viewport.

## Differentiation vs A: motion runtime (letter-unmask, word-wipe, tile-reveal, parallax, IP cross-fade) — A is fully static. ≥3 changes.
