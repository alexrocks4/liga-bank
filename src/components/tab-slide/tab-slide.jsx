import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './tab-slide.module.scss';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';

function TabSlide({
  className,
  header,
  title,
  advantages,
  button,
  footer,
  picture,
}) {
  return (
    <article className={classNames(className, styles['tab-slide'])}>
      <h2 className="visually-hidden">{header}</h2>
      <WrapperFluid className={styles['tab-slide__wrapper']}>
        <div className={styles['tab-slide__container']}>
          <div className={styles['tab-slide__main-container']}>
            <p className={styles['tab-slide__title']}>
              {title}
            </p>
            <ul className={styles['tab-slide__list']}>
              {advantages.map(({id, data}) => (
                <li key={id} className={styles['tab-slide__list-item']}>
                  {data}
                </li>
              ))}
            </ul>
            {button}
            {footer}
          </div>

          <div className={styles['tab-slide__img-container']}>
            {picture}
          </div>
        </div>
      </WrapperFluid>
    </article>
  );
}

TabSlide.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  advantages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
  })),
  button: PropTypes.node,
  footer: PropTypes.node,
  picture: PropTypes.node,
};

TabSlide.defaultProps = {
  className: '',
};

export default TabSlide;
