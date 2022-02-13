import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-step2.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import Price from '../price/price';
import { formatDuration, formatPrice } from '../../utils';
import FormFieldWithRange from '../form-field-with-range/form-field-with-range';
import Checkbox from '../checkbox/checkbox';

function CalculatorStep2({ className, data }) {
  const { price, firstPayment, duration } = data;

  return (
    <section className={classNames(className, styles['calculator-step2'])}>
      <CalculatorStepTitle className={styles['calculator-step2__title']}>
        Шаг 2. Введите параметры кредита
      </CalculatorStepTitle>
      <Price className={styles['calculator-step2__price']} data={price}/>
      <FormFieldWithRange
        className={styles['calculator-step2__first-payment']}
        inputDefaultValue={firstPayment.defaultValue}
        inputId="firstPayment"
        inputLabel={firstPayment.label}
        inputPattern="/\d.+/"
        inputName="firstPayment"
        rangeDescription="Процент от стоимости"
        rangeMin={firstPayment.minPricePercentage}
        rangeMax={firstPayment.maxPricePercentage}
        rangeDefaultValue={firstPayment.minPricePercentage}
        rangeStep={firstPayment.stepPricePercentage}
        formatInputValue={(value) => `${formatPrice(value)} рублей`}
        formatRangeValue={(value) => `${value}%`}
        onInputChange={() => {}}
      />
      <FormFieldWithRange
        className={styles['calculator-step2__duration']}
        inputDefaultValue={duration.defaultValue}
        inputId="duration"
        inputLabel={duration.label}
        inputPattern="/\d.+/"
        inputName="duration"
        rangeDescription="Срок кредитования"
        rangeMin={duration.min}
        rangeMax={duration.max}
        rangeDefaultValue={duration.defaultValue}
        rangeStep={duration.step}
        isRangeMinMaxShow
        formatRangeMinMax={formatDuration}
        formatInputValue={formatDuration}
        onInputChange={() => {}}
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
  data: PropTypes.shape({
    price: PropTypes.shape({
      label: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      defaultValue: PropTypes.number,
    }).isRequired,
    firstPayment: PropTypes.shape({
      label: PropTypes.string,
      minPricePercentage: PropTypes.number,
      maxPricePercentage: PropTypes.number,
      stepPricePercentage: PropTypes.number,
      defaultValue: PropTypes.number,
    }).isRequired,
    duration:  PropTypes.shape({
      label: PropTypes.string,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      defaultValue: PropTypes.number,
    }).isRequired,
    capital: PropTypes.shape({
      sum: PropTypes.number,
    }).isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
};

CalculatorStep2.defaultProps = {
  className: '',
};

export default CalculatorStep2;
