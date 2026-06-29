/**
 * Brands block — weighted portfolio grid.
 * Content model: one row per brand tile.
 *   cell 1: brand image (picture/img)
 *   cell 2: brand name (first line / heading) + description
 * The first tile is rendered as the featured flagship (2x2).
 */
export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row, i) => {
    const cells = [...row.children];
    const imageCell = cells[0];
    const textCell = cells[1];

    row.className = 'brand-tile';
    if (i === 0) row.classList.add('brand-tile-featured');

    // image
    const picture = imageCell && imageCell.querySelector('picture, img');
    if (picture) {
      const media = document.createElement('div');
      media.className = 'brand-media';
      media.append(picture.closest('picture') || picture);
      row.prepend(media);
    }
    if (imageCell) imageCell.remove();

    // label (name + description)
    if (textCell) {
      textCell.className = 'brand-label';
      const name = textCell.querySelector('h1, h2, h3, h4, h5, h6, strong, p');
      if (name) {
        const nameEl = document.createElement('span');
        nameEl.className = 'brand-name';
        nameEl.textContent = name.textContent.trim();
        const rest = [...textCell.children].slice(1)
          .map((p) => p.textContent.trim()).filter(Boolean).join(' ');
        textCell.textContent = '';
        textCell.append(nameEl);
        if (rest) {
          const desc = document.createElement('span');
          desc.className = 'brand-desc';
          desc.textContent = rest;
          textCell.append(desc);
        }
      }
    }

    // make the whole tile a link if the label carried one
    const link = row.querySelector('a[href]');
    if (link) {
      row.classList.add('brand-tile-link');
    }
  });
}
