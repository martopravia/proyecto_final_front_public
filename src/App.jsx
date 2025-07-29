import { Route, Routes } from "react-router";
import "./App.css";
import AboutUs from "./components/AboutUs";
import { useState } from "react";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cartOpen, setIsOpen] = useState(false);
  const cartItems = [
    { name: "Item 1", price: 1000 },
    { name: "Item 2", price: 2000 },
  ];
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{ position: "fixed", top: 20, right: 20, zIndex: 1100 }}
      >
        Abrir carrito
      </button>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setIsOpen(false)}
        cartItems={cartItems}
      />
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
