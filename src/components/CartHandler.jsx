import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function CartHandler() {
  const [cartOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", quantity: 3, price: 1000 },
    { id: 2, name: "Item 2", quantity: 8, price: 2000 },
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
