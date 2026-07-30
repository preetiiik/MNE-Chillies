
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FeaturedProducts.css";
import AOS from "aos";
import "aos/dist/aos.css";

import teja from "../assets/images/teja-s17.webp";
import sannam from "../assets/images/334-s4-sannam.webp";
import byadagi from "../assets/images/byadagi.webp";
import variety341 from "../assets/images/341-variety.webp";
import dd from "../assets/images/dd.webp";
import powder from "../assets/images/mild-chilli-powder.webp";
import flakes from "../assets/images/chilli-flakes.webp";

function FeaturedProducts() {
    
    const [activeFilter, setActiveFilter] = useState("All");
    const navigate = useNavigate();
    const scrollToContact = () => {
    navigate("/contact");
};

    const products = [

        {
            id: 1,

            category: "Dry Chillies",

            badge: "BEST SELLER",

            image: teja,

            location: "TEJA VARIETY • GUNTUR, AP",

            title: "Teja S17",

            subtitle: "World's most exported Indian chilli",

            description:
                "The undisputed king of export chillies. Extremely hot with brilliant deep-red colour and excellent shelf life. Widely used across Asian, Middle Eastern and Latin American markets.",

            heat: 5,

            specs: [
                "ASTA 80-100",
                "SHU 50,000+",
                "H₂O ≤12%"
            ],

            uses: [
                "Hot sauces",
                "Spice blends",
                "Asian cuisine"
            ],

            packing: [
                "25 kg PP Bags",
                "50 kg Jute Bags",
                "Vacuum Packed"
            ]
        },

        {
            id: 2,

            category: "Dry Chillies",

            badge: "EXPORT QUALITY",

            image: sannam,

            location: "334 S4/SANNAM • GUNTUR, AP",

            title: "334 S4 / Sannam",

            subtitle: "Balanced heat with rich red colour",

            description:
                "One of India's most demanded export chillies offering vibrant colour, medium-high pungency and excellent processing quality for food manufacturers worldwide.",

            heat: 4,

            specs: [
                "ASTA 30-35",
                "SHU 35k-40k",
                "H₂O ≤12%"
            ],

            uses: [
                "Masala powders",
                "Pickles",
                "Restaurants"
            ],

            packing: [
                "25 kg PP Bags",
                "Jute Bags",
                "Vacuum Packed"
            ]
        },

        {
            id: 3,

            category: "Dry Chillies",

            badge: "GLOBAL DEMAND",

            image: byadagi,

            location: "byadagi • KARNATAKA",

            title: "byadagi",

            subtitle: "High colour. Low pungency.",

            description:
                "Famous for its exceptional colour value and mild heat. Preferred for food colouring, spice blends and premium masala manufacturing.",

            heat: 2,

            specs: [
                "ASTA 100-140",
                "SHU 15k-30k",
                "H₂O ≤12%"
            ],

            uses: [
                "Natural food colour",
                "Masala blends",
                "Pickles"
            ],

            packing: [
                "25 kg PP Bags",
                "50 kg Jute Bags",
                "Vacuum Packed"
            ]
        },

        {
            id: 4,

            category: "Dry Chillies",

            badge: "EXPORT GRADE",

            image: variety341,

            location: "341 VARIETY • GUNTUR",

            title: "341 Variety",

            subtitle: "Excellent colour with medium heat",

            description:
                "Popular export chilli featuring attractive red colour, thin skin and consistent quality suitable for food processing industries.",

            heat: 3,

            specs: [
                "ASTA 90-100",
                "SHU 25k-50k",
                "H₂O ≤12%"
            ],

            uses: [
                "Curry powders",
                "Spice blends",
                "Food processing"
            ],

            packing: [
                "25 kg PP Bags",
                "50 kg Jute Bags",
                "Vacuum Packed"
            ]
        },
                {
            id: 5,

            category: "Dry Chillies",

            badge: "PREMIUM EXPORT",

            image: dd,

            location: "DEVANUR DELUXE • KARNATAKA",

            title: "Devanur Deluxe (DD)",

            subtitle: "Dark red. Rich flavour. Premium export grade.",

            description:
                "Premium quality chilli with attractive dark-red appearance, excellent aroma and balanced pungency. Ideal for export markets and premium spice manufacturers.",

            heat: 3,

            specs: [
                "ASTA 90-180",
                "SHU 25k-35k",
                "H₂O ≤12%"
            ],

            uses: [
                "Masala blends",
                "Premium cuisine",
                "Food processing"
            ],

            packing: [
                "25 kg PP Bags",
                "50 kg Jute Bags",
                "Vacuum Packed"
            ]
        },

        {
            id: 6,

            category: "Chilli Powder",

            badge: "FINE GROUND",

            image: powder,

            location: "GROUND CHILLI",

            title: "Mild Chilli Powder",

            subtitle: "Bright colour. Mild pungency.",

            description:
                "Prepared from carefully selected chillies to deliver uniform colour, flavour and texture for restaurants, food industries and spice brands.",

            heat: 2,

            specs: [
                "ASTA 100-120",
                "SHU 5k-10k",
                "H₂O ≤10%"
            ],

            uses: [
                "Curries",
                "Seasoning",
                "Restaurants"
            ],

            packing: [
                "1 kg",
                "5 kg",
                "25 kg"
            ]
        },

        {
            id: 7,

            category: "Chilli Flakes",

            badge: "FOOD SERVICE",

            image: flakes,

            location: "CRUSHED CHILLI",

            title: "Premium Chilli Flakes",

            subtitle: "Perfect texture. Rich aroma.",

            description:
                "Uniform crushed chilli flakes made from premium quality dried chillies. Widely used for pizzas, pasta, snacks and seasoning blends.",

            heat: 3,

            specs: [
                "2-5 mm",
                "SHU 20k-35k",
                "H₂O ≤10%"
            ],

            uses: [
                "Pizza",
                "Pasta",
                "Fast Food"
            ],

            packing: [
                "500 g",
                "5 kg",
                "20 kg"
            ]
        }

    ];

    const filteredProducts =
        activeFilter === "All"
            ? products
            : products.filter(
                  (product) => product.category === activeFilter
              );

    return (

        <section className="fp-section">
            <div className="container">

            <div className="fp-container">

                <div className="fp-header">

                    <div>

                        <span className="fp-tag">
                            Featured Products
                        </span>

                        <h2 className="fp-title">
                            Premium Chillies
                        </h2>

                    </div>

                    <div className="fp-filters">

                        {[
                            "All",
                            "Dry Chillies",
                            "Chilli Powder",
                            "Chilli Flakes",
                        ].map((filter) => (

                            <button
                                key={filter}
                                onClick={() =>
                                    setActiveFilter(filter)
                                }
                                className={
                                    activeFilter === filter
                                        ? "active"
                                        : ""
                                }
                            >
                                {filter}
                            </button>

                        ))}

                    </div>

                </div>

                <div className="fp-cards">

                    {filteredProducts.map((product, index) => (

                        <div
                            key={product.id}
                            className={`fp-card ${
                                index % 2 !== 0
                                    ? "reverse"
                                    : ""
                            }`}
                        >

                            <div className="fp-image">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                />

                                <span className="fp-badge">
                                    {product.badge}
                                </span>

                                <div className="fp-specs">

                                    {product.specs.map(
                                        (spec, i) => (
                                            <span key={i}>
                                                {spec}
                                            </span>
                                        )
                                    )}

                                </div>

                            </div>

                            <div className="fp-content">

                                <p className="fp-location">
                                    {product.location}
                                </p>

                                <h3 className="fp-product-title">
                                    {product.title}
                                </h3>

                                <p className="fp-subtitle">
                                    {product.subtitle}
                                </p>

                                <p className="fp-description">
                                    {product.description}
                                </p>

                                <div className="fp-heat">

                                    <span className="fp-heat-label">
                                        Heat Level
                                    </span>

                                    <div className="fp-bars">

                                        {[1,2,3,4,5].map((bar)=>(
                                            <span
                                                key={bar}
                                                className={
                                                    bar <= product.heat
                                                        ? "active"
                                                        : ""
                                                }
                                            ></span>
                                        ))}

                                    </div>

                                </div>

                                <div className="fp-block">

                                    <h5>COMMON USES</h5>

                                    <div className="fp-chip-container">

                                        {product.uses.map(
                                            (item, i) => (
                                                <span
                                                    key={i}
                                                    className="fp-chip"
                                                >
                                                    {item}
                                                </span>
                                            )
                                        )}

                                    </div>

                                </div>

                                <div className="fp-block">

                                    <h5>PACKING OPTIONS</h5>

                                    <div className="fp-chip-container">

                                        {product.packing.map(
                                            (item, i) => (
                                                <span
                                                    key={i}
                                                    className="fp-pack"
                                                >
                                                    {item}
                                                </span>
                                            )
                                        )}

                                    </div>

                                </div>

                                <div className="fp-buttons">

                                    <button
                                        className="fp-primary-btn"
                                        onClick={
                                            scrollToContact
                                        }
                                    >
                                        Request Quote
                                    </button>

{/* <a (when cliet gives the certificate)
  href="/coa/teja-s17-coa.pdf"
  download
  className="fp-secondary-btn"
>
  Download COA
</a> */}
                                    <button
                                        className="fp-secondary-btn"
                                        disabled
                                    >
                                        Download COA
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
            </div>

        </section>

    );

}

export default FeaturedProducts;