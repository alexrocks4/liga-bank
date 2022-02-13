import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './range.module.scss';

function Range({
  className,
  description,
  min,
  max,
  step,
  value,
  isMinMaxShow,
  formatValue,
  formatMinMax,
}) {
  return (
    <p className={classNames(className, styles['range'])}>
      <label className="range__label">
        <span className="visually-hidden">{description}</span>
        <input
          className={styles['range__input']}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
        />
        <span className={styles['range__text']}>
          <span>{isMinMaxShow ? formatMinMax(min) : formatValue(value)}</span>
          <span>{isMinMaxShow && formatMinMax(max)}</span>
        </span>
      </label>
    </p>
  );
}

Range.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  isMinMaxShow: PropTypes.bool,
  formatValue: PropTypes.func,
  formatMinMax: PropTypes.func,
};

Range.defaultProps = {
  className: '',
  isMinMaxShow: false,
  max: 100,
  formatValue: (value) => value,
  formatMinMax: (value) => value,
};

export default Range;
