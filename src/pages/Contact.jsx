
import contactBg from "../assets/images/contact-hero.webp";
import ContactEnq from "../components/ContactEnq";
import "../styles/ContactEnq.css";

function ContactHero() {
  return (
    <>
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="contact-hero-content">

          {/* Badge */}
          <div
            className="contact-badge"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <span className="badge-dot"></span>
            <span>CONTACT US</span>
          </div>

          {/* Heading */}
          <h1
            className="contact-title"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="700"
          >
            Connect With <br />
            <span>MNE.</span>
          </h1>

          {/* Description */}
          <p
            className="contact-description"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            Reach out for product information, bulk orders,
            processing requirements, packaging solutions,
            and supply enquiries.
          </p>

        </div>
      </section>

      {/* Bottom Strip */}

      <div className="marquee-strip">
        <div className="marquee-track">

          <span className="marquee-item">✦ FSSAI APPROVED</span>
          <span className="marquee-item">✦ 25+ EXPORT DESTINATIONS</span>
          <span className="marquee-item">✦ LAB-TESTED EVERY BATCH</span>
          <span className="marquee-item">✦ MOISTURE ≤ 12%</span>
          <span className="marquee-item">✦ SHU CALIBRATED</span>
          <span className="marquee-item">✦ 500+ PARTNER FARMERS</span>

          {/* Duplicate for infinite marquee */}

          <span className="marquee-item">✦ FSSAI APPROVED</span>
          <span className="marquee-item">✦ 25+ EXPORT DESTINATIONS</span>
          <span className="marquee-item">✦ LAB-TESTED EVERY BATCH</span>
          <span className="marquee-item">✦ MOISTURE ≤ 12%</span>
          <span className="marquee-item">✦ SHU CALIBRATED</span>
          <span className="marquee-item">✦ 500+ PARTNER FARMERS</span>

        </div>
      </div>
      <ContactEnq />
    </>
  );
}

export default ContactHero;