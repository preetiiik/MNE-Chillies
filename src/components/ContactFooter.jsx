import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactFooter.css";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

import footerLogo from "../assets/images/logo.webp";
import contactBg from "../assets/images/Container.webp";

const ContactFooter = ({ hideCTA }) => {
  return (
    <>
      {/* ================= Contact CTA ================= */}
      {!hideCTA && (
      <section
        className="contact-section"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div className="container">
        <div
          className="contact-overlay"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <p className="contact-tag">
            WORK WITH US
          </p>

          <h2>
            Looking for a Reliable
            <br />
            Chilli Supplier?
          </h2>

          <p className="contact-descriptionf">
            We supply bulk dry chillies, chilli powder, and flakes to food
            processors, spice manufacturers, and importers worldwide. Reach
            out to discuss your requirements.
          </p>

          <div className="contact-buttons">
            <Link to="/contact" className="primary-btn">
            Contact Us
            </Link>

            <button className="secondary-btn">
              Download Catalog
            </button>
            {/* <a  WHEN CATALOG IS GIVEN UNCOMMENT THIS
  href="/catalog.pdf"
  download
  className="secondary-btn"
>
  Download Catalog
</a> */}
          </div>
        </div>
        </div>
      </section>
      )}
      {/* ================= Footer ================= */}

      <footer className="footer">
        <div className="container">

        <div className="footer-container">

          {/* Left */}

          <div
            className="footer-about"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img
              src={footerLogo}
              alt="Logo"
              className="footer-logo"
            />

            <p className="footer-text">
              Guntur's leading exporter of premium red chillies,
              chilli powder, and flakes. Trusted by food brands
              across 25 countries.
            </p>

            <div className="social-icons">
              <a href="tel:+919440793970" aria-label="Call +91 9440793970" title="Call us">
                <FiPhone />
              </a>
              <a href="mailto:mnenterprises@live.in" aria-label="Email mnenterprises@live.in" title="Email us">
                <FiMail />
              </a>
              <a
                href="https://wa.me/919440793970"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About Us</Link></li>

              <li><Link to="/products">Products</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><Link to="/infrastructure">Infrastructure</Link></li>

              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}

          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="800"
          >
            <h4>Products</h4>
            <ul>
            <li><Link to="/products?category=Dry Chillies">Dry Chillies</Link></li>

            <li><Link to="/products?category=Chilli Powder">Chilli Powder</Link></li>

            <li><Link to="/products?category=Chilli Flakes">Chilli Flakes</Link></li>
            </ul>
            {/* <ul>
              <li><a href="/">Dry Chillies</a></li>

              <li><a href="/">Chilli Powder</a></li>

              <li><a href="/">Chilli Flakes</a></li>

              <li><a href="/">Custom Blends</a></li>

              <li><a href="/">Teja S17</a></li>

              <li><a href="/">Byadagi</a></li>

              <li><a href="/">Guntur Sannam</a></li>
            </ul> */}
          </div>

          {/* Contact */}

          <div
            className="footer-column footer-contact"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <h4>Get in Touch</h4>

            <span className="footer-label">
              ADDRESS
            </span>

            <a
              href="https://maps.app.goo.gl/1RpR2fCwzDAsfjpNA?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              M.N EXPORT HOUSE<br />2/2 Arundelpet<br />Backside Jain Temple<br />Guntur - 522007<br />Andhra Pradesh, India
            </a>

            <span className="footer-label">
              EMAIL
            </span>
            <a
            href="mailto:mnenterprises@live.in"
            className="footer-link"
            >
              mnenterprises@live.in
            </a>


            <span className="footer-label">
              PHONE
            </span>

            <div className="footer-phone">
              <a href="tel:+919440793970">
                +919440793970
                </a>
            </div>

            <span className="footer-label">
              HOURS
            </span>

            <p>
              Mon–Sat,
              9:00 AM – 6:30 PM IST
            </p>

            <div className="certifications">
              <span>FSSAI</span>


              <span>APEDA</span>

              <span>SPICES BOARD</span>
            </div>
          </div>

        </div>

        <hr />

        <div
          className="footer-bottom"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p>
            © 2026 MNE Chillies Pvt. Ltd.
            All Rights Reserved.
            Powered by{" "}
            <a
              href="https://www.spitel.com"
              target="_blank"
              rel="noreferrer"
            >
              Spitel Pvt. Ltd.
            </a>
          </p>

          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>

        </div>
        </div>

      </footer>
    </>
  );
};

export default ContactFooter;
