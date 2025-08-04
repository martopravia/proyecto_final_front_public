import { useSelector, useDispatch } from "react-redux";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import { closeTermsModal, closePrivacyModal } from "../redux/modalSlice";

export default function LegalModals() {
  const dispatch = useDispatch();
  const showTerms = useSelector((state) => state.modal.showTerms);
  const showPrivacy = useSelector((state) => state.modal.showPrivacy);

  return (
    <>
      {showTerms && <TermsOfUse onClose={() => dispatch(closeTermsModal())} />}
      {showPrivacy && (
        <PrivacyPolicy onClose={() => dispatch(closePrivacyModal())} />
      )}
    </>
  );
}
