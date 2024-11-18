import React from 'react';
import "../assets/styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div>
            <h1 className="logo-1">Presently</h1>
            <p className="quote">
              Join millions of people who organize work and life with Presently.
            </p>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">For Teams</a></li>
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Download Apps</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Productivity Methods</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Developer API</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Inspiration Hub</a></li>
              <li><a href="#">Twist</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-1">
        <div className="container">
          <h5>Copyright &copy; 1995-2024 Presently All Rights Reserved.</h5>
          <p>STAY WITH US</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
