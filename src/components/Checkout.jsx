import { useState } from "react";
import { useCart } from "./CartState";

export default function Checkout() {
  const { cartItems } = useCart();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  if (!cartItems || !Array.isArray(cartItems)) return <p>Carrito vacío.</p>;
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirm = () => {
    const orderPayload = {
      userId: 1,
      products: cartItems.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      })),
      shippingInfo,
      paymentMethod,
      totalPrice,
    };
    console.log("Order confirmed:", orderPayload); //cambia por enviar order a la API
  };

  return (
    <div className="p-4">
      <h2>Checkout - Step {step}</h2>
      {step === 1 && (
        <>
          <h3>Order details</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total: ${totalPrice}</h4>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Shipping info</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={shippingInfo.name}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Adress"
            value={shippingInfo.address}
            onChange={handleShippingChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={handleShippingChange}
            required
          />
        </>
      )}
      {step === 3 && (
        <>
          <h3>Payment method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash upond delivery</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button onClick={handleConfirm}>Confirm Order</button>
        </>
      )}
      <div className="mt-4">
        {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
      </div>
    </div>
  );
}
