import { NavLink } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartHandler from "./CartHandler";

export default function AppNavbar() {
  return (
    <Navbar expand={false} className="position-relative">
      <Container
        fluid
        className="nav-content d-flex justify-content-between align-items-center fs-5 w-100"
      >
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Brand
          className="logo-center d-flex justify-content-center align-items-center"
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
          <Nav.Link as={NavLink} to="/login" className="text-dark">
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
          <Nav className="flex-column text-dark">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
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
