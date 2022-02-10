import { createSlice } from '@reduxjs/toolkit';
import { FormStep } from '../const';

const initialState = {
  step: FormStep.FIRST,
  creditType: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    stepUpdated(state, { payload }) {
      state.step = payload;
    },

    creditTypeUpdated(state, { payload }) {
      if (state.creditType !== payload) {
        state.creditType = payload;
        state.step = state.step === FormStep.FIRST ? FormStep.SECOND : FormStep.FIRST;
      }
    },
  },
});

const {
  stepUpdated,
  creditTypeUpdated,
} = calculatorSlice.actions;

const selectCalculatorStep = (state) => state.calculator.step;
const selectCalculatorCreditType = (state) => state.calculator.creditType;

export {
  calculatorSlice,
  stepUpdated,
  creditTypeUpdated,
  selectCalculatorStep,
  selectCalculatorCreditType
};
