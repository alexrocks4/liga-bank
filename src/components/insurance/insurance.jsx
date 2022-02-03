import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './insurance.module.scss';

function Insurance({ className }) {
  return (
    <div className={classNames(className, styles['insurance'])}>

    </div>
  );
}

Insurance.propTypes = {
  className: PropTypes.string.isRequired,
};

Insurance.defaultProps = {
  className: '',
};

export default Insurance;
