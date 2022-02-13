import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

function Checkbox({ className, text }) {
  return (
    <label className={classNames(className, styles['checkbox'])}>
      <input
        className="visually-hidden"
        type="checkbox"
        name="sweetener"
        checked
      />
      <span className="checkbox__text">{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
