import React, { useState } from "react";
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import useLimitedCollection from "../hooks/useLimitedCollection";
import BigCard from "./BigCard";
import burrito from "../assets/icons/burrito.png";
import rice from "../assets/icons/rice.png";
import cutlery from "../assets/icons/cutlery.png";
import pizza from "../assets/icons/pizza.png";
import "../styles/CuisinePreview.css";
import { useNavigate } from "react-router-dom";

function CuisinePreview() {
  const [cuisine, setCuisine] = useState("Belgisch-Frans");
  const recipes = useLimitedCollection("recipe", "4", {
    cuisineType: [cuisine],
  });

  const handleClick = (e) => {
    e.preventDefault();
    setCuisine(e.target.value);
    document.getElementById("cuisineSection").scrollIntoView();
  };

  const getLabel = (cuisineType) => {
    let label;
    // switch neemt value binnen van de cuisineTypes binnen en
    // geeft bijhorend label mee in de knoppen en titel
    switch (cuisineType) {
      case "Belgisch-Frans":
        label = "Belgisch-Franse keuken";
        break;
      case "Tex-Mex":
        label = "Tex-Mex keuken";
        break;
      case "Mediterraans":
        label = "Mediterraanse keuken";
        break;
      case "Oosters":
        label = "Oosterse keuken";
        break;
    }
    console.log("getlabel", label);
    return label;
  };

  const getText = (cuisineType) => {
    let text;
    // switch neemt value binnen van de cuisineTypes binnen en
    // geeft bijhorende text mee onder de titel
    switch (cuisineType) {
      case "Belgisch-Frans":
        text =
          "De traditionele Belgische keuken is veelzijdig en bourgondisch. Belgische thuisgerechten zijn degelijk en landelijk, de fijnere kookkunst van Belgische restaurants wordt dan weer sterk door de Franse keuken beïnvloed en door echte kenners kwalitatief mee gelijkgesteld.";
        break;
      case "Tex-Mex":
        text =
          "De Tex Mex keuken is ontstaan door de mix van twee continenten en valt op door zijn pikante karakter!";
        break;
      case "Mediterraans":
        text =
          "De Mediterraanse keuken staat voor pure gerechten, simpel, eenvoudig en gezond! Je waant je zo op vakantie.";
        break;
      case "Oosters":
        text =
          "Kenmerkend aan Oosterse gerechten is dat hier veel verschillende smaakbelevingen (pittig, zout, zoet, zuurt en ook bitter) in één gerecht samenkomen.";
        break;
    }
    console.log("getText", text);
    return text;
  };

  const navigate = useNavigate();

  return (
    <>
      <ButtonToolbar className={"cuisine-preview-toolbar"}>
        <ButtonGroup>
          <Button
            variant="outline-primary"
            value="Belgisch-Frans"
            name="cuisineType"
            size="lg"
            active={cuisine === "Belgisch-Frans"}
            onClick={(e) => handleClick(e)}
          >
            <Image
              src={cutlery}
              width={"30em"}
              height={"30em"}
              title="Belgian-French cuisine"
            />
            {getLabel("Belgisch-Frans")}
          </Button>
          <Button
            variant="outline-primary"
            value="Tex-Mex"
            name="cuisineType"
            size="lg"
            active={cuisine === "Tex-Mex"}
            onClick={(e) => handleClick(e)}
          >
            <Image
              src={burrito}
              width={"30em"}
              height={"30em"}
              title="Tex-Mex cuisine"
            />
            {getLabel("Tex-Mex")}
          </Button>
          <Button
            variant="outline-primary"
            value="Mediterraans"
            name="cuisineType"
            size="lg"
            active={cuisine === "Mediterraans"}
            onClick={(e) => handleClick(e)}
          >
            <Image
              src={pizza}
              width={"30em"}
              height={"30em"}
              title="Mediterranean cuisine"
            />
            {getLabel("Mediterraans")}
          </Button>
          <Button
            variant="outline-primary"
            value="Oosters"
            name="cuisineType"
            size="lg"
            active={cuisine === "Oosters"}
            onClick={(e) => handleClick(e)}
          >
            <Image
              src={rice}
              width={"30em"}
              height={"30em"}
              title="Eastern cuisine"
            />
            {getLabel("Oosters")}
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Container>
        <Row>
          <Col>
            <h2 className="cuisineTitle">{getLabel(cuisine)}</h2>
            <p>{getText(cuisine)}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div name="cuisineSection" id="cuisineSection">
              {recipes.map((recipe, i) => (
                <BigCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cuisine-more-btn">
              <Button onClick={() => navigate("/overview")}>
                Meer recepten
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CuisinePreview;
