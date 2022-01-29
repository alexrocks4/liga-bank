import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo.module.scss';
import Slider from '../slider/slider';
import { nanoid } from 'nanoid';
import PromoCredit from '../promo-credit/promo-credit';
import PromoConfidence from '../promo-confidence/promo-confidence';
import PromoFindUs from '../promo-find-us/promo-find-us';

function Promo({ className }) {
  const slides = [
    {
      id: nanoid(),
      slide: <PromoCredit />,
    },
    {
      id: nanoid(),
      slide: <PromoConfidence />,
    },
    {
      id: nanoid(),
      slide: <PromoFindUs/>,
    },
  ];

  return (
    <section className={classNames(className, styles['promo'])}>
      <h2 className="visually-hidden">Промо информация о банке</h2>
      <Slider
        slides={slides}
        pagination={{
          bulletClass: styles['promo__slider-bullet'],
          bulletActiveClass: styles['promo__slider-bullet--active'],
          clickable: true,
        }}
      />
    </section>
  );
}

Promo.propTypes = {
  className: PropTypes.string.isRequired,
};

Promo.defaultProps = {
  className: '',
};

export default Promo;
