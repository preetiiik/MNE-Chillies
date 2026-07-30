import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";



function Collection() {
  const products = [
    {
      image: "/images/dry-chilies.webp",
      title: "Whole Chilli",
      description:
        "Handpicked, sun-dried red chillies with deep pigmentation and bold heat. Source-verified from Guntur farms.",
    },
    {
      image: "/images/chili-powder.webp",
      title: "Chilli Powder",
      description:
        "Finely ground, vibrant red powder. Retains natural oils, aroma, and color — ideal for spice blends and sauces.",
    },
    {
      image: "/images/chili-flakes.webp",
      title: "Chilli Flakes",
      description:
        "Coarsely crushed for bold texture. Perfect heat-to-color ratio for pizza, pasta, marinades, and rubs.",
    },
  ];

  return (
    <section className="collection">
      <div className="container">
      <div className="collection-top">
        <div className="collection-left">
          <span
            className="collection-label"
            data-aos="fade-right"
          >
            OUR COLLECTION
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Three forms.
            <br />
            Infinite flavor.
          </h2>
        </div>

        <Link
          to="/products"
          className="view-products"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          View All Products
          <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="collection-grid">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={product.image}
              alt={product.title}
            />

            <div className="product-content">
              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <Link to="/products">
                Learn More
                <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Collection;