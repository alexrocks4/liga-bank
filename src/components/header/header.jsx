import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.module.scss';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav/main-nav';
import useModal from '../../hooks/use-modal';
import ModalLogin from '../modal-login/modal-login';
import { Breakpoint } from '../../const';

function Header({ className }) {
  const [isModalOpened, handleModalClose, handleModalOpen] = useModal();
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleNavOpenButtonClick = () => {
    setIsNavOpened(true);
  };

  const handleNavClose = () => {
    setIsNavOpened(false);
  };

  const handleLoginButtonClick = (evt) => {
    setIsNavOpened(false);
    handleModalOpen(evt);
  };

  const handleWindowResize = useCallback(() => {
    if (isNavOpened && window.innerWidth >= Breakpoint.MEDIUM) {
      setIsNavOpened(false);
    }
  }, [isNavOpened]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return (
    <header className={classNames(
      className,
      styles.header,
      {[styles['header--nav-opened']]: isNavOpened})}
    >
      <WrapperFluid>
        <div className={styles['header__container']}>
          <div className={styles['header__logo-container']}>
            <button
              className={classNames(styles['header__nav-open-button'])}
              type="button"
              onClick={handleNavOpenButtonClick}
            >
              <span className="visually-hidden">Открыть меню навигации</span>
            </button>

            <Logo className={styles['header__logo']} />

            <button
              className={classNames(styles['header__nav-close-button'])}
              type="button"
              onClick={handleNavClose}
            >
              <span className="visually-hidden">Закрыть меню навигации</span>
            </button>
          </div>

          <MainNav
            className={styles['header__main-nav']}
            isOpened={isNavOpened}
            onNavClose={handleNavClose}
          />

          <ul className={classNames(
            styles['header__actions-list'],
            {[styles['header__actions-list--nav-opened']]: isNavOpened})}
          >
            <li className={styles['header__actions-item']}>
              <button
                className={styles['header__login-button']}
                type="button"
                aria-label="Авторизоваться"
                onClick={handleLoginButtonClick}
              >
                <span className={styles['header__login-button-text']}>Войти в Интернет-банк</span>
              </button>
            </li>
          </ul>
        </div>
        {isModalOpened && <ModalLogin onClose={handleModalClose} />}
      </WrapperFluid>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

Header.defaultProps = {
  className: '',
};

export default Header;
