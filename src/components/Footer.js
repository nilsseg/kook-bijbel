import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import chef from "../assets/icons/chef.png";
import { Image } from "react-bootstrap";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <section className="footer__logo-container">
          <Link to="/" className="footer__logo">
            <Image
              src={chef}
              width={"26em"}
              height={"26em"}
              title="chef-logo"
            />
          </Link>
        </section>
        <section className="footer__socials">
          <span className="footer-title">Volg ons op </span>
          <a className="footer-item" href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a className="footer-item" href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a className="footer-item" href="https://nl.pinterest.com/">
            <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
          </a>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
