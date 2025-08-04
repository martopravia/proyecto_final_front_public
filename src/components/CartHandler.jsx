import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useSelector, useDispatch } from "react-redux";

export default function CartHandler() {
  const [cartOpen, setIsOpen] = useState(false);
  const openCart = () => {
    setIsOpen(true);
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;
  return (
    <>
      {!cartOpen && (
        <button
          className="btn border-0  text-light p-2 d-flex align-items-center justify-content-center"
          onClick={openCart}
          style={{ borderRadius: "12px", width: "50px", height: "50px" }}
        >
          <div style={{ position: "relative" }}>
            <span role="img" aria-label="carrito" style={{ width: "24px", height: "24px" }}>
              🛒
            </span>
            {totalItems > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{
                  fontSize: "0.65rem",
                  padding: "0.3em 0.5em",
                  lineHeight: 1,
                  zIndex: 10,
                }}
              >
                {totalItems}
              </span>
            )}
          </div>
        </button>
      )}
      {cartOpen && (
        <div className="cart-open" on onClick={() => setIsOpen(false)}></div>
      )}
      <CartDrawer isOpen={cartOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
