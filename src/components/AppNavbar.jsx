import { NavLink } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartHandler from "./CartHandler";

export default function AppNavbar() {
  return (
    <Navbar bg="secondary" variant="dark" expand={false}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Brand
          className="d-flex justify-content-center align-items-center"
          as={NavLink}
          to="/"
        >
          <img
            className="img-fluid logoNavBar"
            src="src\img\sutdio_nora_logo.png"
            alt=""
          />
        </Navbar.Brand>

        <div className="d-flex gap-2 justify-content-between align-items-center">
          <Nav.Link as={NavLink} to="/login" className="text-light">
            Login
          </Nav.Link>
          <CartHandler />
          {/* <Nav.Link
            as={NavLink}
            to="/carrito"
            className="text-light"
          ></Nav.Link> */}
        </div>

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
