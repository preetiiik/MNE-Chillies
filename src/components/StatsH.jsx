import { FaAward, FaMapMarkerAlt, FaCogs, FaGlobeAsia } from "react-icons/fa";
import "../styles/StatsH.css";

function Stats() {
  const stats = [
    { sentence: "45+ Years of Expertise", icon: FaAward },
    { sentence: "Guntur Rooted", icon: FaMapMarkerAlt },
    { sentence: "Advanced Processing", icon: FaCogs },
    { sentence: "India and Global Markets", icon: FaGlobeAsia },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map(({ sentence, icon: Icon }) => (
          <div className="stat-card" key={sentence}>
            <Icon className="stat-icon" aria-hidden="true" />
            <p>{sentence}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
