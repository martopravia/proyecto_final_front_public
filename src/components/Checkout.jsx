import { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router";

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

  const [paymentMethod, setPaymentMethod] = useState("");
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
      <h2 className="ms-5 fw-bold">Checkout - Step {step} / 3</h2>
      {step === 1 && (
        <>
          <h3 className="text-lg font-medium mb-4 ms-5 fw-bold">
            * Order details
          </h3>
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
          <h3 className=" ms-5 fw-bold">* Contact & Shipping info</h3>
          {/* {!LoggedUser ? (
      <div>
        <h4>To continue, please log in or register</h4>
        <button className="btn btn-outline-dark mt-3">
          Log in
        </button>
        <button className="btn btn-outline-dark mt-3">
          Register
        </button>
      </div>
    ) : ( */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "50px",
            }}
          >
            <input
              className="form-check-input me-5"
              type="radio"
              id="useSaved"
              name="shippingOption"
            />

            <li className="border border-black rounded shadow p-4 list-unstyled w-100  d-flex ">
              <div className="p-2 me-4">
                <p>Name: LoggedUser.name loggedUser.Lastname</p>
                <p>Shipping to: LoggedUser.location</p>
              </div>
              <div className="p-2">
                <p>Email: LoggedUser.email</p>
                <p>Phone: LoggedUser.phone</p>
              </div>
            </li>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "50px",
            }}
          >
            <input
              className="form-check-input me-5"
              type="radio"
              id="useManual"
              name="shippingOption"
            />

            <li className="border border-black rounded shadow p-4 list-unstyled w-100 ">
              <div className="p-2 d-flex">
                <input
                  className="form-control mb-2  "
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={shippingInfo.name}
                  onChange={handleShippingChange}
                  required
                />
                <input
                  className="form-control mb-2 w-100"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={shippingInfo.email}
                  onChange={handleShippingChange}
                  required
                />
              </div>
              <div className="d-flex p-2">
                <input
                  className="form-control mb-2  w-100"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  required
                />
                <input
                  className="form-control mb-2"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={shippingInfo.phone}
                  onChange={handleShippingChange}
                  required
                />
              </div>
            </li>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h3 className="fw-bold ms-5">* Payment method</h3>
          <div className="row">
            <div className="col-4 mb-3 mt-3">
              <div
                className={`card p-3 h-100 shadow-sm text- ${
                  paymentMethod === "creditCard" ? "border-primary" : ""
                }`}
                onClick={() => setPaymentMethod("creditCard")}
                style={{ cursor: "pointer" }}
              >
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    name="payment"
                    id="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                  />
                  <label
                    htmlFor="creditCard"
                    className="form-check-label fw-bold"
                  >
                    Credit/Debit Card
                  </label>
                </div>
                <p className="mt-2 text-muted">Pay securely with your card.</p>
              </div>
            </div>

            <div className="col-4 mb-3 mt-3">
              <div
                className={`card p-3 h-100 shadow-sm ${
                  paymentMethod === "paypal" ? "border-primary" : ""
                }`}
                onClick={() => setPaymentMethod("paypal")}
                style={{ cursor: "pointer" }}
              >
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    name="payment"
                    id="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  <label htmlFor="paypal" className="form-check-label fw-bold">
                    PayPal
                  </label>
                </div>
                <p className="mt-2 text-muted">
                  Pay easily with your PayPal account.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3 mt-3">
              <div
                className={`card p-3 h-100 shadow-sm ${
                  paymentMethod === "crypto" ? "border-primary" : ""
                }`}
                onClick={() => setPaymentMethod("crypto")}
                style={{ cursor: "pointer" }}
              >
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    name="payment"
                    id="crypto"
                    checked={paymentMethod === "crypto"}
                    onChange={() => setPaymentMethod("crypto")}
                  />
                  <label htmlFor="crypto" className="form-check-label fw-bold">
                    Crypto Wallet
                  </label>
                </div>
                <p className="mt-2 text-muted">
                  Pay with Bitcoin or other supported wallets.
                </p>
              </div>
            </div>
          </div>

          {paymentMethod === "paypal" && (
            <div className="mt-3 ms-3">
              <Link to={"https://www.paypal.com/uy/home"}>
                <button className="btn btn-outline-secondary" disabled>
                  Continue with PayPal
                </button>
              </Link>
            </div>
          )}

          {paymentMethod === "crypto" && (
            <div className="mt-3 ms-3">
              <Link to={"https://accounts.binance.com/es/register"}>
                <button className="btn btn-outline-secondary" disabled>
                  Continue with Binance
                </button>
              </Link>
            </div>
          )}

          {paymentMethod === "creditCard" && (
            <div className="mt-4 ms-3">
              <h5>Card Details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cardholder Name"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            className="btn btn-success mt-4 ms-3"
            onClick={handleConfirm}
            disabled={!paymentMethod}
          >
            ✅ Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
