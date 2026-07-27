import "../styles/ComparisonSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Images
import teja from "../assets/images/teja-s17.png";
import byadagi from "../assets/images/byadagi.png";
import sannam from "../assets/images/334-s4-sannam.png";
import dd from "../assets/images/dd.png";
import powder from "../assets/images/mild-chilli-powder.png";
import flakes from "../assets/images/chilli-flakes.png";

export default function ComparisonSection() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  const products = [
    {
      image: teja,
      name: "Teja S17",
      type: "Teja Variety",
      asta: "80–100",
      shu: "50,000–100,000",
      moisture: "≤ 12%",
      heat: 5,
      best: ["Hot sauces", "Spice blends"],
    },

    {
      image: byadagi,
      name: "Byadagi",
      type: "Byadagi Variety",
      asta: "150+",
      shu: "10,000–20,000",
      moisture: "≤ 11%",
      heat: 2,
      best: ["Paprika", "Oleoresin"],
    },

    {
      image: sannam,
      name: "Guntur Sannam",
      type: "Guntur Variety",
      asta: "100–120",
      shu: "35,000–50,000",
      moisture: "≤ 12%",
      heat: 4,
      best: ["Indian curries", "Spice blends"],
    },

    {
      image: dd,
      name: "Stem & Seed Free",
      type: "Processed Variety",
      asta: "90+",
      shu: "40,000–80,000",
      moisture: "≤ 11%",
      heat: 4,
      best: ["Food processing", "Spice blending"],
    },

    {
      image: powder,
      name: "Mild Chilli Powder",
      type: "Powder",
      asta: "120+",
      shu: "5,000–10,000",
      moisture: "≤ 10%",
      heat: 1,
      best: ["Seasoning", "Snacks"],
    },

    {
      image: flakes,
      name: "Premium Chilli Flakes",
      type: "Flakes",
      asta: "80+",
      shu: "30,000+",
      moisture: "≤ 12%",
      heat: 3,
      best: ["Pizza", "Pasta"],
    },

    {
      image: dd,
      name: "Devanur Deluxe",
      type: "DD Variety",
      asta: "90–180",
      shu: "25,000–35,000",
      moisture: "≤ 12%",
      heat: 3,
      best: ["Export", "Premium Grade"],
    },
  ];

  return (
    <section className="comparison-section">
      <div className="container">

      <div
        className="comparison-container"
        data-aos="fade-up"
      >

        <div className="comparison-heading">

          <span className="comparison-tag">

            <span className="comparison-line"></span>

            QUICK REFERENCE

          </span>

          <h2>Dry Chilli Comparison</h2>

        </div>

        <div className="comparison-table">

          {/* Header */}

          <div className="table-row table-head">

            <div>Variety</div>

            <div>ASTA COLOR</div>

            <div>SHU RANGE</div>

            <div>MOISTURE</div>

            <div>HEAT LEVEL</div>

            <div>BEST FOR</div>

          </div>

          {/* Rows */}

          {products.map((item, index) => (

            <div
              key={index}
              className="table-row"
              data-aos="fade-left"
              data-aos-delay={index * 80}
            >

              {/* Variety */}

              <div className="variety-col">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <p>{item.type}</p>

                </div>

              </div>

              {/* ASTA */}

              <div className="asta">

                {item.asta}

              </div>

              {/* SHU */}

              <div className="normal-text">

                {item.shu}

              </div>

              {/* Moisture */}

              <div className="normal-text">

                {item.moisture}

              </div>

              {/* Heat */}

              <div className="heat-bars">

                {[1, 2, 3, 4, 5].map((bar) => (

                  <span
                    key={bar}
                    className={
                      bar <= item.heat
                        ? "bar active"
                        : "bar"
                    }
                  ></span>

                ))}

              </div>

              {/* Best */}

              <div className="chip-group">

                {item.best.map((chip) => (

                  <span
                    key={chip}
                    className="chip"
                  >
                    {chip}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
      </div>

    </section>
  );
}