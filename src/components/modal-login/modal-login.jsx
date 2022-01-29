import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './modal-login.module.scss';
import Modal from '../modal/modal';
import Button from '../button/button';
import { AppRoute, Breakpoint, ButtonRootElement, LocalStorageKey } from '../../const';
import logoDesktopImg from './logo-desktop.svg';
import logoTabletImg from './logo-tablet.svg';
import logoMobileImg from './logo-mobile.svg';
import ButtonPrimary from '../button-primary/button-primary';
import classNames from 'classnames';
import { loadFromLocalStorage, saveToLocalStorage } from '../../local-storage';

const InputType = {
  PASSWORD: 'password',
  TEXT: 'text',
};

const initialFormData = {
  login: '',
  password: '',
};

function ModalLogin({ onClose }) {
  const [passwordInputType, setPasswordInputType] = useState(InputType.PASSWORD);

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const localStorageAuthData = loadFromLocalStorage(LocalStorageKey.LIGA_BANK_AUTH);

    if (localStorageAuthData) {
      setFormData(localStorageAuthData);
    }
  }, []);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    saveToLocalStorage(LocalStorageKey.LIGA_BANK_AUTH, formData);
    onClose(evt);
  };

  const handlePasswordClick = (evt) => {
    evt.preventDefault();
  };

  const handleShowPasswordMouseDown = (evt) => {
    evt.preventDefault();
    setPasswordInputType(InputType.TEXT);
  };

  const handleShowPasswordMouseUp = (evt) => {
    evt.preventDefault();
    setPasswordInputType(InputType.PASSWORD);
  };

  const handleInputChange = (evt) => {
    setFormData((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <Modal
      className={styles['modal-login']}
      onClose={onClose}
    >
      <section className={styles['modal-login__container']}>
        <h2 className="visually-hidden">Форма авторизации</h2>
        <header className={styles['modal-login__header']}>
          <picture>
            <source
              media={`(min-width: ${Breakpoint.LARGE}px)`}
              srcSet={logoDesktopImg}
            />
            <source
              media={`(min-width: ${Breakpoint.MEDIUM}px)`}
              srcSet={logoTabletImg}
            />
            <img
              className={styles['modal-login__logo']}
              src={logoMobileImg}
              width="150"
              height="31"
              alt="Логотип. Синий треугольник с надписью Лига Банк."
            />
          </picture>
          <Button
            className={styles['modal-login__close-button']}
            onClick={onClose}
          />
        </header>
        <form
          className={styles['modal-login__form']}
          action={'#'}
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <label className={classNames(
            styles['modal-login__form-label'],
            styles['modal-login__form-label--login'])}
          >
            <span className={styles['modal-login__form-label-text']}>Логин</span>
            <input
              className={styles['modal-login__input']}
              type="text"
              name="login"
              required
              autoFocus
              autoComplete="off"
              value={formData.login}
              onChange={handleInputChange}
            />
          </label>
          <div className={styles['modal-login__password-input-container']}>
            <label className={classNames(
              styles['modal-login__form-label'],
              styles['modal-login__form-label--password'])}
            >
              <span className={styles['modal-login__form-label-text']}>Пароль</span>
              <input
                className={classNames(styles['modal-login__input'], styles['modal-login__input--password'])}
                type={passwordInputType}
                name="password"
                required
                autoComplete="off"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            <Button
              className={styles['modal-login__show-password-button']}
              onMouseDown={handleShowPasswordMouseDown}
              onMouseUp={handleShowPasswordMouseUp}
              type="button"

            />
          </div>
          <ButtonPrimary
            className={styles['modal-login__form-submit']}
            isBig
          >
            Войти
          </ButtonPrimary>
          <div className={styles['modal-login__link-container']}>
            <Button
              className={styles['modal-login__link']}
              rootElement={ButtonRootElement.ROUTER_NAV_LINK}
              to={AppRoute.PASSWORD}
              onClick={handlePasswordClick}
            >
              Забыли пароль?
            </Button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

ModalLogin.propTypes = {
  onClose: PropTypes.func,
};

export default ModalLogin;
