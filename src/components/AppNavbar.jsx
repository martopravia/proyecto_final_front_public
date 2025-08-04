import { NavLink } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartHandler from "./CartHandler";
import { useState } from "react";

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="{false}"
      className=" bg-white"
      collapseOnSelect
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center w-100 px-3"
      >
        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="main-navbar-nav" className="me-2" />
          <Navbar.Brand
            className="logo-center d-flex justify-content-center align-items-center "
            as={NavLink}
            to="/"
          >
            <img
              className="img-fluid logoNavBar"
              src="src\img\sutdio_nora_logo.png"
              alt="Studio Nora Logo"
            />
          </Navbar.Brand>
        </div>

        <div className="d-none d-sm-flex gap-2 align-items-center">
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
          <Nav
            className="flex-column text-dark ps-3"
            onSelect={() => setExpanded(false)}
          >
            <Nav.Link eventKey="1" as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link eventKey="3" as={NavLink} to="/aboutus">
              About this Project
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              as={NavLink}
              to="/login"
              className="d-sm-none mt-2"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
