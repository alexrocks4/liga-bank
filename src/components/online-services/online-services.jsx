import React from 'react';
import styles from './online-services.module.scss';
import { AppRoute, ButtonRootElement, Breakpoint } from '../../const';
import MobileImg from './phone-mobile.jpg';
import Mobile2xImg from './phone-mobile@2x.jpg';
import MobileImgWebp from './phone-mobile.webp';
import Mobile2xImgWebp from './phone-mobile@2x.webp';
import TabletImg from './phone-tablet.jpg';
import Tablet2xImg from './phone-tablet@2x.jpg';
import TabletImgWebp from './phone-tablet.webp';
import Tablet2xImgWebp from './phone-tablet@2x.webp';
import DesktopImg from './phone-desktop.jpg';
import Desktop2xImg from './phone-desktop@2x.jpg';
import DesktopImgWebp from './phone-desktop.webp';
import Desktop2xImgWebp from './phone-desktop@2x.webp';
import Button from '../button/button';
import TabSlide from '../tab-slide/tab-slide';

function OnlineServices() {
  const advantages = [
    {
      id: 0,
      data: <>Мобильный банк,<br /> который всегда под рукой</>,
    },
    {
      id: 1,
      data: 'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру',
    },
  ];

  const button = (
    <Button
      className={styles['online-services__link']}
      rootElement={ButtonRootElement.ROUTER_NAV_LINK}
      to={AppRoute.ONLINE_SERVICES}
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
        className={styles['online-services__img']}
        src={MobileImg}
        srcSet={`${Mobile2xImg} 2x`}
        width="87"
        height="113"
        alt="Мобильный телефон"
      />
    </picture>
  );


  return (
    <TabSlide
      className={styles['online-services']}
      header="Онлайн-сервисы Лига Банка"
      title={<>Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</>}
      advantages={advantages}
      button={button}
      picture={picture}
      isOnlineServices
    />
  );
}

export default OnlineServices;
