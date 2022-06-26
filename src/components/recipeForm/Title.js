import React from "react";
import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Title = ({ nameRecipe, updateForm }) => {
  const onChange = (e) => updateForm(e.target.name, e.target.value);
  return (
    <div>
      <FloatingLabel className="mb-3">
        <Form.Control
          type="text"
          name="nameRecipe"
          value={nameRecipe}
          placeholder="naam van het recept"
          id="titel"
          onChange={onChange}
          required
        />
        <label htmlFor="titel">Naam van het recept</label>
      </FloatingLabel>
    </div>
  );
};

export default Title;
