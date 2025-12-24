import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';
import { FaUserCircle } from "react-icons/fa";  // Profile icon

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo Left */}
        <div className="header-left">
          <img src={logo} alt="Blinkit Logo" className="logo-img" />
          <span className="logo-text">Blinkit</span>
        </div>

        {/* Search Bar Middle */}
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for courses or notes..."
          />
        </div>

        {/* Right Side: Cart + Profile */}
        <div className="header-right">
          <button className="cart-btn">Add to Cart</button>
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
