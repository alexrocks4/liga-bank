import { Breakpoint, DECIMAL_RADIX } from './const';

const isEscKeyPressed = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const Media = {
  [Breakpoint.SMALL]: `@media (min-width: ${Breakpoint.SMALL}px)`,
  [Breakpoint.MEDIUM]: `@media (min-width: ${Breakpoint.MEDIUM}px)`,
  [Breakpoint.LARGE]: `@media (min-width: ${Breakpoint.LARGE}px)`,
};

const formatPrice = (price) => {
  if (!Number.isInteger(price)) {
    return;
  }

  return price.toString(DECIMAL_RADIX).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};


export {
  isEscKeyPressed,
  Media,
  formatPrice
};
