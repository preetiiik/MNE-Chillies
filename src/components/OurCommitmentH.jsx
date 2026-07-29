import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/OurcommitmentHome.css";

function useCountUp(target, duration, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return value;
}

function Commitment() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // count up once, never replay
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const farmSourcing = useCountUp(100, 1500, inView);
  const farmToPack = useCountUp(72, 1500, inView);

  return (
    <section className="commitment" data-aos="fade-right" ref={sectionRef}>
      <div className="container">

      <div className="overlay"></div>

      <div className="commitment-content">

        <p className="commitment-label">
          OUR COMMITMENT
        </p>

        <h2 className="commitment-title">
          Empowering
          <br />
          Farmers,
          <br />
          Delivering
          <br />
          Excellence
        </h2>

        <p className="commitment-desc">
          We work directly with over 500 farmers across Guntur and Byadagi —
          ensuring fair prices, sustainable farming, and quality at every step.
          From first harvest to final shipment, we stand for authenticity and
          trust.
        </p>

        <div className="commitment-stats">

          <div className="commit-stat">
            <h3>{farmSourcing}%</h3>
            <p>Direct Farm Sourcing</p>
          </div>

          <div className="divider"></div>

          <div className="commit-stat">
            <h3>Zero</h3>
            <p>Artificial Additives</p>
          </div>

          <div className="divider"></div>

          <div className="commit-stat">
            <h3>{farmToPack}hr</h3>
            <p>From Farm to Pack</p>
          </div>

        </div>

        <div className="commit-buttons">

          <button
            className="learn-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

          <button
            className="farmers-btn"
            onClick={() => navigate("/contact")}
          >
            Meet Our Farmers
          </button>

        </div>

      </div>
      </div>

    </section>
  );
}

export default Commitment;