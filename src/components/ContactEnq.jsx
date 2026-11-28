import "../styles/ContactEnq.css";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

function ContactEnquiry() {
  return (
    <section className="contact-enquiry">
      <div className="container">
      <div className="contact-enquiry-container">

        {/* LEFT */}
        <div
          className="contact-info"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2>
            Tell Us What
            <br />
            You Need.
          </h2>

          <p>
            Our dedicated account managers are available to discuss your
            specific sourcing needs and provide tailored logistical solutions
            for global distribution.
          </p>

          <div className="contact-list">

            {/* Email */}
            <div className="contact-item">
              <FiMail className="contact-icon" />

              <div>
                <div className="contact-label">Email</div>

                <div className="contact-value">
                  <a href="mailto:mnenterprises@live.in">
                    mnenterprises@live.in
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value"><a href="tel:+919440793970">+91 9440793970</a></div>
              </div>
            </div>

            {/* Headquarters */}
            <div className="contact-item">
              <FiMapPin className="contact-icon" />

              <div>
                <div className="contact-label">Headquarters</div>

                <div className="contact-value">
                  <a
                    href="https://maps.app.goo.gl/1RpR2fCwzDAsfjpNA?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    M.N EXPORT HOUSE<br />2/2 Arundelpet<br />Behind Jain Temple<br />Guntur - 522007<br />Andhra Pradesh, India
                  </a><br />
                  <a href="https://maps.app.goo.gl/1RpR2fCwzDAsfjpNA?g_st=iw" target="_blank" rel="noopener noreferrer">Get Directions ?</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div
          className="contact-form"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <form>

            <p className="form-required-note">* Required fields</p>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="contact-name">Full name *</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-company">Company (optional)</label>
                <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Enter company name" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Work email *</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-country">Country *</label>
                <input id="contact-country" name="country" type="text" autoComplete="country-name" placeholder="Enter your country" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-code">Country calling code (optional)</label>
                <input id="contact-code" name="callingCode" type="tel" autoComplete="tel-country-code" placeholder="e.g. +91" pattern="\+[0-9]{1,4}" title="Enter a country code beginning with +" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Contact number (optional)</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel-national" placeholder="Enter your contact number" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-state">State or region (if applicable)</label>
                <input id="contact-state" name="state" type="text" autoComplete="address-level1" placeholder="Enter your state or region" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-interest">Interested in (optional)</label>
                <select id="contact-interest" name="interest" defaultValue="">
                  <option value="">Select a product</option>
                  <option>Whole Chilli</option><option>Chilli Powder</option><option>Chilli Flakes</option><option>Custom Blends</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contact-quantity">Estimated quantity in MT (optional)</label>
                <input id="contact-quantity" name="quantity" type="text" placeholder="Enter estimated quantity" />
              </div>
              <div className="form-group full">
                <label htmlFor="contact-message">Message (optional)</label>
                <textarea id="contact-message" name="message" placeholder="Tell us more about your requirements..." />
              </div>
            </div>

            <button
              className="send-btn"
              type="submit"
            >
              Send Enquiry
            </button>

          </form>
        </div>

      </div>
      </div>
    </section>
  );
}

export default ContactEnquiry;
