import { useNavigate } from "react-router-dom";

import "../styles/AllProducts.css";

import teja from "../assets/images/teja-s17.jpeg";
import sannam from "../assets/images/334.jpeg";
import byadagi from "../assets/images/SYNGENTA.jpeg";
import variety341 from "../assets/images/341-DLX.jpeg";
import dd from "../assets/images/KURNOOL-DD.jpeg";
import powder from "../assets/images/mild-chilli-powder.png";
import flakes from "../assets/images/chilli-flakes.png";

function AllProducts() {

    const navigate = useNavigate();

    const products = [

        {
            id:1,
            badge:"DRY CHILLIES",
            variety:"TEJA VARIETY",
            title:"Teja S17 Dried Red Chilli",
            subtitle:"World's most exported Indian chilli",
            description:
            "One of the hottest varieties available. Predominantly grown in southern India. Widely known as S17 Teja — popular for international buyers. Exported stemless, with stem, and as powder. Perfect for soups, stir fry, stews and blends.",
            image:teja,

            asta:"50–70",
            shu:"65k - 85k",
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

            title:"355 Byadgi (RALLIS) Dried Red Chilli",

            subtitle:"High colour. Low pungency.",

            description:
            "Full demand worldwide. Grown in Guntur, Kurnool, Prakasam and Karnataka. Sub-varieties: Byadagi 355, 668, Syngenta, Kaddi, Dabbi. Physically longer, brighter red, wrinkled and mild. Used in cuisines and colour extraction industries.",

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

            title:"334 / S4 / Sannam Dried Red Chilli",

            subtitle:"Balanced heat with rich red colour",

            description:
            "Rich red color and hot flavour. Grown in Guntur, Khammam and Prakasam districts. S4 Sannam skin is thick and red. When crushed — thick, red and hot. Rich in Vitamin C and Protein.",
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

            title:"Devanur Deluxe (DD) Dried Red Chilli",

            subtitle:"Dark red. Rich flavour. Premium export grade.",

            description:
            "Dark red, semi-wrinkled, longer, hot. Grown in Kurnool, Telangana and Andhra Pradesh. Popular for chilli powder. When crushed — thick, red, hot. Fewer seeds than other varieties.",

            image:dd,

            asta:"90–160",

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
            "Ground from carefully selected low-heat chilli varieties, this powder delivers a stunning deep-red colour with a smooth, balanced flavour. Perfect for adding vibrant colour, rich aroma, and mild warmth to curries, gravies, marinades, and everyday dishes.",

            image:powder,

            asta:"120+",

            shu:"5,000+",

            moisture:"≤10%",

            heat:4,

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
            "Coarsely crushed for bold visual appeal and a satisfying textural punch, our chilli flakes are perfect for adding heat, colour, and flavour to every bite. A versatile kitchen staple, they’re ideal for pizzas, pastas, salads, snacks, marinades, and everyday seasoning.",

            image:flakes,

            asta:"80+",

            shu:"30,000+",

            moisture:"≤12%",

            heat:2,

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

            variety:"341 VARIETY",

            title:"341 Dried Red Chilli",

            subtitle:"Excellent colour with medium heat",

            description:
            "Dark red, semi-hot flavour. Grown in Guntur, Andhra Pradesh. Popular with masala and chilli powder companies. When crushed — dark red, less spicy.",

            image:variety341,

            asta:"90–140",

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