import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './logo.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute, Breakpoint } from '../../const';
import logoDesktopImg from './logo-desktop.svg';
import logoTabletImg from './logo-tablet.svg';
import logoMobileImg from './logo-mobile.svg';

function Logo({ className }) {
  return (
    <NavLink
      className={({ isActive }) => (
        isActive
          ? classNames(className, styles.logo, styles['logo--active'])
          : classNames(className, styles.logo)
      )}
      to={AppRoute.ROOT}
      aria-label="Главная"
    >
      <picture>
        <source
          media={`(min-width: ${Breakpoint.LARGE})`}
          srcSet={logoDesktopImg}
        />
        <source
          media={`(min-width: ${Breakpoint.MEDIUM})`}
          srcSet={logoTabletImg}
        />
        <img
          className={styles['logo__picture']}
          src={logoMobileImg}
          width="116"
          height="19"
          alt="Логотип. Синий треугольник с надписью Лига Банк."
        />
      </picture>
    </NavLink>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
