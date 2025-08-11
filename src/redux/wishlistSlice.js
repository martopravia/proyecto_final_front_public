import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setFavorite } from "./productsSlice";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { favorites: [] },
  reducers: {
    setFavorites(state, action) {
      state.favorites = action.payload;
    },

    toggleFavorites(state, action) {
      const productId = action.payload;
      if (!state.favorites.includes(productId)) {
        state.favorites.push(productId);
      } else {
        state.favorites = state.favorites.filter((id) => id !== productId);
      }
    },
  },
});

export const { setFavorites, toggleFavorites } = wishlistSlice.actions;
export default wishlistSlice.reducer;
