import { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";
import { useDispatch } from "react-redux";
import { openPrivacyModal, openTermsModal } from "../redux/modalSlice";

function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [modalPrivacy, setModalPrivacy] = useState(false);
  // const [modalTerms, setModalTerms] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  };

  return (
    <div className="mx-4">
      <div
        className="container border rounded shadow p-3 p-md-5 my-3"
        style={{ width: "80vh", maxWidth: "100%" }}
      >
        <h3>Create an account</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              * First Name
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
              * Phone Number
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
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
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
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              * Confirm Password
            </label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i
                className={`bi ${
                  showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                } position-absolute`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  top: "50%",
                  right: "10px",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                  fontSize: "1.2rem",
                }}
              ></i>
            </div>

            <div className="form-check mt-3">
              <input type="checkbox" required /> By checking this box, you
              consent to the processing of your personal data by{" "}
              <span className="fw-bold">STUDIO NÖRA</span> under the conditions
              set out in our{" "}
              <span
                role="button"
                className="text-primary"
                onClick={() => dispatch(openTermsModal())}
              >
                Terms of use
              </span>{" "}
              and our{" "}
              <span
                role="button"
                className="text-primary"
                onClick={() => dispatch(openPrivacyModal())}
              >
                Privacy Policy
              </span>
              . You confirm that you have understood it.
            </div>
            <div className="form-check mt-3">
              <input type="checkbox" /> I want to receive news from{" "}
              <span className="fw-bold">STUDIO NÖRA</span> and be informed about
              upcoming events. I consent to receive proposals via email, SMS,
              phone calls, and postal mail. I accept that my information may be
              shared with partners.
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
      <PrivacyPolicy />
      <TermsOfUse />
    </div>
  );
}

export default Register;
