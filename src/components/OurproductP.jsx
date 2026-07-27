import dryPowder from "../assets/images/powder-pour.png";
import dryChillies from "../assets/images/dry-chillies.png";
import flakes from "../assets/images/chilli-flakes.png";
import powder from "../assets/images/mild-chilli-powder.png";

import "../styles/OurProductsP.css";

function OurProductsSection() {
  return (
    <section className="our-products">
      <div className="container">

      <div className="our-products-container">

        {/* Left Image */}
        <div className="products-left">
          <img src={dryPowder} alt="Chilli Products" />
        </div>

        {/* Center Content */}
        <div className="products-center">

          <span className="collection-tag">
            OUR COLLECTION
          </span>

          <h2>
            Our Products
          </h2>

          <p>
            From carefully sourced whole chillies to finely ground
            powders and perfectly crushed flakes, each product is
            crafted to deliver vibrant color, rich aroma, and
            authentic spice in every form.
          </p>

        </div>

        {/* Right Content */}
        <div className="products-right">

          <div className="product-type">

            <div className="product-info">
              <h3>Dry Chillies</h3>

              <p>
                Handpicked dried red chillies with deep color and
                bold aroma, sourced to deliver unmatched quality
                and natural heat.
              </p>
            </div>

            <img
              src={dryChillies}
              alt="Dry Chillies"
            />

          </div>

          <div className="product-type">

            <div className="product-info">
              <h3>Chilli Flakes</h3>

              <p>
                Coarsely crushed chilli flakes with a perfect
                balance of heat and texture, ideal for enhancing
                flavor in every dish.
              </p>
            </div>

            <img
              src={flakes}
              alt="Flakes"
            />

          </div>

          <div className="product-type">

            <div className="product-info">
              <h3>Chilli Powder</h3>

              <p>
                Finely ground chilli powder with intense color
                and flavor, processed to retain freshness,
                aroma, and natural spice.
              </p>
            </div>

            <img
              src={powder}
              alt="Powder"
            />

          </div>

        </div>

      </div>
      </div>

    </section>
  );
}

export default OurProductsSection;