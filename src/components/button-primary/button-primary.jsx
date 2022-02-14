import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenProp } from '../../types/types';
import styles from './button-primary.module.scss';
import Button from '../button/button';

function ButtonPrimary({ className, isMedium, isBig, isWide, children, ...props }) {
  return (
    <Button
      className={classNames(
        className,
        {[styles['button-primary--medium']]: isMedium},
        {[styles['button-primary--big']]: isBig},
        {[styles['button-primary--wide']]: isWide},
        styles['button-primary'])}
      {...props}
    >
      {children}
    </Button>
  );
}

ButtonPrimary.propTypes = {
  className: PropTypes.string.isRequired,
  isMedium: PropTypes.bool,
  isBig: PropTypes.bool,
  isWide: PropTypes.bool,
  children: childrenProp,
};

ButtonPrimary.defaultProps = {
  className: '',
};

export default ButtonPrimary;
