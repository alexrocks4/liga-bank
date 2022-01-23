import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './modal.module.scss';
import { isEscKeyPressed } from '../../utils';

function Modal({ className, onClose, children }) {
  const [ modalRootElement, setModalRootElement ] = useState(null);
  const modalRef = useRef(null);
  const handleEscKeyDown = useCallback((evt) => {
    if (!isEscKeyPressed(evt)) {
      return;
    }

    onClose(evt);
  }, [onClose]);

  const handleModalClick = useCallback((evt) => {
    // Catch click only on modal outside(div)
    if (evt.target !== modalRef.current) {
      return;
    }

    onClose(evt);
  }, [onClose]);

  useEffect(() => {
    if (modalRootElement === null) {
      const element = document.createElement('div');
      setModalRootElement(element);
      document.body.appendChild(element);
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscKeyDown);
    }

    return () => {
      if (modalRootElement !== null) {
        document.body.removeChild(modalRootElement);
        document.body.style.overflow = 'visible';
        document.removeEventListener('keydown', handleEscKeyDown);
      }
    };
  }, [modalRootElement, handleEscKeyDown]);

  let content = null;

  if (modalRootElement !== null) {
    content = ReactDOM.createPortal((
      <div
        className={classNames(className, styles['modal'])}
        onClick={handleModalClick}
        ref={modalRef}
      >
        {children}
      </div>
    ), modalRootElement);
  }

  return content;
}

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
