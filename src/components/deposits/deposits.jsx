import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './deposits.module.scss';
import { AppRoute, ButtonRootElement, Breakpoint } from '../../const';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import MobileImg from './piggybank-mobile.jpg';
import Mobile2xImg from './piggybank-mobile@2x.jpg';
import MobileImgWebp from './piggybank-mobile.webp';
import Mobile2xImgWebp from './piggybank-mobile@2x.webp';
import TabletImg from './piggybank-tablet.jpg';
import Tablet2xImg from './piggybank-tablet@2x.jpg';
import TabletImgWebp from './piggybank-tablet.webp';
import Tablet2xImgWebp from './piggybank-tablet@2x.webp';
import DesktopImg from './piggybank-desktop.jpg';
import Desktop2xImg from './piggybank-desktop@2x.jpg';
import DesktopImgWebp from './piggybank-desktop.webp';
import Desktop2xImgWebp from './piggybank-desktop@2x.webp';
import Button from '../button/button';

function Deposits({ className }) {
  return (
    <article className={classNames(className, styles['deposits'])}>
      <h2 className="visually-hidden">Вклады Лига Банка</h2>
      <WrapperFluid className={styles['deposits__wrapper']}>
        <div className={styles['deposits__container']}>
          <div className={styles['deposits__main-container']}>
            <p className={styles['deposits__title']}>
              Вклады Лига Банка – это выгодная инвестиция в свое будущее
            </p>
            <ul className={styles['deposits__list']}>
              <li className={styles['deposits__list-item']}>Проценты по вкладам до 7%</li>
              <li className={styles['deposits__list-item']}>Разнообразные условия</li>
              <li className={styles['deposits__list-item']}>
                Возможность ежемесячной капитализации или вывод процентов на банковскую карту
              </li>
            </ul>
            <Button
              className={styles['deposits__link']}
              rootElement={ButtonRootElement.ROUTER_NAV_LINK}
              to={AppRoute.DEPOSITS}
            >
              Узнать подробнее
            </Button>
          </div>

          <div className={styles['deposits__img-container']}>
            <picture>
              <source
                type="image/webp"
                media={`(min-width: ${Breakpoint.LARGE}px)`}
                srcSet={`${DesktopImgWebp} 1x, ${Desktop2xImgWebp} 2x`}
              />
              <source
                type="image/webp"
                media={`(min-width: ${Breakpoint.MEDIUM}px)`}
                srcSet={`${TabletImgWebp} 1x, ${Tablet2xImgWebp} 2x`}
              />
              <source
                type="image/webp"
                srcSet={`${MobileImgWebp} 1x, ${Mobile2xImgWebp} 2x`}
              />
              <source
                media={`(min-width: ${Breakpoint.LARGE}px)`}
                srcSet={`${DesktopImg} 1x, ${Desktop2xImg} 2x`}
              />
              <source
                media={`(min-width: ${Breakpoint.MEDIUM}px)`}
                srcSet={`${TabletImg} 1x, ${Tablet2xImg} 2x`}
              />
              <img
                className={styles['deposits__img']}
                src={MobileImg}
                srcSet={`${Mobile2xImg} 2x`}
                width="87"
                height="113"
                alt="Копилка"
              />
            </picture>
          </div>
        </div>
      </WrapperFluid>
    </article>
  );
}

Deposits.propTypes = {
  className: PropTypes.string.isRequired,
};

Deposits.defaultProps = {
  className: '',
};

export default Deposits;
