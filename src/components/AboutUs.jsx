import "../AboutUs.css";
import CartHandler from "./CartHandler";

export default function AboutUs() {
  const developers = [
    {
      name: "Martin Pravia",
      profileImg: "src/img/fotoPerfilMarto.jpeg",
      linkedin: "https://www.linkedin.com/in/martin-pravia/",
      github: "https://github.com/martopravia",
    },
    {
      name: "Manuel Negrin",
      linkedin: "https://www.linkedin.com/in/manuelnegrin",
      github: "https://github.com/ManuelNegrin",
    },
    {
      name: "Alfonso Pavia",
      profileImg: "src/img/fotoPerfilAlfo.jpg",
      linkedin: "https://www.linkedin.com/in/alfonso-paiva-vázquez-03112a13b",
      github: "https://github.com/paiva92",
    },
    {
      name: "Juan Pedro Diaz",
      profileImg: "src/img/fotoPerfilJuanPe.png",
      linkedin: "https://www.linkedin.com/in/juanpedrodiazlumaca/",
      github: "https://github.com/juanpediaz",
    },
    {
      name: "Joaquin Reinante",
      profileImg: "src/img/fotoPerfilCato.jpg",
      linkedin: "https://www.linkedin.com/in/joaquin-reinante-818007193/",
      github: "https://github.com/CatoReinante",
    },
  ];

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
            dedicated over 600+ hours of code, 112 cups of coffee (yes, we
            counted), and only 3 emotional breakdowns mastering cutting-edge
            technologies including Node.js, Express, React.js, SQL, MongoDB, and
            Git version control.
          </p>
        </div>
      </div>

      <section className="mx-5 my-5">
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

          <div className="col-12 col-lg-8 mx-auto">
            <div className="row">
              {/* Primera fila: 3 developers */}
              {developers.slice(0, 3).map((dev, index) => (
                <div
                  key={index}
                  className="col-12 col-md-4 mb-4 d-flex justify-content-center"
                >
                  <div className="card h-100 text-center">
                    <img
                      className="card-img-top img-fluid cardSize"
                      src={dev.profileImg}
                      alt="Avatar"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{dev.name}</h4>
                      <h5 className="card-subtitle my-2">Junior Developer</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title.
                      </p>
                      <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a href={dev.linkedin}>
                          <i className="bi bi-linkedin"></i>
                        </a>
                        <a href={dev.github}>
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Segunda fila: 2 developers centrados */}
              <div className="d-flex justify-content-center flex-wrap">
                {developers.slice(3).map((dev, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-4 mb-4 d-flex justify-content-center"
                  >
                    <div className="card h-100 text-center">
                      <img
                        className="card-img-top img-fluid cardSize"
                        src={dev.profileImg}
                        alt="Avatar"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{dev.name}</h4>
                        <h5 className="card-subtitle my-2">Junior Developer</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title.
                        </p>
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                          <a href={dev.linkedin}>
                            <i className="bi bi-linkedin"></i>
                          </a>
                          <a href={dev.github}>
                            <i className="bi bi-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
