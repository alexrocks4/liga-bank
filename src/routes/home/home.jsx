import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './home.module.scss';
import Promo from '../../components/promo/promo';
import Services from '../../components/services/services';
import Calculator from '../../components/calculator/calculator';
import Map from '../../components/map/map';
import { selectIsStep2Active, selectIsStep3Active } from '../../store/calculatorSlice';

function Home({ className }) {
  const isStep2Active = useSelector(selectIsStep2Active);
  const isStep3Active = useSelector(selectIsStep3Active);

  return (
    <main className={classNames(className, styles['home'])}>
      <h1 className="visually-hidden">Лига банк</h1>
      <Promo className={styles['home__promo']} />
      <Services className={styles['home__services']} />
      <Calculator className={classNames(
        styles['home__calculator'],
        {
          [styles['home__calculator--step2']]: isStep2Active,
          [styles['home__calculator--step3']]: isStep3Active,
        })}
      />
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
