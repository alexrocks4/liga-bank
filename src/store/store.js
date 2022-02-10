import { calculatorSlice } from './calculatorSlice';
import { configureStore } from '@reduxjs/toolkit';

const appStore = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export { appStore };
