import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './input.module.scss';

function Input({ className, isError, ...props }) {
  return (
    <input
      className={classNames(
        className,
        styles['input'],
        { [styles['input--error']]: isError},
      )}
      {...props}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  isError: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  isError: false,
};

export default Input;
