import "aos/dist/aos.css";

import "../styles/AboutUsHero.css";
import "../styles/InfraAboutus.css";
import "../styles/StatsH.css";


import aboutBg from "../assets/images/about-bg.webp";

import MarqueeStrip from "../components/MarqueeStrip";
import { Heritage, StoryCards, GroupCompanies, MarketPresence, SocialResponsibility } from "../components/AboutStorySections";
import Infrastructure from "../components/InfrastructureAboutus";
import OfficeWarehouse from "../components/OfficeWarehouse";

function AboutUs() {
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
              We have connected the world's finest chilli-growing
              farms to kitchens and factories across countries.
            </p>
          </div>
        </div>
      </section>

        <MarqueeStrip />

      <Heritage />
      <StoryCards type="journey" />
      <StoryCards type="purpose" />
      <GroupCompanies />
      <Infrastructure />
      <StoryCards type="leadership" />
      <OfficeWarehouse />
      <MarketPresence />
      <SocialResponsibility />
    </>
  );
}

export default AboutUs;
