import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './credits.module.scss';

function Credits({ className }) {
  return (
    <div className={classNames(className, styles['credits'])}>

    </div>
  );
}

Credits.propTypes = {
  className: PropTypes.string.isRequired,
};

Credits.defaultProps = {
  className: '',
};

export default Credits;
