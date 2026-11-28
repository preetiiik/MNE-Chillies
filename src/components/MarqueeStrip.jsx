import "../styles/MarqueeStrip.css";
function MarqueeStrip() {
  const items = [
    "RED CHILLIES",
    "CHILLI POWDER",
    "CHILLI FLAKES",
    "STEM-CUT CHILLIES",
    "PRIVATE LABELLING",
    "STATE-OF-THE-ART MANUFACTURING",
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
