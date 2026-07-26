import "../styles/InfraHero.css";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import MarqueeStrip from "../Components/MarqueeStrip";
import InfraIntro from "../components/InfraIntro";

import hero from "../assets/images/infra-hero.png";
import ProcessSection from "../components/ProcessSectionH";
import ProcessingSection from "../components/ProcessingSection";
import CapabilitiesSection from "../components/CapabilitiesSection";

export default function Infrastructure() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <>

      <section
        className="infra-hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        <div className="infra-overlay">

          <Navbar />

          <div className="infra-content">

            <div
              className="infra-tag"
              data-aos="fade-right"
            >
              <span className="dot"></span>
              INFRASTRUCTURE
            </div>

            <h1
              data-aos="fade-up"
            >
              Where Quality
              <br />
              <span>Meets Capability.</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
            >
              From advanced processing to controlled storage and
              testing, our infrastructure is built to protect quality
              and support reliable supply.
            </p>

          </div>

        </div>

      </section>
      
      <MarqueeStrip />
      <InfraIntro />
      <ProcessingSection />
      <CapabilitiesSection />
    </>
  );
}