import "../styles/Legalpagelayout.css";
import logo from "../assets/images/logo.webp";

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <main className="legal-page">
      <div className="legal-inner">
        <img className="legal-brand-logo" src={logo} alt="MNE" />
        <h1 className="legal-title">{title}</h1>
        <div className="legal-divider" />
        {lastUpdated && (
          <p className="legal-updated">Last updated: {lastUpdated}</p>
        )}
        <div className="legal-content">{children}</div>
      </div>
    </main>
  );
}
