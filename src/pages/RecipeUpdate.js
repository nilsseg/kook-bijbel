import React, { useState } from "react";
import { db, storage } from "../utils/database";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Title from "../components/recipeForm/Title";
import RecipeDetails from "../components/recipeForm/RecipeDetails";
import Allergens from "../components/recipeForm/Allergens";
// import Feedback from "../components/recipeForm/Feedback";
import Ingredients from "../components/recipeForm/Ingredients";
import Preparations from "../components/recipeForm/Preparations";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../styles/RecipeUpdate.css";

function RecipeUpdate() {
  const location = useLocation();
  console.log(location.state.recipeId, location.state?.data);
  console.log(location.state?.data[0].cost);
  const { recipeId, data } = location.state;
  console.log(data);
  console.log(recipeId);

  const [form, setForm] = useState({
    // comment: "",
    cost: data[0]?.cost,
    cuisineType: data[0]?.cuisineType,
    image: data[0]?.image,
    mealType: data[0]?.mealType,
    nameRecipe: data[0]?.nameRecipe,
    cookingTime: data[0]?.cookingTime,
    preparations: data[0]?.preparations,
    ingredients: data[0]?.ingredients,
    allergens: data[0]?.allergens,
    // score: "",
    difficulty: data[0]?.difficulty,
    // userId: "",
    // userName: "",
  });

  const updateForm = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);
  console.log(form.difficulty);
  const [newImage, setNewImage] = useState(data[0]?.image);

  const uploadImage = async (e) => {
    let file = e.target.files[0];
    let imageRef = ref(storage, `images/${file.name + Date.now()}`);
    console.log(imageRef);
    await uploadBytesResumable(imageRef, file);
    await getDownloadURL(imageRef).then((url) => {
      setNewImage(url);
      console.log(newImage);
    });
    console.log(newImage);
  };

  const navigate = useNavigate();

  const handleUpdate = async (recipeId) => {
    // e.preventDefault();
    const docRef = doc(db, "recipe", recipeId);
    await updateDoc(docRef, {
      // comment: form.comment,
      cost: form.cost,
      cuisineType: form.cuisineType,
      image: newImage,
      mealType: form.mealType,
      nameRecipe: form.nameRecipe,
      cookingTime: form.cookingTime,
      preparations: form.preparations,
      ingredients: form.ingredients,
      allergens: form.allergens,
      // score: form.score,
      difficulty: form.difficulty,
      // userId: currentUser.uid,
      // userName: currentUser.displayName,
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
    // "/recepten/:id/:name"
    navigate(`/recepten/${recipeId}/${data[0]?.nameRecipe}`);
    // navigate("/overview");
  };

  return (
    <section className="recipeUpdate">
      <Container>
        <Row>
          <Col>
            <div className="recipeUpdate__title">
              <h2>Pas jouw recept aan</h2>
            </div>

            <div className="recipeUpdate__group">
              <Title nameRecipe={form.nameRecipe} updateForm={updateForm} />
            </div>

            <div className="recipeUpdate__group">
              <RecipeDetails
                cookingTime={form.cookingTime}
                mealType={form.mealType}
                cuisineType={form.cuisineType}
                cost={form.cost}
                difficulty={form.difficulty}
                updateForm={updateForm}
              />
            </div>

            <div className="recipeUpdate__group">
              <Allergens allergens={form.allergens} updateForm={updateForm} />
            </div>
          </Col>
          <Col>
            <div className="recipeUpdate__group-image">
              <label className="recipeUpdate__group-image-label">
                Pas de foto van je recept aan
              </label>
              <input type="file" onChange={(e) => uploadImage(e)} />
            </div>
            <div className="recipeUpdate__group-image-container">
              <Image
                src={newImage}
                className="recipeUpdate__group-image-item"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="recipeUpdate__button">
              <Button
                onClick={() => {
                  handleUpdate(recipeId);
                }}
              >
                Sla je aanpassingen op
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="recipeUpdate__group">
              <Ingredients
                ingredients={form.ingredients}
                updateForm={updateForm}
              />
            </div>
          </Col>
          <Col>
            <div className="recipeUpdate__group">
              <Preparations
                preparations={form.preparations}
                updateForm={updateForm}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RecipeUpdate;
