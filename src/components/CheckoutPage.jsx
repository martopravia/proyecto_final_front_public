import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <Checkout cartItems={cartItems} />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="position-sticky" style={{ top: "223px" }}>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
