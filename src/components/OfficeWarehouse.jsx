import "../styles/OfficeWarehouse.css";

import { Link } from "react-router-dom";

export default function OfficeWarehouse() {
  return (
    <section className="office-warehouse">
      <div className="office-warehouse-inner">
        <span className="office-warehouse-label">OUR SPACES</span>
        <h2>Our Office &amp; Warehouse</h2>
        <div className="office-warehouse-grid">
          <figure>
            <div className="office-warehouse-photo"><img src="/office.jpeg" alt="M.N Export House office building" loading="lazy" /></div>
            <figcaption>
              <h3>M.N Export House</h3>
              <p>2/2 Arundelpet, Backside Jain Temple,<br />Guntur - 522007, Andhra Pradesh, India</p>
              <a href="https://maps.app.goo.gl/1RpR2fCwzDAsfjpNA?g_st=iw" target="_blank" rel="noopener noreferrer">View office location ↗</a>
            </figcaption>
          </figure>
          <figure>
            <div className="office-warehouse-photo"><img src="/warehouse.jpeg" alt="M.N Enterprises warehouse exterior" loading="lazy" /></div>
            <figcaption>
              <h3>Our Warehouse</h3>
              <p>A dedicated space for chilli storage, careful handling, and order dispatch, supporting our day-to-day supply operations.</p>
              <Link to="/contact">Contact us ↗</Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
