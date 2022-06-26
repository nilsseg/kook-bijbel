import React from "react";
import { Row, Col, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const RecipeDetails = ({
  cookingTime,
  mealType,
  cuisineType,
  cost,
  difficulty,
  updateForm,
}) => {
  const onChange = (e) => updateForm(e.target.name, e.target.value);

  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <FloatingLabel htmlFor="mealType" label="Type maaltijd">
            <Form.Select
              name="mealType"
              defaultValue={mealType ? mealType : "default"}
              id="mealType"
              onChange={onChange}
            >
              <option value={"default"} disabled>
                Maak een keuze
              </option>
              <option value="Ontbijt">Ontbijt</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
          <FloatingLabel htmlFor="cuisineType" label="Type Keuken">
            <Form.Select
              name="cuisineType"
              defaultValue={cuisineType ? cuisineType : "default"}
              id="cuisingeType"
              onChange={onChange}
            >
              <option value={"default"} disabled>
                Maak een keuze
              </option>
              <option value="Belgisch-Frans">Belgisch-Frans</option>
              <option value="Tex-Mex">Tex-Mex</option>
              <option value="Mediterraans">Mediterraans</option>
              <option value="Oosters">Oosters</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <FloatingLabel htmlFor="cookingTime" label="Bereidingstijd">
            <Form.Select
              name="cookingTime"
              defaultValue={cookingTime ? cookingTime : "default"}
              id="cookingTime"
              onChange={onChange}
            >
              <option value={"default"} disabled>
                Maak een keuze
              </option>
              <option value="Minder dan 30 minuten">
                Minder dan 30 minuten
              </option>
              <option value="Tusen de 30 minuten en een uur">
                Tusen de 30 minuten en een uur
              </option>
              <option value="Meer dan een uur">Meer dan een uur</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
          <FloatingLabel htmlFor="cost" label="Budget">
            <Form.Select
              name="cost"
              defaultValue={cost ? cost : "default"}
              id="cost"
              onChange={onChange}
            >
              <option value={"default"} disabled>
                Maak een keuze
              </option>
              <option value="Goedkoop">Goedkoop</option>
              <option value="Iets duurder">Iets duurder</option>
              <option value="Duur">Duur</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
          <FloatingLabel htmlFor="difficulty" label="Moeilijkheid">
            <Form.Select
              name="difficulty"
              defaultValue={difficulty ? difficulty : "default"}
              id="difficulty"
              onChange={onChange}
            >
              <option value={"default"} disabled>
                Maak een keuze
              </option>
              <option value="Erg gemakkelijk">Erg gemakkelijk</option>
              <option value="Makkelijk">Makkelijk</option>
              <option value="Moeilijk">Moeilijk</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
      </Row>
    </div>
  );
};

export default RecipeDetails;
