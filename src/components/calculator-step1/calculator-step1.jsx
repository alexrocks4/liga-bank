import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import styles from './calculator-step1.module.scss';
import { Media } from '../../utils';
import { Breakpoint, CreditTypeOption, formTypes } from '../../const';
import DropdownIndicator from '../dropdown-indicator/dropdown-indicator';
import { useDispatch, useSelector } from 'react-redux';
import { creditTypeUpdated, selectCalculatorCreditType } from '../../store/calculatorSlice';
import CalculatorStepTitle from '../calculator-step-title/calculator-step-title';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: '#1f1e25',
    borderRadius: state.selectProps.menuIsOpen ? '4px 4px 0 0' : '4px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#1f1e25',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '22px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '18px 12px 18px',
    [Media[Breakpoint.MEDIUM]]: {
      paddingLeft: '21px',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    paddingRight: '5px',
    [Media[Breakpoint.MEDIUM]]: {
      paddingRight: '14px',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderRadius: '0 0 4px 4px',
    border: '1px solid #1F1E25',
    borderTop: 'none',
    boxShadow: 'none',
    marginTop: '0',
    position: 'static',
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: '21px 14px 20px',
    ':not(:last-child)': {
      borderBottom: '1px solid #c1c2ca',
    },
    [Media[Breakpoint.MEDIUM]]: {
      paddingLeft: '23px',
      paddingRight: '23px',
    },
  }),
};

function CalculatorStep1({ className }) {
  const dispatch = useDispatch();
  const currentCreditType = useSelector(selectCalculatorCreditType);
  const handleInputChange = ({ value }) => dispatch(creditTypeUpdated(value));

  return (
    <section className={classNames(className, styles['calculator-step1'])}>
      <CalculatorStepTitle className={styles['calculator-step1__title']}>
        Шаг 1. Цель кредита
      </CalculatorStepTitle>
      <Select
        options={formTypes}
        placeholder="Выберите цель кредита"
        styles={selectStyles}
        components={{ DropdownIndicator }}
        isSearchable={false}
        onChange={handleInputChange}
        value={CreditTypeOption[currentCreditType] ? CreditTypeOption[currentCreditType] : ''}
      />
    </section>
  );
}

CalculatorStep1.propTypes = {
  className: PropTypes.string.isRequired,
};

CalculatorStep1.defaultProps = {
  className: '',
};

export default CalculatorStep1;
