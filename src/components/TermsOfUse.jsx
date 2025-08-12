import { useDispatch, useSelector } from "react-redux";
import { closeTermsModal } from "../redux/modalSlice";

function TermsOfUse() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.showTerms);
  if (!show) return null;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeTermsModal());
    }
  };
  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content ">
        <button
          onClick={() => dispatch(closeTermsModal())}
          className="btn-close"
          aria-label="Close"
          style={{ position: "absolute", top: "15px", right: "15px" }}
        ></button>
        <h3>
          📄 Terms of Use – <span className="fw-bold">STUDIO NÖRA</span>
        </h3>

        <hr />
        <div className="p-2">
          <p>
            These Terms of Use ("Terms") govern your access to and use of the
            website operated by <span className="fw-bold">STUDIO NÖRA</span>{" "}
            (referred to as "we", "us", or "our"). By using our website, you
            agree to these Terms.
          </p>
          <h4 className="mt-4">1. Use of the Website</h4>
          <p>
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of, or restrict or inhibit the use
            and enjoyment of this website by any third party.
          </p>
          <h4 className="mt-4">2. Intellectual Property</h4>
          <p>
            All content on this website, including but not limited to text,
            images, logos, graphics, product descriptions, and designs, is the
            property of <span className="fw-bold">STUDIO NÖRA</span> or its
            content suppliers and is protected by copyright and intellectual
            property laws. You may not reproduce, copy, or redistribute any part
            of the site without our express written consent.
          </p>
          <h4 className="mt-4">3. Product Information</h4>
          <p>
            We strive to ensure that all product information is accurate.
            However, we do not guarantee that product descriptions, prices, or
            other content are complete, reliable, current, or error-free. We
            reserve the right to correct any errors and update information at
            any time without prior notice.
          </p>
          <h4 className="mt-4">4. Orders and Availability</h4>
          <p>
            All orders are subject to acceptance and availability. We reserve
            the right to refuse or cancel any order for any reason, including
            but not limited to product availability, errors in pricing, or
            suspected fraud.
          </p>
          <h4 className="mt-4">5. Links to Third-Party Sites</h4>
          <p>
            Our website may contain links to third-party websites. These links
            are provided for your convenience only, and we are not responsible
            for the content or practices of any linked sites.
          </p>
          <h4 className="mt-4">6. Limitation of Liability</h4>
          <p>
            To the fullest extent permitted by law,
            <span className="fw-bold"> STUDIO NÖRA</span> shall not be liable
            for any indirect, incidental, or consequential damages arising from
            the use or inability to use this website or the products purchased
            through it.
          </p>
          <h4 className="mt-4">7. Changes to These Terms</h4>
          <p>
            We may update these Terms at any time. Any changes will be effective
            immediately upon posting on this website. Continued use of the
            website after changes means you accept the revised Terms.
          </p>
          <h4 className="mt-4">8. Governing Law</h4>
          <p>
            These Terms are governed by the laws of Uruguay. Any disputes
            arising from or relating to these Terms shall be subject to the
            exclusive jurisdiction of the courts in Montevideo, Uruguay.
          </p>
          <h4 className="mt-4">9. Contact Us</h4>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            📧 <span className="fw-bold">Email</span>{" "}
            <a href="mailto:legal@studionora.uy">legal@studionora.uy</a>
            <br />
            📍 <span className="fw-bold">Address</span>: Calle Ficticia 1234,
            Montevideo, Uruguay
          </p>
          <hr />
          <button
            onClick={() => dispatch(closeTermsModal())}
            className="btn w-100 btn-outline-dark"
            aria-label="Close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
