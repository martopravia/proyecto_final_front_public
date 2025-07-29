import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/cart" element={<Checkout />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/products/:productId" element={<Product />} /> */}
            {/* <Route path="/:username" element={<Profile />} /> */}
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
