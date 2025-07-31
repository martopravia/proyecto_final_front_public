import { useCart } from "./CartState";

export default function CartDrawer({ isOpen, onQuantityChange }) {
  const { cartItems } = useCart();

  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return <p>Error loading cart items.</p>;
  }

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="border-bottom pb-2 mb-3">
        <h2 className="h5 m-0">Your cart</h2>
      </div>

      <div className="flex-grow-1 overflow-auto">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item d-flex">
                <span>{item.name}</span>
                <input
                  className="form-control form-control-sm w-25 mx-2"
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(num) =>
                    onQuantityChange(item.id, parseInt(num.target.value))
                  }
                />
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-top pt-3 mt-3 d-flex justify-content-between align-items-center">
        <strong>Total</strong>
        <strong>
          $
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}{" "}
        </strong>
      </div>
    </div>
  );
}
