import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  };

  return (
    <div>
      <div className="container border border-black rounded shadow p-5 my-5">
        <h3>Create an account</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              * Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              * Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cellPhone" className="form-label">
              * Cell Phone Number
            </label>
            <input
              type="text"
              id="cellPhone"
              name="cellPhone"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              * Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              * Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              * Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <div className="form-check mt-3">
              <input type="checkbox" required /> By checking this box, you
              consent to the processing of your personal data by{" "}
              <strong>DeConcept</strong> under the conditions set out in our{" "}
              <Link to="/terms-of-use">Terms of use</Link> and our{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>. You confirm that
              you have understood it.
            </div>
            <div className="form-check mt-3">
              <input type="checkbox" /> I want to receive news from{" "}
              <strong>DeConcept</strong> and be informed about upcoming events.
              I consent to receive proposals via email, SMS, phone calls, and
              postal mail. I accept that my information may be shared with
              partners.
            </div>
          </div>
          <button type="submit" className="btn btn-dark w-100 mt-3">
            Register
          </button>
        </form>
        <Link to="/login" className="mt-3 text-center d-block">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
}

export default Register;
