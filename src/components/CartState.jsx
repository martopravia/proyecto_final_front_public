import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartState({ children }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", quantity: 1, price: 1000 },
    { id: 2, name: "Item 2", quantity: 1, price: 2000 },
    { id: 3, name: "Item 3", quantity: 1, price: 1000 },
    { id: 4, name: "Item 4", quantity: 1, price: 2000 },
    { id: 5, name: "Item 5", quantity: 1, price: 1000 },
    { id: 6, name: "Item 6", quantity: 1, price: 2000 },
    { id: 7, name: "Item 7", quantity: 1, price: 1000 },
    { id: 8, name: "Item 8", quantity: 1, price: 2000 },
    { id: 9, name: "Item 9", quantity: 1, price: 1000 },
    { id: 10, name: "Item 10", quantity: 1, price: 2000 },
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
