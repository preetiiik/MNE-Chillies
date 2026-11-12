import "../styles/CapabilitiesSection.css";

import mpuImg from "../assets/images/mpu.png";
import qaImg from "../assets/images/qa.jpg";
import coldStorageImg from "../assets/images/coldstorage.png";
import qualityLedImg from "../assets/images/quality-led.png";
import stemlessImg from "../assets/images/stemless.png";

export default function CapabilitiesSection() {
  const capabilities = [


    {
      id: "01",
      image: mpuImg,
      title: "Modern Processing Unit",
      subtitle: "Precision Engineering for Every Grain",
      description:
        "Our central processing unit is a high-tech ecosystem where automated cleaning, grading and packaging lines work in harmony to ensure consistent quality across multi-ton batches.",
      points: [
        "Multi-Stage Dust Extraction",
        "Automated Color Sorting",
        "Stainless Steel Contact Surfaces",
        "Vacuum-Seal Packaging",
      ],
    },

    {
      id: "02",
      image: qaImg,
      title: "QA Laboratory",
      subtitle: "Analytical Rigor, Definitive Results",
      description:
        "Equipped with sophisticated analytical instruments, our in-house laboratory monitors every batch for moisture levels, pungency (SHU), color (ASTA), and pesticide residues to meet global export standards.",
      points: [
        "HPLC Pungency Testing",
        "ASTA Color Analysis",
        "Real-time Traceability Logs",
      ],
    },

    {
      id: "03",
      image: coldStorageImg,
      title: "Cold Storage Facility",
      subtitle: "Fresher for Longer, by Design",
      description:
        "Temperature and humidity are the enemies of spice quality. Our industrial cold storage units maintain a consistent climate of 4°C to 10°C, halting degradation and ensuring year-round supply.",
      points: [
        "Precise Climate Control",
        "Anti-Caking Environment",
        "High-Density Palletized Storage",
        "Automated Inventory Tracking",
      ],
    },

    {
      id: "04",
      image: qualityLedImg,
      title: "Quality-Led Procurement",
      subtitle: "Excellence Begins at the Source",
      description:
        "We believe in direct farmer partnerships. Our procurement experts conduct field-level inspections, ensuring only the finest raw materials enter our processing lifecycle from over 5,000 trusted farms.",
      points: [
        "Farmer-First Ecosystem",
        "At-Source Quality Verification",
        "Sustainable Farming Guidance",
      ],
    },

    {
      id: "05",
      image: stemlessImg,
      title: "Stemcut Processing Zone",
      subtitle: "Specialized Efficiency for Global Needs (As per cutomer requirement)",
      description:
        "Dedicated to the production of premium stemcut chillies, this specialised line uses advanced mechanical and manual sorting to deliver 99.9% stem-free output for discerning international clients.",
      points: [
        "Automated Stem Removal",
        "Double-Pass Inspection",
        "High-Volume Throughput",
        "Uniform Product Profile",
      ],
    },
  ];

  return (
    <section className="capabilities-section">
      <div className="container">
      <div className="capabilities-container">
        {capabilities.map((item, index) => (
          <div
            key={item.id}
            className={`capability-card ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
          >
            {/* IMAGE */}

            <div
              className="capability-image"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <img src={item.image} alt={item.title} />
            </div>

            {/* CONTENT */}

            <div
              className="capability-content"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="1000"
            >
              <span className="capability-id">
                CAPABILITY {item.id}
              </span>

              <h2>{item.title}</h2>

              <h4>{item.subtitle}</h4>

              <p>{item.description}</p>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}