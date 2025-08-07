import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, token: "" },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = "";
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout, setUser } = actions;
export default reducer;
