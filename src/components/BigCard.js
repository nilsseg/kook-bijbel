import React from "react";
import Card from "react-bootstrap/Card";
import { useParams, Link } from "react-router-dom";

import "../styles/BigCard.css";

function BigCard({ recipe }) {
  const { id, name } = useParams();

  return (
    <div className="bigCard">
      <Link
        to={`/recepten/${recipe.id}/${recipe.nameRecipe}`}
        style={{
          textDecoration: "inherit",
          color: "inherit",
          display: "inline-block",
        }}
      >
        <Card>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.nameRecipe}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {recipe.mealType} - {recipe.cookingTime} - {recipe.cost}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default BigCard;
