import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useSelector, useDispatch } from "react-redux";

export default function CartHandler() {
  const [cartOpen, setIsOpen] = useState(false);
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

      <CartDrawer isOpen={cartOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
