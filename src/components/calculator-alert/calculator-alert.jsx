import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-alert.module.scss';
import { useSelector } from 'react-redux';
import { selectCalculatorCreditType } from '../../store/calculatorSlice';
import { formatPrice } from '../../utils';
import { CreditType, FormConfig } from '../../const';

function CalculatorAlert({ className }) {
  const currentCreditType = useSelector(selectCalculatorCreditType);
  let creditKind = '';

  switch (currentCreditType) {
    case CreditType.MORTGAGE:
      creditKind = 'ипотечные';
      break;
    case CreditType.AUTO:
      creditKind = 'автокредиты';
      break;
    default:
      break;
  }

  return (
    <section className={classNames(className, styles['calculator-alert'])}>
      <h3 className={styles['calculator-alert__title']}>
        Наш банк не выдаёт {creditKind} кредиты меньше {formatPrice(FormConfig[currentCreditType].min)}.
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
