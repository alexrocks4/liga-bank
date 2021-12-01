import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenProp } from '../../types/types';
import styles from './notification-screen.module.scss';

function NotificationScreen({ className, children }) {
  return (
    <main className={classNames(className, styles['notification-screen'])}>
      <h1 className={styles['notification-screen__title']}>
        {children}
      </h1>
    </main>
  );
}

NotificationScreen.propTypes = {
  className: PropTypes.string.isRequired,
  children: childrenProp,
};

NotificationScreen.defaultProps = {
  className: '',
};

export default NotificationScreen;
