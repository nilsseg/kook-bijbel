import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/RecipeCarousel.css";

import { useParams, Link } from "react-router-dom";

function RecipeCarousel({ recipes }) {
  const { id, name } = useParams();

  return (
    <Carousel fade>
      {recipes.map((recipe, i) => (
        <Carousel.Item key={recipe.id}>
          <img
            // className="d-block w-100"
            className="carouselImage"
            style={{ display: "block", width: "100%" }}
            src={recipe.image}
            alt={recipe.nameRecipe}
          />
          <Link
            to={`/recepten/${recipe.id}/${recipe.nameRecipe}`}
            style={{ textDecoration: "none" }}
          >
            <Carousel.Caption>
              <h2 className="carouselTitle">
                Inspiratie nodig voor jouw {recipe.mealType}?
              </h2>

              <p className="carouselRecipe">{recipe.nameRecipe}</p>

              <p className="carouselText">
                Klik en bekijk het {recipe.mealType} recept
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RecipeCarousel;
