import "../styles/LeadershipTeamAboutUs.css";
const team = [
  {
    id: 1,
    initials: "RK",
    name: "Ravi Kumar Reddy",
    role: "Founder & Managing Director",
    joined: "Est. 1998",
    bg: "#F8E8E8",
    circle: "#A6000C",
  },
  {
    id: 2,
    initials: "SR",
    name: "Sunita Reddy",
    role: "Director — Quality & Compliance",
    joined: "Joined 2002",
    bg: "#F8F2E6",
    circle: "#D59A2B",
  },
  {
    id: 3,
    initials: "AP",
    name: "Arun Prakash",
    role: "Head of Export Operations",
    joined: "Joined 2008",
    bg: "#EEF4EE",
    circle: "#5C9258",
  },
  {
    id: 4,
    initials: "PN",
    name: "Priya Nambiar",
    role: "Head of Procurement & Farmer Relations",
    joined: "Joined 2013",
    bg: "#F0F1FB",
    circle: "#6768B1",
  },
];

function LeadershipTeam() {
  return (
    <section className="leaders-section">

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
          Leadership Team
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
      

    </section>
  );
}

export default LeadershipTeam;