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

  const handleTabChange = (id) => setCurrentTabId(id);

  return (
    <section className={classNames(className, styles['services'])}>
      <h2 className="visually-hidden">Услуги Лига Банк</h2>
      <WrapperFluid className={styles['services__tabs-wrapper']}>
        <Tabs
          className={styles['services__tabs']}
          activeTabId={currentTabId}
          data={services}
          onTabClick={handleTabChange}
        />
      </WrapperFluid>
      <Slider slides={services} />
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
