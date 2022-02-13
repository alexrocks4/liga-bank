import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-step2.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import Price from '../price/price';
import FormFieldBase from '../form-field-base/form-field-base';
import { formatPrice } from '../../utils';
import Range from '../range/range';

function CalculatorStep2({ className, data }) {
  const { price, firstPayment } = data;

  return (
    <section className={classNames(className, styles['calculator-step2'])}>
      <CalculatorStepTitle className={styles['calculator-step2__title']}>
        Шаг 2. Введите параметры кредита
      </CalculatorStepTitle>
      <Price className={styles['calculator-step2__price']} data={price}/>
      <FormFieldBase
        className={styles['calculator-step2__first-payment']}
        label={firstPayment.label}
        id="firstPayment"
        pattern="/\d.+/"
        name="firstPayment"
        value={`${formatPrice(firstPayment.defaultValue)} рублей`}
        onChange={() => {}}
      />
      <Range
        className={styles['calculator-step2__first-payment-range']}
        description="Процент от стоимости"
        min={firstPayment.minPricePercentage}
        step={firstPayment.stepPricePercentage}
        value={firstPayment.minPricePercentage}
        formatValue={(value) => `${value}%`}
        onChange={() => {}}
      />
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
      stepPricePercentage: PropTypes.number,
      defaultValue: PropTypes.number,
    }).isRequired,
    duration:  PropTypes.shape({
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
