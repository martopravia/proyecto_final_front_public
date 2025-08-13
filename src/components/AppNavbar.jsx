import { NavLink, useNavigate } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartHandler from "./CartHandler";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { toast } from "react-toastify";

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const collapseRef = useRef();

  const handleLogout = () => {
    setTimeout(() => {
      toast.info("You have been logged out.");
      navigate("/");
      dispatch(logout());
    }, 1000);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expanded &&
        collapseRef.current &&
        !collapseRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            onClick={scrollToTop}
            className="logo-center d-flex justify-content-center align-items-center "
            as={NavLink}
            to="/"
          >
            <img
              className="img-fluid logoNavBar"
              src="https://ubmbvouzxyajisbnmzeu.supabase.co/storage/v1/object/public/products/Logo/sutdio_nora_logo.png"
              alt="Studio Nora Logo"
            />
          </Navbar.Brand>
        </div>

        <div className="d-flex gap-2 align-items-center">
          {user ? (
            <>
              <Nav.Link
                as="button"
                onClick={handleLogout}
                className="text-dark d-none d-sm-inline"
              >
                Logout
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/profile"
                className="d-none d-sm-inline"
                title="Perfil"
              >
                <i className="bi bi-person-circle fs-4 text-dark"></i>
              </Nav.Link>
            </>
          ) : (
            <Nav.Link
              eventKey="4"
              as={NavLink}
              to="/login"
              className="text-dark d-none d-sm-inline"
            >
              Login
            </Nav.Link>
          )}
          <CartHandler />
        </div>
        <Navbar.Collapse
          id="main-navbar-nav"
          className="custom-collapse"
          ref={collapseRef}
        >
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
            {user && user.role === "admin" && (
              <Nav.Link
                as={NavLink}
                to="https://proyecto-final-front-dashboard.vercel.app/"
                className="text-dark"
              >
                Admin Panel
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
