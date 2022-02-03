import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './online-services.module.scss';

function OnlineServices({ className }) {
  return (
    <div className={classNames(className, styles['online-services'])}>

    </div>
  );
}

OnlineServices.propTypes = {
  className: PropTypes.string.isRequired,
};

OnlineServices.defaultProps = {
  className: '',
};

export default OnlineServices;
