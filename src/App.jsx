import { Route, Routes } from "react-router";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/cart" element={<Checkout />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/products/:productId" element={<Product />} /> */}
        {/* <Route path="/:username" element={<Profile />} /> */}
        {<Route path="/aboutus" element={<AboutUs />} />}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default App;
