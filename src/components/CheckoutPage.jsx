import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import CheckoutSummary from "./CheckoutSummary";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Link } from "react-router";

export default function CheckoutPage() {
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
          sx={{ width: "60%" }} // ajustá el porcentaje según lo angosto que quieras
          completed={{
            0: step > 1,
            1: step > 2,
            2: step > 3,
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
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
