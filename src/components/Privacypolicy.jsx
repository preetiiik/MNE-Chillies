import React from "react";
import LegalPageLayout from "./LegalPageLayout";

const COMPANY = "MNE Chillies Pvt. Ltd.";
const DOMAIN = "[yourdomain.com]"; // TODO: replace once the domain is live
const EMAIL = "exports@premiumchillies.com";
const PHONE = "+91 1234567890";
const ADDRESS = "Hubli, Karnataka, India";
const LAST_UPDATED = "August 21, 2026";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        {COMPANY} ("we", "us", "our") operates the website {DOMAIN} (the
        "Site"). This Privacy Policy explains how we collect, use,
        disclose, and safeguard information when you visit the Site or
        interact with us through it. It is drafted to comply with the
        Information Technology Act, 2000, the Information Technology
        (Reasonable Security Practices and Procedures and Sensitive
        Personal Data or Information) Rules, 2011, and the Digital
        Personal Data Protection Act, 2023 ("DPDP Act"), of India.
      </p>

      <p>
        By using the Site, you agree to the collection and use of
        information in accordance with this Policy. If you do not agree
        with the terms of this Privacy Policy, please do not use the
        Site.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide to Us</h3>
      <p>
        We collect personal information that you voluntarily provide to
        us when you:
      </p>
      <ul>
        <li>Submit an enquiry or request a quote through our Contact page or contact forms</li>
        <li>Request or download our product catalog</li>
        <li>Contact us via email, telephone, or WhatsApp</li>
        <li>Correspond with us regarding orders, samples, or business enquiries</li>
      </ul>
      <p>
        This information may include your name, company name, email
        address, telephone number, country, and the content of your
        message or enquiry (for example, product requirements, order
        volumes, or shipping destination).
      </p>

      <h3>1.2 Information Collected Automatically</h3>
      <p>
        The Site does not use Google Analytics, Meta Pixel, or any
        third-party advertising or behavioural tracking technology. We
        do not build advertising profiles or track your activity across
        other websites or apps.
      </p>
      <p>
        Our hosting provider may automatically log limited technical
        information necessary for the Site to function and to maintain
        security, such as IP address, browser type, access times, and
        pages visited. This information is used solely for server
        administration, troubleshooting, and security purposes, and is
        not used to identify individual visitors for marketing purposes.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your enquiries and quote requests</li>
        <li>Provide product information, samples, and catalogs</li>
        <li>Process and fulfil export orders and related documentation</li>
        <li>Communicate with you regarding your enquiry or business relationship with us</li>
        <li>Comply with applicable legal, regulatory, customs, and export obligations</li>
        <li>Improve our website and services</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We may
        share your information only in the following circumstances:
      </p>
      <ul>
        <li>With logistics, shipping, customs, and export partners as necessary to fulfil an order</li>
        <li>With regulatory or government authorities where required by applicable law (for example, FSSAI, APEDA, or Spices Board compliance)</li>
        <li>With professional advisors (legal, accounting) where necessary for our legitimate business operations</li>
        <li>If required by law, court order, or governmental request</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        The Site uses only essential cookies required for basic
        functionality. Please refer to our separate Cookie Policy for
        full details.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to
        fulfil the purposes described in this Policy, including to
        satisfy any legal, accounting, or reporting requirements (such
        as export and customs documentation retention periods).
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable security practices and procedures, in
        line with the IT Act, 2000 and applicable rules, to protect your
        personal information against unauthorized access, alteration,
        disclosure, or destruction. However, no method of transmission
        over the internet or electronic storage is 100% secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Subject to applicable law, including the DPDP Act, 2023, you
        have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate or incomplete information</li>
        <li>Request erasure of your personal information, subject to our legal retention obligations</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Lodge a grievance regarding the handling of your personal information</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the
        details in Section 10 below.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The Site is intended for business-to-business use and is not
        directed at individuals under the age of 18. We do not knowingly
        collect personal information from children.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any
        changes will be posted on this page with a revised "Last
        updated" date. We encourage you to review this Policy
        periodically.
      </p>

      <h2>10. Grievance Officer / Contact Us</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and
        rules made thereunder, the details of the Grievance Officer are
        as follows:
      </p>

      <div className="legal-contact-block">
        <p><strong>{COMPANY}</strong></p>
        <p>Address: {ADDRESS}</p>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>Phone: <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a></p>
      </div>
    </LegalPageLayout>
  );
}