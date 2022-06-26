import React from "react";
import { Container, Image } from "react-bootstrap";
import just_crumbles from "../assets/images/just_crumbles.jpg";
import "../styles/Error.css";

function Error() {
  return (
    <div className="error">
      <Container>
        <div className="error__container">
          <Image src={just_crumbles} className="error__img" />
          <div className="error__title-group">
            <h2 className="error__title">404</h2>
            <div className="error__subtitle">
              Oops! Deze pagina kan niet worden gevonden.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Error;
