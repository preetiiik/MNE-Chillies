import { useState, useEffect, useRef } from "react";
import "../styles/TestimonialsH.css";


const testimonials = [
  {
    quote:
      "Been buying from them for almost two years now. What I like most is I don't have to double check every batch anymore, the moisture and color are pretty much the same every time.",
    name: "Rohit Sharma",
    initials: "RS",
    color: "#C0392B",
    rating: 5,
  },
  {
    quote:
      "Honestly wasn't expecting much when we switched suppliers, but the Teja S17 batch they sent completely changed how our sauce turns out. Good heat, great color, no complaints.",
    name: "Priya Nair",
    initials: "PN",
    color: "#D68910",
    rating: 4,
  },
  {
    quote:
      "Quality is good when it arrives, but we've had a couple of shipments get delayed at the port with barely any heads up. Works out fine in the end, just wish the updates were quicker.",
    name: "Arjun Mehta",
    initials: "AM",
    color: "#1E8449",
    rating: 3,
  },
  {
    quote:
      "Documentation is clean and lab reports come on time. Communication could be a little faster during peak season, but overall we haven't had a reason to look elsewhere.",
    name: "Ananya Iyer",
    initials: "AI",
    color: "#2874A6",
    rating: 4,
  },
  {
    quote:
      "Nothing fancy to say, they just deliver on time and the pricing has stayed fair even when the market got a bit volatile last year. That kind of consistency is hard to find.",
    name: "Karan Malhotra",
    initials: "KM",
    color: "#6C3483",
    rating: 5,
  },
  {
    quote:
      "Our rejection rate dropped after we started sourcing from them. Had one shipment last year that came in slightly off spec, but they sorted it out quickly and it hasn't happened since.",
    name: "Sneha Reddy",
    initials: "SR",
    color: "#B9770E",
    rating: 4,
  },
  {
    quote:
      "Every bag we get is traceable back to the farm, which made our last audit so much easier than usual. Our retail partners specifically noticed and appreciated that.",
    name: "Vikram Desai",
    initials: "VD",
    color: "#117864",
    rating: 5,
  },
  {
    quote:
      "Product itself is decent and priced fairly, but their email responses can take a couple of days sometimes, which is frustrating when we're trying to plan around a shipment.",
    name: "Neha Kapoor",
    initials: "NK",
    color: "#922B21",
    rating: 3,
  },
  {
    quote:
      "From the first sample to a full container order, they've kept us in the loop the whole way. A couple of times they flagged a quality concern before we even noticed it ourselves.",
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