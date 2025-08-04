import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showTerms: false,
    showPrivacy: false,
  },
  reducers: {
    openTermsModal: (state) => {
      state.showTerms = true;
    },
    closeTermsModal: (state) => {
      state.showTerms = false;
    },
    openPrivacyModal: (state) => {
      state.showPrivacy = true;
    },
    closePrivacyModal: (state) => {
      state.showPrivacy = false;
    },
  },
});

export const {
  openTermsModal,
  closeTermsModal,
  openPrivacyModal,
  closePrivacyModal,
} = modalSlice.actions;

export default modalSlice.reducer;
