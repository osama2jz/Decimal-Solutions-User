import React, { useState } from "react";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logoreal.png";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleClicked = () => {
    setShowMenu(!showMenu);
    console.log("Toggle Clicked");
  };
  const navigation = useNavigate();
  return (
    <>
      <header>
        <div class="contact-details">
          <div class="phone">
            <span>
              <PhoneIcon />
              +92 345 5893337
            </span>
            <span>
              <EmailIcon style={{ marginRight: "0.4rem" }} />
              <a href="mailto:info@decimalsolutions.com">
                info@decimalsolutions.com
              </a>
            </span>
          </div>

          <div class="socials">
            <div class="social-media-platforms">
              <a href="https://www.facebook.com/">
                <FacebookIcon className="img" />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon className="img" />
              </a>
              <a href="https://www.linkedin.com/">
                <LinkedInIcon className="img" />
              </a>
            </div>
            <button
              onClick={() => {
                navigation("/contact-us");
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Navbar started */}
        <nav>
          <div class="logo">
            <Link to="/">
              <img src={Logo} className="img" alt="logo" />
            </Link>
          </div>

          <div class="nav-links">
            <ul class="menu">
              <li class="item current">
                <Link to="/">Home</Link>
              </li>
              <li class="item">
                <Link to="/our-services">Services</Link>
              </li>
              <li class="item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li class="item">
                <Link to="/products">Our Products</Link>
              </li>
              <li class="item">
                <Link to="/career">Careers</Link>
              </li>
              <li class="item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li class="item">
                <Link to="/blogs">Blog</Link>
              </li>
              <li class="item toggle" onClick={toggleClicked}>
                <Link to="#">
                  <BiMenu />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {showMenu ? (
          <div class="mobile-nav">
            <ul class="menu">
              <li class="current" onClick={() => setShowMenu(!showMenu)} >
                <Link to="/">Home</Link>
              </li>
              <li class="" onClick={() => setShowMenu(!showMenu)}>
                <Link to="/our-services">Services</Link>
              </li>
              <li class="" onClick={() => setShowMenu(!showMenu)}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li class="" onClick={() => setShowMenu(!showMenu)}>
                <Link to="/projects">Our Products</Link>
              </li>
              <li class="" onClick={() => setShowMenu(!showMenu)}>
                <Link to="/career">Careers</Link>
              </li>
              <li class="" onClick={() => setShowMenu(!showMenu)}>
                <Link to="/about-us">About Us</Link>
              </li>
              <li class="" onClick={() => setShowMenu(!showMenu)}>
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </header>
      {/* Header and Navbar Ended */}
    </>
  );
}

export default Header;
