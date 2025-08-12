import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastFetched: 0,
  },
  reducers: {
    categoriesRequested(state) {
      state.loading = true;
      state.error = null;
    },
    categoriesReceived(state, action) {
      state.loading = false;
      state.items = action.payload;
      state.lastFetched = Date.now();
    },
    categoriesRequestFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetCategoriesLastFetched(state) {
      state.lastFetched = 0;
    },
  },
});

const { actions, reducer } = categoriesSlice;
export const {
  setCategories,
  categoriesRequested,
  categoriesReceived,
  categoriesRequestFailed,
  resetCategoriesLastFetched,
} = actions;
export default reducer;
