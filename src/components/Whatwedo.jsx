import { useState } from "react";
import "../styles/Whatwedo.css";


import img01 from "../assets/images/service-cleaning.png";
import img02 from "../assets/images/service-steam.png";
import img03 from "../assets/images/service-storage.png";
import img04 from "../assets/images/service-testing.png";
import img05 from "../assets/images/service-packaging.png";
import img06 from "../assets/images/service-export.png";

const SERVICES = [
  {
    id: "01",
    image: img01,
    title: "Cleaning & Sorting",
    description: "Machine and hand sorting to remove defects",
    tagline: "Machine and hand sorting to remove defects",
    statValue: "99%",
    statLabel: "Defect-free rate",
    icon: "ring",
    paragraph:
      "Every batch passes through our high-speed optical sorters and a final manual inspection line. We remove discoloured, damaged, or undersized units before anything moves to the next stage — ensuring size uniformity and visual consistency buyers depend on.",
    features: [
      "Optical colour sorting",
      "Manual inspection line",
      "Uniform size grading",
      "Stem & seed removal on request",
    ],
  },
  {
    id: "02",
    image: img02,
    title: "Steam Sterilization",
    description: "CMF processing — zero artificial additives",
    tagline: "Advanced sterilisation for food safety",
    statValue: "0",
    statLabel: "Artificial additives",
    icon: "diamond",
    paragraph:
      "Our advanced steam sterilisation process eliminates harmful microorganisms while preserving the chilli's natural colour, aroma, and flavour. This ensures food safety without the use of chemicals or artificial treatments.",
    features: [
      "Chemical-free sterilisation",
      "Reduces microbial load",
      "Preserves natural colour",
      "Export-ready quality",
    ],
  },
  {
    id: "03",
    image: img03,
    title: "Cold Storage",
    description: "Temperature-controlled warehousing year-round",
    tagline: "Temperature-controlled storage for lasting freshness",
    statValue: "12 mo",
    statLabel: "Shelf life maintained",
    icon: "diamond",
    paragraph:
      "Our climate-controlled storage facilities protect chilli quality by maintaining ideal temperature and humidity levels. This helps preserve freshness, colour, pungency, and shelf life throughout the year.",
    features: [
      "Temperature-controlled facility",
      "Maintains product freshness",
      "Longer shelf life",
      "Moisture protection",
    ],
  },
  {
    id: "04",
    image: img04,
    title: "Quality Testing",
    description: "ASTA colour, SHU pungency and moisture on every batch",
    tagline: "Every batch tested for consistent quality",
    statValue: "100%",
    statLabel: "Batches tested",
    icon: "dot",
    paragraph:
      "Each lot undergoes strict quality inspection to verify colour, pungency, moisture, cleanliness, and overall consistency. Only products meeting our quality standards move forward for packing and dispatch.",
    features: [
      "Colour & pungency check",
      "Moisture analysis",
      "Batch consistency",
      "Export-grade inspection",
    ],
  },
  {
    id: "05",
    image: img05,
    title: "Custom Packaging",
    description: "Jute, PP, vacuum, and private-label options",
    tagline: "Packaging tailored to your business needs",
    statValue: "4",
    statLabel: "Packing formats",
    icon: "half",
    paragraph:
      "We offer flexible packaging solutions designed for retail, wholesale, and export markets. From private labelling to multiple pack sizes, every order is packed securely to maintain product freshness.",
    features: [
      "Retail & bulk packaging",
      "Private label options",
      "Multiple pack sizes",
      "Secure sealing",
    ],
  },
  {
    id: "06",
    image: img06,
    title: "Export & Logistics",
    description: "End-to-end documentation and global freight",
    tagline: "Reliable delivery from our facility to yours",
    statValue: "48hr",
    statLabel: "Quote turnaround",
    icon: "half",
    paragraph:
      "From documentation to shipment coordination, we manage every stage of the export process to ensure timely deliveries, secure handling, and smooth international logistics.",
    features: [
      "Export documentation",
      "Timely dispatch",
      "Secure transportation",
      "Worldwide delivery",
    ],
  },
];

function ServiceIcon({ type }) {
  if (type === "ring") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  if (type === "diamond") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="9"
          y="1"
          width="11.3"
          height="11.3"
          transform="rotate(45 9 1)"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }
  if (type === "dot") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 1a8 8 0 0 1 0 16 8 8 0 0 1 0-16z" fill="currentColor" />
      </svg>
    );
  }
  // half
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 1a8 8 0 0 1 0 16z" fill="currentColor" />
    </svg>
  );
}

export default function WhatWeDo() {
  const [activeId, setActiveId] = useState("01");

  const activeIndex = SERVICES.findIndex((s) => s.id === activeId);
  const activeService = SERVICES[activeIndex];

  const goTo = (index) => {
    // wrap around at either end
    const wrapped = (index + SERVICES.length) % SERVICES.length;
    setActiveId(SERVICES[wrapped].id);
  };

  return (
    <section className="wwd-section">
      <div className="wwd-container">

        {/* HEADER */}
        <div className="wwd-header">
          <div className="wwd-header-left">
            <span className="wwd-small-title">
              <span className="wwd-dash"></span>
              Our Services
            </span>
            <h2>What we do</h2>
          </div>

          <p className="wwd-header-right">
            Click any service to see the full detail
            <br />
            below.
          </p>
        </div>

        {/* GRID */}
        <div className="wwd-grid">
          {SERVICES.map((service) => {
            const isActive = service.id === activeId;

            return (
              <button
                key={service.id}
                type="button"
                className={`wwd-card${isActive ? " active" : ""}`}
                onClick={() => setActiveId(service.id)}
              >
                <div className="wwd-card-image">
                  <img src={service.image} alt={service.title} />
                  <span className="wwd-card-number">{service.id}</span>
                  <span className="wwd-card-badge">
                    {isActive ? "Selected" : "Learn More"}
                  </span>
                </div>

                <div className="wwd-card-content">
                  <span className="wwd-card-icon">
                    <ServiceIcon type={service.icon} />
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="wwd-card-divider"></div>

                  <div className="wwd-card-stat">
                    <span className="wwd-stat-value">{service.statValue}</span>
                    <span className="wwd-stat-label">{service.statLabel}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* DETAIL PANEL */}
        <div className="wwd-detail" key={activeService.id}>

          <div className="wwd-detail-image">
            <img src={activeService.image} alt={activeService.title} />
            <div className="wwd-detail-stat">
              <span className="wwd-detail-stat-value">
                {activeService.statValue}
              </span>
              <span className="wwd-detail-stat-label">
                {activeService.statLabel}
              </span>
            </div>
          </div>

          <div className="wwd-detail-content">

            <span className="wwd-small-title">
              <span className="wwd-dash"></span>
              Service {activeService.id}
            </span>

            <span className="wwd-detail-icon">
              <ServiceIcon type={activeService.icon} />
            </span>

            <h2>{activeService.title}</h2>

            <p className="wwd-detail-tagline">{activeService.tagline}</p>

            <p className="wwd-detail-paragraph">{activeService.paragraph}</p>

            <ul className="wwd-detail-features">
              {activeService.features.map((feature) => (
                <li key={feature}>
                  <span className="wwd-feature-dot"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="wwd-detail-nav">
              <button
                type="button"
                className="wwd-nav-btn"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous service"
              >
                &#8592;
              </button>

              <button
                type="button"
                className="wwd-nav-btn"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next service"
              >
                &#8594;
              </button>

              <span className="wwd-nav-count">
                {activeIndex + 1} / {SERVICES.length}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
