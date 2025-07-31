import "../AboutUs.css";
import CartHandler from "./CartHandler";

export default function AboutUs() {
  return (
    <>
      <div
        className="d-flex justify-content-center position-relative"
        style={{
          backgroundImage: "url('src/img/fotoFondo1.jpg')",
          height: "400px",
          marginBottom: "230px",
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h1 className=" fw-bold my-4">About this project</h1>
              <p
                className="mx-auto"
                style={{
                  maxWidth: "900px",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  lineHeight: "1.6",
                }}
              >
                This e-commerce platform represents a collaborative effort by
                students from Hack Academy's intensive Coding Bootcamp. Our
                comprehensive full-time program spans 3 months, during which we
                dedicated over 600 hours mastering cutting-edge technologies
                including Node.js, Express, React.js, SQL, MongoDB, and Git
                version control.
              </p>
            </div>

            <div className="row mb-5">
              <div className="col-4">
                <div
                  className="card shadow-lg border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="card-title mb-0 text-dark fw-bold">
                        ⏳ Duration
                      </h5>
                    </div>
                    <p
                      className="card-text text-muted"
                      style={{ lineHeight: "1.6" }}
                    >
                      This project was successfully completed within a 3-week
                      timeframe during July/August 2025. We implemented an Agile
                      methodology using weekly sprint cycles in Asana to ensure
                      efficient development and continuous progress tracking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card shadow-lg border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="card-title mb-0 text-dark fw-bold">
                        💻 Technologies
                      </h5>
                    </div>
                    <p
                      className="card-text text-muted"
                      style={{ lineHeight: "1.6" }}
                    >
                      The frontend was built using modern React.js with Create
                      React App as the foundation. The backend features a robust
                      RESTful API developed with Node.js, Express framework, SQL
                      database, and managed through Git/GitHub workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="card  shadow-lg border-0"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="card-title mb-0 text-dark fw-bold">
                        📋 Task Management
                      </h5>
                    </div>
                    <p
                      className="card-text text-muted"
                      style={{ lineHeight: "1.6" }}
                    >
                      We utilized Asana boards for comprehensive project
                      management and task allocation. This approach ensured
                      seamless communication among team members while
                      maintaining real-time visibility of project milestones and
                      individual responsibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="m-5">
        <div className="row">
          <div className="col-4">
            <div className="text-block">
              <h3>How we are</h3>
              <p>
                We are a team of five passionate developers currently enrolled
                in an intensive full-stack programming course. Throughout this
                journey, we've challenged ourselves to go beyond our limits,
                building not only technical skills but also a strong sense of
                teamwork and commitment. Creating this e-commerce project was
                both demanding and rewarding — from planning and designing to
                coding and testing, every step was an opportunity to learn and
                grow.
              </p>
              <p>Thank you for visiting our site and supporting our work!</p>
            </div>
            <div className="text-block">
              <h3>Our mission</h3>
              <p>
                Our goal is to provide a high-quality, reliable, and
                user-friendly platform where every client can find what they
                need while enjoying a seamless shopping experience. We believe
                that great technology should be accessible and intuitive, and
                we’ve worked hard to make that vision a reality in this project.
              </p>
            </div>
            <div className="text-block">
              <h2>Commitment</h2>
              <p>
                We value transparency, collaboration, and continuous
                improvement. This project taught us the importance of clear
                communication and mutual support, especially when facing complex
                challenges. We are proud of what we’ve achieved as a team and
                excited for what’s ahead in our development journey.
              </p>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="card">
                  <img
                    className="card-img-top img-fluid cardSize"
                    src="src/img/avatar.avif"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Martin Pravia</h4>
                    <h5 className="card-subtitle my-2">Junior developer?</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="card">
                  <img
                    className="card-img-top img-fluid cardSize"
                    src="src/img/avatar.avif"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Manuel Negrin</h4>
                    <h5 className="card-subtitle my-2">Junior developer?</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="card">
                  <img
                    className="card-img-top img-fluid cardSize"
                    src="src/img/avatar.avif"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Alfonso Pavia</h4>
                    <h5 className="card-subtitle my-2">Junior developer?</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mt-4 gap-4">
                <div className="card ">
                  <img
                    className="card-img-top img-fluid cardSize"
                    src="src/img/avatar.avif"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Juan Pedro Diaz</h4>
                    <h5 className="card-subtitle my-2">Junior developer?</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className="card">
                  <img
                    className="card-img-top img-fluid cardSize"
                    src="src/img/avatar.avif"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Joaquin Reinante</h4>
                    <h5 className="card-subtitle my-2">Junior developer?</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
