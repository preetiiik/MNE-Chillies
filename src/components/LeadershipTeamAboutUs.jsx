import "../styles/LeadershipTeamAboutus.css";
const team = [
  {
    id: 1,
    initials: "DH",
    name: "Dalpatraj Hundia",
    role: "Promoter",
    joined: "40 years experience",
    bg: "#F8E8E8",
    circle: "#A6000C",
  },
  {
    id: 2,
    initials: "VH",
    name: "Vineet Hundia",
    role: "Promoter",
    joined: "13 years experience",
    bg: "#F8F2E6",
    circle: "#D59A2B",
  },
];

function LeadershipTeam() {
  return (
    <section className="leaders-section">
      <div className="container">

      <div className="leaders-container">

        <span
          className="leaders-tag"
          data-aos="fade-right"
        >
          THE PEOPLE
        </span>

        <h2
          className="leaders-title"
          data-aos="fade-up"
        >
          Our Promoters
        </h2>

        <div className="leaders-grid">

          {team.map((person, index) => (

            <div
              key={person.id}
              className="leader-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <div
                className="leader-top"
                style={{ background: person.bg }}
              >

                <div
                  className="leader-avatar"
                  style={{ background: person.circle }}
                >
                  {person.initials}
                </div>

              </div>

              <div className="leader-bottom">

                <h3>{person.name}</h3>

                <h4>{person.role}</h4>

                <p>{person.joined}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
      </div>
      

    </section>
  );
}

export default LeadershipTeam;