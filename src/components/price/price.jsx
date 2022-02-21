import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './price.module.scss';
import { formatNumeric, formatPrice, getPrice, isAllowedKey, parseNumeric } from '../../utils';
import Button from '../button/button';
import FormFieldBase from '../form-field-base/form-field-base';
import { useDispatch } from 'react-redux';
import { priceUpdated } from '../../store/calculatorSlice';
import { useState } from 'react';
import { KeyName } from '../../const';

function Price({ className, data, value, onChange }) {
  const {
    label,
    min,
    max,
    step,
  } = data;

  const dispatch = useDispatch();
  const [ isInputFocused, setIsInputFocused ] = useState(false);
  const isInputValueIncorrect = value < min || value > max;

  const handleInputChange = (evt) => {
    dispatch(priceUpdated(parseNumeric(evt.target.value)));
    onChange(evt);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleIncrementClick = () => {
    const newPrice = value + step;
    dispatch(priceUpdated(getPrice(newPrice, min, max)));
  };

  const handleDecrementClick = () => {
    const newPrice = value - step;
    dispatch(priceUpdated(getPrice(newPrice, min, max)));
  };

  const handleKeyDown = (evt) => {
    if (!isAllowedKey(evt.key)) {
      evt.preventDefault();
      return;
    }

    if (evt.key === KeyName.PLUS) {
      handleIncrementClick();
      evt.preventDefault();
    }

    if (evt.key === KeyName.MINUS) {
      handleDecrementClick();
      evt.preventDefault();
    }
  };

  const controls = (
    <>
      <Button
        className={styles['price__increment-button']}
        aria-label="Увеличить стоимость"
        onClick={handleIncrementClick}
      />
      <Button
        className={styles['price__decrement-button']}
        aria-label="Уменьшить стоимость"
        onClick={handleDecrementClick}
      />
    </>
  );

  const description = (
    <span className={styles['price__text']}>
      От {formatNumeric(min)} до {formatPrice(max)}
    </span>
  );

  return (
    <FormFieldBase
      className={classNames(className, styles['price'])}
      label={label}
      id="price"
      name="price"
      value={isInputFocused ? formatNumeric(value) : formatPrice(value)}
      controls={controls}
      description={description}
      isError={isInputValueIncorrect}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onKeyDown={handleKeyDown}
    />
  );
}

Price.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
  }).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

Price.defaultProps = {
  className: '',
};

export default Price;
