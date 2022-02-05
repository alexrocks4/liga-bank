import React from 'react';
import styles from './insurance.module.scss';
import { AppRoute, ButtonRootElement, Breakpoint } from '../../const';
import MobileImg from './lock-mobile.jpg';
import Mobile2xImg from './lock-mobile@2x.jpg';
import MobileImgWebp from './lock-mobile.webp';
import Mobile2xImgWebp from './lock-mobile@2x.webp';
import TabletImg from './lock-tablet.jpg';
import Tablet2xImg from './lock-tablet@2x.jpg';
import TabletImgWebp from './lock-tablet.webp';
import Tablet2xImgWebp from './lock-tablet@2x.webp';
import DesktopImg from './lock-desktop.jpg';
import Desktop2xImg from './lock-desktop@2x.jpg';
import DesktopImgWebp from './lock-desktop.webp';
import Desktop2xImgWebp from './lock-desktop@2x.webp';
import Button from '../button/button';
import TabSlide from '../tab-slide/tab-slide';

const advantages = [
  {
    id: 0,
    data: 'Автомобильное страхование',
  },
  {
    id: 1,
    data: 'Страхование жизни и здоровья',
  },
  {
    id: 2,
    data: 'Страхование недвижимости',
  },
];

function Insurance() {
  const button = (
    <Button
      className={styles['insurance__link']}
      rootElement={ButtonRootElement.ROUTER_NAV_LINK}
      to={AppRoute.ASSURANCE}
    >
      Узнать подробнее
    </Button>);

  const picture = (
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
        className={styles['insurance__img']}
        src={MobileImg}
        srcSet={`${Mobile2xImg} 2x`}
        width="87"
        height="113"
        alt="Замок"
      />
    </picture>
  );


  return (
    <TabSlide
      className={styles['insurance']}
      header="Страхование Лига Банка"
      title={<>Лига Страхование — застрахуем<br /> все что захотите</>}
      advantages={advantages}
      button={button}
      picture={picture}
    />
  );
}

export default Insurance;
