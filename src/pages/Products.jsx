import "../styles/ProductsHero.css";

import MarqueeStrip from "../components/MarqueeStrip";
import FeaturedProducts from "../components/FeaturedProducts";
import { useEffect, useState } from "react";
import AOS from "aos";

import heroBg from "../assets/images/products-hero.webp";
import OurProductsP from "../components/OurproductP";
import AllProducts from "../components/AllProducts";
import ComparisonSection from "../components/ComparisonSectionP";
import QualitySectionP from "../components/QualitySectionP";

function Products() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Dry Chillies",
    "Chilli Powder",
    "Chilli Flakes",
  ];

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div
            className="story-tag"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="dot"></span>
            OUR STORY
          </div>

          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Seven varieties.
            <br />
            <span>One standard.</span>
          </h1>

          <div
            className="hero-buttons"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <FeaturedProducts
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <OurProductsP />
      <AllProducts />
      <ComparisonSection />
      <QualitySectionP />
    </>
  );
}

export default Products;