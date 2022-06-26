import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Image } from "react-bootstrap";
import "../styles/Header.css";
import chef from "../assets/icons/chef.png";

function Header() {
  return (
    <section className="header">
      <section className="header__container">
        <section className="header__logo">
          <Link to="/" className="header-item">
            <Image
              src={chef}
              width={"40em"}
              height={"40em"}
              title="chef-logo"
              className="header__image"
            />
            <div className="header__title">
              <span className="header__title-item">Kook</span>
              <span className="header__title-item">Bijbel</span>
            </div>
          </Link>
        </section>
        <section className="header__navbar">
          <section className="header__navigation">
            <Navbar />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Header;
