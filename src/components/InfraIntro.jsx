import "../styles/InfraIntro.css";
import handImg from "../assets/images/infra-hand.webp";

export default function InfraIntro() {
  return (
    <section className="infra-intro">
      <div className="container">

      <div className="infra-intro-container">

        {/* LEFT CONTENT */}

        <div
          className="infra-intro-left"
          data-aos="fade-right"
          data-aos-duration="900"
        >

          <span className="infra-small-title">
            MODERN FACILITIES
          </span>

          <h2>
            Infrastructure
            <br />
            &amp; Technology
          </h2>

          <p>
            Our upcoming facilities are equipped with industry-leading machinery to
            maintain the highest standards of safety and efficiency. From
            modern drying floors to automated grading units, our
            infrastructure will ensure that every batch of Red Chilli is uniform
            and premium.
          </p>

        </div>

        {/* RIGHT IMAGE */}

        <div
          className="infra-intro-right"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src={handImg}
            alt="Fresh Red Chillies"
            className="infra-hand"
          />
        </div>

      </div>
      </div>

    </section>
  );
}
