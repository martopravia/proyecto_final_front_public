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
      {cartOpen && (
        <div className="cart-open" on onClick={() => setIsOpen(false)}></div>
      )}
      <CartDrawer isOpen={cartOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
