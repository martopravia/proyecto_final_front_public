import React from "react";

function PrivacyPolicy({ onClose }) {
  return (
    <div className="modal-backdrop ">
      <div className="modal-content">
        <button
          onClick={onClose}
          className="btn-close"
          aria-label="Close"
          style={{ position: "absolute", top: "15px", right: "15px" }}
        ></button>
        <h3>
          🔒 Privacy Policy – <strong>STUDIO NÖRA</strong>
        </h3>
        <hr />
        <div className="p-2">
          <p>
            At <span className="fw-bold">STUDIO NÖRA</span>, we take your
            privacy seriously. This policy explains how we collect, use, and
            protect your personal information.
          </p>
          <h4 className="mt-4">1. Information We Collect</h4>
          <p>
            We may collect the following personal data when you use our website,
            place an order, or subscribe to our communications:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Shipping and billing address</li>
            <li>Purchase preferences</li>
            <li>Browsing behavior and cookies</li>
          </ul>
          <h4 className="mt-4">2. How We Use Your Information</h4>
          <p>Your information may be used to:</p>
          <ul>
            <li>Process and deliver your orders</li>
            <li>Communicate with you about your purchases</li>
            <li>
              Send you personalized offers, updates, and promotions (with your
              consent)
            </li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal and tax obligations</li>
          </ul>
          <h4 className="mt-4">3. Consent</h4>
          <p>
            We will only send you marketing communications if you have given
            explicit consent (e.g., by checking a box during registration). You
            can unsubscribe at any time via the emails we send or by contacting
            us.
          </p>
          <h4 className="mt-4">4. Sharing Your Data</h4>
          <p>We may share your information with:</p>
          <ul>
            <li>Delivery and payment service providers</li>
            <li>Marketing and data analytics partners</li>
            <li>Government authorities if required by law</li>
          </ul>
          <p>
            We do <span className="fw-bold">not</span> sell your personal data
            to third parties.
          </p>
          <h4 className="mt-4">5. Data Security</h4>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information from unauthorized access, loss, or misuse.
          </p>
          <h4 className="mt-4">6. Your Rights</h4>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
          <p>
            To exercise your rights, please contact us at{" "}
            <a href="mailto:privacy@studionora.uy">privacy@studionora.uy</a>.
          </p>
          <h4 className="mt-4">7. Contact</h4>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your data rights, contact us at:
          </p>
          <p>
            📧 <span className="fw-bold">email</span>{" "}
            <a href="mailto:privacy@studionora.uy">privacy@studionora.uy</a>
            <br />
            📍 <span className="fw-bold">Address</span>: Calle Ficticia 1234,
            Montevideo, Uruguay
          </p>
          <button
            onClick={onClose}
            className="btn btn-outline-dark w-100 "
            aria-label="Close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
