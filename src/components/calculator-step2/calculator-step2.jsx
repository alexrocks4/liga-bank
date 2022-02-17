import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './calculator-step2.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import Price from '../price/price';
import Checkbox from '../checkbox/checkbox';
import { useSelector } from 'react-redux';
import { capitalUpdated, cascoUpdated, lifeInsuranceUpdated, selectCalculatorCreditType, selectCalculatorFormState, selectCapital, selectCasco, selectLifeInsurance } from '../../store/calculatorSlice';
import { CreditType, FormConfig } from '../../const';
import FirstPayment from '../first-payment/first-payment';
import Duration from '../duration/duration';
import { useDispatch } from 'react-redux';

function CalculatorStep2({ className, onChange }) {
  const dispatch = useDispatch();
  const creditType = useSelector(selectCalculatorCreditType);
  const formState = useSelector(selectCalculatorFormState);
  const capital = useSelector(selectCapital);
  const casco = useSelector(selectCasco);
  const lifeInsurance = useSelector(selectLifeInsurance);

  const handleCapitalChange = (evt) => {
    dispatch(capitalUpdated(evt.target.checked));
  };

  const handleCascoChange = (evt) => {
    dispatch(cascoUpdated(evt.target.checked));
  };

  const handleLifeInsuranceChange = (evt) => {
    dispatch(lifeInsuranceUpdated(evt.target.checked));
  };

  const { price } = FormConfig[creditType];
  let checkboxesArea;

  switch (creditType) {
    case CreditType.MORTGAGE:
      checkboxesArea = (
        <p className={styles['calculator-step2__checkbox-container']}>
          <Checkbox
            name="capital"
            text={FormConfig[CreditType.MORTGAGE].capital.label}
            isChecked={capital}
            onChange={handleCapitalChange}
          />
        </p>
      );
      break;
    case CreditType.AUTO:
      checkboxesArea = (
        <>
          <p className={styles['calculator-step2__checkbox-container']}>
            <Checkbox
              name="casco"
              text={FormConfig[CreditType.AUTO].casco.label}
              isChecked={casco}
              onChange={handleCascoChange}
            />
          </p>
          <p className={styles['calculator-step2__checkbox-container']}>
            <Checkbox
              name="lifeInsurance"
              text={FormConfig[CreditType.AUTO].lifeInsurance.label}
              isChecked={lifeInsurance}
              onChange={handleLifeInsuranceChange}
            />
          </p>
        </>
      );
      break;
    default:
      break;
  }

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
      {checkboxesArea}
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
