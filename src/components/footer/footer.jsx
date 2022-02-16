import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';

function Footer({ className }) {
  return (
    <footer className={classNames(className, styles['footer'])}>
      <WrapperFluid>
        <div className={styles['footer__container']}>
          <div className={styles['footer__nav-container']}>
            <Logo className={styles['footer__logo']} />

            <ul className={styles['footer__nav-list']}>
              <li className={styles['footer__nav-item']}>
                <NavLink
                  className={styles['footer__nav-link']}
                  to={AppRoute.SERVICES}
                >
                  Услуги
                </NavLink>
              </li>
              <li className={styles['footer__nav-item']}>
                <NavLink
                  className={styles['footer__nav-link']}
                  to={AppRoute.CALCULATOR}
                >
                  Рассчитать кредит
                </NavLink>
              </li>
              <li className={styles['footer__nav-item']}>
                <NavLink
                  className={styles['footer__nav-link']}
                  to={AppRoute.CONTACTS}
                >
                  Контакты
                </NavLink>
              </li>
              <li className={styles['footer__nav-item']}>
                <NavLink
                  className={styles['footer__nav-link']}
                  to={AppRoute.QUESTION}
                >
                  Задать вопрос
                </NavLink>
              </li>
            </ul>

            <div className={styles['footer__copyright']}>
              <address className={styles['footer__address']}>
                150015, г. Москва, ул. Московская, д. 32
              </address>
              <small className={styles['footer__copyright-text']}>
                Генеральная лицензия Банка России №1050<br />Ⓒ Лига Банк, 2019
              </small>
            </div>
          </div>

          <div className={styles['footer__socials-container']}>
            <div className={styles['footer__phones-list-container']}>
              <ul className={styles['footer__phones-list']}>
                <li className={styles['footer__phones-list-item']}>
                  <a
                    className={classNames(
                      styles['footer__phone-link'],
                      styles['footer__phone-link--free-mobile'],
                    )}
                    href="tel:*0904"
                  >
                    <span className={styles['footer__phone']}>*0904</span>
                    <span className={styles['footer__phone-description']}>
                      Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
                    </span>
                  </a>
                </li>
                <li className={styles['footer__phones-list-item']}>
                  <a
                    className={classNames(
                      styles['footer__phone-link'],
                      styles['footer__phone-link--free-all'],
                    )}
                    href="tel:88001112233"
                  >
                    <span className={styles['footer__phone']}>8 800 111 22 33</span>
                    <span className={styles['footer__phone-description']}>
                      Бесплатный для всех городов России
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles['footer__socials-list-container']}>
              <ul className={styles['footer__socials-list']}>
                <li className={styles['footer__socials-list-item']}>
                  <a
                    className={classNames(
                      styles['footer__socials-link'],
                      styles['footer__socials-link--facebook'],
                    )}
                    href="https://www.facebook.com"
                  >
                    <span className="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li className={styles['footer__socials-list-item']}>
                  <a
                    className={classNames(
                      styles['footer__socials-link'],
                      styles['footer__socials-link--instagram'],
                    )}
                    href="https://www.instagram.com"
                  >
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li className={styles['footer__socials-list-item']}>
                  <a
                    className={classNames(
                      styles['footer__socials-link'],
                      styles['footer__socials-link--twitter'],
                    )}
                    href="https://www.twitter.com"
                  >
                    <span className="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li className={styles['footer__socials-list-item']}>
                  <a
                    className={classNames(
                      styles['footer__socials-link'],
                      styles['footer__socials-link--youtube'],
                    )}
                    href="https://www.youtube.com"
                  >
                    <span className="visually-hidden">Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WrapperFluid>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
