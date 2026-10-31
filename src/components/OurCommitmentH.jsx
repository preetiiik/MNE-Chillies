import { useNavigate } from "react-router-dom";
import "../styles/OurcommitmentHome.css";

function Commitment() {
  const navigate = useNavigate();
  return (
    <section className="commitment">
      <div className="container">

      <div className="overlay"></div>

      <div className="commitment-content" data-aos="fade-right">
        

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
          We source directly from APMC farmers across guntur and andhra region.
          From first harvest to final shipment, we stand for authenticity and
          trust.
        </p>

        <div className="commit-buttons">

          <button
            className="learn-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

          <button
            className="farmers-btn"
            onClick={() => navigate("/contact")}
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
