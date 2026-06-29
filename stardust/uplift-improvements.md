---
_provenance:
  writtenBy: stardust:uplift
  writtenAt: 2026-06-29T15:00:00Z
  againstInput: https://www.paramount.com/
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/index.json
    - stardust/current/brand-review.html
---

# Improvements — https://www.paramount.com/

1. **[dated-pattern]** The brand portfolio is an undifferentiated 4×3 logo wall — Twelve equal-size portrait tiles (Paramount+, Pictures, CBS, Pluto, MTV, Nick, CBS Sports, Sports Ent., BET, Skydance, CBS News, Comedy Central) share identical visual weight with no hierarchy or rhythm. The flagship Paramount+ gets the same footprint as a sub-brand. This is the 2018 "our brands" logo-wall pattern; a modern portfolio leads with a featured brand and lets the rest play supporting scale.

2. **[ia-clutter]** The hero stacks four competing typographic statements with no single claim — "WE ARE" (electric-blue SVG) + script "Paramount" wordmark + "A SKYDANCE CORPORATION" + "MORE OF / WHAT YOU LOVE" all fight for the first viewport (captured headings: `h2 "More Of"`, `h1 "What you love"`). The eye has no focal proposition; the rotating IP behind it competes further. One headline should win.

3. **[contrast-or-density]** Flat two-field color goes monotone across the full scroll — The page runs navy → electric-blue → navy → navy (careers) → navy (footer) with no tonal relief, texture, or intermediate value. The careers band and footer visually merge; over a full-page scroll the single dynamic range flattens the energy that the hero establishes. (Source: `_brand-extraction.json#palette` — only navy/blue/white in structural use, `#motifs.shadows: []`.)

4. **[cliché]** The careers CTA is the default corporate single-portrait band — "SHAPE THE FUTURE / FUTURE / JOIN US" with one smiling employee portrait on navy (`Career_Person_01_720x738.png`) is the generic recruiting module every Fortune-500 site ships. It borrows none of the IP star-power the rest of the page has, so the most human section is the least Paramount-feeling.

5. **[missed-opportunity]** The IP carousel — the best asset on the site — is trapped in the hero — The auto-rotating SpongeBob / Zoe / NCIS / RuPaul / Star Trek imagery (`_brand-extraction.json#heroImagery.rotatingIP`, 5 large 1280×956 stills) is the most alive, most emotionally loaded thing on the page, but it appears exactly once, behind a wordmark, and never reappears. The star power and motion never carry into the portfolio, the careers story, or the proposition.
