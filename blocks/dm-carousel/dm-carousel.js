import decorateCarousel from '../../scripts/carousel.js';

export default async function decorate(block) {
  block.classList.add('carousel');
  await decorateCarousel(block);
}
