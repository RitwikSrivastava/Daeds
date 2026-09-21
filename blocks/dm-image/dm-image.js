/**
 * dm-image block.
 *
 * Content is authored as a link to a Dynamic Media asset (DA's
 * "aem.assets.image.type: link" mode) - decorateExternalImages() already
 * converts it to a <picture> earlier in decorateMain(), before block
 * decoration runs, so there's nothing DM-specific left to do here.
 * @param {Element} block The dm-image block element
 */
export default function decorate(block) {
  const picture = block.querySelector('picture');
  if (!picture) return;
  block.textContent = '';
  block.append(picture);
}
