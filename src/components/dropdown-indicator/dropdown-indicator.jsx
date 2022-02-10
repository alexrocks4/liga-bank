import React from 'react';
import { components } from 'react-select';

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L17 1" stroke="#1F1E25" strokeWidth="2"/>
      </svg>
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;
