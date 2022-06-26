import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Ingredients.css";

const Ingredients = ({ ingredients, updateForm }) => {
  const handleIngredient = (e, i) => {
    const ingredientClone = [...ingredients];
    ingredientClone[i].text.ingredient = e.target.value;
    console.log(ingredientClone);
    updateForm(e.target.name, ingredientClone);
  };

  const handleAmount = (e, i) => {
    const amountClone = [...ingredients];
    amountClone[i].text.amount = e.target.value;
    console.log(amountClone);
    updateForm(e.target.name, amountClone);
  };

  const handleUnit = (e, i) => {
    const unitClone = [...ingredients];
    unitClone[i].text.unit = e.target.value;
    console.log(unitClone);
    updateForm(e.target.name, unitClone);
  };

  const handleIngredientCount = () => {
    updateForm("ingredients", [
      ...ingredients,
      {
        id: uuidv4(),
        text: {
          ingredient: "",
          amount: "",
          unit: "",
        },
      },
    ]);
  };

  const removeIngredient = (i) => {
    const ingredientsClone = [...ingredients];
    ingredientsClone.splice(i, 1);
    updateForm("ingredients", ingredientsClone);
  };

  return (
    <div className="form-ingredients">
      <Form.Label htmlFor="ingredients">
        Ingrediënten (voor twee personen)
      </Form.Label>
      <Row>
        <Col>
          {ingredients.map((ingredient, i) => (
            <div key={ingredient.id}>
              <Row>
                <Col xs={4}>
                  <FloatingLabel className="mb-3">
                    <Form.Control
                      type="text"
                      name="ingredients"
                      placeholder="ingredient"
                      value={ingredient.text.ingredient}
                      id="ingredients-ingredient"
                      onChange={(e) => handleIngredient(e, i)}
                    />
                    <label htmlFor="titel">Ingrediënt</label>
                  </FloatingLabel>
                </Col>
                <Col xs={2}>
                  <FloatingLabel className="mb-3">
                    <Form.Control
                      type="number"
                      name="amount"
                      placeholder="aantal"
                      value={ingredient.text.amount}
                      id="ingredients-amount"
                      onChange={(e) => handleAmount(e, i)}
                    />
                    <label htmlFor="titel">Aantal</label>
                  </FloatingLabel>
                </Col>
                <Col xs={3}>
                  <FloatingLabel className="mb-3">
                    <Form.Select
                      name="unit"
                      defaultValue={
                        ingredient.text.unit ? ingredient.text.unit : "default"
                      }
                      id="unit"
                      onChange={(e) => handleUnit(e, i)}
                    >
                      <option value={"default"} disabled>
                        Kies uit
                      </option>
                      <option value="stuk(s)">stuk(s)</option>
                      <option value="ml ">ml</option>
                      <option value="g">gram</option>
                      <option value="el">el</option>
                      <option value="tl">tl</option>
                      <option value="snuifje(s)">snuifje(s)</option>
                    </Form.Select>
                    <label htmlFor="titel">Eenheid</label>
                  </FloatingLabel>
                </Col>
                <Col xs={3}>
                  <div className="form-buttons">
                    <Row>
                      <Col>
                        <Button type="button" onClick={handleIngredientCount}>
                          {/* Voeg een volgend ingrediënt toe */}
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>
                      </Col>
                      <Col>
                        {i ? (
                          <Button onClick={() => removeIngredient(i)}>
                            {/* Verwijder Ingrediënt */}
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        ) : null}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Ingredients;
