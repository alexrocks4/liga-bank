import { Breakpoint, DECIMAL_RADIX, Noun } from './const';

const isEscKeyPressed = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const Media = {
  [Breakpoint.SMALL]: `@media (min-width: ${Breakpoint.SMALL}px)`,
  [Breakpoint.MEDIUM]: `@media (min-width: ${Breakpoint.MEDIUM}px)`,
  [Breakpoint.LARGE]: `@media (min-width: ${Breakpoint.LARGE}px)`,
};

function getNoun(number, nouns) {
  number %= 100;

  if (number >= 5 && number <= 20) {
    return nouns[2];
  }

  number %= 10;

  if (number === 1) {
    return nouns[0];
  }

  if (number >= 2 && number <= 4) {
    return nouns[1];
  }

  return nouns[2];
}

const formatPrice = (price) => {
  if (!Number.isInteger(price)) {
    return;
  }

  return price.toString(DECIMAL_RADIX).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const formatDuration = (duration) => {
  if (!Number.isInteger(duration)) {
    return;
  }

  return `${duration} ${getNoun(duration, Noun.YEARS)}`;
};


export {
  isEscKeyPressed,
  Media,
  formatPrice,
  formatDuration
};
