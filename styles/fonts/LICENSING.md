# Font licensing — REQUIRED BEFORE GOING LIVE

These webfonts are **proprietary Paramount brand fonts**, captured from paramount.com and self-hosted for visual fidelity during the redesign uplift. They are **not** licensed for redistribution by default.

| File | Family | Foundry | Status |
|---|---|---|---|
| ParamountVistaSans-CondensedRegular.woff2 | Paramount Vista Sans | Paramount (foundry-direct) | ⚠️ license unconfirmed |
| ParamountVistaSans-CondensedBold.woff2 | Paramount Vista Sans | Paramount (foundry-direct) | ⚠️ license unconfirmed |
| PeakSans-Regular.woff2 | Peak Sans | Paramount (foundry-direct) | ⚠️ license unconfirmed |
| PeakSans-Semibold.woff2 | Peak Sans | Paramount (foundry-direct) | ⚠️ license unconfirmed |

**DO NOT publish to a public `aem.live` domain until the webfont/embedding license is confirmed with Paramount.**

## Remove path (fall back to system fonts)
If licensing cannot be confirmed:
1. Delete the four `.woff2` files in this folder.
2. Remove the four `@font-face` rules for "Paramount Vista Sans" and "Peak Sans" in `styles/styles.css`.
3. The font stacks fall back automatically: display → `"Arial Narrow", Arial, sans-serif` (condensed-preserving), body → `Arial, Helvetica, sans-serif`.
