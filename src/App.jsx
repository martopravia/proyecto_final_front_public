import { Navigate, Route, Routes } from "react-router";
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
import LegalModals from "./components/LegalModals";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          {/* <Route path="/cart" element={<Checkout />} /> */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products" element={<CategoryPage />} />
          <Route path="/category" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/products/:slug/:productId" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          {/* <Route path="/profile/:username" element={<Profile />} /> */}
          {<Route path="/aboutus" element={<AboutUs />} />}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <LegalModals />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
