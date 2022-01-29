import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo-confidence.module.scss';

function PromoConfidence({ className }) {
  return (
    <div className={classNames(className, styles['promo-confidence'])}>

    </div>
  );
}

PromoConfidence.propTypes = {
  className: PropTypes.string.isRequired,
};

PromoConfidence.defaultProps = {
  className: '',
};

export default PromoConfidence;
