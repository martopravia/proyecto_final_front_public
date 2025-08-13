import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    step: 1,
  },
  reducers: {
    nextStep: (state) => {
      if (state.step < 4) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    resetStep: (state) => {
      state.step = 1;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

const { actions, reducer } = checkoutSlice;
export const { nextStep, prevStep, resetStep, setStep } = actions;
export default reducer;
