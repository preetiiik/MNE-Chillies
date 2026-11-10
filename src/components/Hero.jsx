import "../styles/HeroHome.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const videoRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    if (!imageLoaded) return;

    const timer = window.setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // Keep the opening image visible if playback is unavailable.
      });
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <section className="home-hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="home-hero-video"
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero%20image.png"
        onPlaying={() => setVideoPlaying(true)}
      >
        <source src="/assests/videos/hero-video5.mp4" type="video/mp4" />
      </video>
      <img
        className={`home-hero-opening${videoPlaying ? " is-hidden" : ""}`}
        src="/hero%20image.png"
        alt=""
        fetchPriority="high"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Gradient Overlay */}
      <div className="home-hero-overlay"></div>

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
