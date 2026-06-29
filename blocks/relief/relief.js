/**
 * Relief block — paper-white statement band that breaks the navy scroll.
 * Content model (one row, one cell): heading + supporting line.
 */
export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  const cell = row.firstElementChild;
  if (cell) cell.className = 'relief-inner';
}
