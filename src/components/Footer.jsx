import React from "react";
import "./Footer.css"; // ✅ Import the CSS file

import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Blinkit. All rights reserved.</p>
        <nav className="footer-links">
          <a href="">
          <AiFillInstagram />
          </a>
          <a href=" ">
          <FaWhatsapp />
          </a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
