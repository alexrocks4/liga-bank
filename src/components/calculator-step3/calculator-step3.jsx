import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatDuration, formatPrice, formatRequestNumber } from '../../utils';
import styles from './calculator-step3.module.scss';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';
import ButtonPrimary from '../button-primary/button-primary';
import useModal from '../../hooks/use-modal';
import ModalSuccess from '../modal-success/modal-success';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorResetted, requestNumberUpdated, selectCalculatorCreditType, selectDuration, selectFirstPayment, selectPrice, selectRequestNumber } from '../../store/calculatorSlice';
import { CreditType, LocalStorageKey } from '../../const';
import { useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../../local-storage';

const InputName = {
  FIO: 'fio',
  PHONE: 'phone',
  EMAIL: 'email',
};

const textContent = {
  [CreditType.MORTGAGE]: {
    creditType: 'Ипотека',
    price: 'Стоимость недвижимости',
  },
  [CreditType.AUTO]: {
    creditType: 'Автокредит',
    price: 'Стоимость автомобиля',
  },
};

const initialFormData = {
  fio: '',
  phone: '',
  email: '',
};

function CalculatorStep3({ className }) {
  const [isModalOpened, handleModalClose, handleModalOpen] = useModal();
  const dispatch = useDispatch();
  const requestNumber = useSelector(selectRequestNumber) + 1;
  const creditType = useSelector(selectCalculatorCreditType);
  const price = useSelector(selectPrice);
  const firstPayment = useSelector(selectFirstPayment);
  const duration = useSelector(selectDuration);
  const [formData, setFormData] = useState(initialFormData);

  const [ isFormCorrect, setIsFormCorrect ] = useState(true);

  useEffect(() => {
    const localStorageAuthData = loadFromLocalStorage(LocalStorageKey.LIGA_BANK_USER_INFO);

    if (localStorageAuthData) {
      setFormData(localStorageAuthData);
    }
  }, []);

  const handleButtonClick = (evt) => {
    if (!(formData.fio && formData.phone && formData.email)) {
      setIsFormCorrect(false);
      return;
    }

    saveToLocalStorage(LocalStorageKey.LIGA_BANK_USER_INFO, formData);
    dispatch(requestNumberUpdated(requestNumber));
    handleModalOpen(evt);
  };

  const handleModalSuccessClose = (evt) => {
    handleModalClose(evt);
    dispatch(calculatorResetted());
  };

  const handleInputChange = (evt) => {
    if (evt.target.name === InputName.PHONE && !/^\+?[\d()]*$/.test(evt.target.value)) {
      return;
    }

    setFormData((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <section className={classNames(
      className,
      styles['calculator-step3'],
      { [styles['calculator-step3--swing']]: !isFormCorrect })}
    >
      <CalculatorStepTitle className={styles['calculator-step3__title']}>
        Шаг 3. Оформление заявки
      </CalculatorStepTitle>

      <dl className={styles['calculator-step3__order']}>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Номер заявки</dt>
          <dd className={styles['calculator-step3__definition']}>№ {formatRequestNumber(requestNumber)}</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Цель кредита</dt>
          <dd className={styles['calculator-step3__definition']}>{textContent[creditType].creditType}</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>{textContent[creditType].price}</dt>
          <dd className={styles['calculator-step3__definition']}>{formatPrice(price)}</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Первоначальный взнос</dt>
          <dd className={styles['calculator-step3__definition']}>{formatPrice(firstPayment)}</dd>
        </div>
        <div className={styles['calculator-step3__order-item']}>
          <dt className={styles['calculator-step3__term']}>Срок кредитования</dt>
          <dd className={styles['calculator-step3__definition']}>{formatDuration(duration)}</dd>
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
            value={formData.fio}
            name={InputName.FIO}
            placeholder="ФИО"
            autoFocus
            onChange={handleInputChange}
            required
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
            value={formData.phone}
            name={InputName.PHONE}
            placeholder="Телефон"
            onChange={handleInputChange}
            required
          />
        </label>

        <label
          className={styles['calculator-step3__label']}
          htmlFor="email"
          aria-label="E-mail"
        >
          <input
            type="email"
            className={styles['calculator-step3__input']}
            value={formData.email}
            name={InputName.EMAIL}
            placeholder="E-mail"
            onChange={handleInputChange}
            required
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
      {isModalOpened && <ModalSuccess onClose={handleModalSuccessClose} />}
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
