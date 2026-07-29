import { Link } from "react-router-dom";
import { FiArrowRight, FiDroplet, FiStar } from "react-icons/fi";
function ProductCard({ product }) {
  const {
    badge,
    image,
    variety,
    title,
    tagline,
    description,
    asta,
    shu,
    moisture,
    heat,
    heatLabel,
    tags,
    origin,
    link,
  } = product;

  return (
  
    <div className="product-item">
      <div className="product-image">
        <span className="product-badge">{badge}</span>
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="product-info">
        <span className="product-variety">{variety}</span>
        <h3 className="product-name">{title}</h3>
        {/* <p className="product-tagline">{tagline}</p> */}
        <p className="product-description">{description}</p>

        {/* <div className="specs-box">
          <div className="spec-col">
            <span className="spec-value">{asta}</span>
            <span className="spec-label">ASTA</span>
          </div>

          <div className="spec-divider"></div>

          <div className="spec-col">
            <span className="spec-value">{shu}</span>
            <span className="spec-label">SHU</span>
          </div>

          <div className="spec-divider"></div>

          <div className="spec-col">
            <span className="spec-value">{moisture}</span>
            <span className="spec-label">H2O</span>
          </div>
        </div> */}

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

        <div className="product-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <hr />

        <div className="product-footer">
          {/* <span className="origin-text">Origin: {origin}</span> */}

            <Link to="/products" className="view-details-btn">
              <span>View Details</span>
              <FiArrowRight />
            </Link>
              {/* <path
                d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
