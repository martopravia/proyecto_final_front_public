import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-light border text-dark mt-5 pt-5 border-top">
        {/* bg-light y border puestos para ver coom encajan */}
        <div className="container">
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
                  <Link to="/quienesSomos" className="nav-link text-dark">
                    Who are we?
                  </Link>
                </li>
              </ul>
              <h6 className="mt-4">TECHNOLOGIES</h6>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/tecnologiasUtilizadas"
                    className="nav-link text-dark"
                  >
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
                  <Link to="/sofas" className="nav-link text-dark">
                    Sofas
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/chairs" className="nav-link text-dark">
                    Chairs
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/tables" className="nav-link text-dark">
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
                  <Link to="/faqs" className="nav-link text-dark">
                    How to buy?
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="nav-link text-dark">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="nav-link text-dark">
                    Warranty
                  </Link>
                </li>

                <li>
                  <Link to="/faqs" className="nav-link text-dark">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>Proyect name + slogan</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                laudantium quaerat mollitia est, vero iusto animi modi sint.
                Aut, neque magni aliquid deserunt corrupti laborum sunt
                accusantium illo excepturi facere ipsa explicabo velit culpa hic
                eveniet dicta aliquam, iste quo!
              </p>
              <p>
                <a href="#">deployedProject.com</a> or at any of our stores
                around the world.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
