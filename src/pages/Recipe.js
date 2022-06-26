import React from "react";
import { useParams } from "react-router-dom";
import useDocument from "../hooks/useDocument";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../utils/database";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShowDetails from "../components/recipe/ShowDetails";
import ShowIngredients from "../components/recipe/ShowIngredients";
import ShowPreparations from "../components/recipe/ShowPreparations";
import RecipeUpdate from "../pages/RecipeUpdate";
import ModalCheck from "../components/ModalCheck";
import RecipeRating from "../components/RecipeRating";
import "../styles/Recipe.css";

async function Recipe() {
  const { id } = useParams();
  // data ophalen van 1 document/recept met hook
  // const recipe = useDocument("recipe", id);

  // usedocument werkt niet na deployment > zonder useHook
  const docRef = doc(db, "recipe", id);
  const docSnap = await getDoc(docRef);
  const recipe = docSnap.data() || null;
  const data = Array.from(recipe);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const verwijderObject = { opdracht: "verwijderen", bevestiging: "Verwijder" };
  const updateObject = { opdracht: "updaten", bevestiging: "Update" };

  console.log(id);
  console.log(data);
  console.log(data?.[0]?.nameRecipe);
  console.log(recipe);
  console.log(recipe?.[0]?.nameRecipe);

  const handleDelete = async (id) => {
    const docRef = doc(db, "recipe", id);
    try {
      await deleteDoc(docRef);
      navigate("/overview");
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async (id, data) => {
    console.log(id);
    navigate(`/herzierecept/${id}`, {
      state: { recipeId: id, data: recipe },
    });
    return <RecipeUpdate recipeId={id} />;
  };

  return (
    <section className="recipeMain">
      <Container>
        <Row>
          <Col>
            {/* <Row> */}
            <div className="recipeMain__title">
              <h2>{data?.[0]?.nameRecipe}</h2>
              <h2>{recipe[0]?.nameRecipe}</h2>
            </div>
            <div className="recipeMain__group">
              <ShowDetails
                cookingTime={data?.[0]?.cookingTime}
                mealType={data?.[0]?.mealType}
                cuisineType={data?.[0]?.cuisineType}
                difficulty={data?.[0]?.difficulty}
                cost={data?.[0]?.cost}
                allergens={data?.[0]?.allergens}
              />
            </div>
            {currentUser && data[0]?.userId === currentUser.uid && (
              <div className="recipeMain__group-buttons">
                <Row>
                  <Col>
                    <ModalCheck
                      handleEvent={handleDelete}
                      text={verwijderObject}
                      id={id}
                    />
                  </Col>
                  <Col>
                    <ModalCheck
                      handleEvent={handleUpdate}
                      text={updateObject}
                      id={id}
                      data={data}
                    />
                  </Col>
                </Row>
              </div>
            )}
          </Col>
          <Col>
            <Container style={{ padding: "1em" }}>
              <Image className="img-fluid rounded" src={data[0]?.image} />
              <RecipeRating recipeId={id} />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <ShowIngredients ingredients={data[0]?.ingredients} />
          </Col>
          <Col>
            <ShowPreparations preparations={data[0]?.preparations} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Recipe;
