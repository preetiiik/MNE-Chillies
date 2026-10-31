import { FaSeedling, FaGlobeAsia, FaHandshake, FaAward } from "react-icons/fa";
import "../styles/StatsH.css";

function Stats() {
  const stats = [
    { sentence: "Sourced from APMC Guntur", icon: FaSeedling },
    { sentence: "All over India and exports", icon: FaGlobeAsia },
    { sentence: "Trusted globally since 4 decades", icon: FaHandshake },
    { sentence: "India's most trusted chilli supplier", icon: FaAward },
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
