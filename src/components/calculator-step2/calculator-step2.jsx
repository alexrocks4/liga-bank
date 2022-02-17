import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-step2.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import Price from '../price/price';
import Checkbox from '../checkbox/checkbox';
import { useSelector } from 'react-redux';
import { selectCalculatorCreditType, selectCalculatorFormState } from '../../store/calculatorSlice';
import { FormConfig } from '../../const';
import FirstPayment from '../first-payment/first-payment';
import Duration from '../duration/duration';

function CalculatorStep2({ className, onChange }) {
  const creditType = useSelector(selectCalculatorCreditType);
  const formState = useSelector(selectCalculatorFormState);

  const { price } = FormConfig[creditType];

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
      <FirstPayment className={styles['calculator-step2__first-payment']}/>
      <Duration className={styles['calculator-step2__duration']}/>
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
