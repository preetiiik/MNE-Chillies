import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function ProductCard({ product }) {
  const {
    badge,
    image,
    variety,
    title,
    description,
    heat,
    heatLabel,
    tags,
  } = product;

  // "View Details" now always navigates to the Products page
  // (FeaturedProducts) instead of opening an in-page modal, so make sure
  // the entries in FeaturedProducts.jsx stay in sync with the varieties
  // shown here.
  return (
    <div className="product-item">
      <div className="product-image">
        <span className="product-badge">{badge}</span>
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="product-info">
        <span className="product-variety">{variety}</span>
        <h3 className="product-name">{title}</h3>
        <p className="product-description">{description}</p>

        {heat ? (
          <div className="heat-section">
            <div className="heat-bars">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`heat-bar${i <= heat ? " active" : ""}`}
                ></span>
              ))}
            </div>
            <span className="heat-label">{heatLabel}</span>
          </div>
        ) : null}

        {tags && tags.length > 0 ? (
          <div className="product-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <hr />

        <div className="product-footer">
          <Link to="/products" className="view-details-btn">
            <span>View Details</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;