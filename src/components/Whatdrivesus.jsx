import purposeBg from "../assets/images/purpose-bg.webp";

const cards = [
  {
    id: 1,
    icon: "◎",
    title: "Our Mission",
    desc: "To source, process, and deliver the world's finest red chillies — maintaining the highest standards of quality, sustainability, and fair trade at every stage of the supply chain.",
    animation: "fade-up",
    delay: "150",
  },
  {
    id: 2,
    icon: "◈",
    title: "Our Vision",
    desc: "To be India's most trusted chilli export brand, synonymous with consistent color, certified heat levels, and a supply chain that benefits farmers as much as buyers.",
    animation: "fade-up",
    delay: "300",
  },
  {
    id: 3,
    icon: "◇",
    title: "Our Values",
    desc: "Transparency in grading, fairness to farmers, zero compromise on quality. We test every batch, document every shipment, and stand behind every kilogram we deliver.",
    animation: "fade-up",
    delay: "450",
  },
];

function WhatDrivesUs() {
  return (
    <section
      className="purpose-section"
      style={{ backgroundImage: `url(${purposeBg})` }}
    >
      <div className="container">
      <div className="purpose-container">

        <span
          className="purpose-tag"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          OUR PURPOSE
        </span>

        <h2
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          What Drives Us
        </h2>

        <div className="purpose-grid">

          {cards.map((item) => (
            <div
              key={item.id}
              className="purpose-card"
              data-aos={item.animation}
              data-aos-delay={item.delay}
              data-aos-duration="800"
            >
              <div className="purpose-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}

        </div>

      </div>
      </div>
    </section>
  );
}

export default WhatDrivesUs;