import "../styles/HeroHome.css";
import { Link } from "react-router-dom";

function HeroH() {
  return (
    <section className="hero" data-aos="fade-in">
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>GUNTUR'S FINEST SINCE 1998</span>
        </div>

        {/* Heading */}
        <h1 className="hero-title">
            Premium Red
            <br />
            <span>Chillies,</span> Straight
            <br />
            from the Source
        </h1>

        {/* Paragraph */}
        <p className="hero-description">
          Delivering handpicked, export-grade chillies, chilli powder,
          and flakes with rich color, strong aroma, and authentic heat
          from India's spice capital.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          {/* <button className="primary-btn">
            Explore Products
          </button> */}
          <Link to="/Products" className="primary-btn">
            Explore Products
            </Link>

          <button className="secondary-btn">
            Watch Our Story
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroH;