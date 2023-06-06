import React, { useEffect, useState } from "react";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-white.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-white.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin-white.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../../constants";
import { Loader } from "@mantine/core";

function Footer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/api/v1/web/contactUs").then((res) => {
      setData(res.data.data[0]);
      setLoading(false);
    });
  }, []);
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
            {loading ? (
              <Loader
                color="white"
                style={{ display: "flex", margin: "auto" }}
              />
            ) : (
              <div class="footer-div-2">
                <h2>Contact Us</h2>
                <span>{data?.primaryEmail}</span>
                <span>{data?.primaryContact}</span>
                <span>{data?.primaryAddress}</span>
              </div>
            )}
            <div class="footer-div-3">
              <div class="socials-footer">
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
