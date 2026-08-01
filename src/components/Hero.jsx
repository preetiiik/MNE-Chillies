import "../styles/HeroHome.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="home-hero">
      <div className="container">
      <div className="home-hero-content" data-aos="fade-in">
        {/* Badge */}
        <div className="home-hero-badge">
          <span className="home-badge-dot"></span>
          <span>GUNTUR'S FINEST SINCE 1998</span>
        </div>

        {/* Heading */}
        <h1 className="home-hero-title">
          Premium Red
          <br />
          <span>Chillies,</span> Straight
          <br />
          from the Source
        </h1>

        {/* Paragraph */}
        <p className="home-hero-description">
          Delivering handpicked, export-grade chillies, chilli powder,
          and flakes with rich color, strong aroma, and authentic heat
          from India's spice capital.
        </p>

        {/* Buttons */}
        <div className="home-hero-buttons">
          <Link to="/Products" className="home-primary-btn">
            Explore Products
          </Link>

          <Link to="/aboutus">
            <button className="home-secondary-btn">
              Watch Our Story
            </button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;