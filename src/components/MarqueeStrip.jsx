import "../styles/MarqueeStrip.css";
function MarqueeStrip() {
  const items = [
    "RED CHILLIES",
    "CHILLI POWDER",
    "CHILLI FLAKES",
    "STEMCUT CHILLIES",
    "PRIVATE LABELLING",
    "STATE OF ART MANUFACTURING",
  ];

  return (
    <section className="marquee-strip">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <span key={index} className="marquee-item">
            ✦ {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default MarqueeStrip;
