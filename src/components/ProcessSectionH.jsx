import { useEffect, useRef } from "react";
import "../styles/ProcessSectionH.css";

const processSteps = [
  {
    number: "01",
    title: "Farm Sourcing",
    description:
      "Directly from 500+ verified farmers in Guntur, Byadagi, and Khammam.",
  },
  {
    number: "02",
    title: "Quality Sorting",
    description:
      "Machine and manual sorting to eliminate defects, ensuring uniformity.",
  },
  {
    number: "03",
    title: "Steam Sterilization",
    description:
      "CMF processing with steam sterilization — zero artificial additives.",
  },
  {
    number: "04",
    title: "Lab Testing",
    description:
      "ASTA color, SHU pungency, and moisture tested on every single batch.",
  },
  {
    number: "05",
    title: "Export Packaging",
    description:
      "Custom-sealed in jute, PP, or vacuum packs — ready for global shipping.",
  },
];

// Where clicking a step should take the user.
const SERVICES_SELECTOR = "#services, .services-section";

function goToServices() {
  const target = document.querySelector(SERVICES_SELECTOR);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function ProcessSection() {
  const gridRef = useRef(null);
  const circleRefs = useRef([]);
  const lineRef = useRef(null);

  circleRefs.current = [];
  const registerCircle = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  // Draw the connecting line from the center of the first step circle to
  // the center of the last one (horizontal on desktop, vertical on mobile),
  // and fill it in as the section scrolls through the viewport — so it
  // visibly animates top-to-bottom (or left-to-right) as the user scrolls,
  // rather than just popping on once.
  useEffect(() => {
    const measureAndDraw = () => {
      const grid = gridRef.current;
      const line = lineRef.current;
      const circles = circleRefs.current;

      if (!grid || !line || circles.length < 2) return;

      const gridRect = grid.getBoundingClientRect();
      const first = circles[0].getBoundingClientRect();
      const last = circles[circles.length - 1].getBoundingClientRect();

      const x1 = first.left + first.width / 2 - gridRect.left;
      const y1 = first.top + first.height / 2 - gridRect.top;
      const x2 = last.left + last.width / 2 - gridRect.left;
      const y2 = last.top + last.height / 2 - gridRect.top;

      const isHorizontal = Math.abs(x2 - x1) >= Math.abs(y2 - y1);

      if (isHorizontal) {
        line.style.left = `${x1}px`;
        line.style.top = `${y1 - 1.5}px`;
        line.style.width = `${x2 - x1}px`;
        line.style.height = "3px";
        line.style.transformOrigin = "left center";
      } else {
        line.style.left = `${x1 - 1.5}px`;
        line.style.top = `${y1}px`;
        line.style.width = "3px";
        line.style.height = `${y2 - y1}px`;
        line.style.transformOrigin = "top center";
      }

      // Scroll progress through the section: 0 when the grid is just
      // entering the bottom of the viewport, 1 once it has fully passed
      // the top. Recomputed on every scroll tick, so it also un-draws
      // smoothly if the user scrolls back up.
      const viewportHeight = window.innerHeight;
      const total = gridRect.height + viewportHeight;
      let progress = total > 0 ? (viewportHeight - gridRect.top) / total : 0;
      progress = Math.min(1, Math.max(0, progress));

      line.style.transform = isHorizontal
        ? `scaleX(${progress})`
        : `scaleY(${progress})`;
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        measureAndDraw();
        ticking = false;
      });
    };

    measureAndDraw();
    // Re-measure once fonts/images settle, in case sizes shift slightly.
    const settleTimeout = setTimeout(measureAndDraw, 300);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("orientationchange", onScrollOrResize);

    return () => {
      clearTimeout(settleTimeout);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("orientationchange", onScrollOrResize);
    };
  }, []);

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToServices();
    }
  };

  return (
    <section className="process-section" data-aos="fade-right">
      <div className="container">
        <div className="process-container">
          <div className="process-heading">
            <span className="process-label">OUR PROCESS</span>

            <h2>
              From Farm to
              <br />
              Your Doorstep
            </h2>
          </div>

          <div className="process-grid" ref={gridRef}>
            <span ref={lineRef} className="process-line" aria-hidden="true" />

            {processSteps.map((step) => (
              <div
                className="process-card"
                key={step.number}
                role="button"
                tabIndex={0}
                onClick={goToServices}
                onKeyDown={handleCardKeyDown}
                aria-label={`${step.title} — go to Services`}
              >
                <div className="process-circle" ref={registerCircle}>
                  {step.number}
                </div>

                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}