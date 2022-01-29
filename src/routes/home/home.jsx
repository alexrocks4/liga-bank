import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './home.module.scss';
import Promo from '../../components/promo/promo';

function Home({ className }) {
  return (
    <main className={classNames(className, styles['home'])}>
      <h1 className="visually-hidden">Лига банк</h1>
      <Promo className={styles['home__promo']} />
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
