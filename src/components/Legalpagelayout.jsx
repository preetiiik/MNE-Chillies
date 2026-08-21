import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiX } from "react-icons/pi";
import "../styles/Legalpagelayout.css";

/**
 * Full-screen overlay wrapper for legal pages (Privacy Policy,
 * Terms & Conditions, Cookie Policy).
 *
 * Renders WITHOUT the site Navbar / Contact CTA / Footer -- this
 * component is meant to be the entire route element, not nested
 * inside your normal <Layout> that includes those. If your router
 * wraps every route in a shared <Layout>, render these three routes
 * outside that wrapper (see routing note at bottom of file).
 *
 * Close (X) navigates back to the previous page; falls back to "/"
 * if there's no history (e.g. someone lands here directly / shares
 * the link).
 */
export default function LegalPageLayout({ title, lastUpdated, children }) {
  const navigate = useNavigate();

  const handleClose = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Lock body scroll while the overlay is open; restore on unmount.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Close on Escape.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="legal-overlay">
      <button
        className="legal-close"
        onClick={handleClose}
        aria-label="Close"
      >
        <PiX />
      </button>

      <div className="legal-scroll">
        <div className="legal-inner">
          <span className="legal-brand">MNE</span>

          <h1 className="legal-title">{title}</h1>

          <div className="legal-divider" />

          {lastUpdated && (
            <p className="legal-updated">Last updated: {lastUpdated}</p>
          )}

          <div className="legal-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ROUTING NOTE

   In your router (App.jsx / routes file), these three routes
   must sit OUTSIDE whatever <Route> wraps Navbar + ContactFooter,
   e.g.:

   <Routes>
     <Route element={<SiteLayout />}>   // has Navbar + ContactFooter
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Products />} />
       ...
     </Route>

     // Legal pages OUTSIDE SiteLayout -- no navbar/footer/CTA
     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     <Route path="/terms-conditions" element={<TermsConditions />} />
     <Route path="/cookie-policy" element={<CookiePolicy />} />
   </Routes>
============================================================ */