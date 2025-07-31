import { createContext, useContext, useState } from "react";

import sillon from "../img/sillon nordico.png";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartState({ children }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", quantity: 1, price: 1000 ,imageUrl: sillon,},
    { id: 2, name: "Item 2", quantity: 1, price: 2000 ,imageUrl: sillon},
    { id: 3, name: "Item 3", quantity: 1, price: 1000 ,imageUrl: sillon},
    { id: 4, name: "Item 4", quantity: 1, price: 2000 ,imageUrl: sillon},
    { id: 5, name: "Item 5", quantity: 1, price: 1000 ,imageUrl: sillon},
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  const clearCart = () => setCartItems([]);
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, updateQuantity, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
