import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './home.module.scss';
import Promo from '../../components/promo/promo';
import Services from '../../components/services/services';
import Calculator from '../../components/calculator/calculator';
import Map from '../../components/map/map';

function Home({ className }) {
  return (
    <main className={classNames(className, styles['home'])}>
      <h1 className="visually-hidden">Лига банк</h1>
      <Promo className={styles['home__promo']} />
      <Services className={styles['home__services']} />
      <Calculator className={styles['home__calculator']} />
      <Map className={styles['home__map']}/>
    </main>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

Home.defaultProps = {
  className: '',
};

export default Home;
