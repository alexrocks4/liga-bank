import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator.module.scss';
import CalculatorStep1 from '../calculator-step1/calculator-step1';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';

function Calculator({ className }) {
  return (
    <section className={classNames(className, styles['calculator'])}>
      <WrapperFluid>
        <h2 className={styles['calculator__title']}>Кредитный калькулятор</h2>
        <form className={styles['calculator__form']}>
          <CalculatorStep1
            className={styles['calculator__step1']}
          />
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
