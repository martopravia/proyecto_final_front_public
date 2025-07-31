import { useState } from "react";
import { useCart } from "./CartState";
import { useSelector } from "react-redux";

export default function Checkout() {
  const { cartItems } = useCart();
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
      <h2>Checkout - Step {step} / 3</h2>
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
                        onClick={() => console.log("Remove item", item.id)}
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
          <h3 className="mt-4">* Contact & Shipping info</h3>
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
