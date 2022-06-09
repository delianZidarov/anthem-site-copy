import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./css/Footer.css";
function Footer() {
  return (
    <footer className="container-fluid  text-center site-footer">
      <div className="row">
        <div className="col-12">
          <div className="social-links">
            <a href="#" className="btn">
              <FontAwesomeIcon icon={faInstagram} className="fontawesome-icon" />
            </a>
            <a href="#" className="btn">
              <FontAwesomeIcon icon={faFacebookF} className="fontawesome-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 mb-2">
          ALL RIGHTS RESERVED <br /> ANTHEM COFFEE AND TEA
        </div>
      </div>

      <div className="row pb-3 mb-2">
        <div className="col-12">COPYRIGHT 2019</div>
      </div>
    </footer>
  );
}

export default Footer;
