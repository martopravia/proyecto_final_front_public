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
      totalAmount: total,
    };
    console.log("Order payload:", orderPayload);
    try {
      await toast.promise(confirmOrder(orderPayload), {
        pending: "Confirming your order...",
        success: "Order confirmed! Thank you for your purchase.",
        error: "Order failed, please try again later.",
      });
      dispatch(nextStep());
      dispatch(clearCart());
      toast.info("You will be redirected to your order history...", {
        autoClose: 4500,
        hideProgressBar: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
      setTimeout(() => {
        navigate("/profile");
        dispatch(resetStep());
      }, 5000);
    } catch (error) {
      console.error("Order failed:", error);
    }
  };
  const isShippingIncomplete =
    !shippingInfo.name?.trim() ||
    !shippingInfo.address?.trim() ||
    !shippingInfo.email?.trim() ||
    !shippingInfo.phone?.trim();

  return (
    <div className="p-4 border rounded shadow mx-4">
      <h4>Order Summary</h4>
      <p>
        Total quantity:{" "}
        {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      </p>
      <p>Subtotal: U$S {Number(total).toLocaleString("de-DE")} </p>
      <p>
        Taxes: U$S{" "}
        {(total * 0.21).toLocaleString("de-DE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p>Shipping: U$S 5,00</p>
      <hr />
      <p className="fw-bold">
        Total: U$S{" "}
        {(total + 5 + total * 0.21).toLocaleString("de-DE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      <div className="d-flex flex-column justify-content-between flex-lg-row gap-2 mt-3">
        <div>
          <button
            className="btn btn-secondary"
            disabled={step === 1}
            onClick={() => dispatch(prevStep())}
          >
            Back
          </button>
        </div>

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
            disabled={isShippingIncomplete}
          >
            Confirm Order
          </button>
        )}
      </div>
      {step === 3 && isShippingIncomplete && (
        <p className="text-danger mt-4">
          Please complete all Contact & Shipping information before confirming
          your order.
        </p>
      )}
    </div>
  );
}

export default CheckoutSummary;
