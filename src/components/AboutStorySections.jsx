import content from "./aboutStoryContent.json";
import "../styles/AboutStory.css";

function SectionHeading({ label, title }) {
  return <><span className="about-story-label">{label}</span><h2>{title}</h2></>;
}

export function Heritage() {
  const story = content.heritage;
  return (
    <section className="about-story-section" aria-labelledby="heritage-title">
      <div className="about-story-inner about-story-split">
        <div data-aos="fade-up">
          <span className="about-story-label">{story.label}</span>
          <h2 id="heritage-title">{story.title}</h2>
          {story.paragraphs.map(text => <p key={text}>{text}</p>)}
          <div className="about-story-founder-note">
            <span className="about-story-label">{story.highlight}</span>
            <p>{story.caption}</p>
          </div>
        </div>
        <figure className="about-story-portrait" data-aos="fade-up" data-aos-delay="100">
          <img src="/shri%20meramchand%20ji%20hundia.jpeg" alt="Late Shri Meramchandji Hundia, founder" loading="lazy" />
          <figcaption>{story.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function StoryCards({ type }) {
  const story = content[type];
  return (
    <section className={`about-story-section about-story-${type}`}>
      <div className="about-story-inner">
        <div className="about-story-heading" data-aos="fade-up">
          <SectionHeading {...story} />
          {story.intro && <p>{story.intro}</p>}
        </div>
        <div className="about-story-cards">
          {story.cards.map((card, index) => (
            <article className="about-story-card" key={card.title} data-aos="fade-up" data-aos-delay={index * 100}>
              {card.label && <span className="about-story-card-label">{card.label}</span>}
              <h3>{card.title}</h3>
              {card.experience && <p className="about-story-experience">{card.experience}</p>}
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GroupCompanies() {
  const companies = [
    { initials: "M.N", name: "ENTERPRISES" },
    { initials: "M.N", name: "EXPORTERS" },
    { initials: "MNE", name: "SPICES" },
  ];
  return (
    <section className="about-story-section about-story-companies" aria-labelledby="group-companies-title">
      <div className="about-story-inner about-company-layout">
        <div className="about-company-intro" data-aos="fade-up">
          <span className="about-story-label">OUR GROUP OF COMPANIES</span>
          <h2 id="group-companies-title">Three Business Names. One Legacy.</h2>
          <p>A family of businesses built on trust, experience and a shared commitment to quality.</p>
        </div>
        <ul className="about-company-strip" data-aos="fade-up">
          {companies.map(company => (
            <li className="about-company-name" key={company.name}>
              <div className="about-company-wordmark">
                <span className="about-company-initials">{company.initials}</span>{" "}
                <span className="about-company-descriptor">{company.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MarketPresence() {
  const story = content.market;
  return (
    <section className="about-story-section about-story-market">
      <div className="about-story-inner about-story-split">
        <div data-aos="fade-up">
          <SectionHeading {...story} />
          {story.paragraphs.map(text => <p key={text}>{text}</p>)}
          <dl className="about-story-stats">
            {story.stats.map(stat => <div key={stat.value}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}
          </dl>
        </div>
        <figure className="about-story-photo" data-aos="fade-up" data-aos-delay="100">
          <img src="/APMC%20MARKET%20YARD.jpeg" alt="Red chilli wholesale trading at Guntur APMC market yard" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}

export function SocialResponsibility() {
  const story = content.social;
  return (
    <section className="about-story-section about-story-social">
      <div className="about-story-inner about-story-split">
        <div data-aos="fade-up">
          <SectionHeading {...story} />
          {story.paragraphs.map(text => <p key={text}>{text}</p>)}
          <blockquote>{story.quote}</blockquote>
        </div>
        <figure className="about-story-photo" data-aos="fade-up" data-aos-delay="100">
          <img src="/GOWSHALA.png" alt="Gaushala supported through the family's community service" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
