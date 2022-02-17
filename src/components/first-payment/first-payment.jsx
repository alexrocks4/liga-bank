import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './first-payment.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FormConfig } from '../../const';
import { firstPaymentPercentUpdated, firstPaymentUpdated, selectCalculatorCreditType, selectCalculatorFormState, selectFirstPaymentPercent } from '../../store/calculatorSlice';
import FormFieldWithRange from '../form-field-with-range/form-field-with-range';
import { formatNumeric, formatPrice, isAllowedKey, parseNumeric } from '../../utils';

function FirstPayment({ className }) {
  const dispatch = useDispatch();
  const creditType = useSelector(selectCalculatorCreditType);
  const firstPaymentPercentState = useSelector(selectFirstPaymentPercent);
  const { firstPayment: firstPaymentState } = useSelector(selectCalculatorFormState);
  const [ isInputFocused, setIsInputFocused ] = useState(false);

  const { firstPayment } = FormConfig[creditType];

  const handleInputChange = (evt) => {
    dispatch(firstPaymentUpdated(parseNumeric(evt.target.value)));
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleKeyDown = (evt) => {
    if (!isAllowedKey(evt.key)) {
      evt.preventDefault();
    }
  };

  const handleRangeChange = (evt) => {
    dispatch(firstPaymentPercentUpdated(evt.target.value));
  };

  return (
    <FormFieldWithRange
      className={classNames(className, styles['first-payment'])}
      inputValue={firstPaymentState}
      inputId="firstPayment"
      inputLabel={firstPayment.label}
      inputPattern="/\d.+/"
      inputName="firstPayment"
      rangeDescription="Процент от стоимости"
      rangeMin={firstPayment.minPricePercentage}
      rangeMax={firstPayment.maxPricePercentage}
      rangeValue={firstPaymentPercentState}
      rangeStep={firstPayment.stepPricePercentage}
      formatInputValue={isInputFocused ? formatNumeric : formatPrice}
      formatRangeValue={(value) => `${value}%`}
      onInputChange={handleInputChange}
      onInputFocus={handleInputFocus}
      onInputBlur={handleInputBlur}
      onInputKeyDown={handleKeyDown}
      onRangeChange={handleRangeChange}
    />
  );
}

FirstPayment.propTypes = {
  className: PropTypes.string.isRequired,
};

FirstPayment.defaultProps = {
  className: '',
};

export default FirstPayment;
