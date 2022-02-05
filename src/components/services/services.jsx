import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './services.module.scss';
import Tabs from '../tabs/tabs';
import Slider from '../slider/slider';
import Deposits from '../deposits/deposits';
import Credits from '../credits/credits';
import Insurance from '../insurance/insurance';
import OnlineServices from '../online-services/online-services';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import { Pagination } from 'swiper';
import { Breakpoint } from '../../const';

const services = [
  {
    id: 0,
    name: 'deposits',
    text: 'Вклады',
    slide: <Deposits />,
  },
  {
    id: 1,
    name: 'credits',
    text: 'Кредиты',
    slide: <Credits />,
  },
  {
    id: 2,
    name: 'insurance',
    text: 'Страхование',
    slide: <Insurance />,
  },
  {
    id: 3,
    name: 'online-services',
    text: 'Онлайн-сервисы',
    slide: <OnlineServices />,
  },
];

function Services({ className }) {
  const [ currentTabId, setCurrentTabId ] = useState(0);
  const [ swiperInstance, setSwiperInstance] = useState(null);

  const handleTabClick = (id) => {
    setCurrentTabId(id);

    if (swiperInstance) {
      swiperInstance.slideTo(id);
    }
  };

  return (
    <section className={classNames(className, styles['services'])}>
      <h2 className="visually-hidden">Услуги Лига Банк</h2>
      <WrapperFluid className={styles['services__tabs-wrapper']}>
        <Tabs
          className={styles['services__tabs']}
          activeTabId={currentTabId}
          data={services}
          onTabClick={handleTabClick}
        />
      </WrapperFluid>
      <Slider
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: styles['services__pagination-bullet'],
          bulletActiveClass: styles['services__pagination-bullet--active'],
        }}
        breakpoints={{
          [Breakpoint.LARGE]: {
            allowTouchMove: false,
          },
        }}
        slides={services}
        onSlideChange={(swiper) => setCurrentTabId(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      />
    </section>
  );
}

Services.propTypes = {
  className: PropTypes.string.isRequired,
};

Services.defaultProps = {
  className: '',
};

export default Services;
