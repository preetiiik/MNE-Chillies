import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import "../styles/PremiumProductsH.css";

// Existing Teja S17 asset already in the project — reused for the new
// "Teja (S17) Dried Red Chilli" entry since it is the correct variety image.
import teja from "../assets/images/teja-s17.webp";

// NEW client-provided images referenced in the brief.
// Place these files in src/assets/images/ using the exact names below
// (renamed to a safe, space-free format). If the original files still have
// spaces in their names (e.g. "341 DLX.jpeg"), rename them to match, or
// send them over and they'll be wired in directly.
import sannam334 from "../assets/images/334.jpeg";
import syngenta from "../assets/images/SYNGENTA.jpeg";
import chilli341dlx from "../assets/images/341-DLX.jpeg";
import kurnoolDD from "../assets/images/KURNOOL-DD.jpeg";

import powder from "../assets/images/mild-chilli-powder.webp";
import flakes from "../assets/images/chilli-flakes.webp";

function PremiumProductsH() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [animateCards, setAnimateCards] = useState(false);

  const sectionRef = useRef(null);

  const products = [
    {
      id: 1,
      category: "Dry Chillies",
      badge: "Hottest Variety",
      image: teja,
      variety: "TEJA (S17)",
      title: "Teja (S17) Dried Red Chilli",
      description:
        "One of the hottest chilli varieties, S17 Teja is widely grown in southern India and highly sought after by international buyers for its intense heat and rich red colour.",
      productDetails: {
        finishing: "Sun dried",
        appearance: "Bright Red, Thin Skin, Fiery Hot",
        packing: "Jute / PP Bag",
      },
      specifications: {
        colorValue: "50 – 70",
        pungency: "65k – 85k SHU",
        capsaicin: "0.589%",
      },
      types: [
        "Teja S17 With Stem",
        "Teja S17 Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
      heat: 5,
      heatLabel: "Fiery Hot",
      tags: [
        "Teja S17 With Stem",
        "Teja S17 Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
    },

    {
      id: 2,
      category: "Dry Chillies",
      badge: "Popular Export Variety",
      image: sannam334,
      variety: "334 / S4 / SANNAM",
      title: "334 / S4 / Sannam Dried Red Chilli",
      description:
        "Rich red, hot S4 Sannam chilli with thick skin, grown in Guntur, Khammam and Prakasam. Ideal for bold colour and flavour.",
      productDetails: {
        finishing: "Sun dried",
        appearance: "Bright Red, Thick Skin, Hot",
        packing: "Jute / PP Bag",
      },
      specifications: {
        colorValue: "30 – 35",
        pungency: "35k – 40k SHU",
        capsaicin: "0.226%",
      },
      types: [
        "334 S4 With Stem",
        "334 S4 Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
      heat: 3,
      heatLabel: "Hot",
      tags: [
        "334 S4 With Stem",
        "334 S4 Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
    },

    {
      id: 3,
      category: "Dry Chillies",
      badge: "High Color Value",
      image: syngenta,
      variety: "355 BYADGI (RALLIS)",
      title: "355 Byadgi (RALLIS) Dried Red Chilli",
      description:
        "High-demand worldwide, Byadgi is long, bright red, wrinkled, and mild. Widely used in cooking and natural colour extraction.",
      productDetails: {
        finishing: "Sun dried",
        appearance: "Bright Red, Thin Skin, Less Hot",
        packing: "Jute / PP Bag",
      },
      specifications: {
        colorValue: "100 – 140",
        pungency: "15k – 30k SHU",
        capsaicin: "0.226%",
      },
      types: [
        "Byadgi With Stem",
        "Byadgi Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
      heat: 2,
      heatLabel: "Less Hot",
      tags: [
        "Byadgi With Stem",
        "Byadgi Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
    },

    {
      id: 4,
      category: "Dry Chillies",
      badge: "Masala Industry Favourite",
      image: chilli341dlx,
      variety: "341",
      title: "341 Dried Red Chilli",
      description:
        "Dark red, semi-hot flavour. Grown in Guntur, Andhra Pradesh. Popular with masala and chilli powder companies. When crushed dark red, less spicy.",
      productDetails: {
        finishing: "Sun dried",
        appearance: "Dark Red, Thin Skin, Less Hot",
        packing: "Jute / PP Bag",
      },
      specifications: {
        colorValue: "90 – 140",
        pungency: "25k – 50k SHU",
        capsaicin: null,
      },
      types: [
        "341 With Stem",
        "341 Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
      heat: 3,
      heatLabel: "Less Hot",
      tags: [
        "341 With Stem",
        "341 Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
    },

    {
      id: 5,
      category: "Dry Chillies",
      badge: "Chilli Powder Favourite",
      image: kurnoolDD,
      variety: "DEVANUR DELUXE (DD)",
      title: "Devanur Deluxe Dried Red Chilli",
      description:
        "Dark red, semi-wrinkled and hot, Devanur Deluxe is grown in Kurnool, Telangana and Andhra Pradesh. Ideal for chilli powder, with fewer seeds.",
      productDetails: {
        finishing: "Sun dried",
        appearance: "Dark Red, Semi Wrinkled, Hot",
        packing: "Jute / PP Bag",
      },
      specifications: {
        colorValue: "90 – 160",
        pungency: "25k – 35k SHU",
        capsaicin: null,
      },
      types: [
        "DEVANUR DELUXE (DD) With Stem",
        "DEVANUR DELUXE (DD) Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
      heat: 3,
      heatLabel: "Hot",
      tags: [
        "DD With Stem",
        "DD Stemless",
        "Crushed Chilli Flakes",
        "Chilli Pepper Powder",
      ],
    },

    // ── Unchanged existing products ─────────────────────────────
    {
      id: 6,
      category: "Chilli Powder",
      badge: "CHILLI POWDER",
      image: powder,
      variety: "MILD POWDER",
      title: "Mild Chilli Powder",
      tagline: "RICH COLOR. GENTLE HEAT. MAXIMUM AROMA.",
      description:
        "Ground from carefully selected low-heat chilli varieties, this premium powder delivers a vibrant deep-red colour, balanced flavour, rich aroma, and consistent quality.",
      asta: "120+",
      shu: "5,000+",
      moisture: "≤10%",
      heat: 2,
      heatLabel: "Mild",
      tags: ["Mild", "High Color", "Powder", "Rich Aroma", "Seasoning"],
      origin: "Guntur, AP",
    },

    {
      id: 7,
      category: "Chilli Flakes",
      badge: "CHILLI FLAKES",
      image: flakes,
      variety: "COARSE CUT",
      title: "Crushed Chilli Flakes",
      tagline: "BOLD TEXTURE. PERFECT HEAT-TO-COLOR RATIO.",
      description:
        "Coarsely crushed for visual appeal and textural punch. Our chilli flakes are a staple for pizzas and seasoning. They offer a perfect balance of heat and color, making them ideal for culinary applications that demand both flavor and aesthetics.",
      asta: "80+",
      shu: "30,000+",
      moisture: "≤12%",
      heat: 4,
      heatLabel: "Very Hot",
      tags: ["Coarse", "Preferred", "Flakes"],
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
    // FIX: `threshold: 0.2` meant "fire when 20% of this section is on
    // screen". intersectionRatio is capped at viewportHeight / sectionHeight,
    // and this section (header + filters + stacked cards) is several
    // thousand px tall on a phone -- so 20% of it can never fit on screen at
    // once. The callback never ran, animateCards stayed false, and every card
    // sat at `opacity: 0` (the `.product-item-wrap` rule) until a filter click
    // set it manually. threshold: 0 fires as soon as one pixel is visible,
    // which is height-independent. The negative bottom rootMargin just keeps
    // the reveal feeling deliberate.
    if (typeof IntersectionObserver === "undefined") {
      setAnimateCards(true); // fail open: never leave the grid invisible
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -80px 0px",
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