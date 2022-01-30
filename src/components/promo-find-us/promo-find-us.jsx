import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo-find-us.module.scss';

import MobileImg from './girl-mobile.jpg';
import Mobile2xImg from './girl-mobile@2x.jpg';
import MobileImgWebp from './girl-mobile.webp';
import Mobile2xImgWebp from './girl-mobile@2x.webp';
import TabletImg from './girl-tablet.jpg';
import Tablet2xImg from './girl-tablet@2x.jpg';
import TabletImgWebp from './girl-tablet.webp';
import Tablet2xImgWebp from './girl-tablet@2x.webp';
import DesktopImg from './girl-desktop.jpg';
import Desktop2xImg from './girl-desktop@2x.jpg';
import DesktopImgWebp from './girl-desktop.webp';
import Desktop2xImgWebp from './girl-desktop@2x.webp';

import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import { Breakpoint, ButtonRootElement } from '../../const';
import Button from '../button/button';

function PromoFindUs({ className }) {
  return (
    <section className={classNames(className, styles['promo-find-us'])}>
      <h3 className="visually-hidden">Кредиты от Лига Банк</h3>
      <WrapperFluid className={styles['promo-find-us__wrapper']}>
        <div className={styles['promo-find-us__container']}>
          <p className={styles['promo-find-us__title']}>Лига Банк</p>
          <p className={styles['promo-find-us__description']}>Всегда рядом</p>
          <Button
            className={styles['promo-find-us__button']}
            rootElement={ButtonRootElement.LINK}
          >
              Найти отделение
          </Button>
        </div>
      </WrapperFluid>

      <div className={styles['promo-find-us__img-container']}>
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
            className={styles['promo-find-us__img']}
            src={MobileImg}
            srcSet={`${Mobile2xImg} 2x`}
            width="772"
            height="226"
            alt="Девушка с кредитной картой в руках."
          />
        </picture>
      </div>
    </section>
  );
}

PromoFindUs.propTypes = {
  className: PropTypes.string.isRequired,
};

PromoFindUs.defaultProps = {
  className: '',
};

export default PromoFindUs;
