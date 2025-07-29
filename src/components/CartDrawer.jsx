import "../AboutUs.css";

export default function CartDrawer({ isOpen, cartItems, onQuantityChange }) {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Tu carrito</h2>
      </div>

      <div className="text-content">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item d-flex">
              <span>{item.name}</span>
              <input
                className="col-2"
                type="number"
                value={item.quantity}
                min={1}
                onChange={(num) =>
                  onQuantityChange(item.id, parseInt(num.target.value))
                }
              />
              <span>{item.price * item.quantity} UYU</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
