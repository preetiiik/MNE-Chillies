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
                  <a href="tel:+91 1234567890">
                    +91 1234567890
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
                    href="https://www.google.com/maps/place/Hubballi,+Karnataka/@15.404758,75.0667318,12z/data=!3m1!4b1!4m6!3m5!1s0x3bb8d6d3a2090b17:0xae803e207113397!8m2!3d15.3647083!4d75.1239547!16zL20vMDE2YmY1?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hubli
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
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 1234567890
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