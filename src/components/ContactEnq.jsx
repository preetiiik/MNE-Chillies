import "../styles/ContactEnq.css";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageSquare,
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

            {/* Phone */}
            <div className="contact-item">
              <FiPhone className="contact-icon" />

              <div>
                <div className="contact-label">Phone</div>

                <div className="contact-value">
                  <a href="tel:+919876543210">
                    +91 98765 43210
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
                  <a href="mailto:enquiry@mnespice.com">
                    enquiry@mnespice.com
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
                    href="https://maps.google.com/?q=Spice+Market+Road,+Guntur,+Andhra+Pradesh,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spice Market Road, Guntur,
                    <br />
                    Andhra Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-item">
              <FiMessageSquare className="contact-icon" />

              <div>
                <div className="contact-label">WhatsApp</div>

                <div className="contact-value">
                  <a
                    href="https://wa.me/919876500000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 98765 00000
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
                  placeholder="John Doe"
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
                  placeholder="john@company.com"
                />
              </div>

              <div className="form-group">
                <label>PHONE</label>
                <input
                  type="text"
                  placeholder="+91 (555) 000-0000"
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
                  <option>Dry Chillies</option>
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