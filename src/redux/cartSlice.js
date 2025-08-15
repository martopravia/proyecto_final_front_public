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
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        if (existingItem.quantity < item.stock) {
          existingItem.quantity += 1;
          toast.success(`${formatName(item.name)} added to cart!`);
        } else {
          toast.error(`Not suficient stock of ${formatName(item.name)}`);
        }
      } else {
        if (item.stock > 0) {
          toast.success(`${formatName(item.name)} added to cart!`);
          state.cartItems.push({ ...item, quantity: 1 });
        } else {
          toast.error(`Not suficient stock of ${formatName(item.name)}`);
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
        const newQty = (item.quantity += delta);
        if (item.quantity <= 0) {
          item.quantity = 1;
          return;
        }
        if (newQty > item.stock) {
          item.quantity = item.stock;
          toast.warning(`Maximun stock of ${formatName(item.name)} reached`);
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
