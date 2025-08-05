import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    gender: "Señor",
    firstname: "juan",
    lastname: "peres",
    email: "juan@reverdito.com",
    phone: "098449331",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">CUENTA REVERDITO</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* DATOS DE CONTACTO */}
          <Col md={6}>
            <Card className="p-4 mb-4">
              <h5 className="mb-3">MODIFICAR MIS DATOS DE CONTACTO</h5>

              <Form.Group className="mb-3">
                <Form.Label>* Estado civil</Form.Label>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option>Señor</option>
                  <option>Señora</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>* Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>* Apellidos</Form.Label>
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
                <Form.Label>* Móvil</Form.Label>
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
                  ACTUALIZAR INFORMACIONES
                </Button>
              </div>
            </Card>
          </Col>

          {/* CAMBIO DE CONTRASEÑA */}
          <Col md={6}>
            <Card className="p-4 mb-4">
              <Form.Group className="mb-3">
                <Form.Label>* Introduzca su contraseña actual</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordCurrent"
                  value={formData.passwordCurrent}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>* Introduzca su nueva contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordNew"
                  value={formData.passwordNew}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>* Confirmar la nueva contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="dark" className="w-100">
                MODIFICAR MI CONTRASEÑA
              </Button>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
