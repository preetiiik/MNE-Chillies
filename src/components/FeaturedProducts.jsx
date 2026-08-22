import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/FeaturedProducts.css";
import AOS from "aos";
import "aos/dist/aos.css";

import teja from "../assets/images/teja-s17.jpeg";
import sannam from "../assets/images/334.jpeg";
import byadagi from "../assets/images/SYNGENTA.jpeg";
import variety341 from "../assets/images/341-DLX.jpeg";
import dd from "../assets/images/KURNOOL-DD.jpeg";
import powder from "../assets/images/mild-chilli-powder.png";
import flakes from "../assets/images/chilli-flakes.png";

function FeaturedProducts({
  activeFilter,
  setActiveFilter,
}){
    
    // const [activeFilter, setActiveFilter] = useState("All");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const scrollToContact = () => {
    navigate("/contact");
};

    // Allow links like /products?category=Dry%20Chillies&product=3 to
    // preselect a filter and scroll straight to that specific product card
    // (falling back to just the section top when no product id is given).
    useEffect(() => {
        const categoryFromUrl = searchParams.get("category");
        const productIdFromUrl = searchParams.get("product");

        if (
            categoryFromUrl &&
            ["All", "Dry Chillies", "Chilli Powder", "Chilli Flakes"].includes(
                categoryFromUrl
            )
        ) {
            setActiveFilter(categoryFromUrl);
        }

        if (categoryFromUrl || productIdFromUrl) {
            // Wait for the (possibly just-filtered) cards to render before
            // scrolling, otherwise scrollIntoView can undershoot on a tall
            // hero/banner page or target a card that isn't mounted yet.
            const targetId = productIdFromUrl
                ? `product-${productIdFromUrl}`
                : "featured-products";

            setTimeout(() => {
                document
                    .getElementById(targetId)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }, [searchParams]);

    const products = [

        {
            id: 1,

            category: "Dry Chillies",

            badge: "BEST SELLER",

            image: teja,

            location: "TEJA VARIETY • GUNTUR, AP",

            title: "Teja S17 Dried Red Chilli",

            subtitle: "World's most exported Indian chilli",

            description:
                "One of the hottest varieties available. Bright red with thin skin. Predominantly grown in southern India. Widely known as S17 Teja — popular for international buyers. Exported stemless, with stem, and as powder. Perfect for soups, stir fry, stews and blends.",

            heat: 5,

            specs: [
                "ASTA 50-70",
                "SHU 65k-85k",
                "Capsaicin 0.589%",
                "H₂O ≤12%"
            ],

            uses: [
                "Hot sauces",
                "Spice blends",
                "Asian cuisine"
            ],

            types: [
                "Teja S17 With Stem",
                "Teja S17 Stemless",
                "Crushed Chilli Flakes",
                "Chilli Pepper Powder"
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

            title: "334 / S4 / Sannam Dried Red Chilli",

            subtitle: "Balanced heat with rich red colour",

            description:
                "Rich red color and hot flavour. Grown in Guntur, Khammam and Prakasam districts. S4 Sannam skin is thick and red. When crushed — thick, red and hot. Rich in Vitamin C and Protein.",
            heat: 4,

            specs: [
                "ASTA 30-35",
                "SHU 35k-40k",
                "Capsaicin 0.226%",
                "H₂O ≤12%"
            ],

            uses: [
                "Masala powders",
                "Pickles",
                "Restaurants"
            ],

            types: [
                "334 S4 With Stem",
                "334 S4 Stemless",
                "Crushed Chilli Flakes",
                "Chilli Pepper Powder"
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

            location: "355 BYADGI (RALLIS) • KARNATAKA",

            title: "355 Byadgi (RALLIS) Dried Red Chilli",

            subtitle: "High colour. Low pungency.",

            description:
                "Full demand worldwide. Grown in Guntur, Kurnool, Prakasam and Karnataka. Sub-varieties: Byadagi 355, 668, Syngenta, Kaddi, Dabbi. Physically longer, brighter red, thin skin, wrinkled and mild. Used in cuisines and colour extraction industries.",
            heat: 2,

            specs: [
                "ASTA 100-140",
                "SHU 15k-30k",
                "Capsaicin 0.226%",
                "H₂O ≤12%"
            ],

            uses: [
                "Natural food colour",
                "Masala blends",
                "Pickles"
            ],

            types: [
                "Byadgi With Stem",
                "Byadgi Stemless",
                "Crushed Chilli Flakes",
                "Chilli Pepper Powder"
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

            location: "341 • GUNTUR",

            title: "341 Dried Red Chilli",

            subtitle: "Excellent colour with medium heat",

            description:
                "Dark red, thin skin, semi-hot flavour. Grown in Guntur, Andhra Pradesh. Popular with masala and chilli powder companies. When crushed — dark red, less spicy.",

            heat: 3,

            specs: [
                "ASTA 90-140",
                "SHU 25k-50k",
                "H₂O ≤12%"
            ],

            uses: [
                "Curry powders",
                "Spice blends",
                "Food processing"
            ],

            types: [
                "341 With Stem",
                "341 Stemless",
                "Crushed Chilli Flakes",
                "Chilli Pepper Powder"
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

            location: "DEVANUR DELUXE (DD) • KURNOOL",

            title: "Devanur Deluxe (DD) Dried Red Chilli",

            subtitle: "Dark red. Rich flavour. Premium export grade.",

            description:
                "Dark red, semi-wrinkled, longer, hot. Grown in Kurnool, Telangana and Andhra Pradesh. Popular for chilli powder. When crushed — thick, red, hot. Fewer seeds than other varieties.",
            heat: 3,

            specs: [
                "ASTA 90-160",
                "SHU 25k-35k",
                "H₂O ≤12%"
            ],

            uses: [
                "Masala blends",
                "Premium cuisine",
                "Food processing"
            ],

            types: [
                "Devanur Deluxe (DD) With Stem",
                "Devanur Deluxe (DD) Stemless",
                "Crushed Chilli Flakes",
                "Chilli Pepper Powder"
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

            heat: 4,

            specs: [
                "ASTA 120+",
                "SHU 5k+",
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

            title: "Crushed Chilli Flakes",

            subtitle: "Perfect texture. Rich aroma.",

            description:
                "Uniform crushed chilli flakes made from premium quality dried chillies. Widely used for pizzas, pasta, snacks and seasoning blends.",

            heat: 2,

            specs: [
                "ASTA 80+",
                "SHU 30k+",
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
    const filters = [
  "All",
  "Dry Chillies",
  "Chilli Powder",
  "Chilli Flakes",
];

    const filteredProducts =
        activeFilter === "All"
            ? products
            : products.filter(
                  (product) => product.category === activeFilter
              );

    // Filtering changes how many cards render, which changes this
    // section's height. AOS caches every data-aos element's trigger
    // offset based on page height at load time, so without a refresh
    // here, everything below (AllProducts, Comparison, Quality) keeps
    // the stale offsets from the previous filter and never fires.
    useEffect(() => {
        // Wait a frame so the new card list has actually painted
        // before AOS recalculates offsets against it.
        const id = requestAnimationFrame(() => {
            AOS.refreshHard();
        });
        return () => cancelAnimationFrame(id);
    }, [activeFilter]);

    return (

        <section className="fp-section" id="featured-products">
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

                        {filters.map((filter) => (

                            <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={activeFilter === filter ? "active" : ""}
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
                            id={`product-${product.id}`}
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
                                {product.category === "Dry Chillies" && (

                                    <div className="fp-block">
                                        <h5>Finishing</h5>
                                        <div className="fp-chip-container">
                                            <span className="fp-chip">Sun Dried</span>
                                            {/* <span className="fp-chip">Machine Dried</span> */}
                                        </div>
                                    </div>

                                )}

                                {product.types && (

                                    <div className="fp-block">

                                        <h5>TYPES AVAILABLE</h5>

                                        <div className="fp-chip-container">

                                            {product.types.map(
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

                                )}

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