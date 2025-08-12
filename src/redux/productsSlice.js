import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastFetched: 0,
  },
  reducers: {
    productsRequested(state) {
      state.loading = true;
      state.error = null;
    },
    productsReceived(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.lastFetched = Date.now();
    },
    productsRequestFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetProductsLastFetched(state) {
      state.lastFetched = 0;
    },
    finishLoading(state) {
      state.loading = false;
    },
  },
});

const { actions, reducer } = productsSlice;
export const {
  finishLoading,
  productsRequested,
  productsReceived,
  productsRequestFailed,
  resetProductsLastFetched,
} = actions;
export default reducer;
