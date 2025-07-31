import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    step: 1,
  },
  reducers: {
    nextStep: (state) => {
      if (state.step < 3) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    resetStep: (state) => {
      state.step = 1;
    },
  },
});

const { actions, reducer } = checkoutSlice;
export const { nextStep, prevStep, resetStep } = actions;
export default reducer;
