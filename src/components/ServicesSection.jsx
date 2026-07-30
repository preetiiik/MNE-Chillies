import { Link } from "react-router-dom";


const services = [
  {
    icon: "/images/chilli-pepper.webp",
    title: "CMF Processing",
    description:
      "State-of-the-art cleaning, sorting, and steam sterilization facilities.",
  },
  {
    icon: "/images/detergent.webp",
    title: "Sorting & Grading",
    description:
      "Machine + manual sorting for uniform quality and size.",
  },
  {
    icon: "/images/cooking.webp",
    title: "Cold Storage",
    description:
      "Temperature-controlled warehouses — freshness guaranteed year-round.",
  },
  {
    icon: "/images/chilli-pepper.webp",
    title: "Custom Packaging",
    description:
      "Jute bags, PP bags, vacuum packs — tailored to your brand.",
  },
  {
    icon: "/images/detergent.webp",
    title: "Export & Logistics",
    description:
      "End-to-end export support with global shipping partners.",
  },
  {
    icon: "/images/cooking.webp",
    title: "Quality Testing",
    description:
      "In-house and third-party lab testing for color, heat, and moisture.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" data-aos="fade-right">
      
      <div className="services-container">

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />

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