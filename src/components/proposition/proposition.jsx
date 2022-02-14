import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './proposition.module.scss';
import ButtonPrimary from '../button-primary/button-primary';
import { formatPrice } from '../../utils';

function Proposition({ className }) {
  return (
    <section className={classNames(className, styles['proposition'])}>
      <h3 className={styles['proposition__title']}>Наше предложение</h3>
      <dl className={styles['proposition__list']}>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Сумма ипотеки</dt>
          <dd className={styles['proposition__definition']}>{formatPrice(1330000)}</dd>
        </div>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Процентная ставка</dt>
          <dd className={styles['proposition__definition']}>9.40%</dd>
        </div>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Ежемесячный платеж</dt>
          <dd className={styles['proposition__definition']}>{formatPrice(27868)}</dd>
        </div>
        <div className={styles['proposition__list-item']}>
          <dt className={styles['proposition__term']}>Необходимый доход</dt>
          <dd className={styles['proposition__definition']}>{formatPrice(61929)}</dd>
        </div>
      </dl>
      <ButtonPrimary
        className={styles['proposition__button']}
        isMedium
        isWide
      >
        Оформить заявку
      </ButtonPrimary>
    </section>
  );
}

Proposition.propTypes = {
  className: PropTypes.string.isRequired,
};

Proposition.defaultProps = {
  className: '',
};

export default Proposition;
