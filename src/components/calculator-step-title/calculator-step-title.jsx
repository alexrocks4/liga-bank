import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenProp } from '../../types/types';
import styles from './calculator-step-title.module.scss';

function CalculatorStepTitle({ className, children }) {
  return (
    <h3 className={classNames(className, styles['calculator-step-title'])}>
      {children}
    </h3>
  );
}

CalculatorStepTitle.propTypes = {
  className: PropTypes.string.isRequired,
  children: childrenProp,
};

CalculatorStepTitle.defaultProps = {
  className: '',
};

export default CalculatorStepTitle;
