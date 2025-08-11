import "../AboutUs.css";

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
      profileImg: "src/img/fotoPerfilManu.jpeg",
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
        className="container"
        // style={{ marginLeft: "150px", marginRight: "150px" }}
      >
        <div className="about-hero d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="fw-bold my-4">About this project</h1>
            <p className="mx-auto about-description">
              This e-commerce platform represents a collaborative effort by
              students from Hack Academy's intensive Coding Bootcamp. Our
              comprehensive full-time program spans 3 months, during which we
              dedicated over 600+ hours of code, 112 cups of coffee (yes, we
              counted), and only 3 emotional breakdowns mastering cutting-edge
              technologies including{" "}
              <span className="fw-bold">
                Node.js, Express, React.js, SQL, MongoDB, and Git version
                control
              </span>
              .
            </p>
          </div>
        </div>
        <section className=" my-5">
          <div className="row text-center">
            {[
              {
                title: "⏳ Duration",
                text: "This project was completed within 3 weeks during July/August 2025 using Agile methodology and sprints in Asana.",
              },
              {
                title: "💻 Technologies",
                text: "Frontend built with React.js + CRA and Backend with Node.js, Express, SQL, and Git/GitHub.",
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
          <div className=" mt-5">
            <div className=" text-block">
              <h3 className="text-center">Who are we</h3>
              <p>
                We’re just five people who met while doing the same full-stack
                programming bootcamp. It was intense, fun, stressful, and
                honestly one of the best decisions we’ve made. At first, we were
                just a bunch of strangers trying to figure out what all these
                weird code errors meant. But somewhere between the late-night
                coding sessions, the “wait… why isn’t this working?” meltdowns,
                and the little celebrations when it finally did, we went from
                classmates to friends, and from friends to a real team. We’ve
                seen each other at our most frustrated and at our happiest, and
                somehow we’ve survived it all with a sense of humor still
                intact.
              </p>
              <p>
                This e-commerce site is what came out of that whole adventure.
                We planned it, designed it, built it, broke it, fixed it, broke
                it again, and then fixed it for real (we hope). Along the way,
                we learned more than we expected — not just about coding, but
                about patience, problem-solving, and how much better things go
                when you have people who’ve got your back. It’s not perfect, but
                it’s ours, and we’re proud of every line of code in it. Thanks
                for checking it out — it honestly means a lot to us that you’re
                here.
              </p>
            </div>
            <div className=" text-block">
              <h3 className="text-center">Our mission</h3>
              <p>
                Our goal is pretty simple: make a site that’s easy to use and
                does what you need it to do without giving you a headache. We
                wanted it to feel smooth, elegant, clear, and friendly, so you
                don’t have to think about the tech behind it — you just use it
                and it works. No overcomplicated menus, no unnecessary steps,
                and definitely no confusing buttons that make you wonder what
                you just clicked.
              </p>
              <p>
                We’re not some big company; we’re just a group of people who
                like building things and making them better. That’s why we’ve
                paid attention to every little detail we could, from how the
                pages load to how things look on your phone. Whether you’re here
                to buy something specific or just to have a browse, we hope you
                enjoy the experience. This project is a mix of a lot of work, a
                lot of coffee, and a lot of laughs — and now we get to share it
                with you, which makes it all worth it.
              </p>
            </div>
          </div>
          <h3 className="fw-bold text-center">Meet the team</h3>
          <div className="row justify-content-xxl-between justify-content-center mt-5 mx-3">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 col-xxl-2 mb-4 d-flex justify-content-center"
              >
                <div className="card text-center card-profile w-100">
                  <img
                    className="card-img-top"
                    src={dev.profileImg}
                    alt="Avatar"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-4">{dev.name}</h5>
                    <div className="">
                      <h5 className="card-subtitle my-2">Web Developer</h5>
                      <p className="card-text text-muted">
                        Some quick example text to build on the card title.
                      </p>
                      <div className="m-0 p-0 d-flex justify-content-center gap-3 flex-wrap mt-4">
                        <a href={dev.linkedin} className="m-0 p-0">
                          <i className="bi bi-linkedin fs-3"></i>
                        </a>
                        <a href={dev.github} className="m-0 p-0">
                          <i className="bi bi-github fs-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
