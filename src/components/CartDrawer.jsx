import { Link } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { clearCart, updateQuantity } from "../redux/cartSlice";
import { formatName } from "../utils/formatName";
import { toast } from "react-toastify";
import { useKeyDown } from "../hooks/useKeyDown";

export default function CartDrawer({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useKeyDown("Escape", onClose);

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

      <div className="flex-grow-1 overflow-auto">
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
                  src={item.image}
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
                  <div className="fw-semibold">{formatName(item.name)}</div>
                  <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                    U$S {Number(item.price).toLocaleString("de-DE")} ea.
                  </div>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <span style={{ fontSize: "1rem" }}>
                      Quantity: {item.quantity}
                    </span>
                    <button
                      className="btn btn-outline-secondary border-1 border-light-subtle rounded p-1 d-flex align-items-center justify-content-center btn-sm px-2"
                      style={{
                        width: "28px",
                        height: "28px",
                        fontSize: "0.75rem",
                      }}
                      onClick={() =>
                        dispatch(
                          updateQuantity({ productId: item.id, delta: -1 })
                        )
                      }
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <button
                      className="btn btn-outline-secondary border-1 border-light-subtle rounded p-1 d-flex align-items-center justify-content-center btn-sm px-2"
                      style={{
                        width: "28px",
                        height: "28px",
                        fontSize: "0.75rem",
                      }}
                      onClick={() =>
                        dispatch(
                          updateQuantity({ productId: item.id, delta: 1 })
                        )
                      }
                    >
                      <i className="bi bi-plus"></i>
                    </button>

                    <span className="ms-auto fw-semibold">
                      U$S{" "}
                      {Number(item.price * item.quantity).toLocaleString(
                        "de-DE"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-top pt-3 mt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold fs-5">Total</span>
          <span className="fw-bold fs-5">
            <span className="fw-bold fs-5">
              U$S{" "}
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString("de-DE")}
            </span>
          </span>
        </div>
        <div className="d-flex flex-column gap-2">
          {/* boton de vaciar carrito con toastify */}
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              if (cartItems.length === 0) {
                toast.warning("Your cart is already empty", {
                  position: "bottom-right",
                  autoClose: 3000,
                });
                return;
              }

              toast.info(
                ({ closeToast }) => (
                  <div>
                    <p>Are you sure you want to empty the cart?</p>
                    <div className="d-flex justify-content-end gap-2 mt-2">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          dispatch(clearCart());
                          closeToast();
                          toast.success("Cart emptied successfully!");
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={closeToast}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ),
                {
                  position: "bottom-right",
                  autoClose: false,
                  closeOnClick: false,
                  closeButton: false,
                  draggable: false,
                  pauseOnHover: true,
                }
              );
            }}
          >
            Empty cart
          </button>
          <Link to={"/checkout"}>
            <button className="btn btn-dark w-100" onClick={onClose}>
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
