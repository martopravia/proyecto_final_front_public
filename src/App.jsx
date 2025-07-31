import { Route, Routes } from "react-router";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Register from "./components/Register";
import { Bounce, ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckoutPage";

import Layout from "./components/Layout";
import ProductPage from "./components/ProductPage";
import CategoryPage from "./components/CategoryPage";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="/cart" element={<Checkout />} /> */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          {/* <Route path="/profile/:username" element={<Profile />} /> */}
          {<Route path="aboutus" element={<AboutUs />} />}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
