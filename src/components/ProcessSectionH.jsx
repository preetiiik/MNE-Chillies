import "../styles/ProcessSectionH.css"

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
  return (
    <section className="process-section" data-aos="fade-right">
      <div className="process-container">

        <div className="process-heading">
          <span className="process-label">
            OUR PROCESS
          </span>

          <h2>
            From Farm to
            <br />
            Your Doorstep
          </h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-card" key={step.number}>

              <div className="process-circle">
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
    </section>
  );
}