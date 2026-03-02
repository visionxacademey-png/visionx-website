import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          VISION<span>X</span>
        </NavLink>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li><NavLink to="/software" onClick={closeMenu}>Software</NavLink></li>
          <li><NavLink to="/cybersecurity" onClick={closeMenu}>Cybersecurity</NavLink></li>
          <li><NavLink to="/internship" onClick={closeMenu}>Internship</NavLink></li>
          <li><NavLink to="/workshops" onClick={closeMenu}>Workshops</NavLink></li>
        </ul>

        <div
          className={`menu-icon ${menuOpen ? "rotate" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <BiSolidCategoryAlt />}
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;