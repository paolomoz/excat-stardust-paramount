/**
 * Hero block — Paramount "WE ARE" brand statement.
 * Content model (one cell per row):
 *   row 1: the big statement text (e.g. "WE ARE")
 *   row 2: the foreground IP image (picture/img)
 *   row 3: the brand wordmark image (picture/img) — optional
 * Layers: statement behind, IP image in front, wordmark over the lockup.
 */
export default function decorate(block) {
  const rows = [...block.children];
  const [statementRow, ipRow, wordmarkRow] = rows;

  block.textContent = '';

  if (statementRow) {
    const statement = document.createElement('div');
    statement.className = 'hero-statement';
    statement.setAttribute('aria-hidden', 'true');
    statement.textContent = (statementRow.textContent || '').trim();
    block.append(statement);
  }

  const ipPicture = ipRow && ipRow.querySelector('picture, img');
  if (ipPicture) {
    const stage = document.createElement('div');
    stage.className = 'hero-ip';
    stage.append(ipPicture.closest('picture') || ipPicture);
    block.append(stage);
  }

  const wordmarkPicture = wordmarkRow && wordmarkRow.querySelector('picture, img');
  if (wordmarkPicture) {
    const lockup = document.createElement('div');
    lockup.className = 'hero-wordmark';
    lockup.append(wordmarkPicture.closest('picture') || wordmarkPicture);
    block.append(lockup);
  }
}
