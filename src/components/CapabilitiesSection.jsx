import "../styles/CapabilitiesSection.css";

import steamImg from "../assets/images/steam.webp";
import mbrImg from "../assets/images/mbr.webp";
import mpuImg from "../assets/images/mpu.webp";
import qaImg from "../assets/images/qa.webp";
import coldStorageImg from "../assets/images/coldstorage.webp";
import qualityLedImg from "../assets/images/quality-led.webp";
import stemlessImg from "../assets/images/stemless.webp";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: "01",
      image: steamImg,
      title: "Steam Sterilisation",
      subtitle: "Preserving Purity through Pure Vapor",
      description:
        "Our cutting-edge steam sterilisation technology ensures the highest level of microbial reduction without compromising the essential oils, color, or flavor profile of the chillies.",
      points: [
        "Natural Oil Preservation",
        "5-Log Microbial Reduction",
        "Batch-Specific Calibration",
      ],
    },

    {
      id: "02",
      image: mbrImg,
      title: "MBR Treatment",
      subtitle: "The Standard for Sustainable Processing",
      description:
        "Sustainability is engineered into our core. Our Membrane Bio-Reactor (MBR) system enables zero liquid discharge and maximum water recovery, setting industrial benchmarks for environmental responsibility.",
      points: [
        "Advanced Filtration Media",
        "98% Water Recovery Rate",
        "Zero Liquid Discharge (ZLD)",
      ],
    },

    {
      id: "03",
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
      id: "04",
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
      id: "05",
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
      id: "06",
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
      id: "07",
      image: stemlessImg,
      title: "Stemless Processing Zone",
      subtitle: "Specialized Efficiency for Global Needs",
      description:
        "Dedicated to the production of premium stemless chillies, this specialised line uses advanced mechanical and manual sorting to deliver 99.9% stem-free output for discerning international clients.",
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