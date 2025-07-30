import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function CartHandler() {
  const [cartOpen, setIsOpen] = useState(false);
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
  const cartFlag = () => {
    setIsOpen(!cartOpen);
  };
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <>
      <button className="btn border-0 bg-dark text-light" onClick={cartFlag}>
        {cartOpen ? "✖ Close Cart" : "🛒 Cart"}
      </button>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setIsOpen(false)}
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
      />
    </>
  );
}
