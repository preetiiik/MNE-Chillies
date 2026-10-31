import "../styles/ProcessTimeline.css";

const STEPS = [
  {
    id: "01",
    title: "Cleaning & Sorting",
    description: "Machine and hand sorting to remove defects",
  },
  {
    id: "02",
    title: "Chilli Grinding",
    description: "Precision grinding for consistent quality and rich flavour",
  },
  {
    id: "03",
    title: "Cold Storage",
    description: "Temperature-controlled warehousing year-round",
  },
  {
    id: "04",
    title: "Quality Testing",
    description: "ASTA colour, SHU pungency and moisture on every batch",
  },
  {
    id: "05",
    title: "Custom Packaging",
    description: "Jute, PP, vacuum, and private-label options",
  },
];

export default function ProcessTimeline({ activeId, onSelect }) {

  const handleStepClick = (id) => {
    onSelect(id);

    // Scroll to the corresponding service card.
    const index = STEPS.findIndex((step) => step.id === id);
    const cards = document.querySelectorAll(".wwd-card");
    const targetCard = cards[index];

    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="pt-section">
      <div className="container">
      <div className="pt-container">

        <span className="pt-small-title">
          <span className="pt-dash"></span>
          End-to-End
        </span>

        <h2>How it all fits together</h2>

        <div className="pt-steps">

          <div className="pt-line"></div>

          {STEPS.map((step) => {
            const isActive = step.id === activeId;

            return (
              <button
                key={step.id}
                type="button"
                className={`pt-step${isActive ? " active" : ""}`}
                onClick={() => handleStepClick(step.id)}
              >
                <span className="pt-step-circle">{step.id}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </button>
            );
          })}

        </div>

      </div>
      </div>
    </section>
  );
}
