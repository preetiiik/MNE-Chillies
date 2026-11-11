import { useState, useEffect, useRef } from "react";
import "../styles/TestimonialsH.css";


const testimonials = [
  {
    quote:
      "The colour, heat level, and moisture consistency of their red chillies have made our production planning much easier.",
    name: "Rohit Sharma",
    initials: "RS",
    color: "#C0392B",
    rating: 5,
  },
  {
    quote:
      "Their Teja S17 chillies offer the strong pungency and rich red colour we need for our spice blends.",
    name: "Priya Nair",
    initials: "PN",
    color: "#D68910",
    rating: 5,
  },
  {
    quote:
      "Clear grading, dependable packaging, and consistent product specifications make sourcing much more convenient.",
    name: "Arjun Mehta",
    initials: "AM",
    color: "#1E8449",
    rating: 4,
  },
  {
    quote:
      "Their attention to quality checks and export documentation gives us confidence with every shipment.",
    name: "Ananya Iyer",
    initials: "AI",
    color: "#2874A6",
    rating: 5,
  },
  {
    quote:
      "We value their transparent approach to sourcing and their commitment to maintaining quality across different batches.",
    name: "Karan Malhotra",
    initials: "KM",
    color: "#6C3483",
    rating: 5,
  },
  {
    quote:
      "The chillies arrive well packed, with the natural colour and aroma preserved. This is important for our processing requirements.",
    name: "Sneha Reddy",
    initials: "SR",
    color: "#B9770E",
    rating: 4,
  },
  {
    quote:
      "Reliable sourcing and clearly defined quality standards have helped us maintain consistency in our finished spice products.",
    name: "Vikram Desai",
    initials: "VD",
    color: "#117864",
    rating: 5,
  },
  {
    quote:
      "Their understanding of different chilli grades and heat requirements makes selecting the right product straightforward.",
    name: "Neha Kapoor",
    initials: "NK",
    color: "#922B21",
    rating: 4,
  },
  {
    quote:
      "From sample evaluation to bulk orders, their focus on product quality and clear communication has been valuable.",
    name: "Aditya Rao",
    initials: "AR",
    color: "#7D6608",
    rating: 5,
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
  function handleTransitionEnd(e) {
  if (e.target !== e.currentTarget) return; // ignore bubbled child transitions
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
              Trusted by National
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
                        <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                          {Array.from({ length: 5 }).map((_, s) => (
                            <span
                              key={s}
                              className={`star${s < item.rating ? " filled" : ""}`}
                            >
                              &#9733;
                            </span>
                          ))}
                        </div>
                        <p className="testimonial-text">{item.quote}</p>
                      </div>
                      <div className="testimonial-footer">
                        <div className="avatar" style={{ background: item.color }}>
                          {item.initials}
                        </div>
                        <div className="author-info">
                          <h4>{item.name}</h4>
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
