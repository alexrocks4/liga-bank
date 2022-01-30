import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import styles from './slider.module.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import './custom-swiper.scss';

SwiperCore.use([Pagination, Autoplay]);

function Slider({ className, slides, ...props}) {
  return (
    <Swiper className={classNames(className, styles['slider'])} {...props}>
      {slides.map(({ slide, id }) => (
        <SwiperSlide key={id}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  className: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slide: PropTypes.node,
  })).isRequired,
};

Slider.defaultProps = {
  className: '',
  slides: [],
};

export default Slider;
