import React, { useState } from "react";
import { db, storage } from "../utils/database";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Title from "../components/recipeForm/Title";
import RecipeDetails from "../components/recipeForm/RecipeDetails";
import Allergens from "../components/recipeForm/Allergens";
import Ingredients from "../components/recipeForm/Ingredients";
import Preparations from "../components/recipeForm/Preparations";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import Empty_plate from "../assets/images/Empty_plate.jpg";
import "../styles/RecipeForm.css";

function RecipeForm() {
  const [form, setForm] = useState({
    comment: "",
    cost: "",
    cuisineType: "",
    image: "",
    mealType: "",
    nameRecipe: "",
    cookingTime: "",
    preparations: [{ id: uuidv4(), text: "" }],
    ingredients: [
      {
        id: uuidv4(),
        text: {
          ingredient: "",
          amount: "",
          unit: "",
        },
      },
    ],
    allergens: {
      gluten: false,
      schaaldieren: false,
      eieren: false,
      vis: false,
      pinda: false,
      soja: false,
      melk: false,
      noten: false,
      selderij: false,
      mosterd: false,
      sesamzaad: false,
      sulfiet: false,
      lupine: false,
      weekdieren: false,
    },
    score: "",
    difficulty: "",
    userId: "",
    userName: "",
  });

  const updateForm = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [imageUrl, setImageUrl] = useState(Empty_plate);

  const uploadImage = async (e) => {
    let file = e.target.files[0];
    // file opslaan onder bestandsnaam + toevoegen unix timestamp om altijd een unieke bestandsnaam te hebben
    let imageRef = ref(storage, `images/${file.name + Date.now()}`);
    await uploadBytesResumable(imageRef, file);
    await getDownloadURL(imageRef).then((url) => {
      setImageUrl(url);
    });
  };

  // ingelogde user ophalen om userid en username aan het recept tekoppelen
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeRef = collection(db, "recipe");
    await addDoc(recipeRef, {
      comment: form.comment,
      cost: form.cost,
      cuisineType: form.cuisineType,
      image: imageUrl,
      mealType: form.mealType,
      nameRecipe: form.nameRecipe,
      cookingTime: form.cookingTime,
      preparations: form.preparations,
      ingredients: form.ingredients,
      allergens: form.allergens,
      score: form.score,
      difficulty: form.difficulty,
      userId: currentUser.uid,
      userName: currentUser.displayName,
    });
    // form leeg maken na doorsturen van data naar firestore
    setForm({
      comment: "",
      cost: "",
      cuisineType: "",
      image: "",
      mealType: "",
      nameRecipe: "",
      cookingTime: "",
      preparations: [],
      ingredients: [],
      allergens: [],
      score: "",
      difficulty: "",
    });
    // na submit van het nieuwe recept navigeren naar overview
    navigate("/overview");
  };

  return (
    <section className="recipeForm">
      <Form>
        <Container>
          <Row>
            <Col>
              <div className="recipeForm__title">
                <h2>Voeg een recept toe</h2>
              </div>

              <div className="recipeForm__group">
                <Title nameRecipe={form.nameRecipe} updateForm={updateForm} />
              </div>

              <div className="recipeForm__group">
                <RecipeDetails
                  cookingTime={form.cookingTime}
                  mealType={form.mealType}
                  cuisineType={form.cuisineType}
                  cost={form.cost}
                  difficulty={form.difficulty}
                  updateForm={updateForm}
                />
              </div>

              <div className="recipeForm__group">
                <Allergens allergens={form.allergens} updateForm={updateForm} />
              </div>
            </Col>
            <Col>
              <div className="recipeForm__group-image">
                <label className="recipeForm__group-image-label">
                  Voeg een foto aan je recept toe
                </label>
                <input type="file" onChange={(e) => uploadImage(e)} />
              </div>
              <div>
                {imageUrl && (
                  <div className="recipeForm__group-image-container">
                    <Image
                      src={imageUrl}
                      className="recipeForm__group-image-item"
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <div className="recipeForm__button">
                <Button type="submit" onClick={handleSubmit}>
                  Sla je recept op
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="recipeForm__group">
                <Ingredients
                  ingredients={form.ingredients}
                  updateForm={updateForm}
                />
              </div>
            </Col>
            <Col>
              <div className="recipeForm__group">
                <Preparations
                  preparations={form.preparations}
                  updateForm={updateForm}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </section>
  );
}

export default RecipeForm;
