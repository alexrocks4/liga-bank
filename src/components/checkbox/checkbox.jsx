import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

function Checkbox({ className, text, isChecked, onChange, name }) {
  return (
    <label className={classNames(className, styles['checkbox'])}>
      <input
        className={classNames('visually-hidden', styles['checkbox__input'])}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className={styles['checkbox__mark']}></span>
      <span className={styles['checkbox__text']}>{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
  isChecked: false,
};

export default Checkbox;
