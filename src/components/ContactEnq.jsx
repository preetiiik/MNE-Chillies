import "../styles/ContactEnq.css";

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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

            {/* Phone */}
            <div className="contact-item">
              <FiPhone className="contact-icon" />

              <div>
                <div className="contact-label">Phone</div>

                <div className="contact-value">
                  <a href="tel:+91 9440793970">
                    +91 9440793970
                  </a>
                </div>
              </div>
            </div>

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
                    M.N EXPORT HOUSE<br />2/2 Arundelpet<br />Backside Jain Temple<br />Guntur - 522007<br />Andhra Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-item">
              <FaWhatsapp className="contact-icon whatsapp-icon" />

              <div>
                <div className="contact-label">WhatsApp</div>

                <div className="contact-value">
                  <a
                    href="https://wa.me/9440793970"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 9440793970
                  </a>
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

            <div className="form-grid">

              <div className="form-group">
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Ramesh Kumar"
                />
              </div>

              <div className="form-group">
                <label>COMPANY</label>
                <input
                  type="text"
                  placeholder="Gourmet Foods Ltd."
                />
              </div>

              <div className="form-group">
                <label>WORK EMAIL</label>
                <input
                  type="email"
                  placeholder="ramesh@company.com"
                />
              </div>

              <div className="form-group">
                <label>PHONE</label>
                <input
                  type="text"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="form-group">
                <label>STATE</label>
                <input
                  type="text"
                  placeholder="Karnataka"
                />
              </div>

              <div className="form-group">
                <label>INTERESTED IN</label>

                <select>
                  <option>Whole Chilli</option>
                  <option>Chilli Powder</option>
                  <option>Chilli Flakes</option>
                  <option>Custom Blends</option>
                </select>
              </div>

              <div className="form-group full">
                <label>ESTIMATED QUANTITY (MT)</label>

                <input
                  type="text"
                  placeholder="e.g. 20 Metric Tons"
                />
              </div>

              <div className="form-group full">
                <label>MESSAGE</label>

                <textarea
                  placeholder="Tell us more about your requirements..."
                ></textarea>
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