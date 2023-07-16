import React, { useEffect, useState } from "react";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logoreal.png";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import axios from "axios";
import { backendUrl } from "../../constants";
import { Loader } from "@mantine/core";
import { useContext } from "react";
import { AboutUsContext } from "../../context/AboutUsContext";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { aboutUs: data } = useContext(AboutUsContext);
  const navigation = useNavigate();
  const toggleClicked = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header>
        {loading ? (
          <Loader color="purple" style={{ display: "flex", margin: "auto" }} />
        ) : (
          <div className="contact-details">
            <div className="phone">
              <span>
                <PhoneIcon />
                {data?.primaryContact}
              </span>
              <span>
                <EmailIcon style={{ marginRight: "0.4rem" }} />
                <a href={`mailto:${data?.primaryEmail}`}>
                  {data?.primaryEmail}
                </a>
              </span>
            </div>

            <div className="socials">
              <div className="social-media-platforms">
                <a href={data?.facebook} target="_blank">
                  <FacebookIcon className="img" />
                </a>
                <a href={data?.instagram} target="_blank">
                  <InstagramIcon className="img" />
                </a>
                <a href={data?.linkedIn} target="_blank">
                  <LinkedInIcon className="img" />
                </a>
              </div>
              <button
                className="mb-1"
                onClick={() => {
                  navigation("/contact-us");
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}

        {/* Navbar started */}
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} className="img" alt="logo" />
            </Link>
          </div>

          <div className="nav-links">
            <ul className="menu">
              <li className="item">
                <Link to="/">Home</Link>
              </li>
              <li className="item">
                <Link to="/our-services">Services</Link>
              </li>
              <li className="item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="item">
                <Link to="/products">Our Products</Link>
              </li>
              <li className="item">
                <Link to="/career">Careers</Link>
              </li>
              <li className="item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="item">
                <Link to="/blogs">Blog</Link>
              </li>
              <li className="item toggle" onClick={toggleClicked}>
                <Link to="#">
                  <BiMenu />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {showMenu ? (
          <div className="mobile-nav">
            <ul
              className="menu"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <li className="item">
                <Link to="/">Home</Link>
              </li>
              <li className="item">
                <Link to="/our-services">Services</Link>
              </li>
              <li className="item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="item">
                <Link to="/products">Our Products</Link>
              </li>
              <li className="item">
                <Link to="/career">Careers</Link>
              </li>
              <li className="item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="item">
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
