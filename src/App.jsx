import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Bounce, ToastContainer, toast } from "react-toastify";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";

import Footer from "./components/Footer";


function App() {
  return (
    <>

      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Routes>
            <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/cart" element={<Checkout />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/products/:productId" element={<Product />} /> */}
            {/* <Route path="/:username" element={<Profile />} /> */}
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
