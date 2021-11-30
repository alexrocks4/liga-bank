import PropTypes from 'prop-types';

const childrenProp = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.string,
]);

export { childrenProp };
