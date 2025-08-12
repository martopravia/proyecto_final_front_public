import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { favorites: [], products: [] },
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
    setWishlistProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setFavorites, toggleFavorites, setWishlistProducts } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
