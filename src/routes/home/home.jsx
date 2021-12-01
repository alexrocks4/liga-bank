import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './home.module.scss';

function Home({ className }) {
  return (
    <div className={classNames(className, styles['home'])}>

    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

Home.defaultProps = {
  className: '',
};

export default Home;
