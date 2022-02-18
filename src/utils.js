import { Breakpoint, DECIMAL_RADIX, KeyName, Noun, REQUEST_NUMBER_MIN_LENGTH } from './const';

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

const formatNumeric = (numeric) => {
  if (!Number.isInteger(numeric)) {
    return;
  }

  return numeric.toString(DECIMAL_RADIX).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const formatPrice = (price) => `${formatNumeric(price)} ${getNoun(price, Noun.RUB)}`;

const formatDuration = (duration) => {
  if (!Number.isInteger(duration)) {
    return;
  }

  return `${duration} ${getNoun(duration, Noun.YEARS)}`;
};

const parseNumeric = (value) => {
  const parsedNumber = parseInt(value.split(' ').join(''), DECIMAL_RADIX);

  return Number.isNaN(parsedNumber) ? 0 : parsedNumber;
};

const isAllowedKey = (key) => (
  /^\d$/.test(key)
  || key === KeyName.TAB
  || key === KeyName.ENTER
  || key === KeyName.BACKSPACE
  || key === KeyName.DELETE
  || key === KeyName.ARROWLEFT
  || key === KeyName.ARROWRIGHT
  || key === KeyName.PLUS
  || key === KeyName.MINUS
);

const formatRequestNumber = (number) => number.toString().padStart(REQUEST_NUMBER_MIN_LENGTH, 0);

export {
  isEscKeyPressed,
  Media,
  formatPrice,
  formatDuration,
  formatNumeric,
  parseNumeric,
  isAllowedKey,
  formatRequestNumber
};
