import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import egg from "../../assets/icons/egg.png";
import gluten from "../../assets/icons/gluten.png";
import lupin from "../../assets/icons/lupin.png";
import milk from "../../assets/icons/milk.png";
import mustard from "../../assets/icons/mustard.png";
import almond from "../../assets/icons/almond.png";
import peanuts from "../../assets/icons/peanuts.png";
import mollusc from "../../assets/icons/mollusc.png";
import soybean from "../../assets/icons/soybean.png";
import sesame from "../../assets/icons/sesame.png";
import celery from "../../assets/icons/celery.png";
import sulfide from "../../assets/icons/sulfide.png";
import fish from "../../assets/icons/fish.png";
import crustaceans from "../../assets/icons/crustaceans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEuroSign,
  faUtensils,
  faTags,
  faHandDots,
} from "@fortawesome/free-solid-svg-icons";

function ShowDetails({
  cookingTime,
  mealType,
  cuisineType,
  difficulty,
  cost,
  allergens,
}) {
  console.log(allergens);
  return (
    <Container>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faClock} title="Bereidingstijd" />
          <span> {cookingTime}</span>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faEuroSign} title="Budget" />
          <span> {cost}</span>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faUtensils} title="Moeilijkheid" />
          <span> {difficulty}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faTags} title="Type Gerecht, Keuken" />
          <span> {mealType}, </span>
          <span>{cuisineType} keuken</span>
        </Col>
        <Col>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faHandDots} title="Allergenen" />{" "}
              {allergens?.eieren === true && (
                <span>
                  <Image
                    src={egg}
                    width={"17em"}
                    height={"17em"}
                    title="eieren"
                  />
                </span>
              )}
              {allergens?.gluten === true && (
                <span>
                  <Image
                    src={gluten}
                    width={"17em"}
                    height={"17em"}
                    title="gluten"
                  />
                </span>
              )}
              {allergens?.lupine === true && (
                <span>
                  <Image
                    src={lupin}
                    width={"17em"}
                    height={"17em"}
                    title="lupine"
                  />
                </span>
              )}
              {allergens?.melk === true && (
                <span>
                  <Image
                    src={milk}
                    width={"17em"}
                    height={"17em"}
                    title="melk"
                  />
                </span>
              )}
              {allergens?.mosterd === true && (
                <span>
                  <Image
                    src={mustard}
                    width={"17em"}
                    height={"17em"}
                    title="mosterd"
                  />
                </span>
              )}
              {allergens?.noten === true && (
                <span>
                  <Image
                    src={almond}
                    width={"17em"}
                    height={"17em"}
                    title="noten"
                  />
                </span>
              )}
              {allergens?.pinda === true && (
                <span>
                  <Image
                    src={peanuts}
                    width={"17em"}
                    height={"17em"}
                    title="pinda"
                  />
                </span>
              )}
              {allergens?.schaaldieren === true && (
                <span>
                  <Image
                    src={crustaceans}
                    width={"17em"}
                    height={"17em"}
                    title="schaaldieren"
                  />
                </span>
              )}
              {allergens?.selderij === true && (
                <span>
                  <Image
                    src={celery}
                    width={"17em"}
                    height={"17em"}
                    title="selderij"
                  />
                </span>
              )}
              {allergens?.sesamzaad === true && (
                <span>
                  <Image
                    src={sesame}
                    width={"17em"}
                    height={"17em"}
                    title="sesamzaad"
                  />
                </span>
              )}
              {allergens?.soja === true && (
                <span>
                  <Image
                    src={soybean}
                    width={"17em"}
                    height={"17em"}
                    title="soja"
                  />
                </span>
              )}
              {allergens?.sulfiet === true && (
                <span>
                  <Image
                    src={sulfide}
                    width={"17em"}
                    height={"17em"}
                    title="sulfiet"
                  />
                </span>
              )}
              {allergens?.vis === true && (
                <span>
                  <Image
                    src={fish}
                    width={"17em"}
                    height={"17em"}
                    title="vis"
                  />
                </span>
              )}
              {allergens?.weekdieren === true && (
                <span>
                  <Image
                    src={mollusc}
                    width={"17em"}
                    height={"17em"}
                    title="weekdieren"
                  />
                </span>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowDetails;
