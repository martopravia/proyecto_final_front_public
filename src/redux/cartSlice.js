import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { formatName } from "../utils/formatName";

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, stock } = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === id
      );
      if (existingItem) {
        if (existingItem.quantity < stock) {
          existingItem.quantity += 1;
          toast.success(`${formatName(name)} added to cart!`);
        } else {
          toast.error(`Not suficient stock of ${formatName(name)}`);
        }
      } else {
        if (stock > 0) {
          toast.success(`${formatName(name)} added to cart!`);
          state.cartItems.push({ id, name, price, quantity: 1, stock });
        } else {
          toast.error(`Not suficient stock of ${formatName(name)}`);
        }
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { productId, delta } = action.payload;
      const item = state.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          item.quantity = 1;
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
