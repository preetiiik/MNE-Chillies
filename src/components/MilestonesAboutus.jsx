
import { useState, useEffect, useRef } from "react";
import "../styles/MilestonesAboutus.css";

const milestones = [
  {
    year: "1998",
    title: "The Beginning",
    desc: "Founded in Kothapet, Guntur, with a single processing shed and relationships with 12 local farmers. First export shipment to a buyer in Dubai.",
  },
  {
    year: "2004",
    title: "First ISO Certification",
    desc: "Achieved ISO 9001 certification, formalising our quality management systems and enabling exports to European markets for the first time.",
  },
  {
    year: "2009",
    title: "Facility Expansion",
    desc: "Opened a dedicated 40,000 sq. ft. processing and cold-storage facility, quadrupling throughput capacity and adding steam sterilization lines.",
  },
  {
    year: "2014",
    title: "FSSAI & APEDA Registration",
    desc: "Registered with FSSAI and APEDA, unlocking access to food-grade export markets in the USA, Canada, and Australia.",
  },
  {
    year: "2019",
    title: "500 Farmer Network",
    desc: "Crossed the milestone of 500 direct partner farming families covering Teja, byadagi, Guntur Sannam, and specialty varieties.",
  },
  {
    year: "2024",
    title: "25 Export Destinations",
    desc: "Shipping to 25 countries across Asia, Europe, the Americas, and the Middle East, with an annual throughput exceeding 8,000 metric tonnes.",
  },
];

function Milestones() {
  const [animate, setAnimate] = useState(false);
  const [visibleDots, setVisibleDots] = useState([]);

  const timelineRef = useRef(null);

  const startAnimation = () => {

  if (animate) return;

  setAnimate(true);

  milestones.forEach((_, index) => {

    setTimeout(() => {

      setVisibleDots(prev => [...prev, index]);

    }, index * 350);

  });

};
useEffect(() => {

  const observer = new IntersectionObserver(

    ([entry]) => {

      if (entry.isIntersecting) {

        startAnimation();

      }

    },

    {
      threshold: 0.3,
    }

  );

  if (timelineRef.current) {

    observer.observe(timelineRef.current);

  }

  return () => observer.disconnect();

}, []);

  return (
    <section className="milestones-section">
      <div className="milestones-container">

        <span
          className="journey-tag"
          data-aos="fade-right"
        >
          OUR JOURNEY
        </span>

        <h2 data-aos="fade-up">
          Milestones That
          <br />
          Define Us
        </h2>

        <div
          ref={timelineRef}
          className={`timeline ${animate ? "active" : ""}`}
        >

          <div className="timeline-line"></div>

          {milestones.map((item, index) => (

            <div
              key={index}
              className={`timeline-row ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >

              <div
                className="timeline-content"
                data-aos={
                  index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
                }
              >
                <h3>{item.year}</h3>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>

              <div
                className={`timeline-dot ${
                  visibleDots.includes(index) ? "show" : ""
                }`}
              >
                <span></span>
              </div>

              <div className="timeline-empty"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Milestones;