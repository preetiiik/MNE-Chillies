import "../styles/ComparisonSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

// Images

import teja from "../assets/images/teja-s17.jpeg";
import sannam from "../assets/images/334.jpeg";
import byadagi from "../assets/images/SYNGENTA.jpeg";
import variety341 from "../assets/images/341-DLX.jpeg";
import dd from "../assets/images/KURNOOL-DD.jpeg";
import powder from "../assets/images/mild-chilli-powder.png";
import flakes from "../assets/images/chilli-flakes.png";

export default function ComparisonSection() {

  const scrollRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const updateScrollProgress = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollable(maxScroll > 4); // hide the bar if there's nothing to scroll

    if (maxScroll <= 0) {
      setScrollPct(0);
      return;
    }

    setScrollPct((el.scrollLeft / maxScroll) * 100);
  };

  useEffect(() => {
    updateScrollProgress();

    const el = scrollRef.current;
    if (!el) return;

    // Table width can change (fonts loading, resize, orientation change),
    // so keep the thumb size accurate beyond just the initial mount.
    const resizeObserver = new ResizeObserver(updateScrollProgress);
    resizeObserver.observe(el);

    window.addEventListener("resize", updateScrollProgress);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
  // AOS.init({
  //   duration: 800,
  //   once: true,
  // });

  const handleLoad = () => {
    AOS.refresh();
    setTimeout(() => AOS.refreshHard(), 300);
  };

  if (document.readyState === 'complete') {
    handleLoad();
  } else {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }
}, []);

  const products = [
    {
      image: teja,
      name: "Teja S17 Dried Red Chilli",
      type: "Teja Variety",
      asta:"50–70",
      shu:"65k - 85k",
      moisture: "≤12%",
      heat: 5,
      best: ["Hot Sauces", "Spice Blends", "Asian Cuisine"],
    },

    {
      image: byadagi,
      name: "355 Byadgi (RALLIS) Dried Red Chilli",
      type: "355 Byadgi Variety",
      asta: "100–140",
      shu: "15,000–30,000",
      moisture: "≤12%",
      heat: 2,
      best: ["Natural Food Colour", "Masala Blends", "Pickles"],
    },

    {
      image: sannam,
      name: "334 / S4 / Sannam Dried Red Chilli",
      type: "334/S4 Sannam Variety",
      asta: "30–35",
      shu: "35,000–40,000",
      moisture: "≤12%",
      heat: 4,
      best: ["Masala Powders", "Pickles", "Restaurants"],
    },

    {
      image: variety341,
      name: "341 Dried Red Chilli",
      type: "341 Variety",
      asta: "90–140",
      shu: "25,000–50,000",
      moisture: "≤12%",
      heat: 3,
      best: ["Curry Powders", "Spice Blends", "Food Processing"],
    },

    {
      image: powder,
      name: "Mild Chilli Powder",
      type: "Powder",
      asta: "120+",
      shu: "5,000+",
      moisture: "≤ 10%",
      heat: 4,
      best: ["Seasoning", "Snacks"],
    },

    {
      image: flakes,
      name: "Crushed Chilli Flakes",
      type: "Flakes",
      asta: "80+",
      shu: "30,000+",
      moisture: "≤ 12%",
      heat: 2,
      best: ["Pizza", "Pasta"],
    },

    {
      image: dd,
      name: "Devanur Deluxe (DD) Dried Red Chilli",
      type: "Devanur Deluxe Variety",
      asta: "90–160",
      shu: "25,000–35,000",
      moisture: "≤12%",
      heat: 3,
      best: ["Masala Blends", "Premium Cuisine", "Food Processing"],
    },
  ];

  return (
    <section className="comparison-section">
      <div className="container">

      <div
        className="comparison-container"
        data-aos="fade-up"
      >

        <div className="comparison-heading">

          <span className="comparison-tag">

            <span className="comparison-line"></span>

            QUICK REFERENCE

          </span>

          <h2>Dry Chilli Comparison</h2>

        </div>

        <div
          className="comparison-table"
          ref={scrollRef}
          onScroll={updateScrollProgress}
        >

          {/* Header */}

          <div className="table-row table-head">

            <div>Variety</div>

            <div>ASTA COLOR</div>

            <div>SHU RANGE</div>

            <div>MOISTURE</div>

            <div>HEAT LEVEL</div>

            <div>BEST FOR</div>

          </div>

          {/* Rows */}

          {products.map((item, index) => (

            <div
              key={index}
              className="table-row"
              data-aos="fade-left"
              data-aos-delay={index * 80}
            >

              {/* Variety */}

              <div className="variety-col">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <p>{item.type}</p>

                </div>

              </div>

              {/* ASTA */}

              <div className="asta">

                {item.asta}

              </div>

              {/* SHU */}

              <div className="normal-text">

                {item.shu}

              </div>

              {/* Moisture */}

              <div className="normal-text">

                {item.moisture}

              </div>

              {/* Heat */}

              <div className="heat-bars">

                {[1, 2, 3, 4, 5].map((bar) => (

                  <span
                    key={bar}
                    className={
                      bar <= item.heat
                        ? "bar active"
                        : "bar"
                    }
                  ></span>

                ))}

              </div>

              {/* Best */}

              <div className="chip-group">

                {item.best.map((chip) => (

                  <span
                    key={chip}
                    className="chip"
                  >
                    {chip}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Custom scroll progress bar — replaces the native
            ::-webkit-scrollbar styling, which iOS Safari ignores. */}
        {scrollable && (
          <div className="comparison-scroll-track">
            <div
              className="comparison-scroll-thumb"
              style={{ "--thumb-left": `${scrollPct * 0.78}%` }}
            ></div>
          </div>
        )}

      </div>
      </div>

    </section>
  );
}