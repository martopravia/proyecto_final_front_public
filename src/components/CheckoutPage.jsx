import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSummary from "./CheckoutSummary";
import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { Link } from "react-router";
import { StepButton } from "@mui/material";
import { setStep } from "../redux/checkoutSlice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const step = useSelector((state) => state.checkout.step);
  const steps = ["Order details", "Contact & Shipping", "Payment method"];

  const handleStepClick = useCallback(
    (index) => {
      const targetStep = index + 1;
      if (targetStep === 1) {
        dispatch(setStep(1));
        return;
      }
      if (cartItems.length === 0) {
        dispatch(setStep(1));
        return;
      }
      if (targetStep === 2) {
        dispatch(setStep(2));
        return;
      }
      if (targetStep === 3 && user) {
        if (!user) {
          dispatch(setStep(2));
        }
        dispatch(setStep(3));
      }
    },
    [cartItems, dispatch, user]
  );

  return (
    <div className="">
      <Box
        className="checkout-stepper"
        style={{ marginTop: "100px" }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center", // margen superior opcional
          mt: 4, // margen superior opcional
          mb: 4, // margen inferior opcional
        }}
      >
        <Stepper
          activeStep={step - 1}
          alternativeLabel
          nonLinear
          sx={{ width: "60%" }}
          completed={{
            0: step > 1, // step 1 completado si estoy en 2 o 3
            1: step > 2, // step 2 completado si estoy en 3
            2: step > 3, // step 3 completado si llego al final
          }}
        >
          {steps.map((label, i) => (
            <Step key={label} completed={step > i + 1}>
              <StepButton
                onClick={() => handleStepClick(i)}
                disableRipple
                disableTouchRipple
                className="stepper"
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  "&.Mui-focusVisible": { outline: "none" },
                }}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      {cartItems.length === 0 ? (
        // Si el carrito está vacío, no mostrar columnas ni resumen
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <Checkout
            cartItems={cartItems}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
          />
        </div>
      ) : (
        // Si hay productos, mostrar las dos columnas
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
            <div className="position-sticky sticky-padding">
              <CheckoutSummary
                paymentMethod={paymentMethod}
                shippingInfo={shippingInfo}
              />
            </div>
          </div>
          <div className="col-md-8 col-sm-12 d-flex justify-content-center">
            <Link
              to="/products"
              className="btn btn-outline-dark rounded-pill w-100 mx-4 text-center my-2"
            >
              Continue Shopping...
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
