import "../styles/ProductsHero.css"


import MarqueeStrip from "../components/MarqueeStrip";
import FeaturedProducts from "../components/FeaturedProducts";
import { useEffect } from "react";
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
            Six varieties.
            <br />
            <span>One standard.</span>
          </h1>

          <div
            className="hero-buttons"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <button className="active">All</button>
            <button>Dry Chillies</button>
            <button>Chilli Powder</button>
            <button>Chilli Flakes</button>
          </div>
        </div>
      </section>

      <MarqueeStrip />
      <FeaturedProducts />
      <OurProductsP />   
      <AllProducts />  
      <ComparisonSection />
      <QualitySectionP /> {/* Rest of the Products page */}
    </>
  );
}

export default Products;