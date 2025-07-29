import React from "react";
import { Link } from "react-router";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row container ">
        <div className="col border border-black rounded shadow p-5 me-4">
          <h3>Already a customer?</h3>
          <form action="input">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                * Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                * Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mb-2"
                required
              />
              <p>
                <a href="">Forgot your password?</a>
              </p>
            </div>
            <button type="submit" className="btn btn-dark w-100 mt-3">
              Login
            </button>
          </form>
        </div>
        <div className="col border border-black shadow rounded p-5">
          <h3 className="mt-4">New customer?</h3>
          <p className="mt-4">
            Welcome to DeConcept! By creating an account, you can enjoy a faster
            checkout process, manage your orders, access your personal
            information, and save your favorite items.
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
  );
}

export default Login;
