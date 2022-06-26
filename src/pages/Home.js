import React, { useState, useEffect } from "react";
import RecipeCarousel from "../components/RecipeCarousel";
import "../styles/Home.css";
import useCollection from "../hooks/useCollection";
import { Container, Row, Col } from "react-bootstrap";
import CuisinePreview from "../components/CuisinePreview";

function Home() {
  const [meal, setMeal] = useState({});
  const recipes = useCollection("recipe", { mealType: [meal] });

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
    if (currentTime >= "03:00:00" && currentTime <= "11:00:00") {
      setMeal("Ontbijt");
    } else if (currentTime >= "11:01:00" && currentTime <= "15:30:00") {
      setMeal("Lunch");
    } else {
      setMeal("Dinner");
    }
  }, []);

  console.log(meal);
  console.log(recipes);

  return (
    <main className="main">
      <Container>
        <Row>
          <Col>
            <RecipeCarousel recipes={recipes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CuisinePreview />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
