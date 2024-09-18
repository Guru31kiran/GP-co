// src/components/Navbar.js
import React from 'react';
import './Navbar.css';  // Import the CSS file for styling

const Navbar = () => {
  return (
    <>
      {/* Top Bar for Email and Call Us */}
      <div className="top-bar">
        <div className="top-bar-left">
          <p>Email: trustdental.ab@gmail.com</p>
        </div>
        <div className="top-bar-right">
          <p>Call Us: 988 009 9066</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img37.jpg" alt="Logo" className="logo" /> {/* Replace with the actual path of your logo */}
            Trust Dental Corporation
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/interiors">Interiors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manufacturing">Manufacturing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link enquire" href="/enquire">Enquire Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
