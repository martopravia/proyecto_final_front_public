import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
    reduceStock(state, action) {
      const { id, quantity } = action.payload;
      const product = state.items.find((product) => product.id === id);
      if (product) {
        product.stock = product.stock - quantity;
      }
    },
  },
});

const { actions, reducer } = productsSlice;
export const {
  finishLoading,
  productsRequested,
  productsReceived,
  reduceStock,
  productsRequestFailed,
  resetProductsLastFetched,
} = actions;
export default reducer;
