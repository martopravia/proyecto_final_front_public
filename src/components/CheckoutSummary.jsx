import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../redux/checkoutSlice";
import { useNavigate } from "react-router";
import { clearCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function CheckoutSummary({ paymentMethod, shippingInfo }) {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleConfirm = () => {
    const orderPayload = {
      userId: 1,
      products: cartItems.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      })),
      shippingInfo,
      paymentMethod,
      totalPrice: total,
    };
    console.log("Order confirmed:", orderPayload);
    dispatch(clearCart());
    toast.success("Order confirmed! Thank you for your purchase.");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="p-4 border rounded shadow mx-4">
      <h4>Order Summary</h4>
      <p>Total quantity: {cartItems.length}</p>
      <p>Subtotal: ${total.toFixed(2)}</p>
      <p>Taxes: ${(total * 0.21).toFixed(2)}</p>
      <p>Shipping: $5.00</p>
      <hr />
      <p className="fw-bold">Total: ${(total + 5 + total * 0.21).toFixed(2)}</p>

      <div className="d-flex gap-2 mt-3">
        {step > 1 && (
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(prevStep())}
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button
            className="btn btn-primary"
            onClick={() => dispatch(nextStep())}
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            className="btn btn-success ms-auto"
            onClick={handleConfirm}
            disabled={!paymentMethod}
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutSummary;
