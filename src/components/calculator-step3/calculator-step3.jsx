import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDuration, formatPrice } from '../../utils';
import styles from './calculator-step3.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import ButtonPrimary from '../button-primary/button-primary';

function CalculatorStep3({ className }) {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className={classNames(className, styles['calculator-step3'])}>
      <CalculatorStepTitle className={styles['calculator-step3__title']}>
        Шаг 3. Оформление заявки
      </CalculatorStepTitle>

      <dl className={styles['calculator-step3__order']}>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Номер заявки</dt>
          <dd className={styles['calculator-step3__definition']}>№ 0010</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Цель кредита</dt>
          <dd className={styles['calculator-step3__definition']}>Ипотека</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Стоимость недвижимости</dt>
          <dd className={styles['calculator-step3__definition']}>{formatPrice(2000000)}</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Первоначальный взнос</dt>
          <dd className={styles['calculator-step3__definition']}>{formatPrice(200000)}</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Срок кредитования</dt>
          <dd className={styles['calculator-step3__definition']}>{formatDuration(5)}</dd>
        </div>
      </dl>

      <p className={styles['calculator-step3__contacts']}>
        <label
          className={styles['calculator-step3__label']}
          htmlFor="fio"
          aria-label="ФИО"
        >
          <input
            type="text"
            className={styles['calculator-step3__input']}
            name="fio"
            placeholder="ФИО"
          />
        </label>

        <label
          className={styles['calculator-step3__label']}
          htmlFor="phone"
          aria-label="Телефон"
        >
          <input
            type="text"
            className={styles['calculator-step3__input']}
            name="phone"
            placeholder="Телефон"
          />
        </label>

        <label
          className={styles['calculator-step3__label']}
          htmlFor="email"
          aria-label="E-mail"
        >
          <input
            type="text"
            className={styles['calculator-step3__input']}
            name="email"
            placeholder="E-mail"
          />
        </label>
      </p>

      <div className={styles['calculator-step3__button-container']}>
        <ButtonPrimary
          className={styles['calculator-step3__button']}
          type="submit"
          isMedium
          isWide
          onClick={handleButtonClick}
        >
          Отправить
        </ButtonPrimary>
      </div>
    </section>
  );
}

CalculatorStep3.propTypes = {
  className: PropTypes.string.isRequired,
};

CalculatorStep3.defaultProps = {
  className: '',
};

export default CalculatorStep3;
