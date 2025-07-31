import { Link } from "react-router";
import { useCart } from "./CartState";
import { useEffect } from "react";

export default function CartDrawer({ isOpen, onQuantityChange, onClose }) {
  const { cartItems, clearCart } = useCart();

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return <p>Error loading cart items.</p>;
  }

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <h2 className="h5 m-0">Your cart</h2>
        <i
          className="bi bi-x-lg fs-5"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        ></i>
      </div>

      <div className="flex-grow-1">
        {cartItems.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-3 border-bottom pb-2"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{item.name}</div>
                  <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                    ${item.price} c/u
                  </div>
                  <div className="d-flex align-items-center mt-1">
                    <input
                      className="form-control form-control-sm w-25"
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        onQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                    <span className="ms-auto fw-semibold">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
                {/* <span>{item.name}</span> */}
                {/* <input
                  className="form-control form-control-sm w-25 mx-2"
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(num) =>
                    onQuantityChange(item.id, parseInt(num.target.value))
                  }
                /> */}
                {/* <span>${item.price * item.quantity}</span> */}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-top pt-3 mt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold fs-5">Total</span>
          <span className="fw-bold fs-5">
            $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
        </div>
        <div className="d-flex flex-column gap-2">
          <button className="btn btn-outline-danger" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <Link to={"/checkout"}>
            <button className="btn btn-dark w-100">Finalizar compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
