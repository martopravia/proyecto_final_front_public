import { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router";

export default function Checkout({
  cartItems,
  paymentMethod,
  setPaymentMethod,
  shippingInfo,
  setShippingInfo,
}) {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);

  const paymentOptions = [
    {
      id: "creditCard",
      label: (
        <>
          Credit/Debit Card <i className="bi bi-credit-card-fill"></i>
        </>
      ),
      description: "Pay securely with your card.",
    },
    {
      id: "paypal",
      label: (
        <>
          PayPal <i className="bi bi-paypal me-2"></i>
        </>
      ),
      description: "Pay easily with your PayPal account.",
    },
    {
      id: "crypto",
      label: (
        <>
          Crypto Wallet <i className="bi bi-currency-bitcoin"></i>
        </>
      ),
      description: "Pay with Bitcoin or other supported wallets.",
    },
  ];

  const [selectedShippingOption, setSelectedShippingOption] = useState("saved");

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleShippingOptionChange = (option) => {
    setSelectedShippingOption(option);

    if (option === "saved") {
      setShippingInfo({
        name: "Matias Fernandez",
        address: "123 calle, Montevideo",
        email: "matias@example.com",
        phone: "+598 1234 5678",
      });
    } else {
      setShippingInfo({
        name: "",
        address: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    <div className="p-4 d-flex flex-column align-items-left">
      {step === 1 && (
        <>
          <h3 className="mt-5 mb-4 text">Order details</h3>
          <ul
            className="p-0 align-items-left"
            style={{ listStyleType: "none" }}
          >
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="align-items-left p-4 border rounded shadow mb-3"
              >
                <div className="row">
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <img
                      src="src\img\sillon nordico.png"
                      style={{ width: "500px", height: "auto" }}
                      className="img-fluid me-4 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-md-8">
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
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="mt-5 mb-4"> Contact & Shipping info</h3>
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
          <div className="p-0 align-items-left d-flex">
            <div
              className={`border rounded shadow p-4 w-100 d-flex flex-column ${
                selectedShippingOption === "saved" ? "border-black" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleShippingOptionChange("saved")}
            >
              <div className="d-flex align-items-start mb-3">
                <input
                  className="form-check-input me-3 mt-1"
                  type="radio"
                  name="shippingOption"
                  checked={selectedShippingOption === "saved"}
                  onChange={() => setSelectedShippingOption("saved")}
                />
                <label className="fw-bold">Use saved shipping info</label>
              </div>

              <div className="row">
                <div className="col-md-6 mb-2">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Matias Fernandez"
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value="123 calle, Montevideo"
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value="matias@example.com"
                    disabled
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value="+598 1234 5678"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 p-0 align-items-left d-flex">
            <div
              className={`border rounded shadow p-4 w-100 ${
                selectedShippingOption === "manual" ? "border-black" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleShippingOptionChange("manual")}
            >
              <input
                className="form-check-input me-3"
                type="radio"
                name="shippingOption"
                checked={selectedShippingOption === "manual"}
                onChange={() => setSelectedShippingOption("manual")}
              />
              <label className="fw-bold">Add new shipping info</label>
              {selectedShippingOption === "manual" && (
                <>
                  <div className="p-2 mt-2 d-flex">
                    <input
                      className="form-control mb-2 me-2"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={shippingInfo.name}
                      onChange={handleShippingChange}
                    />
                    <input
                      className="form-control mb-2"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                    />
                  </div>
                  <div className="p-2 d-flex">
                    <input
                      className="form-control mb-2 me-2"
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                    />
                    <input
                      className="form-control mb-2"
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <h3 className="mt-5 mb-4">Payment method</h3>
          <div className="row">
            {paymentOptions.map(({ id, label, description }) => (
              <div className="col-lg-4 col-md-12 mb-3" key={id}>
                <div
                  className={`p-3 h-100 border rounded shadow ${
                    paymentMethod === id ? "border-primary" : ""
                  }`}
                  onClick={() => setPaymentMethod(id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input me-2"
                      name="payment"
                      id={id}
                      checked={paymentMethod === id}
                      onChange={() => setPaymentMethod(id)}
                    />
                    <label htmlFor={id} className="form-check-label fw-bold">
                      {label}
                    </label>
                  </div>
                  <p className="mt-2 text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {paymentMethod === "creditCard" && (
            <div className="mt-4">
              <h5>Card Details</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cardholder Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVV"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="mt-5 mb-5">
              <Link to={"https://www.paypal.com/uy/login"}>
                <button className="btn btn-outline-secondary w-100">
                  Continue with PayPal
                </button>
              </Link>
            </div>
          )}

          {paymentMethod === "crypto" && (
            <div className="mt-5 mb-5">
              <Link to={"https://accounts.binance.com/es/login"}>
                <button className="btn btn-outline-secondary w-100">
                  Continue with Binance
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
