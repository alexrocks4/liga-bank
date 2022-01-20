import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppRoute } from '../../../const';
import styles from './main-nav.module.scss';
import { NavLink } from 'react-router-dom';

function MainNav({ className }) {
  return (
    <nav className={classNames(className, styles['main-nav'])}>
      <ul className={classNames(styles['main-nav__list'])}>
        <li className={classNames(styles['main-nav__list-item'])}>
          <NavLink
            className={({ isActive }) => (
              isActive
                ? classNames(styles['main-nav__link'], styles['main-nav__link--active'])
                : classNames(styles['main-nav__link'])
            )}
            to={AppRoute.SERVICES}
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
};

MainNav.defaultProps = {
  className: '',
};

export default MainNav;
