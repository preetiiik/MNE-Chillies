import { Link } from "react-router-dom";
import { FiBox } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";


const services = [
  {
    icon: "/images/chilli-pepper.webp",
    title: "CMF Processing (Third-Party Service)",
    description:
      "Cleaning and sorting through third-party facilities.",
  },
  {
    icon: "/images/detergent.webp",
    title: "Sorting & Grading",
    description:
      "Machine and manual sorting for uniform quality and size.",
  },
  {
    icon: FaRegSnowflake,
    title: "Cold Storage",
    description:
      "Temperature-controlled storage helps maintain product quality throughout the year.",
  },
  {
    icon: FiBox,
    title: "Custom Packaging",
    description:
      "Jute bags, PP bags, vacuum packs — tailored to your brand.",
  },
  {
    icon: "/images/cooking.webp",
    title: "Quality Testing",
    description:
      "In-house and third-party lab testing for colour, heat, and moisture.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" >
      
      <div className="services-container" data-aos="fade-right">

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              {typeof service.icon === "string" ? (
                <img src={service.icon} alt="" className="service-icon" />
              ) : (
                <service.icon className="service-icon" aria-hidden="true" />
              )}

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-content">

          <span className="subtitle">
            WHAT WE OFFER
          </span>

          <h2>
            End-to-End
            <br />
            Services
          </h2>

          <p>
            From field to freight — we handle every step so your supply chain
            runs seamlessly. Whether you need bulk raw chilies or custom-branded
            retail packs, we have the infrastructure and expertise to deliver.
          </p>
          
          <Link
            to="/services"
            className="service-btn"
          >
            Learn More About Services <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
