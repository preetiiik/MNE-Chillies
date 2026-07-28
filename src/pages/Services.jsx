import "../styles/ServicesHero.css";
import "../styles/Whatwedo.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import MarqueeStrip from "../components/MarqueeStrip";
import Whatwedo from "../components/Whatwedo";
import Whysourcewithus from "../components/Whysourcewithus";
import ProcessTimeline from "../components/ProcessTimeline";

import hero from "../assets/images/services-hero.png";

export default function services() {

  useEffect(() => {

    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });

    AOS.refresh();

  }, []);

  const stats = [
    {
      value: "6",
      label: "Core services",
    },
    {
      value: "40k",
      label: "sq. ft. facility",
    },
    {
      value: "25+",
      label: "Export destinations",
    },
    {
      value: "48hr",
      label: "Quote turnaround",
    },
  ];

  return (
    <>

      <section
        className="services-page-hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        <div className="services-page-overlay">

          <Navbar />

          <div className="services-page-content">

            {/* TAG */}

            <div
              className="services-page-tag"
              data-aos="fade-right"
            >
              <span className="dot"></span>
              OUR services
            </div>

            {/* HEADING */}

            <h1
              data-aos="fade-up"
            >
              Six services.
              <br />
              <span>One Supply Chain.</span>
            </h1>

            {/* STATS */}

            <div className="services-page-stats">

              {stats.map((item, index) => (

                <div
                  className="service-stat"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >

                  <h3>
                    {item.value}
                  </h3>

                  <span>
                    {item.label}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <MarqueeStrip />
      <Whatwedo />
      <Whysourcewithus />
      <ProcessTimeline />

    </>
  );

}