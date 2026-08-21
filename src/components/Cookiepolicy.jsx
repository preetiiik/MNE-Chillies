import React from "react";
import LegalPageLayout from "./LegalPageLayout";

const COMPANY = "MNE Chillies Pvt. Ltd.";
const DOMAIN = "[yourdomain.com]"; // TODO: replace once the domain is live
const EMAIL = "exports@premiumchillies.com";
const PHONE = "+91 1234567890";
const ADDRESS = "Hubli, Karnataka, India";
const LAST_UPDATED = "August 21, 2026";

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Cookie Policy explains how {COMPANY} ("we", "us", "our")
        uses cookies and similar technologies on {DOMAIN} (the "Site").
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device when you
        visit a website. They are widely used to make websites function
        properly, and to provide basic information about how the site
        is used.
      </p>

      <h2>2. Cookies We Use</h2>
      <p>
        We keep cookie usage on this Site to a minimum. The Site does
        not use Google Analytics, Meta Pixel, or any other third-party
        advertising, analytics, or behavioural tracking cookies. We do
        not use cookies to track you across other websites, build
        advertising profiles, or serve targeted ads.
      </p>
      <p>
        The only cookies used on this Site are strictly necessary
        cookies, which are required for the Site's core functionality
        (for example, maintaining basic site security and enabling
        pages to load and display correctly). These cookies do not
        collect information that identifies you personally and cannot
        be switched off, as the Site would not function correctly
        without them.
      </p>

      <h2>3. Third-Party Content</h2>
      <p>
        Where the Site links out to third-party services (for example,
        WhatsApp or Google Maps), those third parties may set their own
        cookies once you leave our Site and visit their platform. Any
        such cookies are governed by the respective third party's own
        cookie and privacy policies, not this one.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        Because this Site uses only strictly necessary cookies, there
        are no optional or advertising cookies for you to opt out of.
        If you wish to block or delete cookies generally, you can do so
        through your browser settings; however, this may affect the
        functionality of this and other websites.
      </p>

      <h2>5. Changes to This Cookie Policy</h2>
      <p>
        If we introduce any additional cookies or tracking technologies
        in the future (such as analytics tools), we will update this
        Cookie Policy accordingly and, where required by law, seek your
        consent before doing so.
      </p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions about this Cookie Policy, please contact us:</p>

      <div className="legal-contact-block">
        <p><strong>{COMPANY}</strong></p>
        <p>Address: {ADDRESS}</p>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>Phone: <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a></p>
      </div>
    </LegalPageLayout>
  );
}