import React from "react";
import { Container, Image } from "react-bootstrap";
import Kitchen from "../assets/images/Kitchen.jpg";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <Container>
        <div className="menu__container">
          <Image src={Kitchen} className="menu__img" />
          <div className="menu__title-group">
            <h2 className="menu__title">Weekmenu</h2>
            <div className="menu__subtitle">Deze pagina wordt nog bereidt.</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Menu;
