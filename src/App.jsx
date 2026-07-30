import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import ContactFooter from "./components/ContactFooter";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  const hideCTA =
    location.pathname === "/contact" ||
    location.pathname === "/infrastructure";

  // Refresh AOS positions on every route change
  // (recalculates offsets for the newly rendered page's elements)
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ContactFooter hideCTA={hideCTA} />
    </>
  );
}

function App() {
  // AOS.init should run ONCE for the entire app, here in the root component.
  // Do NOT call AOS.init() again in any page or section component —
  // repeated init() calls rebind AOS's scroll listener multiple times,
  // which is what was causing the "stuck on first scroll" bug.
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;