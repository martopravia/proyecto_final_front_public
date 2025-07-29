import "../AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div>
        <section className="values-section">
          <div className="values-text">
            <h1>Our values</h1>
            <p>Passion, Compromise, Excellence</p>
          </div>
        </section>
        <section className="about-content">
          <div className="text-block">
            <h3>How we are</h3>
            <p>
              We are a team of passionate developers dedicated to creating the
              best e-commerce experience.
            </p>

            <p>Thank you for visiting our site!</p>
          </div>
          <div className="text-block">
            <h3>Our mission</h3>
            <p>
              To provide a high-quality and reliable platform, so every client
              can find what they need while enjoying a seamless shopping
              experience.
            </p>
          </div>
          <div className="text-block">
            <h2>Compromise</h2>
            <p>
              We value transparency and teamwork, and we are committed to
              continuous improvement. We strive to deliver the best at every
              step of the way.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
