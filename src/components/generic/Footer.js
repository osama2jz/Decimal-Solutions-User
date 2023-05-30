import React from "react";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-white.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-white.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin-white.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div class="overlay"></div>
        <div class="content">
          <div class="footer-div">
            <div class="footer-div-1">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/our-services">Services</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/products">Our Products</Link>
                </li>
                <li>
                  <Link to="/career">Careers</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
            <div class="footer-div-2">
              <h2>Contact Us</h2>
              <span>info@decimalsolutions.com</span>
              <span>+92 345 5893337</span>
              <span>
                Office No# 17, 2nd Floor, Zaki Centre, I-8 Markaz Islamabad,
                44000
              </span>
            </div>
            <div class="footer-div-3">
              <div class="socials-footer">
                <a href="https://www.facebook.com/">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/">
                  <LinkedInIcon />
                </a>
              </div>
              <hr />
              <div class="last-line">
                <span>
                  Copyright &copy; <span class="bold">decimal Solution</span>{" "}
                  All rights reserved {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
