import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/AboutUsHero.css";
import "../styles/Whoweare.css"
import "../styles/WhatwedoAboutus.css"
import "../styles/MilestonesAboutus.css";
import "../styles/InfraAboutus.css";
import "../styles/LeadershipTeamAboutus.css";
import "../styles/StatsH.css";


import aboutBg from "../assets/images/about-bg.webp";

import MarqueeStrip from "../components/MarqueeStrip";
import Whoweare from "../components/Whoweare";
import Whatdrivesus from "../components/Whatdrivesus";
import Milestones from "../components/MilestonesAboutus";
import Infrastructure from "../components/InfrastructureAboutus";
import LeadershipTeam from "../components/LeadershipTeamAboutUs";

function AboutUs() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });

  const handleLoad = () => {
    AOS.refresh();
    setTimeout(() => AOS.refreshHard(), 300);
  };

  if (document.readyState === 'complete') {
    handleLoad();
  } else {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }
}, []);


  return (
    <>
      <section
        className="about-page"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-overlay">
          <div
            className="about-content"
            data-aos="fade-up"
          >
            <span
              className="story-badge"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              OUR STORY
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Rooted in Guntur.
              <br />
              <span>Trusted</span> Worldwide.
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Since 1998, we have connected the world's finest chilli-growing
              farms to kitchens and factories across 25+ countries.
            </p>
          </div>
        </div>
      </section>

        <MarqueeStrip />

      <div data-aos="fade-up">
        <Whoweare />
      </div>

      
        <Whatdrivesus />


      <div data-aos="fade-up">
        <Milestones />
      </div>

        <Infrastructure />

      <div data-aos="fade-up">
        <LeadershipTeam />
      </div>
    </>
  );
}

export default AboutUs;