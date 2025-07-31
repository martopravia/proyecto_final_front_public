import { useState } from "react";
import { CartState, useCart } from "./CartState";
import CartDrawer from "./CartDrawer";

export default function CartHandler() {
  const [cartOpen, setIsOpen] = useState(false);
  const { cartState, updateQuantity } = useCart();
  const openCart = () => {
    setIsOpen(true);
  };

  return (
    <>
      {!cartOpen && (
        <button className="btn border-0 bg-dark text-light" onClick={openCart}>
          🛒 Cart
        </button>
      )}

      <CartDrawer
        isOpen={cartOpen}
        onQuantityChange={updateQuantity}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
