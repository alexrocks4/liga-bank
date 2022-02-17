import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-step2.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import Price from '../price/price';
import { formatDuration, formatPrice } from '../../utils';
import FormFieldWithRange from '../form-field-with-range/form-field-with-range';
import Checkbox from '../checkbox/checkbox';
import { useSelector } from 'react-redux';
import { selectCalculatorCreditType, selectCalculatorFormState } from '../../store/calculatorSlice';
import { FormConfig } from '../../const';

function CalculatorStep2({ className, onChange }) {
  const creditType = useSelector(selectCalculatorCreditType);
  const formState = useSelector(selectCalculatorFormState);

  const { price, firstPayment, duration } = FormConfig[creditType];

  return (
    <section className={classNames(className, styles['calculator-step2'])}>
      <CalculatorStepTitle className={styles['calculator-step2__title']}>
        Шаг 2. Введите параметры кредита
      </CalculatorStepTitle>
      <Price
        className={styles['calculator-step2__price']}
        data={price}
        value={formState.price}
        onChange={onChange}
      />
      <FormFieldWithRange
        className={styles['calculator-step2__first-payment']}
        inputDefaultValue={formState.firstPayment}
        inputId="firstPayment"
        inputLabel={firstPayment.label}
        inputPattern="/\d.+/"
        inputName="firstPayment"
        rangeDescription="Процент от стоимости"
        rangeMin={firstPayment.minPricePercentage}
        rangeMax={firstPayment.maxPricePercentage}
        rangeDefaultValue={firstPayment.minPricePercentage}
        rangeStep={firstPayment.stepPricePercentage}
        formatInputValue={formatPrice}
        formatRangeValue={(value) => `${value}%`}
        onInputChange={onChange}
      />
      <FormFieldWithRange
        className={styles['calculator-step2__duration']}
        inputDefaultValue={formState.duration}
        inputId="duration"
        inputLabel={duration.label}
        inputPattern="/\d.+/"
        inputName="duration"
        rangeDescription="Срок кредитования"
        rangeMin={duration.min}
        rangeMax={duration.max}
        rangeDefaultValue={formState.duration}
        rangeStep={duration.step}
        isRangeMinMaxShow
        formatRangeMinMax={formatDuration}
        formatInputValue={formatDuration}
        onInputChange={onChange}
      />
      <p className={styles['calculator-step2__capital']}>
        <Checkbox
          className={styles['calculator-step2__capital-checkbox']}
          text="Использовать материнский капитал"
        />
      </p>
    </section>
  );
}

CalculatorStep2.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CalculatorStep2.defaultProps = {
  className: '',
};

export default CalculatorStep2;
