import "../styles/HeroHome.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="home-hero">
      <video
        className="home-hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assests/videos/hero-video5.mp4" type="video/mp4" />
      </video>

      <div className="home-hero-overlay"></div>

      <div className="container">
      <div className="home-hero-content" data-aos="fade-in">
        {/* Badge */}
        <div className="home-hero-badge">
          <span className="home-badge-dot"></span>
          <span>OVER FOUR DECADES OF SPICE EXPERTISE</span>
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
          From carefully sourced whole chillies to premium chilli powder and flakes — bringing the character of Guntur to markets across India and the world.
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
