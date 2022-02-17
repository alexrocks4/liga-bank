import { createSelector, createSlice } from '@reduxjs/toolkit';
import { CreditType, FormConfig, FormStep } from '../const';

const initialFormState = {
  [CreditType.MORTGAGE]: {
    price: FormConfig[CreditType.MORTGAGE].price.defaultValue,
    firstPayment: FormConfig[CreditType.MORTGAGE].firstPayment.defaultValue,
    firstPaymentPercent: FormConfig[CreditType.MORTGAGE].firstPayment.minPricePercentage,
    duration: FormConfig[CreditType.MORTGAGE].duration.defaultValue,
    capital: FormConfig[CreditType.MORTGAGE].capital.defaultValue,
  },
  [CreditType.AUTO]: {
    price: FormConfig[CreditType.AUTO].price.defaultValue,
    firstPayment: FormConfig[CreditType.AUTO].firstPayment.defaultValue,
    firstPaymentPercent: FormConfig[CreditType.AUTO].firstPayment.minPricePercentage,
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

    priceUpdated(state, { payload }) {
      state.formState.price = payload;
      state.formState.firstPayment = Math.round(
        payload * state.formState.firstPaymentPercent / 100,
      );
    },

    firstPaymentUpdated({ creditType, formState }, { payload }) {
      const minFirstPayment = formState.price * FormConfig[creditType].firstPayment.minPricePercentage / 100;
      const newFirstPayment = payload > formState.price
        ? formState.price
        : Math.max(minFirstPayment, payload);

      formState.firstPaymentPercent = Math.round(newFirstPayment / formState.price  * 100);
      formState.firstPayment = newFirstPayment;
    },

    firstPaymentPercentUpdated({ formState }, { payload }) {
      formState.firstPaymentPercent = payload;
      formState.firstPayment = Math.round(
        formState.price * payload / 100,
      );
    },
  },
});

const {
  stepUpdated,
  creditTypeUpdated,
  calculatorResetted,
  formStateUpdated,
  priceUpdated,
  firstPaymentUpdated,
  firstPaymentPercentUpdated,
} = calculatorSlice.actions;

const selectCalculatorStep = (state) => state.calculator.step;
const selectCalculatorCreditType = (state) => state.calculator.creditType;
const selectCalculatorFormState = (state) => state.calculator.formState;
const selectFirstPaymentPercent = (state) => state.calculator.formState.firstPaymentPercent;

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
  priceUpdated,
  firstPaymentUpdated,
  firstPaymentPercentUpdated,
  selectCalculatorStep,
  selectCalculatorCreditType,
  selectCalculatorFormState,
  selectFirstPaymentPercent,
  selectIsStep2Active,
  selectIsStep3Active
};
