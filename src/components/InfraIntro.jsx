import "../styles/InfraIntro.css";
import handImg from "../assets/images/infra-hand.png";

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
            Our facilities are equipped with industry-leading machinery to
            maintain the highest standards of safety and efficiency. From
            modern drying floors to automated grading units, our
            infrastructure ensures that every batch of MNE spice is uniform
            and premium.
          </p>

          <div className="infra-stats">

            <div
              className="infra-stat"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="infra-border"></div>

              <div>
                <h4>50k+ Sq Ft</h4>
                <span>Processing Area</span>
              </div>

            </div>

            <div
              className="infra-stat"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="infra-border"></div>

              <div>
                <h4>ISO 22000</h4>
                <span>Certified Standards</span>
              </div>

            </div>

          </div>

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