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
      <button
        onClick={cartFlag}
        style={{ position: "fixed", top: 20, right: 20, zIndex: 1100 }}
      >
        {cartOpen ? "✖ Cerrar carrito" : "🛒 Carrito"}
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
