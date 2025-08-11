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
    },
    productsRequestFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = productsSlice;
export const {
  setProducts,
  productsRequested,
  productsReceived,
  productsRequestFailed,
} = actions;
export default reducer;
