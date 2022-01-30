import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo-confidence.module.scss';
import { Breakpoint } from '../../const';

import MobileImg from './man-mobile.jpg';
import Mobile2xImg from './man-mobile@2x.jpg';
import MobileImgWebp from './man-mobile.webp';
import Mobile2xImgWebp from './man-mobile@2x.webp';
import TabletImg from './man-tablet.jpg';
import Tablet2xImg from './man-tablet@2x.jpg';
import TabletImgWebp from './man-tablet.webp';
import Tablet2xImgWebp from './man-tablet@2x.webp';
import DesktopImg from './man-desktop.jpg';
import Desktop2xImg from './man-desktop@2x.jpg';
import DesktopImgWebp from './man-desktop.webp';
import Desktop2xImgWebp from './man-desktop@2x.webp';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';

function PromoConfidence({ className }) {
  return (
    <section className={classNames(className, styles['promo-confidence'])}>
      <h3 className="visually-hidden">Уверенность в Лига Банке</h3>
      <WrapperFluid className={styles['promo-confidence__wrapper']}>
        <div className={styles['promo-confidence__container']}>
          <p className={styles['promo-confidence__title']}>Лига Банк</p>
          <p className={styles['promo-confidence__description']}>
            Ваша уверенность в завтрашнем дне
          </p>
        </div>
      </WrapperFluid>
      <div className={styles['promo-confidence__img-container']}>
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
            className={styles['promo-confidence__img']}
            src={MobileImg}
            srcSet={`${Mobile2xImg} 2x`}
            width="772"
            height="226"
            alt="Кредитные карты банка."
          />
        </picture>
      </div>
    </section>
  );
}

PromoConfidence.propTypes = {
  className: PropTypes.string.isRequired,
};

PromoConfidence.defaultProps = {
  className: '',
};

export default PromoConfidence;
