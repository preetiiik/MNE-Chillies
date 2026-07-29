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

// Tripled dataset lets the track slide continuously in either direction;
// the "middle" copy is the canonical one, and position snaps back into
// it (invisibly, mid-loop) once it drifts into a neighboring copy.
const TOTAL = testimonials.length;
const EXTENDED = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const [position, setPosition] = useState(TOTAL); // start at first "real" copy
  const [noTransition, setNoTransition] = useState(false);
  const [step, setStep] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const viewportRef = useRef(null);
  const slotRefs = useRef([]);
  const timerRef = useRef(null);

  const activeIndex = ((position % TOTAL) + TOTAL) % TOTAL;

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  function measure() {
    if (!viewportRef.current) return;
    const vw = viewportRef.current.offsetWidth;
    const s0 = slotRefs.current[0];
    const s1 = slotRefs.current[1];
    if (!s0 || !s1) return;
    setViewportWidth(vw);
    setStep(s1.offsetLeft - s0.offsetLeft);
  }

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      slideBy(1);
    }, ROTATE_MS);
  }

  function slideBy(delta) {
    setNoTransition(false);
    setPosition((p) => p + delta);
  }

  function goTo(i) {
    let delta = i - activeIndex;
    if (delta > TOTAL / 2) delta -= TOTAL;
    if (delta < -TOTAL / 2) delta += TOTAL;
    if (delta !== 0) slideBy(delta);
    startTimer();
  }

  // When the track has slid far enough to be sitting on a cloned copy,
  // snap it back into the canonical middle copy with no transition —
  // visually identical, so nobody sees the jump.
  function handleTransitionEnd() {
    if (position >= TOTAL * 2) {
      setNoTransition(true);
      setPosition((p) => p - TOTAL);
    } else if (position < TOTAL) {
      setNoTransition(true);
      setPosition((p) => p + TOTAL);
    }
  }

  useEffect(() => {
    if (noTransition) {
      const id = requestAnimationFrame(() => setNoTransition(false));
      return () => cancelAnimationFrame(id);
    }
  }, [noTransition]);

  const visibleCount = step ? Math.max(1, Math.round(viewportWidth / step)) : 1;
  const centerOffset = (visibleCount - 1) / 2;
  const translateX = step ? -((position - centerOffset) * step) : 0;

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

          <div className="testimonial-viewport" ref={viewportRef}>
            <div
              className={`testimonial-track${noTransition ? " no-transition" : ""}`}
              style={{ transform: `translateX(${translateX}px)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {EXTENDED.map((item, k) => {
                const offset = k - position;
                const slotClass =
                  offset === 0
                    ? "is-active"
                    : Math.abs(offset) === 1
                    ? "is-side"
                    : "is-far";
                return (
                  <div
                    className={`testimonial-slot ${slotClass}`}
                    key={k}
                    ref={(el) => (slotRefs.current[k] = el)}
                  >
                    <div className="testimonial-card">
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
                  </div>
                );
              })}
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot${i === activeIndex ? " active" : ""}`}
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