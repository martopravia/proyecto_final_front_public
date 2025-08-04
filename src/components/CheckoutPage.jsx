import { useCart } from "./CartState";
import Checkout from "./Checkout";
import { useState } from "react";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <div className="">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <Checkout cartItems={cartItems} />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="position-sticky" style={{ top: "50px" }}>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
