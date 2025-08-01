import "../AboutUs.css";
import CartHandler from "./CartHandler";

export default function AboutUs() {
  return (
    <>
      <div
        className="about-hero d-flex flex-column justify-content-center align-items-center text-center"
        // style={{
        //   background: "url('src/img/fotoFondo1.jpg') center/cover no-repeat",
        //   minHeight: "300px",
        //   padding: "3rem 1rem",
        // }}
      >
        <div className="container">
          <h1 className="fw-bold my-4">About this project</h1>
          <p className="mx-auto about-description">
            This e-commerce platform represents a collaborative effort by
            students from Hack Academy's intensive Coding Bootcamp. Our
            comprehensive full-time program spans 3 months, during which we
            dedicated over 600 hours mastering cutting-edge technologies
            including Node.js, Express, React.js, SQL, MongoDB, and Git version
            control.
          </p>
        </div>
      </div>

      <section className="container my-5">
        <div className="row text-center">
          {[
            {
              title: "⏳ Duration",
              text: "This project was completed within 3 weeks during July/August 2025 using Agile methodology and sprints in Asana.",
            },
            {
              title: "💻 Technologies",
              text: "Frontend built with React.js + CRA. Backend: Node.js, Express, SQL, and Git/GitHub.",
            },
            {
              title: "📋 Task Management",
              text: "We used Asana to track milestones and manage team communication and task assignments.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
            >
              <div className="card shadow-lg border-0 rounded-4 h-100 w-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted" style={{ lineHeight: "1.6" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-4 mb-4">
            <div className="text-block">
              <h3>Who are we</h3>
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
              <h3>Commitment</h3>
              <p>
                We value transparency, collaboration, and continuous
                improvement. This project taught us the importance of clear
                communication and mutual support, especially when facing complex
                challenges. We are proud of what we’ve achieved as a team and
                excited for what’s ahead in our development journey.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row">
              {[
                "Martin Pravia",
                "Manuel Negrin",
                "Alfonso Pavia",
                "Juan Pedro Diaz",
                "Joaquin Reinante",
              ].map((name, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
                >
                  <div className="card h-100 text-center">
                    <img
                      className="card-img-top img-fluid cardSize"
                      src="src/img/avatar.avif"
                      alt="Avatar"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{name}</h4>
                      <h5 className="card-subtitle my-2">Junior Developer</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title.
                      </p>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
