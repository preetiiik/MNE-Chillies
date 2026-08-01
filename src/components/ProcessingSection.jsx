import "../styles/ProcessingSection.css";

import { PiSlidersBold, PiMicroscopeBold, PiCalendarDotsBold } from "react-icons/pi";

import stageImg from "../assets/images/stage.webp";
// import steamImg from "../assets/images/steam.webp";
// import mbrImg from "../assets/images/mbr.webp";
// import mpuImg from "../assets/images/mpu.webp";
// import qaImg from "../assets/images/qa.webp";
// import coldStorageImg from "../assets/images/coldstorage.webp";
// import qualityLedImg from "../assets/images/quality-led.webp";
// import stemlessImg from "../assets/images/stemless.webp";

export default function ProcessingSection() {

  const features = [
  {
    icon: <PiSlidersBold />,
    title: "Controlled Processing",
    description:
      "Automated climate and humidity controls at every vital processing junction.",
  },
  {
    icon: <PiMicroscopeBold />,
    title: "In-House Quality Checks",
    description:
      "Real-time sampling and analytical testing integrated into the production flow.",
  },
  {
    icon: <PiCalendarDotsBold />,
    title: "Year-Round Handling",
    description:
      "Optimized supply chain infrastructure capable of handling seasonal peaks without quality loss.",
  },
];

  return (

    <section className="processing-section">
      <div className="container">

      <div className="processing-container">

        {/* LEFT */}

        <div
          className="processing-left"
          data-aos="fade-right"
          data-aos-duration="900"
        >

          <h2>

            Every Stage.
            <br />
            Under Control.

          </h2>

          <p>

            Our infrastructure isn't just about machinery; it's a
            meticulously managed ecosystem where technology
            serves tradition. We ensure that every chilli that leaves
            our facility maintains its peak pungency and color.

          </p>

          <div className="processing-features">

            {features.map((item, index) => (

              <div
                className="processing-item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <div className="processing-icon">
                    {item.icon}
                </div>

                <div>

                  <h3>

                    {item.title}

                  </h3>

                  <span>

                    {item.description}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="processing-right"
          data-aos="fade-left"
          data-aos-duration="1200"
        >

          <img
            src={stageImg}
            alt="Processing Facility"
            className="processing-image"
          />

          <div
            className="monitoring-card"
            data-aos="zoom-in"
            data-aos-delay="500"
          >

            <h4>

              24/7

            </h4>

            <span>

              ACTIVE MONITORING

            </span>

          </div>

        </div>

      </div>
      </div>

    </section>

  );

}