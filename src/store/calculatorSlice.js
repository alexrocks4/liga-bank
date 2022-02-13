import { createSelector, createSlice } from '@reduxjs/toolkit';
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
        state.step = FormStep.SECOND;
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

const selectIsStep2Active = createSelector(
  selectCalculatorStep,
  (currentStep) => currentStep > FormStep.FIRST,
);

const selectIsStep3Active = createSelector(
  selectCalculatorStep,
  (currentStep) => currentStep > FormStep.SECOND,
);

export {
  calculatorSlice,
  stepUpdated,
  creditTypeUpdated,
  selectCalculatorStep,
  selectCalculatorCreditType,
  selectIsStep2Active,
  selectIsStep3Active
};
