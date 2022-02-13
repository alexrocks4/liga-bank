import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator.module.scss';
import CalculatorStep1 from '../calculator-step1/calculator-step1';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import CalculatorStep2 from '../calculator-step2/calculator-step2';
import { useSelector } from 'react-redux';
import { selectCalculatorCreditType, selectIsStep2Active } from '../../store/calculatorSlice';
import { FormConfig } from '../../const';

function Calculator({ className }) {
  const isStep2Active = useSelector(selectIsStep2Active);
  const creditType = useSelector(selectCalculatorCreditType);

  return (
    <section className={classNames(className, styles['calculator'])}>
      <WrapperFluid>
        <h2 className={styles['calculator__title']}>Кредитный калькулятор</h2>
        <form className={styles['calculator__form']}>
          <CalculatorStep1
            className={styles['calculator__step1']}
          />

          {isStep2Active &&
          <CalculatorStep2
            className={styles['calculator__step2']}
            data={FormConfig[creditType]}
          />}

        </form>
      </WrapperFluid>
    </section>
  );
}

Calculator.propTypes = {
  className: PropTypes.string.isRequired,
};

Calculator.defaultProps = {
  className: '',
};

export default Calculator;
