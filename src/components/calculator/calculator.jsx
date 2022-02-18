import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator.module.scss';
import CalculatorStep1 from '../calculator-step1/calculator-step1';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import CalculatorStep2 from '../calculator-step2/calculator-step2';
import { useSelector } from 'react-redux';
import { selectCalculatorCreditType, selectIsStep2Active, selectIsStep3Active } from '../../store/calculatorSlice';
import { FormConfig, HomeId } from '../../const';
import Proposition from '../proposition/proposition';
import CalculatorAlert from '../calculator-alert/calculator-alert';
import CalculatorStep3 from '../calculator-step3/calculator-step3';
import useCreditSum from '../../hooks/use-credit-sum';

function Calculator({ className }) {
  const isStep2Active = useSelector(selectIsStep2Active);
  const isStep3Active = useSelector(selectIsStep3Active);
  const creditType = useSelector(selectCalculatorCreditType);
  const creditSum = useCreditSum();
  const isAlertVisible = isStep2Active && creditSum < FormConfig[creditType].min;

  const handleInputChange = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className={classNames(className, styles['calculator'])} id={HomeId.CALCULATOR}>
      <WrapperFluid>
        <h2 className={styles['calculator__title']}>Кредитный калькулятор</h2>
        <form className={styles['calculator__form']}>
          <CalculatorStep1
            className={styles['calculator__step1']}
          />

          {isStep2Active &&
          <CalculatorStep2
            className={styles['calculator__step2']}
            onChange={handleInputChange}
          />}

          {isStep2Active && isAlertVisible &&
          <CalculatorAlert
            className={styles['calculator__step2-alert']}
          />}

          {isStep2Active && !isAlertVisible &&
          <Proposition
            className={styles['calculator__step2-proposition']}
          />}

          {isStep3Active &&
          <CalculatorStep3
            className={styles['calculator__step3']}
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
