import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    setArticles: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = articlesSlice;
export const { setArticles } = actions;
export default reducer;
