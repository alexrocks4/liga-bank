import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppRoute } from '../../../const';
import styles from './main-nav.module.scss';
import { NavLink } from 'react-router-dom';

function MainNav({ className, isOpened, onNavClose }) {
  return (
    <nav className={classNames(
      className,
      styles['main-nav'],
      {[styles['main-nav--opened']]: isOpened})}
    >
      <ul className={classNames(styles['main-nav__list'])}>
        <li className={classNames(styles['main-nav__list-item'])}>
          <NavLink
            className={({ isActive }) => (
              isActive
                ? classNames(styles['main-nav__link'], styles['main-nav__link--active'])
                : classNames(styles['main-nav__link'])
            )}
            to={AppRoute.SERVICES}
            onClick={onNavClose}
          >
            Услуги
          </NavLink>
        </li>
        <li className={classNames(styles['main-nav__list-item'])}>
          <NavLink
            className={({ isActive }) => (
              isActive
                ? classNames(styles['main-nav__link'], styles['main-nav__link--active'])
                : classNames(styles['main-nav__link'])
            )}
            to={AppRoute.CREDIT}
            onClick={onNavClose}
          >
            Рассчитать кредит
          </NavLink>
        </li>
        <li className={classNames(styles['main-nav__list-item'])}>
          <NavLink
            className={({ isActive }) => (
              isActive
                ? classNames(styles['main-nav__link'], styles['main-nav__link--active'])
                : classNames(styles['main-nav__link'])
            )}
            to={AppRoute.CONVERTER}
            onClick={onNavClose}
          >
            Конвертер валют
          </NavLink>
        </li>
        <li className={classNames(styles['main-nav__list-item'])}>
          <NavLink
            className={({ isActive }) => (
              isActive
                ? classNames(styles['main-nav__link'], styles['main-nav__link--active'])
                : classNames(styles['main-nav__link'])
            )}
            to={AppRoute.CONTACTS}
            onClick={onNavClose}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

MainNav.propTypes = {
  className: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onNavClose: PropTypes.func,
};

MainNav.defaultProps = {
  className: '',
  isOpened: true,
};

export default MainNav;
