import "../styles/QualitySectionP.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { FiTarget } from "react-icons/fi";
// import { FiDiamond } from "react-icons/fi";
import { FiDroplet } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { BsDiamond } from "react-icons/bs";

export default function QualitySection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  const cards = [
    {
      icon: <FiTarget />,
      title: "ASTA Colour Certified",
      description:
        "Measured on every batch. Documented on your COA. Consistent across the year.",
    },
    {
      icon: <BsDiamond />,
      title: "SHU Lab Tested",
      description:
        "HPLC pungency analysis for precise heat levels. Know exactly what you're buying.",
    },
    {
      icon: <FiDroplet />,
      title: "≤12% Moisture",
      description:
        "Controlled drying and cold storage prevents mould and extends shelf life.",
    },
    {
      icon: <FiShield />,
      title: "Phytosanitary Cert.",
      description:
        "All export shipments carry full phytosanitary documentation for customs compliance.",
    },
  ];

  return (
    <section className="quality-section">
      <div className="container">

      <div className="quality-container">

        {/* LEFT */}

        <div
          className="quality-left"
          data-aos="fade-right"
        >

          <span className="quality-tag">

            <span className="quality-line"></span>

            OUR PROMISE

          </span>

          <h2>
            Quality you
            <br />
            can measure
          </h2>

          <p>
            Every shipment leaves our facility with a full
            Certificate of Analysis — ASTA colour,
            SHU pungency, moisture content, and
            microbial clearance. No guesswork.
            No surprises.
          </p>

        </div>

        {/* RIGHT */}

        <div className="quality-grid">

          {cards.map((card, index) => (

            <div
              className="quality-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              <div className="quality-icon">

                {card.icon}

              </div>

              <h3>

                {card.title}

              </h3>

              <p>

                {card.description}

              </p>

            </div>

          ))}

        </div>

      </div>
      </div>

    </section>
  );
}