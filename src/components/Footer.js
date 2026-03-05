import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./Footer.css";

// import your logos
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>VISION<span>X</span></h3>
          <p>
            Empowering innovation through Software Development,
            Cybersecurity solutions and Professional Deployment.
          </p>
        </div>

        {/* 🔥 SANCTIONED BY SECTION */}
        <div className="footer-sanctioned">
          <h4>Sanctioned By</h4>

          <div className="sanctioned-logos">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo4} alt="Logo 4" />
            <img src={logo5} alt="Logo 5" />
          </div>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <div className="footer-item">
            <MdEmail className="footer-icon" />
            <span>hrvisionx@gmail.com</span>
          </div>

          <div className="footer-item">
            <MdLocationOn className="footer-icon" />
            <span> Neeloth Plaza,
              Wayanad Rd, East Nadakkave,
              Kozhikode, Kerala 673001</span>
          </div>
        </div>




        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a href="https://www.instagram.com/_vision_.x?igsh=MXR1bDA5bmthcGd4eA%3D%3D"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/visionx-digital-solutions/"><FaLinkedinIn /></a>
            <a href="https://wa.me/919074450935"><FaWhatsapp /></a>
          </div>
        </div>

      </div>



      <div className="footer-bottom">
        © 2026 VisionX. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;