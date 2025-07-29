import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, token: "" },
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default reducer;
