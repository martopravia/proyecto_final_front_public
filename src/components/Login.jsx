import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useApi } from "../hooks/useApi";
import { toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("user@test.com");
  const [password, setPassword] = useState("user");
  const { loginUser } = useApi();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser({ email, password });
      if (token) {
        navigate("/");
        toast.success("Login successful!");
      }
    } catch (error) {
      console.error("Invalid credentials:", error);
    }
  };
  return (
    <div className="container min-vh-100 d-flex align-items-center pt-5 pt-sm-5 pt-md-4">
      <div className="row w-100 mx-1">
        <div className="d-lg-flex w-100">
          <div className="col-12 col-lg-6 mb-4  me-lg-3 border rounded shadow p-5">
            <h3>Already a customer?</h3>
            <form action="input" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  * Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@test.com"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  <div>* Password </div>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <i
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  } position-absolute`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    top: "50%",
                    right: "10px",
                    cursor: "pointer",
                    transform: "translateY(-50%)",
                    fontSize: "1.2rem",
                  }}
                ></i>
                <p>
                  <a href="">Forgot your password?</a>
                </p>
              </div>
              <button type="submit" className="btn btn-dark w-100 mt-3">
                Login
              </button>
            </form>
          </div>

          {/* Register */}
          <div className="col-12 col-lg-6 mb-4 border shadow rounded p-5">
            <h3 className="mt-4 mt-lg-0">New customer?</h3>
            <p className="mt-4">
              Welcome to <span className="fw-bold">STUDIO NÖRA</span>. By
              creating an account, you can enjoy a faster checkout process,
              manage your orders, access your personal information, and save
              your favorite items.
            </p>
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="btn btn-dark w-100 mt-4">
                Create an account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
