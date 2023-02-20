
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    // Add your email submission logic here
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <footer className="footer">
      <div className="footer-email">
        <h4>Subscribe to our newsletter</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Popular Categories</h4>
          <ul>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Home & Garden</a></li>
            <li><a href="#">Toys & Games</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook size={24} color="#fff" /></a>
            <a href="#"><FaTwitter size={24} color="#fff" /></a>
            <a href="#"><FaInstagram size={24} color="#fff" /></a>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>&copy; {year} Company Name. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Accessibility Statement</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
