import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import CheckoutSummary from "./CheckoutSummary";
import { useState } from "react";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  return (
    <div className="">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <Checkout
            cartItems={cartItems}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="position-sticky" style={{ top: "223px" }}>
            <CheckoutSummary
              paymentMethod={paymentMethod}
              shippingInfo={shippingInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
