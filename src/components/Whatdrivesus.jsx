import purposeBg from "../assets/images/purpose-bg.webp";

const cards = [
  {
    id: 1,
    icon: "◎",
    title: "Our Vision",
    desc: "To be a globally recognised, one-stop destination for red chillies — integrating sourcing, procurement and advanced manufacturing to deliver premium-quality chilli powder and flakes through cutting-edge technology, world-class quality standards and supply chain excellence.",
    animation: "fade-up",
    delay: "150",
  },
  {
    id: 2,
    icon: "◈",
    title: "Our Mission",
    desc: "To combine generations of industry expertise, trusted sourcing relationships and modern manufacturing technologies to deliver high-quality red chilli products with hygiene, reliability and customer satisfaction.",
    animation: "fade-up",
    delay: "300",
  },
  {
    id: 3,
    icon: "◇",
    title: "Our Values",
    desc: "Integrity, quality, innovation, lasting relationships, social responsibility and respect for the legacy that brought us here.",
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
