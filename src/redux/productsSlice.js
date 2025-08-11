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
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    // setFavorite: (state, action) => {
    //   const { productId, value } = action.payload;
    //   const product = state.items.find((item) => item.id === productId);
    //   if (product) {
    //     product.isFavorite = value;
    //   }
    // },
  },
});

const { actions, reducer } = productsSlice;
export const { setProducts, setFavorite } = actions;
export default reducer;
