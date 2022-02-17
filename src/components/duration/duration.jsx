import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './duration.module.scss';
import { durationUpdated, selectCalculatorCreditType, selectDuration } from '../../store/calculatorSlice';
import { FormConfig } from '../../const';
import { formatDuration, formatNumeric, isAllowedKey, parseNumeric } from '../../utils';
import { useSelector } from 'react-redux';
import FormFieldWithRange from '../form-field-with-range/form-field-with-range';
import { useDispatch } from 'react-redux';

function Duration({ className }) {
  const dispatch = useDispatch();
  const creditType = useSelector(selectCalculatorCreditType);
  const durationState = useSelector(selectDuration);
  const [ isInputFocused, setIsInputFocused ] = useState(false);
  const { duration } = FormConfig[creditType];

  const handleInputChange = (evt) => {
    dispatch(durationUpdated(parseNumeric(evt.target.value)));
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

  return (
    <FormFieldWithRange
      className={classNames(className, styles['duration'])}
      inputValue={durationState}
      inputId="duration"
      inputLabel={duration.label}
      inputPattern="/\d.+/"
      inputName="duration"
      rangeDescription="Срок кредитования"
      rangeMin={duration.min}
      rangeMax={duration.max}
      rangeValue={durationState}
      rangeStep={duration.step}
      isRangeMinMaxShow
      formatRangeMinMax={formatDuration}
      formatInputValue={isInputFocused ? formatNumeric : formatDuration}
      onInputChange={handleInputChange}
      onInputFocus={handleInputFocus}
      onInputBlur={handleInputBlur}
      onInputKeyDown={handleKeyDown}
      onRangeChange={handleInputChange}
    />
  );
}

Duration.propTypes = {
  className: PropTypes.string.isRequired,
};

Duration.defaultProps = {
  className: '',
};

export default Duration;
