import { useCart } from "./CartState";
import Checkout from "./Checkout";
import { useState } from "react";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <div className=" p-4">
      <div className="row">
        <h2 className="text-center fw-bold">Cart Overview</h2>
        <div className="col-8">
          <Checkout cartItems={cartItems} />
        </div>
        <div className="col-4 ">
          <div className="position-sticky" style={{ top: "50px" }}>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
