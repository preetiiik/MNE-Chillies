import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function ProductCard({ product }) {
  const {
    id,
    category,
    badge,
    image,
    variety,
    title,
    description,
    heat,
    heatLabel,
    tags,
  } = product;

  // "View Details" navigates to the Products page and deep-links to this
  // exact card in FeaturedProducts (same category + same numeric id), which
  // reads these two params to pick the filter and scroll to the card.
  const detailsLink = `/products?category=${encodeURIComponent(
    category
  )}&product=${id}`;
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
          <Link to={detailsLink} className="view-details-btn">
            <span>View Details</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;