import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form-field-base.module.scss';
import Input from '../input/input';

function FormFieldBase({
  className,
  onChange,
  value,
  name,
  pattern,
  id,
  label,
  description,
  controls,
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
          pattern={pattern}
          name={name}
          value={value}
          onChange={onChange}
        />
        {controls}
      </span>
      {description}
    </p>
  );
}

FormFieldBase.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.node,
  controls: PropTypes.node,
};

FormFieldBase.defaultProps = {
  className: '',
};

export default FormFieldBase;
