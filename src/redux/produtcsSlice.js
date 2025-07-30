import { createSlice } from "@reduxjs/toolkit";

const produtcsSlice = createSlice({
  name: "produtcs",
  initialState: [],
  reducers: {
    setArticles: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = produtcsSlice;
export const { setProdutcs } = actions;
export default reducer;
