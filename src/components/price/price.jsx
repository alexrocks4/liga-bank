import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './price.module.scss';
import { formatPrice } from '../../utils';
import Button from '../button/button';
import FormFieldBase from '../form-field-base/form-field-base';

function Price({ className, data }) {
  const {
    label,
    min,
    max,
    defaultValue,
  } = data;

  const controls = (
    <>
      <Button
        className={styles['price__increment-button']}
        aria-label="Увеличить стоимость"
      />
      <Button
        className={styles['price__decrement-button']}
        aria-label="Уменьшить стоимость"
      />
    </>
  );

  const description = (
    <span className={styles['price__text']}>
      От {formatPrice(min)} до {formatPrice(max)} рублей
    </span>
  );

  return (
    <FormFieldBase
      className={classNames(className, styles['price'])}
      label={label}
      id="price"
      pattern="/\d.+/"
      name="price"
      value={`${formatPrice(defaultValue)} рублей`}
      controls={controls}
      description={description}
      onChange={() => {}}
    />
  );
}

Price.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
  }).isRequired,
};

Price.defaultProps = {
  className: '',
};

export default Price;
