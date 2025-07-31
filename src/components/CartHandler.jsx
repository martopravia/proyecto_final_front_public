import { useState } from "react";
import { CartState, useCart } from "./CartState";
import CartDrawer from "./CartDrawer";

export default function CartHandler() {
  const [cartOpen, setIsOpen] = useState(false);
  const { cartState, updateQuantity } = useCart();
  const cartFlag = () => {
    setIsOpen(!cartOpen);
  };

  return (
    <>
      <button
        className="btn border-0 bg-dark text-light fs-5"
        onClick={cartFlag}
      >
        {cartOpen ? "✖ Close Cart" : "🛒 Cart"}
      </button>

      <CartDrawer isOpen={cartOpen} onQuantityChange={updateQuantity} />
    </>
  );
}
