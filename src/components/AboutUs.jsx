
import { Link } from "react-router-dom";
import aboutBg from "../images/about-bg.png";
import "../styles/AboutUsHero.css";

function AboutUs() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-overlay">
        <div className="about-content">
          <span className="story-badge">● OUR STORY</span>

          <h1>
            Rooted in Guntur.
            <br />
            <span>Trusted</span> Worldwide.
          </h1>

          <p>
            Since 1998, we have connected the world's finest chilli-growing
            farms to kitchens and factories across 25+ countries.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;