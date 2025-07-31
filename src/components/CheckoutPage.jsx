import { useCart } from "./CartState";
import Checkout from "./Checkout";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  return (
    <div className="container p-4">
      <h2>Finalizar compra</h2>
      <Checkout cartItems={cartItems} />
    </div>
  );
}
