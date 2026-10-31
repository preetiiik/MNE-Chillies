import "../styles/ServicesHero.css";
import "../styles/Whatwedo.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

import Navbar from "../components/Navbar";
import MarqueeStrip from "../components/MarqueeStrip";
import Whatwedo from "../components/Whatwedo";
import Whysourcewithus from "../components/Whysourcewithus";
import ProcessTimeline from "../components/ProcessTimeline";

import hero from "../assets/images/services-hero.webp";

export default function services() {
  const [activeServiceId, setActiveServiceId] = useState("01");

//   useEffect(() => {
//   AOS.init({
//     duration: 800,
//     once: true,
//   });

//   const handleLoad = () => {
//     AOS.refresh();
//     setTimeout(() => AOS.refreshHard(), 300);
//   };

//   if (document.readyState === 'complete') {
//     handleLoad();
//   } else {
//     window.addEventListener('load', handleLoad);
//     return () => window.removeEventListener('load', handleLoad);
//   }
// }, []);

  const stats = [
    {
      value: "5",
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
              Five services.
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
      <Whatwedo activeId={activeServiceId} onSelect={setActiveServiceId} />
      <Whysourcewithus />
      <ProcessTimeline activeId={activeServiceId} onSelect={setActiveServiceId} />

    </>
  );

}
