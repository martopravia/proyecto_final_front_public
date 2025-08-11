import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { useNavigate } from "react-router";
import { setUser } from "../redux/userSlice";
import { toast } from "react-toastify";

export default function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { updateUser, getUser, changePassword } = useApi();

  const user = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    passwordCurrent: "",
    passwordNew: "",
    passwordConfirm: "",
    options: {
      emailPromo: false,
      shareData: false,
      smsPromo: false,
      mail: false,
      calls: false,
      brandNews: false,
    },
  });
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const { passwordCurrent, passwordNew, passwordConfirm } = formData;

    if (!passwordCurrent || !passwordNew || !passwordConfirm) {
      toast.warning("Please fill in all password fields.");
      return;
    }
    if (passwordNew.length < 6) {
      toast.warning("New password must be at least 6 characters long.");
      return;
    }
    if (passwordNew !== passwordConfirm) {
      toast.warning("New password and confirmation do not match.");
      return;
    }
    try {
      await changePassword(user.id, {
        passwordCurrent,
        passwordNew,
        passwordConfirm,
      });

      toast.success("Password changed successfully.");
      setFormData((prev) => ({
        ...prev,
        passwordCurrent: "",
        passwordNew: "",
        passwordConfirm: "",
      }));
    } catch (error) {
      toast.error("Error changing password.");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (user?.id) {
        const userData = await getUser(user.id);
        if (userData) {
          setFormData((prev) => ({
            ...prev,
            firstname: userData.firstname || "",
            lastname: userData.lastname || "",
            email: userData.email || "",
            phone: userData.phone || "",
          }));
        }
      }
    };
    fetchUser();
  }, [user?.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setUser(formData));
      await updateUser(user.id, formData);
      navigate("/profile");
      toast.success("Your information was updated successfully.");
    } catch (error) {
      toast.warning("There was an error updating your information.");
    }
  };
  return (
    <Container fluid="md" className="my-5 px-3">
      <Form onSubmit={handleSubmit}>
        <div
          className="d-flex flex-wrap justify-content-center gap-4 mx-auto"
          style={{ maxWidth: "960px" }}
        >
          {/* CONTACT INFO */}
          <Card
            className="p-4 shadow-sm flex-grow-1"
            style={{ minWidth: "300px", maxWidth: "450px" }}
          >
            <h5 className="mb-3">EDIT CONTACT INFORMATION</h5>

            <Form.Group className="mb-3">
              <Form.Label>* First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>* Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>* Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>* Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Check
              label="I agree to receive promotional emails"
              name="emailPromo"
              checked={formData.options.emailPromo}
              onChange={handleCheckboxChange}
            />

            <div className="mt-4">
              <Button type="submit" variant="dark" className="w-100">
                UPDATE INFORMATION
              </Button>
            </div>
          </Card>

          {/* PASSWORD */}
          <Card
            className="p-4 shadow-sm flex-grow-1"
            style={{ minWidth: "300px", maxWidth: "450px" }}
          >
            <h5 className="mb-3">CHANGE PASSWORD</h5>

            <Form.Group className="mb-3">
              <Form.Label>* Current password</Form.Label>
              <Form.Control
                type="password"
                name="passwordCurrent"
                value={formData.passwordCurrent}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>* New password</Form.Label>
              <Form.Control
                type="password"
                name="passwordNew"
                value={formData.passwordNew}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>* Confirm new password</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="dark"
              onClick={handleChangePassword}
              className="w-100"
            >
              CHANGE PASSWORD
            </Button>
          </Card>
        </div>
      </Form>
    </Container>
  );
}
