import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.module.scss';

function Header({ className }) {
  return (
    <div className={classNames(className, styles['header'])}>

    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

Header.defaultProps = {
  className: '',
};

export default Header;
