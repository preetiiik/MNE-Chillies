import { useNavigate } from "react-router-dom";
import "../styles/OurcommitmentHome.css";

function Commitment() {
  const navigate = useNavigate();
  return (
    <section className="commitment" data-aos="fade-right">
      <div className="container">

      <div className="overlay"></div>

      <div className="commitment-content">

        <p className="commitment-label">
          OUR COMMITMENT
        </p>

        <h2 className="commitment-title">
          Empowering
          <br />
          Farmers,
          <br />
          Delivering
          <br />
          Excellence
        </h2>

        <p className="commitment-desc">
          We work directly with over 500 farmers across Guntur and Byadagi —
          ensuring fair prices, sustainable farming, and quality at every step.
          From first harvest to final shipment, we stand for authenticity and
          trust.
        </p>

        <div className="commitment-stats">

          <div className="commit-stat">
            <h3>100%</h3>
            <p>Direct Farm Sourcing</p>
          </div>

          <div className="divider"></div>

          <div className="commit-stat">
            <h3>Zero</h3>
            <p>Artificial Additives</p>
          </div>

          <div className="divider"></div>

          <div className="commit-stat">
            <h3>72hr</h3>
            <p>From Farm to Pack</p>
          </div>

        </div>

        <div className="commit-buttons">

          <button
            className="learn-btn"
            onClick={() => navigate("/contact")}
          >
            Learn More
          </button>

          <button
            className="farmers-btn"
            onClick={() => navigate("/about-us")}
          >
            Meet Our Farmers
          </button>

        </div>

      </div>
      </div>

    </section>
  );
}

export default Commitment;