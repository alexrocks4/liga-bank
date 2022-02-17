import { createSelector, createSlice } from '@reduxjs/toolkit';
import { CreditType, FormConfig, FormStep } from '../const';

const initialFormState = {
  [CreditType.MORTGAGE]: {
    price: FormConfig[CreditType.MORTGAGE].price.defaultValue,
    firstPayment: FormConfig[CreditType.MORTGAGE].firstPayment.defaultValue,
    duration: FormConfig[CreditType.MORTGAGE].duration.defaultValue,
    capital: FormConfig[CreditType.MORTGAGE].capital.defaultValue,
  },
  [CreditType.AUTO]: {
    price: FormConfig[CreditType.AUTO].price.defaultValue,
    firstPayment: FormConfig[CreditType.AUTO].firstPayment.defaultValue,
    duration: FormConfig[CreditType.AUTO].duration.defaultValue,
    casco: FormConfig[CreditType.AUTO].casco.defaultValue,
    lifeInsyrance: FormConfig[CreditType.AUTO].lifeInsyrance.defaultValue,
  },
};

const initialState = {
  step: FormStep.FIRST,
  creditType: '',
  formState: {},
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
        state.formState = initialFormState[payload];
      }
    },

    calculatorResetted() {
      return initialState;
    },

    formStateUpdated(state, { payload }) {
      state.formState = { ...state.formState, ...payload };
    },
  },
});

const {
  stepUpdated,
  creditTypeUpdated,
  calculatorResetted,
  formStateUpdated,
} = calculatorSlice.actions;

const selectCalculatorStep = (state) => state.calculator.step;
const selectCalculatorCreditType = (state) => state.calculator.creditType;
const selectCalculatorFormState = (state) => state.calculator.formState;

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
  calculatorResetted,
  formStateUpdated,
  selectCalculatorStep,
  selectCalculatorCreditType,
  selectCalculatorFormState,
  selectIsStep2Active,
  selectIsStep3Active
};
