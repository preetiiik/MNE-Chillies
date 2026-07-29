import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import "../styles/PremiumProductsH.css";

import teja from "../assets/images/teja-s17.png";
import sannam from "../assets/images/334-s4-sannam.png";
import byadagi from "../assets/images/byadagi.png";
import variety341 from "../assets/images/341-variety.png";
import dd from "../assets/images/dd.png";
import powder from "../assets/images/mild-chilli-powder.png";
import flakes from "../assets/images/chilli-flakes.png";

function PremiumProductsH() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [animateCards, setAnimateCards] = useState(false);

  const sectionRef = useRef(null);

  const products = [
  {
    id: 1,
    category: "Dry Chillies",
    badge: "DRY CHILLIES",
    image: teja,
    variety: "TEJA VARIETY",
    title: "Teja S17",
    tagline: "THE WORLD'S MOST EXPORTED INDIAN CHILLI",
    description:
      "India's leading export chilli, prized for intense heat, deep-red colour, and exceptional shelf life.",
    asta: "80–100",
    shu: "50,000+",
    moisture: "≤12%",
    heat: 5,
    heatLabel: "Extra Hot",
    tags: ["Export", "Spicy", "Intense"],
    origin: "Guntur, AP",
  },

  {
    id: 2,
    category: "Dry Chillies",
    badge: "DRY CHILLIES",
    image: byadagi,
    variety: "BYADAGI VARIETY",
    title: "Byadagi",
    tagline: "RECORD ASTA. DEEP CRIMSON. LOW HEAT.",
    description:
      "Karnataka's signature chilli, world-renowned for its extraordinary colour value and mild pungency.",
    asta: "150+",
    shu: "10,000+",
    moisture: "≤11%",
    heat: 2,
    heatLabel: "Mild",
    tags: ["Vibrant", "Gentle", "Paprika"],
    origin: "Byadagi, Karnataka",
  },

  {
    id: 3,
    category: "Dry Chillies",
    badge: "DRY CHILLIES",
    image: sannam,
    variety: "GUNTUR VARIETY",
    title: "Guntur Sannam",
    tagline: "BALANCED HEAT AND COLOR — THE ALL-ROUNDER",
    description:
      "The workhorse of Indian cuisine and the most widely used chilli variety in the subcontinent.",
    asta: "100–120",
    shu: "35,000+",
    moisture: "≤12%",
    heat: 4,
    heatLabel: "Very Hot",
    tags: ["Elite", "Balanced", "Versatile"],
    origin: "Guntur, AP",
  },

  {
    id: 4,
    category: "Dry Chillies",
    badge: "DRY CHILLIES",
    image: dd,
    variety: "PROCESSED VARIETY",
    title: "Devanur Delux",
    tagline: "CLEAN-PROCESSED FOR FOOD MANUFACTURERS",
    description:
      "Meticulously processed to remove all stems and seeds, leaving only uniform chilli skin with excellent consistency.",
    asta: "90+",
    shu: "40,000+",
    moisture: "≤11%",
    heat: 4,
    heatLabel: "Very Hot",
    tags: ["Refined", "Edible", "SSS Free"],
    origin: "Guntur, AP",
  },

  {
    id: 5,
    category: "Chilli Powder",
    badge: "CHILLI POWDER",
    image: powder,
    variety: "MILD POWDER",
    title: "Mild Chilli Powder",
    tagline: "RICH COLOR. GENTLE HEAT. MAXIMUM AROMA.",
    description:
      "Ground from select low-heat varieties, this powder delivers stunning deep-red colour and balanced flavour.",
    asta: "120+",
    shu: "5,000+",
    moisture: "≤10%",
    heat: 2,
    heatLabel: "Mild",
    tags: ["Mild", "High Color", "Powder"],
    origin: "Guntur, AP",
  },

  {
    id: 6,
    category: "Chilli Flakes",
    badge: "CHILLI FLAKES",
    image: flakes,
    variety: "COARSE CUT",
    title: "Crushed Chilli Flakes",
    tagline: "BOLD TEXTURE. PERFECT HEAT-TO-COLOR RATIO.",
    description:
      "Coarsely crushed for visual appeal and textural punch. Our chilli flakes are a staple for pizzas and seasoning.",
    asta: "80+",
    shu: "30,000+",
    moisture: "≤12%",
    heat: 4,
    heatLabel: "Very Hot",
    tags: ["Coarse", "Preferred", "Flakes"],
    origin: "Guntur, AP",
  },

  {
    id: 7,
    category: "Dry Chillies",
    badge: "DRY CHILLIES",
    image: variety341,
    variety: "341 VARIETY",
    title: "341 Variety",
    tagline: "EXCELLENT COLOUR WITH MEDIUM HEAT",
    description:
      "Popular export chilli with vibrant red colour, thin skin, and consistent processing quality.",
    asta: "90–100",
    shu: "25,000+",
    moisture: "≤12%",
    heat: 3,
    heatLabel: "Hot",
    tags: ["Export", "Light", "Processing"],
    origin: "Guntur, AP",
  },
];

  const filters = [
    "All",
    "Dry Chillies",
    "Chilli Powder",
    "Chilli Flakes",
  ];

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);

    setAnimateCards(false);

    setTimeout(() => {
      if (filter === "All") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((item) => item.category === filter)
        );
      }

      requestAnimationFrame(() => {
        setAnimateCards(true);
      });
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="premium" ref={sectionRef}>
      
      <div className="premium-container">
      <div className="premium-header">

        <div className="premium-left">
          <span className="premium-label">
            PREMIUM VARIETIES
          </span>

          <h2 className="premium-title">
            Premium Chilli
            <br />
            <span>Products</span>
          </h2>
        </div>

        <div className="premium-right">
          <p>
            Sourced from Guntur's finest farms,
            processed with precision,
            exported globally.
          </p>
        </div>

      </div>

      <div className="filter-buttons">

        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => handleFilter(filter)}
          >
            {filter}
          </button>
        ))}

      </div>

      <div className="product-grid">

        {filteredProducts.map((product, index) => (

          <div
            key={product.id}
            className={`product-item-wrap ${
              animateCards ? "is-visible" : ""
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <ProductCard
              product={product}
              index={index}
            />
          </div>

        ))}

      </div>
      </div>

    </section>
  );
}

export default PremiumProductsH;
