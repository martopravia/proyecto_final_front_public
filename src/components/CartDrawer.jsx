import "../AboutUs.css";

export default function CartDrawer({ isOpen, onClose, cartItems }) {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Tu carrito</h2>
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
      </div>

      <div className="text-content">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>{item.price} UYU</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
