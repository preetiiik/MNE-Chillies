import "../styles/MarqueeStrip.css";
function MarqueeStrip() {
  const items = [
    "ISO 9001:2015",
    "✦ FSSAI APPROVED",
    "✦ 25+ EXPORT DESTINATIONS",
    "✦ LAB-TESTED EVERY BATCH",
    "✦ MOISTURE ≤ 12%",
    "✦ SHU CALIBRATED",
    "✦ 500+ PARTNER FARMERS",
  ];

  return (
    <section className="marquee-strip">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default MarqueeStrip;