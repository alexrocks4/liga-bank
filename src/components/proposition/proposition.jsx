import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './proposition.module.scss';
import ButtonPrimary from '../button-primary/button-primary';
import { formatPrice } from '../../utils';
import { useDispatch } from 'react-redux';
import { selectCalculatorCreditType, selectDuration, stepUpdated } from '../../store/calculatorSlice';
import { CreditType, FormStep } from '../../const';
import { useSelector } from 'react-redux';
import useCreditSum from '../../hooks/use-credit-sum';
import useInterestRate from '../../hooks/use-interest-rate';
import { getMonthlyPayment, getRequiredIncome } from '../../app/app';


function Proposition({ className }) {
  const dispatch = useDispatch();
  const creditType = useSelector(selectCalculatorCreditType);
  const duration = useSelector(selectDuration);
  const sum = useCreditSum();
  const interestRate = useInterestRate();
  const monthlyPayment = getMonthlyPayment(sum, interestRate, duration);
  const requiredIncome = getRequiredIncome(monthlyPayment);

  let sumTitle = '';

  switch (creditType) {
    case CreditType.MORTGAGE:
      sumTitle = 'Сумма ипотеки';
      break;
    case CreditType.AUTO:
      sumTitle = 'Сумма автокредита';
      break;
    default:
      break;
  }

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(stepUpdated(FormStep.THIRD));
  };

  return (
    <section className={classNames(className, styles['proposition'])}>
      <h3 className={styles['proposition__title']}>Наше предложение</h3>
      <dl className={styles['proposition__list']}>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>{sumTitle}</dt>
          <dd className={styles['proposition__definition']}>{formatPrice(sum)}</dd>
        </div>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Процентная ставка</dt>
          <dd className={styles['proposition__definition']}>{interestRate}%</dd>
        </div>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Ежемесячный платеж</dt>
          <dd className={styles['proposition__definition']}>{formatPrice(monthlyPayment)}</dd>
        </div>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Необходимый доход</dt>
          <dd className={styles['proposition__definition']}>{formatPrice(requiredIncome)}</dd>
        </div>
      </dl>
      <ButtonPrimary
        className={styles['proposition__button']}
        isMedium
        isWide
        onClick={handleButtonClick}
      >
        Оформить заявку
      </ButtonPrimary>
    </section>
  );
}

Proposition.propTypes = {
  className: PropTypes.string.isRequired,
};

Proposition.defaultProps = {
  className: '',
};

export default Proposition;
