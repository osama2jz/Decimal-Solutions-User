import React from "react";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import Logo from "../assets/icons/logoreal.png";

function Header() {
  return (
    <>
      <header>
        <div className="contact-details">
          <div className="phone">
            <span>
              <PhoneIcon />
              +92 345 5893337, &nbsp;+92 300 4257414
            </span>
            <span>
              <EmailIcon style={{ marginRight: "0.4rem" }} />
              <a href="mailto:info@decimalsolutions.com">
                info@decimalsolutions.com
              </a>
            </span>
          </div>

          <div className="socials">
            <div className="social-media-platforms">
              <a href="#">
                <FacebookIcon className="img" />
              </a>
              <a href="#">
                <InstagramIcon className="img" />
              </a>
              <a href="#">
                <LinkedInIcon className="img" />
              </a>
            </div>
            <button>Contact Us</button>
          </div>
        </div>

        {/* Navbar started */}
        <nav>
          <div className="logo">
            <a href="index.html">
              <img src={Logo} className="img" />
            </a>
          </div>
          <div className="nav-links">
            <ul className="menu">
              <li className="item current">
                <a href="#">Home</a>
              </li>
              <li className="item">
                <a href="#">Services</a>
              </li>
              <li className="item">
                <a href="#">Portfolio</a>
              </li>
              <li className="item">
                <a href="#">Our Products</a>
              </li>
              <li className="item">
                <a href="#">Careers</a>
              </li>
              <li className="item">
                <a href="#">About Us</a>
              </li>
              <li className="item">
                <a href="#">Blog</a>
              </li>
              <li className="item toggle">
                <a href="#">
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mobile-nav">
          <ul className="menu">
            <li className="current">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Services</a>
            </li>
            <li className="">
              <a href="#">Portfolio</a>
            </li>
            <li className="">
              <a href="#">Our Products</a>
            </li>
            <li className="">
              <a href="#">Careers</a>
            </li>
            <li className="">
              <a href="#">About Us</a>
            </li>
            <li className="">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </header>
      {/* Header and Navbar Ended */}
    </>
  );
}

export default Header;
