import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, resetStep } from "../redux/checkoutSlice";
import { useNavigate } from "react-router";
import { clearCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useApi } from "../hooks/useApi";

function CheckoutSummary({ paymentMethod, shippingInfo }) {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);
  const { user } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const { confirmOrder } = useApi();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirm = async () => {
    const orderPayload = {
      userId: user.id,
      products: cartItems.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      })),
      shippingInfo,
      paymentMethod,
      totalPrice: total,
    };
    try {
      await confirmOrder(orderPayload);
      setTimeout(() => {
        dispatch(clearCart());
        dispatch(nextStep());
        toast.success("Order confirmed! Thank you for your purchase.");
      }, 1500);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
    console.log("Order confirmed:", orderPayload);

    // setTimeout(() => {
    //   dispatch(clearCart());
    //   dispatch(nextStep());
    //   toast.success("Order confirmed! Thank you for your purchase.");
    // }, 1500);
  };

  console.log(cartItems);

  return (
    <div className="p-4 border rounded shadow mx-4">
      <h4>Order Summary</h4>
      <p>
        Total quantity:{" "}
        {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      </p>
      <p>Subtotal: ${total.toFixed(2)}</p>
      <p>Taxes: ${(total * 0.21).toFixed(2)}</p>
      <p>Shipping: $5.00</p>
      <hr />
      <p className="fw-bold">Total: ${(total + 5 + total * 0.21).toFixed(2)}</p>

      <div className="d-flex flex-column justify-content-between flex-lg-row gap-2 mt-3">
        {(step === 2 || step === 3) && (
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => dispatch(prevStep())}
            >
              Back
            </button>
          </div>
        )}

        {step < 3 && (
          <button
            className="btn btn-primary"
            onClick={() => {
              if (step === 1 && cartItems.length === 0) return;
              if (step === 2 && !user) return;
              dispatch(nextStep());
            }}
            disabled={
              (step === 1 && cartItems.length === 0) || (step === 2 && !user)
            }
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            className="btn btn-success"
            onClick={() => {
              handleConfirm();
            }}
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutSummary;
