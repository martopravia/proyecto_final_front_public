import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Profile() {
  const user = {
    firstname: "Juan",
    lastname: "Peres",
    email: "juan@mail.com",
  };

  // const user = useSelector((state) => state.user.user);
  // const navigate = useNavigate();

  if (!user) {
    return (
      <Container className="mt-5">
        <h2>No estás logueado</h2>
        <Button variant="primary" onClick={() => navigate("/login")}>
          Ir a iniciar sesión
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">Cuenta de {user.firstname}</h2>

      <Row>
        <Col md={4}>
          <Card className="p-3 mb-4">
            <h5 className="mb-3">Información personal</h5>
            <p>
              <strong>Nombre:</strong> {user.firstname}
            </p>
            <p>
              <strong>Apellido:</strong> {user.lastname}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <Button variant="dark">Consultar / Modificar</Button>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="p-3">
            <h5 className="mb-3">Wishlist</h5>
            <div className="d-flex flex-wrap gap-3">
              <img src="/img1.png" alt="Producto 1" width={60} height={60} />
              <img src="/img2.png" alt="Producto 2" width={60} height={60} />
              <img src="/img3.png" alt="Producto 3" width={60} height={60} />
              <img src="/img4.png" alt="Producto 4" width={60} height={60} />
            </div>
            <p className="mt-3">4 productos</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
