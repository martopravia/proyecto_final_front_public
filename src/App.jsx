import { Route, Routes } from "react-router";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/AppNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/cart" element={<Checkout />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/products/:productId" element={<Product />} /> */}
            {/* <Route path="/:username" element={<Profile />} /> */}
            {<Route path="/aboutus" element={<AboutUs />} />}
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
