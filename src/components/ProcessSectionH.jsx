import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

export default function ProcessSection() {
  const navigate = useNavigate();

  const gridRef = useRef(null);
  const circleRefs = useRef([]);
  const lineRef = useRef(null);

  circleRefs.current = [];

  const registerCircle = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  const goToServices = () => {
    navigate("/services");
  };

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

      const triggerPoint = window.innerHeight * 0.75;

      if (gridRect.top <= triggerPoint) {
        line.style.transform = isHorizontal
          ? "scaleX(1)"
          : "scaleY(1)";
      } else {
        line.style.transform = isHorizontal
          ? "scaleX(0)"
          : "scaleY(0)";
      }
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

    const settleTimeout = setTimeout(measureAndDraw, 300);

    window.addEventListener("scroll", onScrollOrResize, {
      passive: true,
    });
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
            <span
              ref={lineRef}
              className="process-line"
              aria-hidden="true"
            />

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="process-card"
                role="button"
                tabIndex={0}
                onClick={goToServices}
                onKeyDown={handleCardKeyDown}
                aria-label={`${step.title} — Go to Services`}
              >
                <div
                  className="process-circle"
                  ref={registerCircle}
                >
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