import React from 'react';
import styles from './deposits.module.scss';
import { AppRoute, ButtonRootElement, Breakpoint } from '../../const';
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
import TabSlide from '../tab-slide/tab-slide';

const advantages = [
  {
    id: 0,
    data: 'Проценты по вкладам до 7%',
  },
  {
    id: 1,
    data: 'Разнообразные условия',
  },
  {
    id: 2,
    data: 'Возможность ежемесячной капитализации или вывод процентов на банковскую карту',
  },
];

function Deposits() {
  const button = (
    <Button
      className={styles['deposits__link']}
      rootElement={ButtonRootElement.ROUTER_NAV_LINK}
      to={AppRoute.DEPOSITS}
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
        className={styles['deposits__img']}
        src={MobileImg}
        srcSet={`${Mobile2xImg} 2x`}
        width="87"
        height="113"
        alt="Копилка"
      />
    </picture>
  );


  return (
    <TabSlide
      className={styles['deposits']}
      header="Вклады Лига Банка"
      title="Вклады Лига Банка – это выгодная инвестиция в свое будущее"
      advantages={advantages}
      button={button}
      picture={picture}
    />
  );
}

export default Deposits;
