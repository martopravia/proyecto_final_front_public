import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router";
import { resetStep } from "../redux/checkoutSlice";
import { formatName } from "../utils/formatName";

export default function Checkout({
  cartItems,
  paymentMethod,
  setPaymentMethod,
  shippingInfo,
  setShippingInfo,
}) {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);
  const { user } = useSelector((state) => state.user);

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

  useEffect(() => {
    if (step === 2 && selectedShippingOption === "saved" && user) {
      setShippingInfo({
        name: `${user.firstname} ${user.lastname}`,
        address: `${user.address}`,
        email: `${user.email}`,
        phone: `${user.phone}`,
      });
    }
  }, [step, selectedShippingOption, user]);

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
        name: `${user.firstname} ${user.lastname}`,
        address: `${user.address}`,
        email: `${user.email}`,
        phone: `${user.phone}`,
      });
    } else {
    }
  };

  return (
    <div>
      <div className="p-4 d-flex flex-column align-items-left">
        {step === 1 && (
          <>
            {cartItems.length === 0 ? (
              <div className="text-center">
                <i className="bi bi-cart-x" style={{ fontSize: "50px" }}></i>
                <h5 className="mt-3">Your cart is empty</h5>
                <p className="lead">Please add some items before continuing.</p>
                <Link to="/">
                  <button className="btn btn-secondary">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <h3 className="mt-2 mb-4">Order details</h3>
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
                            src={item.image}
                            style={{ width: "auto", height: "300px" }}
                            className="img-fluid me-3 w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-12 col-md-8">
                          <h4>{formatName(item.name)}</h4>
                          <p>{item.description}</p>
                          <div className="d-flex align-items-center my-3 gap-2">
                            <span>Quantity: {item.quantity}</span>
                            <button
                              className="btn btn-outline-secondary border-1 border-light-subtle rounded p-1 d-flex align-items-center justify-content-center btn-sm px-2"
                              style={{
                                width: "28px",
                                height: "28px",
                                fontSize: "0.75rem",
                              }}
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    productId: item.id,
                                    delta: -1,
                                  })
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
                                  updateQuantity({
                                    productId: item.id,
                                    delta: 1,
                                  })
                                )
                              }
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
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
          </>
        )}
        {step === 2 && (
          <>
            {!user ? (
              <div className="text-center" style={{ marginTop: "150px" }}>
                <h4>To continue, please log in or register</h4>
                <Link to="/login">
                  <button className="btn btn-outline-dark mt-3 me-2">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-outline-dark mt-3">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <h3 className="mt-2 mb-4"> Contact & Shipping info </h3>
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
                          value={`${user.firstname} ${user.lastname}`}
                          disabled
                        />
                      </div>
                      <div className="col-md-6 mb-2">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.address}
                          disabled
                        />
                      </div>
                      <div className="col-md-6 mb-2">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={user.email}
                          disabled
                        />
                      </div>
                      <div className="col-md-6 mb-2">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          value={user.phone}
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
                            className="form-control mb-2 me-2"
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={shippingInfo.address}
                            onChange={handleShippingChange}
                            required
                          />
                        </div>
                        <div className="p-2 d-flex">
                          <input
                            className="form-control mb-2"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={shippingInfo.email}
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
          </>
        )}
        {step === 3 && (
          <>
            <h3 className="mt-2 mb-4">Payment method</h3>
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
                  <button
                    className="btn btn-outline-secondary w-100"
                    style={{ marginBottom: "30px" }}
                  >
                    Continue with PayPal
                  </button>
                </Link>
              </div>
            )}
            {paymentMethod === "crypto" && (
              <div className="mt-5 mb-5">
                <Link to={"https://accounts.binance.com/es/login"}>
                  <button
                    className="btn btn-outline-secondary w-100"
                    style={{ marginBottom: "30px" }}
                  >
                    Continue with Binance
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
        {step === 4 && (
          <>
            <div className="text-center">
              <h2> Thanks for shopping with us!</h2>
              <p className="lead">A confirmation email has been sent to you.</p>
              <Link to={"/"}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => dispatch(resetStep())}
                >
                  Back home
                </button>
              </Link>
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
}
