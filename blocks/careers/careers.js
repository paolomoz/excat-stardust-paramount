/**
 * Careers block — split-media CTA band ("SHAPE THE FUTURE").
 * Content model (one row, two cells):
 *   cell 1: copy — heading + body + CTA link
 *   cell 2: portrait image (picture/img)
 */
export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  const cells = [...row.children];
  const copyCell = cells[0];
  const mediaCell = cells[1];

  if (copyCell) copyCell.className = 'careers-copy';

  if (mediaCell) {
    mediaCell.className = 'careers-media';
    const picture = mediaCell.querySelector('picture, img');
    if (picture) {
      mediaCell.textContent = '';
      mediaCell.append(picture.closest('picture') || picture);
    }
  }

  // promote the CTA link to a button
  const cta = copyCell && copyCell.querySelector('a[href]');
  if (cta) {
    cta.classList.add('button', 'primary');
    const wrap = cta.closest('p');
    if (wrap) wrap.classList.add('button-wrapper');
  }
}
