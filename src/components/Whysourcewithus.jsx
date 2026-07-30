import "../styles/Whysourcewithus.css";
import chainImg from "../assets/images/supply-chain-illustration.webp";

const FEATURES = [
  {
    id: "01",
    title: "Single point of contact",
    description:
      "One team, one phone number, one COA. No chasing multiple vendors.",
  },
  {
    id: "02",
    title: "Farm-direct pricing",
    description:
      "No middlemen between us and the 500+ farming families we work with.",
  },
  {
    id: "03",
    title: "48-hour quote turnaround",
    description:
      "Tell us variety, volume, and destination — we respond fast.",
  },
  {
    id: "04",
    title: "Full documentation included",
    description:
      "Phytosanitary, APEDA, COA, bill of lading — all covered.",
  },
];

function FeatureIcon() {
  return (
    <span className="wsw-feature-icon">
      <span className="wsw-feature-dot"></span>
    </span>
  );
}

export default function WhySourceWithUs() {
  return (
    <section className="wsw-section">
      <div className="container">
      <div className="wsw-container">

        {/* LEFT CONTENT */}
        <div className="wsw-left">

          <span className="wsw-small-title">
            <span className="wsw-dash"></span>
            Why Source With Us
          </span>

          <h2>
            One partner.
            <br />
            The entire chain.
          </h2>

          <p className="wsw-intro">
            Most buyers deal with a separate farm aggregator, a separate
            processor, a separate warehouse, and a separate freight agent.
            We are all four. That means fewer handoffs, fewer delays, and a
            single point of accountability — from farm to customs clearance.
          </p>

          <div className="wsw-features">
            {FEATURES.map((feature) => (
              <div className="wsw-feature-row" key={feature.id}>
                <FeatureIcon />
                <div className="wsw-feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="wsw-right">

          <div className="wsw-image-wrap">
            <img
              src={chainImg}
              alt="Farm to export supply chain illustration"
            />

            <div className="wsw-badge wsw-badge-solid">
              <span className="wsw-badge-value">40k</span>
              <span className="wsw-badge-label">sq. ft. facility</span>
            </div>

            <div className="wsw-badge wsw-badge-card">
              <span className="wsw-badge-value wsw-badge-value-red">6</span>
              <span className="wsw-badge-label wsw-badge-label-dark">
                Services under one roof
              </span>
            </div>
          </div>

        </div>

      </div>
      </div>
    </section>
  );
}
