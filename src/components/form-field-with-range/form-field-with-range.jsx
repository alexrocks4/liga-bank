import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form-field-with-range.module.scss';
import FormFieldBase from '../form-field-base/form-field-base';
import Range from '../range/range';

function FormFieldWithRange({
  className,
  inputDefaultValue,
  inputId,
  inputLabel,
  inputPattern,
  inputName,
  rangeDescription,
  rangeMin,
  rangeMax,
  rangeStep,
  rangeDefaultValue,
  isRangeMinMaxShow,
  formatRangeMinMax,
  formatInputValue,
  formatRangeValue,
  onInputChange,
}) {
  return (
    <div className={classNames(className, styles['form-field-with-range'])}>
      <FormFieldBase
        className={styles['form-field-with-range__field-base']}
        label={inputLabel}
        id={inputId}
        pattern={inputPattern}
        name={inputName}
        value={formatInputValue(inputDefaultValue)}
        onChange={onInputChange}
      />
      <Range
        className={styles['form-field-with-range__range']}
        description={rangeDescription}
        min={rangeMin}
        max={rangeMax}
        step={rangeStep}
        value={rangeDefaultValue}
        isMinMaxShow={isRangeMinMaxShow}
        formatMinMax={formatRangeMinMax}
        formatValue={formatRangeValue}
        onChange={() => {}}
      />
    </div>
  );
}

FormFieldWithRange.propTypes = {
  className: PropTypes.string.isRequired,
  inputDefaultValue: PropTypes.number.isRequired,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputPattern: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  rangeDescription: PropTypes.string.isRequired,
  rangeMin: PropTypes.number.isRequired,
  rangeMax: PropTypes.number.isRequired,
  rangeDefaultValue: PropTypes.number.isRequired,
  rangeStep: PropTypes.number.isRequired,
  isRangeMinMaxShow: PropTypes.bool.isRequired,
  formatRangeMinMax: PropTypes.func.isRequired,
  formatInputValue: PropTypes.func.isRequired,
  formatRangeValue: PropTypes.func,
  onInputChange: PropTypes.func.isRequired,
};

FormFieldWithRange.defaultProps = {
  className: '',
  isRangeMinMaxShow: false,
  formatRangeMinMax: (value) => value,
};

export default FormFieldWithRange;
