import "../styles/Navbar.css";

import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import logo from "../assets/images/logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Check immediately when page loads
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="MNE Logo" />
        </Link>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" onClick={closeMenu}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/infrastructure" onClick={closeMenu}>
              Infrastructure
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button className="contact-btn">
          Get In Touch
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;