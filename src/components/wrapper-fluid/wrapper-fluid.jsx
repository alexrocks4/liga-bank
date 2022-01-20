import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenProp } from '../../types/types';
import styles from './wrapper-fluid.module.scss';

function WrapperFluid({ className, children }) {
  return (
    <div className={classNames(className, styles['wrapper-fluid'])}>
      {children}
    </div>
  );
}

WrapperFluid.propTypes = {
  className: PropTypes.string.isRequired,
  children: childrenProp,
};

WrapperFluid.defaultProps = {
  className: '',
};

export default WrapperFluid;
