import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './promo-find-us.module.scss';

function PromoFindUs({ className }) {
  return (
    <div className={classNames(className, styles['promo-find-us'])}>

    </div>
  );
}

PromoFindUs.propTypes = {
  className: PropTypes.string.isRequired,
};

PromoFindUs.defaultProps = {
  className: '',
};

export default PromoFindUs;
