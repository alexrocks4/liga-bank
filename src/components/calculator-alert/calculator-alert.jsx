import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-alert.module.scss';

function CalculatorAlert({ className }) {
  return (
    <section className={classNames(className, styles['calculator-alert'])}>
      <h3 className={styles['calculator-alert__title']}>
        Наш банк не выдаёт ипотечные кредиты меньше 200 000 рублей.
      </h3>
      <p className={styles['calculator-alert__text']}>
        Попробуйте использовать другие параметры для расчёта.
      </p>
    </section>
  );
}

CalculatorAlert.propTypes = {
  className: PropTypes.string.isRequired,
};

CalculatorAlert.defaultProps = {
  className: '',
};

export default CalculatorAlert;
