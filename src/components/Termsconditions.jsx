import React from "react";
import LegalPageLayout from "./Legalpagelayout";

const COMPANY = "MNE Chillies Pvt. Ltd.";
const DOMAIN = "[yourdomain.com]"; // TODO: replace once the domain is live
const EMAIL = "exports@premiumchillies.com";
const PHONE = "+91 1234567890";
const ADDRESS = "Hubli, Karnataka, India";
const LAST_UPDATED = "August 21, 2026";

export default function TermsConditions() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms & Conditions ("Terms") govern your access to and use
        of the website {DOMAIN} (the "Site"), operated by {COMPANY}
        ("we", "us", "our"). By accessing or using the Site, you agree
        to be bound by these Terms. If you do not agree, please do not
        use the Site.
      </p>

      <h2>1. About Us</h2>
      <p>
        {COMPANY} is an exporter of dried red chillies, chilli powder,
        and chilli flakes, based in {ADDRESS}. The Site is provided for
        informational and business enquiry purposes for prospective and
        existing customers, importers, and business partners.
      </p>

      <h2>2. Use of the Site</h2>
      <p>
        You agree to use the Site only for lawful purposes and in a
        manner that does not infringe the rights of, or restrict or
        inhibit the use and enjoyment of the Site by, any third party.
        Prohibited uses include, without limitation:
      </p>
      <ul>
        <li>Attempting to gain unauthorized access to the Site, servers, or any connected systems</li>
        <li>Transmitting any harmful code, malware, or disruptive material</li>
        <li>Submitting false, misleading, or fraudulent information through any enquiry or contact form</li>
        <li>Using automated means (bots, scrapers) to extract content without our prior written consent</li>
      </ul>

      <h2>3. Product Information & Quotations</h2>
      <p>
        Product descriptions, specifications (including ASTA colour
        values, Scoville Heat Units, capsaicin content, and moisture
        content), images, and packing options displayed on the Site are
        provided for general informational purposes only. Actual
        product characteristics may vary by crop season, harvest, and
        grade, and are subject to confirmation at the time of order.
      </p>
      <p>
        Any quotation, price, or availability provided in response to a
        "Request Quote" enquiry is indicative only and does not
        constitute a binding offer until confirmed in writing (including
        via email) by an authorized representative of {COMPANY}, and
        formalized through a separate purchase agreement, proforma
        invoice, or sales contract.
      </p>

      <h2>4. Orders, Export & Payment</h2>
      <p>
        All orders are subject to separate written agreement between
        the parties, covering quantity, quality specifications, packing,
        pricing, Incoterms, payment terms, and delivery schedule.
        Nothing on this Site constitutes a contract of sale. Export
        shipments are subject to applicable Indian export regulations,
        including but not limited to FSSAI, APEDA, and Spices Board
        requirements, and the import regulations of the destination
        country, which remain the responsibility of the buyer unless
        otherwise agreed in writing.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on the Site, including text, graphics, logos,
        images, and product descriptions, is the property of {COMPANY}{" "}
        or its licensors and is protected by applicable intellectual
        property laws. You may not reproduce, distribute, modify, or
        create derivative works from any content on the Site without
        our prior written consent.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites or services
        (including social media platforms and WhatsApp) that are not
        owned or controlled by us. We are not responsible for the
        content, privacy policies, or practices of any third-party
        websites or services.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The Site and its content are provided on an "as is" and "as
        available" basis without warranties of any kind, whether
        express or implied, including but not limited to warranties of
        accuracy, completeness, merchantability, or fitness for a
        particular purpose. We do not warrant that the Site will be
        uninterrupted, timely, secure, or error-free.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, {COMPANY}{" "}
        shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages arising out of or relating
        to your use of, or inability to use, the Site, even if we have
        been advised of the possibility of such damages.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {COMPANY}, its
        directors, employees, and agents from any claims, damages,
        liabilities, and expenses (including reasonable legal fees)
        arising out of your breach of these Terms or your misuse of the
        Site.
      </p>

      <h2>10. Governing Law & Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with
        the laws of India. Subject to applicable law, any disputes
        arising out of or in connection with these Terms or your use of
        the Site shall be subject to the exclusive jurisdiction of the
        competent courts at Hubli, Karnataka, India.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may revise these Terms at any time by updating this page.
        Continued use of the Site after any changes constitutes your
        acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>

      <div className="legal-contact-block">
        <p><strong>{COMPANY}</strong></p>
        <p>Address: {ADDRESS}</p>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>Phone: <a href={`tel:${PHONE.replace(/\s+/g, "")}`}>{PHONE}</a></p>
      </div>
    </LegalPageLayout>
  );
}