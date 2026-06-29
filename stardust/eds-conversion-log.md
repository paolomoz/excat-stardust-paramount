# EDS conversion log — Paramount.com Variant A

**Date:** 2026-06-29
**Source prototype:** `stardust/prototypes/home-A-proposed.html` (Variant A — faithful + improvements)
**Target:** vanilla `aem-boilerplate` runtime (AuthorKit bootstrap abandoned — upstream `author-kit` has no static-fragment runtime at any ref; its earliest commit already uses block-based header/footer, so the deploy flow's mandatory `postlcp.js` static-fragment patch cannot apply. Reverted cleanly to boilerplate and converting on standard EDS conventions.)
**Scope of this run (user-confirmed):** local build + preview QA + commit code. NO git push, NO DA content write, NO publish.

## Runtime deltas vs the deploy SKILL (which assumes AuthorKit)
- No `ak.js` / `postlcp.js` / `body.session` gate / static `fragments/{header,footer}.html`. This repo uses `scripts/aem.js` + `scripts/scripts.js` with standard `blocks/header` + `blocks/footer` driven by `loadHeader`/`loadFooter` and `nav`/`footer` content fragments.
- Header/footer therefore stay as the boilerplate BLOCKS (not static fragments); we restyle them for the Paramount brand.
- Local QA uses the boilerplate dev server (`aem up --html-folder content`, already running on :3000) + a gitignored `qa/` harness page that pulls blocks/styles from the code origin. We do NOT hand-write `content/` (project rule: content is import-pipeline-owned).

## Block plan (single page → block name = section class; no cross-page reuse decisions)

| Prototype section | Block | Kind | Notes |
|---|---|---|---|
| `.hero` | `hero` (REPLACE existing boilerplate hero) | bespoke | navy ground, electric-blue "WE ARE", rotating IP image, script wordmark. Static (Variant A). |
| `.brands` | `brands` | cards-variant | electric-blue band, weighted grid (featured Paramount+ 2×2), 12 IP tiles w/ hover desc. |
| `.careers` | `careers` | split-media | electric-blue field, "SHAPE THE FUTURE", employee portrait, JOIN US CTA. |
| `.relief` | `relief` | text band | paper-white statement break ("One House. Every Story."). |
| header/nav | `blocks/header` + `content/nav` | restyle | Paramount nav (About/News/Careers/Investors), transparent-over-hero. |
| footer | `blocks/footer` + `content/footer` | restyle | deep-navy footer, 4 link columns + legal. |

## Foundation tokens (lifted from prototype `:root`)
- Colors: midnight-navy #000A3C, deep-navy #00072B, electric-blue #0064FF, paper-white #FFFFFF, magenta-pop #D63384.
- Fonts: Paramount Vista Sans (display, condensed) + Peak Sans (body). PROPRIETARY — see LICENSING ALERT below. Self-hosted woff2 under `styles/fonts/` (copied from `stardust/current/assets/fonts/`).
- Type scale: display clamp(64–160px)/lh .9; headline clamp(40–112px); body 18px/lh1.5.
- Radius: 0 (hard rectangles); 50% only for the circular logo mark. No shadows. No gradients (scrims are flat rgba).

## ⚠️ FONT LICENSING REQUIRED BEFORE GOING LIVE
Paramount Vista Sans and Peak Sans are PROPRIETARY Paramount brand fonts (foundry-direct, captured from paramount.com). Self-hosted for fidelity. DO NOT publish to a public aem.live domain until the webfont/embedding license is confirmed. Remove path: delete `styles/fonts/*.woff2` + their `@font-face` rules → stacks fall back to "Arial Narrow"/Arial (display) and Arial (body).

## Images
Variant A reuses captured first-party IP photography from `stardust/current/assets/media/`. For local QA these are served by the dev server at `/stardust/current/assets/media/...`. For a real DA deploy they would be uploaded to `media/` and authored as `content.da.live` URLs (out of scope this run).
