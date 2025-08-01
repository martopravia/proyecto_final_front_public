import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-light border text-dark mt-5 pt-5 border-top">
        {/* bg-light y border puestos para ver coom encajan */}
        <div className="container-fluid px-4 footer-content">
          <div className="row">
            <div className="col-md-6 mb-2 text-center">
              <p className="fw-bold ">
                {" "}
                Subscribe to receive the latest updates by email
              </p>
              <div className="d-inline-flex  gap-2 justify-content-center w-100">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email... (lastname@domain.com)"
                  style={{ maxWidth: "300px" }}
                />
                <button className="btn btn-outline-dark">Subscribe</button>
              </div>
            </div>
            <div className="col mb-3 ">
              <p className="text-center ">Follow us on:</p>
              <div className="d-flex justify-content-center gap-2">
                {[
                  {
                    socialMediaName: "instagram",
                    url: "https://www.instagram.com",
                  },
                  {
                    socialMediaName: "facebook",
                    url: "https://www.facebook.com",
                  },
                  {
                    socialMediaName: "pinterest",
                    url: "https://www.pinterest.com",
                  },
                  {
                    socialMediaName: "youtube",
                    url: "https://www.youtube.com",
                  },
                  {
                    socialMediaName: "linkedin",
                    url: "https://www.linkedin.com",
                  },
                  { socialMediaName: "tiktok", url: "https://www.tiktok.com" },
                ].map(({ socialMediaName, url }) => (
                  <a
                    key={socialMediaName}
                    href={url}
                    target="_blank"
                    className="btn btn-outline-dark btn-sm rounded-circle"
                    title={socialMediaName}
                  >
                    <i className={`bi bi-${socialMediaName}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-3">
            <div className="col-md-2">
              <h6>ABOUT THIS PROYECT</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/aboutus" className="nav-link text-dark">
                    Who are we?
                  </Link>
                </li>
              </ul>
              <h6 className="mt-4">TECHNOLOGIES</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/aboutus" className="nav-link text-dark">
                    Technologies used
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>PRODUCTS</h6>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <Link to="/category/sofas" className="nav-link text-dark">
                    Sofas
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/category/chairs" className="nav-link text-dark">
                    Chairs
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/category/tables" className="nav-link text-dark">
                    Tables
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>FAQs</h6>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <Link to="/register" className="nav-link text-dark">
                    How to buy?
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link text-dark">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link text-dark">
                    Warranty
                  </Link>
                </li>

                <li>
                  <Link to="/register" className="nav-link text-dark">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>
                <strong>STUDIO NÖRA - Soulful Furniture</strong>
              </h6>
              <p>
                Studio Nöra crafts soulful furniture where Nordic minimalism
                meets quiet beauty. Each piece, from sculptural chairs to serene
                tables and inviting sofas, is a design poem for your home.
                Thoughtfully made to awaken spaces, they are not just objects
                they are living art, timeless treasures that breathe life into
                every room.
              </p>
              <p>
                <a
                  href="https://studionora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  studionora.com
                </a>{" "}
                or at any of our stores around the world.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
