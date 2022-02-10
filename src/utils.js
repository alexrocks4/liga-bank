import { Breakpoint } from './const';

const isEscKeyPressed = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const Media = {
  [Breakpoint.SMALL]: `@media (min-width: ${Breakpoint.SMALL}px)`,
  [Breakpoint.MEDIUM]: `@media (min-width: ${Breakpoint.MEDIUM}px)`,
  [Breakpoint.LARGE]: `@media (min-width: ${Breakpoint.LARGE}px)`,
};

export {
  isEscKeyPressed,
  Media
};
