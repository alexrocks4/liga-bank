import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './modal-success.module.scss';
import Modal from '../modal/modal';
import Button from '../button/button';

function ModalSuccess({ className, onClose }) {
  return (
    <Modal
      className={classNames(className, styles['modal-success'])}
      onClose={onClose}
    >
      <section className={styles['modal-success-container']}>
        <h2 className={styles['modal-success__title']}>
          Спасибо за обращение в наш банк.
        </h2>
        <p className={styles['modal-success__text']}>
          Наш менеджер скоро свяжется с вами по указанному номеру телефона
        </p>
        <Button
          className={styles['modal-success__close-button']}
          onClick={onClose}
        />
      </section>
    </Modal>
  );
}

ModalSuccess.propTypes = {
  className: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

ModalSuccess.defaultProps = {
  className: '',
};

export default ModalSuccess;
