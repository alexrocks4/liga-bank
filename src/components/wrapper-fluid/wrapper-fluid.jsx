import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenProp } from '../../types/types';
import styles from './wrapper-fluid.module.scss';

function WrapperFluid({ className, isGreaterSmallViewport, children }) {
  return (
    <div className={classNames(
      className,
      styles['wrapper-fluid'],
      {
        [styles['wrapper-fluid--greater-small-viewport']]: isGreaterSmallViewport,
      })}
    >
      {children}
    </div>
  );
}

WrapperFluid.propTypes = {
  className: PropTypes.string.isRequired,
  isGreaterSmallViewport: PropTypes.bool,
  children: childrenProp,
};

WrapperFluid.defaultProps = {
  className: '',
  isGreaterSmallViewport: false,
};

export default WrapperFluid;
