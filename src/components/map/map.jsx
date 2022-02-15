import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './map.module.scss';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import { Breakpoint } from '../../const';
import MobileImg from './map-mobile.png';
import Mobile2xImg from './map-mobile@2x.png';
import MobileImgWebp from './map-mobile.webp';
import Mobile2xImgWebp from './map-mobile@2x.webp';
import TabletImg from './map-tablet.png';
import Tablet2xImg from './map-tablet@2x.png';
import TabletImgWebp from './map-tablet.webp';
import Tablet2xImgWebp from './map-tablet@2x.webp';
import DesktopImg from './map-desktop.png';
import Desktop2xImg from './map-desktop@2x.png';
import DesktopImgWebp from './map-desktop.webp';
import Desktop2xImgWebp from './map-desktop@2x.webp';


function Map({ className }) {
  return (
    <section className={classNames(className, styles['map'])}>
      <WrapperFluid className={styles['map__title-wrapper']}>
        <h2 className={styles['map__title']}>Отделения Лига Банка</h2>
      </WrapperFluid>
      <WrapperFluid isGreaterSmallViewport>
        <figure className={styles['map__map-figure']}>
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
              className={classNames(styles['map__map-img'])}
              src={MobileImg}
              srcSet={`${Mobile2xImg} 2x`}
              width="320"
              height="381"
              alt="Карта с указанием местоположения отделений компании"
            />
          </picture>
        </figure>
      </WrapperFluid>
    </section>
  );
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
};

Map.defaultProps = {
  className: '',
};

export default Map;
