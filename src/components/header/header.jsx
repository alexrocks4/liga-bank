import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.module.scss';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav/main-nav';
import useModal from '../../hooks/use-modal';
import ModalLogin from '../modal-login/modal-login';

function Header({ className }) {
  const [isModalOpened, handleModalClose, handleModalOpen] = useModal();

  return (
    <header className={classNames(className, styles.header)}>
      <WrapperFluid>
        <div className={styles['header__container']}>
          <button
            className={classNames(styles['header-nav__toggle'], styles['header-nav__toggle--closed'])}
            type="button"
          >
            <span className="visually-hidden">Открыть меню навигации</span>
          </button>

          <Logo className={styles['header__logo']} />

          <MainNav className={styles['header__main-nav']} />

          <ul className={styles['header__actions-list']}>
            <li className={styles['header__actions-item']}>
              <button
                className={styles['header__login-button']}
                type="button"
                aria-label="Авторизоваться"
                onClick={handleModalOpen}
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
