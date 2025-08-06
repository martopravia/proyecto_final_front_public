import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { useNavigate } from "react-router";

export default function EditProfile() {
  const navigate = useNavigate();

  const { updateUser, getUserById } = useApi();

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

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

  useEffect(() => {
    const fetchUser = async () => {
      if (user?.id) {
        const userData = await getUserById(user.id, token);
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
      await updateUser(user.id, formData, token);
      navigate("/profile");
      alert("Your information was updated successfully.");
    } catch (error) {
      alert("There was an error updating your information.");
    }
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">CUENTA REVERDITO</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* DATOS DE CONTACTO */}
          <Col md={6}>
            <Card className="p-4 mb-4">
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
                <Form.Label>* Email (nombre@dominio.com)</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>* Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Checkboxes */}
              <Form.Check
                label="Acepto recibir correos electrónicos promocionales"
                name="emailPromo"
                checked={formData.options.emailPromo}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                label="Acepto que mis datos de contacto sean compartidos con socios"
                name="shareData"
                checked={formData.options.shareData}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                label="Acepto recibir SMS promocionales"
                name="smsPromo"
                checked={formData.options.smsPromo}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                label="Acepto recibir correo postal"
                name="mail"
                checked={formData.options.mail}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                label="Acepto recibir llamadas comerciales"
                name="calls"
                checked={formData.options.calls}
                onChange={handleCheckboxChange}
              />
              <Form.Check
                label="Acepto recibir noticias de la marca"
                name="brandNews"
                checked={formData.options.brandNews}
                onChange={handleCheckboxChange}
              />

              <div className="mt-4">
                <Button type="submit" variant="dark" className="w-100">
                  UPDATE INFORMATION
                </Button>
              </div>
            </Card>
          </Col>

          {/* CAMBIO DE CONTRASEÑA */}
          <Col md={6}>
            <Card className="p-4 mb-4">
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

              <Button variant="dark" className="w-100">
                CHANGE PASSWORD
              </Button>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
