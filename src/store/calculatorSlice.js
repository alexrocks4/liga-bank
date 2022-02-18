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
    lifeInsurance: FormConfig[CreditType.AUTO].lifeInsurance.defaultValue,
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

    durationUpdated({ creditType, formState }, { payload }) {
      const max = FormConfig[creditType].duration.max;
      const min = FormConfig[creditType].duration.min;

      formState.duration = payload > max
        ? max
        : Math.max(min, payload);
    },

    capitalUpdated(state, { payload }) {
      state.formState.capital = payload;
    },

    cascoUpdated(state, { payload }) {
      state.formState.casco = payload;
    },

    lifeInsuranceUpdated(state, { payload }) {
      state.formState.lifeInsurance = payload;
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
  durationUpdated,
  capitalUpdated,
  cascoUpdated,
  lifeInsuranceUpdated,
} = calculatorSlice.actions;

const selectCalculatorStep = (state) => state.calculator.step;
const selectCalculatorCreditType = (state) => state.calculator.creditType;
const selectCalculatorFormState = (state) => state.calculator.formState;
const selectFirstPayment = (state) => state.calculator.formState.firstPayment;
const selectFirstPaymentPercent = (state) => state.calculator.formState.firstPaymentPercent;
const selectDuration = (state) => state.calculator.formState.duration;
const selectCapital = (state) => state.calculator.formState.capital;
const selectCasco = (state) => state.calculator.formState.casco;
const selectLifeInsurance = (state) => state.calculator.formState.lifeInsurance;
const selectPrice = (state) => state.calculator.formState.price;
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
  durationUpdated,
  capitalUpdated,
  cascoUpdated,
  lifeInsuranceUpdated,
  selectCalculatorStep,
  selectCalculatorCreditType,
  selectCalculatorFormState,
  selectFirstPayment,
  selectFirstPaymentPercent,
  selectDuration,
  selectCapital,
  selectCasco,
  selectLifeInsurance,
  selectPrice,
  selectIsStep2Active,
  selectIsStep3Active
};
