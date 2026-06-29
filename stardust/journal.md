# Stardust journal — Paramount.com uplift

## 2026-06-29 · uplift https://www.paramount.com/

**Prompt:** "uplift https://www.paramount.com/ — keep colors, typography; reuse images, videos and visual motions; provide better design options as static prototypes."

**Approach:** Ran the full `stardust:uplift` six-phase flow (Mode A brand-faithful — palette + typography pinned). Single-page homepage extract.

**What was captured (Phase 1):**
- Palette: Midnight Navy #000A3C, Electric Blue #0064FF, Paper White, rare Magenta #D63384. Flat two-field color blocking, no shadows/gradients.
- Type: Paramount Vista Sans (condensed display, 112–160px) + Peak Sans (body). Proprietary woff2s captured.
- Imagery: 5 rotating hero IP stills (SpongeBob/Zoe/NCIS/RuPaul/Star Trek) + 12 brand tiles, all first-party.
- Motion: slick hero carousel (no background video; the two iframes are tracking pixels).
- IA: hero → 12-tile brand grid → careers band → footer.

**Five tensions named (Phase 2):** equal-weight logo wall; four competing hero statements; monotone navy scroll; generic careers band; IP carousel trapped in hero.

**Variant bets (Phase 3):** B = photography re-foregrounding (composition axis); C = display-typography amplification via `kinetic-display` register (motion axis). Differentiated by axis, not intensity. No stop conditions triggered.

**Prototypes (Phase 5):** All four files (A, B, C-static, C-cinematic) pass the validation cascade at desktop/tablet/mobile — 0 console errors, 0 broken images, 0 overflow. Cinematic C boots Lenis + letter-unmask + 5-image IP cross-fade; reduced-motion fallback verified (Lenis skipped, static end-states). Variant-convergence detector: A↔B 4 changes, A↔C 2 changes, B↔C 6 changes — all PASS.

**Open questions / next:** User picks a variant; iterate via chat or approve via the standard prototype approval flow. Migration is a separate `stardust:migrate` step (out of scope for this uplift).
