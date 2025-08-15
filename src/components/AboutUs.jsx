import "../AboutUs.css";

export default function AboutUs() {
  const developers = [
    {
      name: "Martin Pravia",
      profileImg:
        "https://ubmbvouzxyajisbnmzeu.supabase.co/storage/v1/object/public/products/AboutUs/fotoPerfilMarto.jpeg",
      linkedin: "https://www.linkedin.com/in/martin-pravia/",
      github: "https://github.com/martopravia",
      description:
        "Full Stack Developer skilled in Node.js, Express, React.js, SQL, and MongoDB. Driven by curiosity and a passion for building impactful web applications, I’m committed to delivering clean, efficient, and scalable solutions while continuously pushing my limits to stand out in the tech field.",
    },
    {
      name: "Manuel Negrin",
      profileImg:
        "https://ubmbvouzxyajisbnmzeu.supabase.co/storage/v1/object/public/products/AboutUs/fotoPerfilManu.jpeg",
      linkedin: "https://www.linkedin.com/in/manuelnegrin",
      github: "https://github.com/ManuelNegrin",
      description:
        "Full Stack Developer with a creative yet methodical mindset, skilled in Node.js, Express, React.js, SQL, and Sequelize. Deeply curious and passionate about exploring new technologies, I’m constantly seeking to learn, experiment, and push my limits to deliver innovative, user-focused, and high-quality solutions.",
    },
    {
      name: "Alfonso Paiva",
      profileImg:
        "https://ubmbvouzxyajisbnmzeu.supabase.co/storage/v1/object/public/products/AboutUs/fotoPerfilAlfo.jpg",
      linkedin: "https://www.linkedin.com/in/alfonso-paiva-vázquez-03112a13b",
      github: "https://github.com/paiva92",
      description:
        "Full Stack Developer skilled in JavaScript, Node.js, ReactJS, MongoDB, Java, Spring Boot, and MySQL, passionate about building scalable web applications, with experience in Godot game development and a background in consulting and leading IT teams.",
    },
    {
      name: "Juan Pedro Diaz",
      profileImg:
        "https://ubmbvouzxyajisbnmzeu.supabase.co/storage/v1/object/public/products/AboutUs/fotoPerfilJuanPe.png",
      linkedin: "https://www.linkedin.com/in/juanpedrodiazlumaca/",
      github: "https://github.com/juanpediaz",
      description:
        "Full Stack Developer with hands-on experience in Node.js, Express, React.js, SQL, and MongoDB, skilled at transforming ideas into functional, maintainable, and scalable products.",
    },
    {
      name: "Joaquin Reinante",
      profileImg:
        "https://ubmbvouzxyajisbnmzeu.supabase.co/storage/v1/object/public/products/AboutUs/fotoPerfilCato.jpg",
      linkedin: "https://www.linkedin.com/in/joaquin-reinante-818007193/",
      github: "https://github.com/CatoReinante",
      description:
        "Full Stack Developer with a Bachelor’s in Business Administration, blending analytical thinking with a passion for technology. Skilled in React, Node.js, Express, MySQL, and MongoDB, I craft dynamic, user-centric applications and embrace every project as an opportunity to learn, innovate, and deliver impact.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="about-hero d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container">
            <h1 className="fw-bold my-4">About this project</h1>
            <p className="mx-auto about-description">
              This e-commerce platform represents a collaborative effort by
              students from Hack Academy's intensive Coding Bootcamp. Our
              comprehensive full-time program spans 3 months, during which we
              dedicated over 600+ hours of code, 1182 cups of coffee (yes, we
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
        <section className="my-5">
          <div className="row">
            <div className="col-lg-6 col-12 text-center d-flex justify-content-start h-75">
              <div
                className="card shadow-lg border-0 rounded-4"
                style={{ width: "90%" }}
              >
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">Duration</h5>
                  <p className="text-muted" style={{ lineHeight: "1.6" }}>
                    This project was completed within 150 hours during
                    July/August 2025 using Agile methodology and sprints in
                    Asana.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-6 col-12 text-block">
              <h3 className="text-start fw-bold">Our mission</h3>
              <p>
                Our goal is simple: create a site that’s easy, smooth, and
                friendly — no confusing menus or extra steps, just something
                that works. We’re just a group who loves building and improving
                things. We’ve focused on every detail, from page speed to mobile
                design, so whether you’re here to shop or browse, we hope you
                enjoy it. This project is the result of hard work, plenty of
                coffee, and lots of laughs — and now we’re excited to share it
                with you.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 text-block ">
              <h3 className="fw-bold text-start">Who are we</h3>
              <p>
                We’re five people who met during an intense full-stack
                programming bootcamp. Between late-night coding, frustrating
                bugs, and small victories, we went from strangers to friends and
                then to a real team. This e-commerce site is the result of that
                journey — planned, built, broken, fixed (more than once), and
                filled with lessons in coding, patience, and teamwork. It’s not
                perfect, but it’s ours, and we’re proud of every line. Thanks
                for being here.
              </p>
            </div>
            <div className="col-lg-6 col-12 text-center d-flex justify-content-start h-75">
              <div
                className="card shadow-lg border-0 rounded-4 "
                style={{ width: "90%" }}
              >
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">Technologies</h5>
                  <p className="text-muted" style={{ lineHeight: "1.6" }}>
                    Frontend built with React.js + CRA and Backend with Node.js,
                    Express, SQL, and Git/GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
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
                    <div className="card-body d-flex flex-column h-100">
                      <h5 className="card-title fw-bold mb-4">{dev.name}</h5>
                      <div>
                        <h5 className="card-subtitle my-2">Web Developer</h5>
                        <p className="card-text text-muted">
                          {dev.description}
                        </p>
                      </div>
                      <div className="m-0 p-0 d-flex justify-content-center gap-3 flex-wrap mt-auto">
                        <a href={dev.linkedin} className="m-0 p-0">
                          <i className="bi bi-linkedin fs-3"></i>
                        </a>
                        <a href={dev.github} className="m-0 p-0">
                          <i className="bi bi-github fs-3 text-dark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
