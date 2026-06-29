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

# "What if…" candidates — https://www.paramount.com/

## Picked

### Variant C · Display-typography amplification
What if: "What if Paramount Vista Sans stopped being a hero trick and became the page's structural voice — in motion?"
Cinematic register: `kinetic-display`
Evidence: `_brand-extraction.json#type` — proprietary "Paramount Vista Sans" condensed runs at 112–160px but **only** in the hero ("WE ARE") and one section title ("WHAT YOU LOVE" / "FUTURE"). Everything else (nav, body, tiles, footer) is quiet Peak Sans. The signature face is reserved for two moments.
Motion bet: Giant display words split, mask-reveal, and track on scroll; section headers arrive as kinetic type. The brand's loudest instrument plays through the whole page, not just the overture.

### Variant B · Photography re-foregrounding
What if: "What if the IP photography breathed at editorial scale instead of being cropped into a 12-up logo wall?"
Captured trait amplified: IP / brand photography
Evidence: `_brand-extraction.json#heroImagery.rotatingIP` (5 stills at 1280×956) and `#brandTiles` (12 assets shot at 767×767) are high-quality first-party IP photography, but the layout crops them to equal thumbnail tiles (tension #1) and traps the best stills in the hero (tension #5).
Composition bet: Lead with one full-bleed featured brand at 3:2, then an asymmetric editorial mosaic where flagship brands get 2× weight. Photo-first composition with title overlays in the lower band — the stars carry the layout, not a caption.

## Disqualified

- **Live-data promotion** — disqualified: paramount.com is a corporate brand surface with no operational/live data (no wait times, inventory, tickers, status). The two iframes captured are tracking pixels, not data. Nothing to promote.
- **Voice-register pivot** — disqualified: captured voice samples are tonally uniform (bold/celebratory throughout — "WE ARE", "WHAT YOU LOVE", "SHAPE THE FUTURE"). No underused secondary tone in the margins to foreground.

## Considered but not picked

- **Signature-gesture extension** (script "Paramount" wordmark + "WE ARE" lockup) — strong trigger and a natural `arrival`/`kinetic-display` candidate, but it amplifies the *same* typographic territory as C's display-amplification bet. Picking it for B would collapse B↔C differentiation onto one axis (uplift Stop condition (d)). Folded into C's kinetic treatment instead.
- **Color-ladder re-weighting** (promote reserved magenta #D63384, 6 hits) — real trigger, but Mode A pins palette proportions conservatively and the brand's identity is the navy/blue duotone; over-promoting magenta risks drifting off-brand. Used as A's small accent fix rather than a B-level bet.
- **Audience-routing reframe** (investors / careers / press / fans compressed) — moderate trigger (4 nav pillars), but the homepage's job is the unified portfolio statement; foregrounding one audience would fight the "WE ARE one house" proposition. Better handled by sub-pages than the home uplift.
- **Motif vocabulary swap** (card-grid → indexed list / overlay banner) — viable `kinetic-grid` candidate, but B's photography re-foregrounding already restructures the grid into an editorial mosaic, so the swap is partially absorbed by B's composition bet.
