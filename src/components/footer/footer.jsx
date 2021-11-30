import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './footer.module.scss';

function Footer({ className }) {
  return (
    <div className={classNames(className, styles['footer'])}>

    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
