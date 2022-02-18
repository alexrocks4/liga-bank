import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form-field-base.module.scss';
import Input from '../input/input';

function FormFieldBase({
  className,
  value,
  name,
  id,
  label,
  description,
  controls,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  isError,
}) {
  return (
    <p className={classNames(className, styles['form-field-base'])}>
      <label
        htmlFor={id}
        className={styles['form-field-base__label']}
      >
        {label}
      </label>
      <span className={styles['form-field-base__input-container']}>
        <Input
          className={styles['form-field-base__input']}
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          isError={isError}
        />

        {controls}

        {isError && (
          <span className={classNames(styles['form-field-base__input-alert'])}>
            Некорректное значение
          </span>
        )}
      </span>
      {description}
    </p>
  );
}

FormFieldBase.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.node,
  controls: PropTypes.node,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  isError: PropTypes.bool,
};

FormFieldBase.defaultProps = {
  className: '',
  isError: false,
};

export default FormFieldBase;
