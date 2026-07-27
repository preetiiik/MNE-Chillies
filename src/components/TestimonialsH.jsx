import { useState, useEffect, useRef } from "react";
import "../styles/TestimonialsH.css";


const testimonials = [
  {
    quote:
      "Consistent ASTA values, reliable moisture levels, and always on-time delivery. They've become our go-to supplier for all chilli imports.",
    name: "Takashi Yamamoto",
    role: "Head of Procurement · Spice World Japan",
    initials: "TY",
    color: "#C0392B",
  },
  {
    quote:
      "The Teja S17 variety we source from them has transformed our hot sauce line. Color is extraordinary, heat is consistent batch after batch.",
    name: "Maria Gonzalez",
    role: "Product Development Lead · Fuego Foods, Mexico",
    initials: "MG",
    color: "#D68910",
  },
  {
    quote:
      "We've worked with dozens of Indian exporters. These guys are the only ones who actually deliver what the COA says. Remarkable quality control.",
    name: "James Thornton",
    role: "Import Director · British Spice Co., UK",
    initials: "JT",
    color: "#1E8449",
  },
  {
    quote:
      "Every shipment arrives exactly as certified. Their lab reports are thorough and the team is responsive whenever we have questions.",
    name: "Sofia Rossi",
    role: "Head of Sourcing · Bella Cucina, Italy",
    initials: "SR",
    color: "#2874A6",
  },
  {
    quote:
      "Reliable partner for our seasoning line. Pricing is fair, quality is consistent, and they've never missed a delivery window in three years.",
    name: "Ahmed Al-Farsi",
    role: "Procurement Manager · Gulf Spice Trading, UAE",
    initials: "AA",
    color: "#6C3483",
  },
  {
    quote:
      "Switching to them cut our rejection rate to almost zero. The Sannam variety they supply has become the backbone of our paprika blends.",
    name: "Lukas Bauer",
    role: "Quality Assurance Lead · Wurzig GmbH, Germany",
    initials: "LB",
    color: "#B9770E",
  },
  {
    quote:
      "Their traceability documentation makes our audits painless. Every bag is tagged back to the farm, which our retailers really value.",
    name: "Grace Okafor",
    role: "Supply Chain Manager · Savanna Foods, Nigeria",
    initials: "GO",
    color: "#117864",
  },
  {
    quote:
      "We tested five suppliers before settling on them. Best balance of color value, pungency, and consistent pricing we've found in the market.",
    name: "Wei Chen",
    role: "Purchasing Director · Golden Wok Foods, Singapore",
    initials: "WC",
    color: "#922B21",
  },
  {
    quote:
      "From sample to full container, communication has been excellent. They flag quality issues before we even see them on our end.",
    name: "Isabella Martinez",
    role: "Operations Head · Condimentos del Sur, Argentina",
    initials: "IM",
    color: "#7D6608",
  },
];

const ROTATE_MS = 4000;
const FADE_MS = 350;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      changeTo((prev) => (prev + 1) % testimonials.length);
    }, ROTATE_MS);
  }

  function changeTo(next) {
    setVisible(false);
    setTimeout(() => {
      setIndex((prev) => (typeof next === "function" ? next(prev) : next));
      setVisible(true);
    }, FADE_MS);
  }

  function goTo(i) {
    changeTo(i);
    startTimer();
  }

  const total = testimonials.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;
  const t = testimonials[index];
  const prevT = testimonials[prevIndex];
  const nextT = testimonials[nextIndex];

  function renderCard(item, extraClass) {
    return (

      <div className={`testimonial-card ${extraClass}`}>
        <div>
          <div className="quote-mark">&#8221;</div>
          <p className="testimonial-text">{item.quote}</p>
        </div>
        <div className="testimonial-footer">
          <div className="avatar" style={{ background: item.color }}>
            {item.initials}
          </div>
          <div className="author-info">
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <span className="section-label">Testimonials</span>
          <h2>
            Trusted by Global
            <br />
            Food Brands
          </h2>
        </div>

        <div className="testimonial-row">
          <div
            className="testimonial-side"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {renderCard(prevT, "is-side")}
          </div>

          <div
            className="testimonial-center"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {renderCard(t, "is-active")}
          </div>

          <div
            className="testimonial-side"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {renderCard(nextT, "is-side")}
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === index ? " active" : ""}`}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
