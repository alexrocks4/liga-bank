import React from 'react';
import styles from './credits.module.scss';
import { AppRoute, Breakpoint } from '../../const';
import MobileImg from './car-mobile.jpg';
import Mobile2xImg from './car-mobile@2x.jpg';
import MobileImgWebp from './car-mobile.webp';
import Mobile2xImgWebp from './car-mobile@2x.webp';
import TabletImg from './car-tablet.jpg';
import Tablet2xImg from './car-tablet@2x.jpg';
import TabletImgWebp from './car-tablet.webp';
import Tablet2xImgWebp from './car-tablet@2x.webp';
import DesktopImg from './car-desktop.jpg';
import Desktop2xImg from './car-desktop@2x.jpg';
import DesktopImgWebp from './car-desktop.webp';
import Desktop2xImgWebp from './car-desktop@2x.webp';
import TabSlide from '../tab-slide/tab-slide';
import { NavLink } from 'react-router-dom';

const advantages = [
  {
    id: 0,
    data: 'Ипотечный кредит',
  },
  {
    id: 1,
    data: 'Автокредит',
  },
  {
    id: 2,
    data: 'Потребительский кредит',
  },
];

function Credits() {

  const footer = (
    <p className={styles['credits__footer']}>
      Рассчитайте ежемесячный платеж<br /> и
      ставку по кредиту воспользовавшись нашим&nbsp;
      <NavLink className={styles['credits__link']} to={AppRoute.CALCULATOR}>кредитным калькулятором</NavLink>
    </p>
  );

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
        className={styles['credits__img']}
        src={MobileImg}
        srcSet={`${Mobile2xImg} 2x`}
        width="87"
        height="113"
        alt="Игрушечный автомобиль на стопке монет"
      />
    </picture>
  );


  return (
    <TabSlide
      className={styles['credits']}
      header="Кредиты Лига Банка"
      title={<span>Лига Банк выдает кредиты<br /> под любые цели</span>}
      advantages={advantages}
      picture={picture}
      footer={footer}
      isCustom
    />
  );
}

export default Credits;
