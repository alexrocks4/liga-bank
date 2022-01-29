import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo-credit.module.scss';
import Button from '../button/button';
import { ButtonRootElement, Breakpoint } from '../../const';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';

import PNGMobileImg from './black-card-mobile.png';
import PNGMobile2xImg from './black-card-mobile@2x.png';
import PNGTabletImg from './cards-tablet.png';
import PNGTablet2xImg from './cards-tablet@2x.png';
import PNGDesktopImg from './cards-desktop.png';
import PNGDesktop2xImg from './cards-desktop@2x.png';

import WEBPMobileImg from './black-card-mobile.webp';
import WEBPMobile2xImg from './black-card-mobile@2x.webp';
import WEBPTabletImg from './cards-tablet.webp';
import WEBPTablet2xImg from './cards-tablet@2x.webp';
import WEBPDesktopImg from './cards-desktop.webp';
import WEBPDesktop2xImg from './cards-desktop@2x.webp';

function PromoCredit({ className }) {
  return (
    <section className={classNames(className, styles['promo-credit'])}>
      <h3 className="visually-hidden">Кредиты от Лига Банк</h3>
      <WrapperFluid className={styles['promo-credit__wrapper']}>
        <div className={styles['promo-credit__container']}>
          <p className={styles['promo-credit__title']}>Лига Банк</p>
          <p className={styles['promo-credit__description']}>Кредиты на любой случай</p>
          <Button
            className={styles['promo-credit__button']}
            rootElement={ButtonRootElement.LINK}
          >
              Рассчитать кредит
          </Button>
        </div>
      </WrapperFluid>

      <div className={styles['promo-credit__img-container']}>
        <picture>
          <source
            type="image/webp"
            media={`(min-width: ${Breakpoint.LARGE}px)`}
            srcSet={`${WEBPDesktopImg} 1x, ${WEBPDesktop2xImg} 2x`}
          />
          <source
            type="image/webp"
            media={`(min-width: ${Breakpoint.MEDIUM}px)`}
            srcSet={`${WEBPTabletImg} 1x, ${WEBPTablet2xImg} 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${WEBPMobileImg} 1x, ${WEBPMobile2xImg} 2x`}
          />
          <source
            media={`(min-width: ${Breakpoint.LARGE}px)`}
            srcSet={`${PNGDesktopImg} 1x, ${PNGDesktop2xImg} 2x`}
          />
          <source
            media={`(min-width: ${Breakpoint.MEDIUM}px)`}
            srcSet={`${PNGTabletImg} 1x, ${PNGTablet2xImg} 2x`}
          />
          <img
            className={styles['promo-credit__img']}
            src={PNGMobileImg}
            srcSet={`${PNGMobile2xImg} 2x`}
            width="105"
            height="179"
            alt="Кредитные карты банка."
          />
        </picture>
      </div>
    </section>
  );
}

PromoCredit.propTypes = {
  className: PropTypes.string.isRequired,
};

PromoCredit.defaultProps = {
  className: '',
};

export default PromoCredit;
