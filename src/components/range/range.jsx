import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './range.module.scss';

function Range({ className }) {
  return (
    <div className={classNames(className, styles['range'])}>

    </div>
  );
}

Range.propTypes = {
  className: PropTypes.string.isRequired,
};

Range.defaultProps = {
  className: '',
};

export default Range;
