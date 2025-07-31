import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartSlice";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  // if (!cartItems || !Array.isArray(cartItems)) return <p>Carrito vacío.</p>;
  // const totalPrice = Array.isArray(cartItems)
  //   ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  //   : 0;
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
    dispatch(clearCart());
    alert("Order confirmed! Thank you for your purchase.");
  };

  return (
    <div className="p-4">
      <h2>Checkout - Step {step}</h2>
      {step === 1 && (
        <>
          <h3 className="text-lg font-medium mb-4">Order details</h3>
          <ul style={{ listStyleType: "none" }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="p-4 mb-5 border border-black rounded shadow d-flex"
              >
                <div className="row">
                  <div className="col">
                    <img
                      src="src\img\sillon nordico.png"
                      style={{ width: "500px", height: "auto" }}
                      className="img-fluid me-4"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h4>{item.name}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae accusamus quas architecto a, maxime
                      consequatur?
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price per unit: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <div className="d-flex justify-content-end">
                      <i
                        className="bi bi-trash3"
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      ></i>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold">Total: ${totalPrice}</h4>
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
    </div>
  );
}
