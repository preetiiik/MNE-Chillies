import { useNavigate } from "react-router-dom";

import "../styles/AllProducts.css";

import teja from "../assets/images/teja-s17.webp";
import sannam from "../assets/images/334-s4-sannam.webp";
import byadagi from "../assets/images/byadagi.webp";
import variety341 from "../assets/images/341-variety.webp";
import dd from "../assets/images/dd.webp";
import powder from "../assets/images/mild-chilli-powder.webp";
import flakes from "../assets/images/chilli-flakes.webp";

function AllProducts() {

    const navigate = useNavigate();

    const products = [

        {
            id:1,
            badge:"DRY CHILLIES",
            variety:"TEJA VARIETY",
            title:"Teja S17",
            subtitle:"World's most exported Indian chilli",
            description:
            "The undisputed king of export chillies. Extremely hot with brilliant deep-red colour and excellent shelf life. Widely used across Asian, Middle Eastern and Latin American markets.",
            image:teja,

            asta:"80–100",
            shu:"50,000+",
            moisture:"≤12%",

            heat:5,

            tags:[
                "Hot Sauces",
                "Spice Blends",
                "Asian Cuisine"
            ],

            origin:"Guntur, AP"
        },

        {
            id:2,

            badge:"DRY CHILLIES",

            variety:"355 BYADGI VARIETY",

            title:"355 Byadgi (RALLIS)",

            subtitle:"High colour. Low pungency.",

            description:
            "Famous for its exceptional colour value and mild heat. Preferred for food colouring, spice blends and premium masala manufacturing.",

            image:byadagi,

            asta:"100–140",

            shu:"15,000–30,000",

            moisture:"≤12%",

            heat:2,

            tags:[
                "Natural Food Colour",
                "Masala Blends",
                "Pickles"
            ],

            origin:"Karnataka"
        },

        {
            id:3,

            badge:"DRY CHILLIES",

            variety:"334/S4 SANNAM VARIETY",

            title:"334 / S4 / Sannam",

            subtitle:"Balanced heat with rich red colour",

            description:
            "One of India's most demanded export chillies offering vibrant colour, medium-high pungency and excellent processing quality for food manufacturers worldwide.",
            image:sannam,

            asta:"30–35",

            shu:"35,000–40,000",

            moisture:"≤12%",

            heat:4,

            tags:[
                "Masala Powders",
                "Pickles",
                "Restaurants"
            ],

            origin:"Guntur, AP"
        },

        {
            id:4,

            badge:"DRY CHILLIES",

            variety:"DEVANUR DELUXE VARIETY",

            title:"Devanur Deluxe (DD)",

            subtitle:"Dark red. Rich flavour. Premium export grade.",

            description:
            "Premium quality chilli with attractive dark-red appearance, excellent aroma and balanced pungency. Ideal for export markets and premium spice manufacturers.",

            image:dd,

            asta:"90–180",

            shu:"25,000–35,000",

            moisture:"≤12%",

            heat:3,

            tags:[
                "Masala Blends",
                "Premium Cuisine",
                "Food Processing"
            ],

            origin:"Kurnool"
        },

        {
            id:5,

            badge:"CHILLI POWDER",

            variety:"MILD POWDER",

            title:"Mild Chilli Powder",

            subtitle:"Rich color. Gentle heat. Maximum aroma.",

            description:
            "Ground from select low-heat varieties, this powder delivers stunning deep-red colour and balanced flavour.",

            image:powder,

            asta:"120+",

            shu:"5,000+",

            moisture:"≤10%",

            heat:2,

            tags:[
                "Mild",
                "High Color",
                "Powder"
            ],

            origin:"Guntur, AP"
        },

        {
            id:6,

            badge:"CHILLI FLAKES",

            variety:"COARSE CUT",

            title:"Crushed Chilli Flakes",

            subtitle:"Bold texture. Perfect heat-to-color ratio.",

            description:
            "Coarsely crushed for visual appeal and textural punch. Our chilli flakes are a staple for pizzas and seasoning.",

            image:flakes,

            asta:"80+",

            shu:"30,000+",

            moisture:"≤12%",

            heat:4,

            tags:[
                "Coarse Cut",
                "Chef's Choice",
                "Flakes"
            ],

            origin:"Guntur, AP"
        },

        {
            id:7,

            badge:"DRY CHILLIES",

            variety:"341 DLX VARIETY",

            title:"341 DLX",

            subtitle:"Excellent colour with medium heat",

            description:
            "Popular export chilli featuring attractive red colour, thin skin and consistent quality suitable for food processing industries.",

            image:variety341,

            asta:"90–100",

            shu:"25,000–50,000",

            moisture:"≤12%",

            heat:3,

            tags:[
                "Curry Powders",
                "Spice Blends",
                "Food Processing"
            ],

            origin:"Guntur, AP"
        }

    ];

    const handleEnquiry = () => {
        navigate("/contact");
    };

    return (

        <section className="all-products">
            <div className="container">

            <div
                className="all-products-header"
                data-aos="fade-up"
            >

                <div>

                    <span className="section-tag">
                        Full Range
                    </span>

                    <h2>
                        All Products
                    </h2>

                </div>

                <p>
                    7 products available across all categories.
                </p>

            </div>

            <div className="products-grid">

                {products.map((product,index)=>(

                    <div
                        key={product.id}
                        className="product-card"
                        data-aos="fade-up"
                        data-aos-delay={index*100}
                    >

                        <div className="product-image">

                            <span className="category-badge">
                                {product.badge}
                            </span>

                            <img
                                src={product.image}
                                alt={product.title}
                            />

                        </div>

                        <div className="card-content">

                            <span className="product-variety">
                                {product.variety}
                            </span>

                            <h3>
                                {product.title}
                            </h3>

                            <p className="subtitle">
                                {product.subtitle}
                            </p>

                            <p className="description">
                                {product.description}
                            </p>

                            <div className="specs">

                                <div>

                                    <strong>{product.asta}</strong>

                                    <span>ASTA</span>

                                </div>

                                <div>

                                    <strong>{product.shu}</strong>

                                    <span>SHU</span>

                                </div>

                                <div>

                                    <strong>{product.moisture}</strong>

                                    <span>H₂O</span>

                                </div>

                            </div>
                                                        <div className="heat-section">

                                <div className="heat-bars">

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

                                <span className="heat-label">

                                    {product.heat >= 5
                                        ? "Extra Hot"
                                        : product.heat >= 4
                                        ? "Very Hot"
                                        : product.heat >= 3
                                        ? "Hot"
                                        : product.heat >= 2
                                        ? "Mild"
                                        : "Low"}

                                </span>

                            </div>

                            <div className="product-tags">

                                {product.tags.map((tag,index)=>(
                                    <span
                                        key={index}
                                        className="tag"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            <div className="card-footer">

                                <p>

                                    Origin:

                                    <strong>
                                        {" "}
                                        {product.origin}
                                    </strong>

                                </p>

                                <button
                                    className="enquire-btn"
                                    onClick={handleEnquiry}
                                >
                                    Enquire

                                    <span>→</span>

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>
            </div>
        </section>

    );
}

export default AllProducts;