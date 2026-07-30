import "../styles/InfraAboutus.css";
import infrastructureBg from "../assets/images/infrastructure-bg.webp";

const stats = [
  {
    number: "40,000",
    unit: "SQ. FT.",
    text: "Processing Facility",
  },
  {
    number: "8,000+",
    unit: "MT/YR",
    text: "Annual Throughput",
  },
  {
    number: "-18°C",
    unit: "COLD STORAGE",
    text: "Controlled Warehousing",
  },
  {
    number: "3",
    unit: "STERILIZATION LINES",
    text: "CMF Processing",
  },
];

function Infrastructure() {
  return (
    <section
      className="infra-section"
      style={{ backgroundImage: `url(${infrastructureBg})` }}
    >
      <div className="infra-overlay">

        <div className="infra-container">

          <span
            className="infra-tag"
            data-aos="fade-right"
          >
            OUR INFRASTRUCTURE
          </span>

          <h2
            className="infra-title"
            data-aos="fade-up"
          >
            Built to Deliver
            <br />
            at Scale
          </h2>

          <div className="infra-cards">

            {stats.map((item, index) => (
              <div
                key={index}
                className="infra-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3>{item.number}</h3>

                <span>{item.unit}</span>

                <p>{item.text}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Infrastructure;