import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export const Filter = ({ setFilters, selectedFilters }) => {
  const onChange = (e) => {
    /**
     * {
     * cuisineType:["Mediterraans"]
     * }
     */
    const selectedName = e.target.name;
    if (e.target.checked) {
      // if checkboxes are being checked
      setFilters({
        // we spread selectedFilters to preserve already selected filters
        ...selectedFilters,
        // check if selectedName is already present in selectedFilters
        [selectedName]: selectedFilters[selectedName]
          ? // if so we added the newly selected value to the existing array in the selectedFilters
            selectedFilters[selectedName].concat(e.target.value)
          : // if not we initialise a new array with the selected value
            [e.target.value],
      });
    } else {
      // if checkboxes are being deselected
      // we calculate the new values of the selectedName by removing the selected value
      const newValues = selectedFilters[selectedName].filter(
        (value) => value !== e.target.value
      );
      // we spread selectedFilters to preserve already selected filters
      const newFilters = { ...selectedFilters, [selectedName]: newValues };
      // if the new values are an empty array we need to remove the selectedName from the selectedFilters
      // because firebase doesn't allow an empty array in it's compound queries
      if (newValues.length === 0) {
        delete newFilters[selectedName];
      }
      setFilters(newFilters);
      console.log(newFilters);
    }
  };

  return (
    // <Container> rond overview page
    <Row>
      <Col>
        <Form>
          {["checkbox"].map((type) => (
            <Form.Group key={`default-${type}`} className="mb-3">
              <Form.Label>Keuken</Form.Label>
              <Form.Check
                type={type}
                id={`default-${type}-Belgisch-Frans`}
                label="Belgisch-Frans"
                value="Belgisch-Frans"
                name="cuisineType"
                checked={
                  selectedFilters.cuisineType?.includes("Belgisch-Frans") ||
                  false
                }
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Tex-Mex`}
                label="Tex-Mex"
                value="Tex-Mex"
                name="cuisineType"
                checked={
                  selectedFilters.cuisineType?.includes("Tex-Mex") || false
                }
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Mediterraans`}
                label="Mediterraans"
                value="Mediterraans"
                name="cuisineType"
                checked={
                  selectedFilters.cuisineType?.includes("Mediterraans") || false
                }
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Oosters`}
                label="Oosters"
                value="Oosters"
                name="cuisineType"
                checked={
                  selectedFilters.cuisineType?.includes("Oosters") || false
                }
                onChange={onChange}
              />
            </Form.Group>
          ))}

          {["checkbox"].map((type) => (
            <Form.Group key={`default-${type}`} className="mb-3">
              <Form.Label>Type Gerecht</Form.Label>
              <Form.Check
                type={type}
                id={`default-${type}-Ontbijt`}
                label="Ontbijt"
                value="Ontbijt"
                name="mealType"
                checked={selectedFilters.mealType?.includes("Ontbijt") || false}
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Lunch`}
                label="Lunch"
                value="Lunch"
                name="mealType"
                checked={selectedFilters.mealType?.includes("Lunch") || false}
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Dinner`}
                label="Dinner"
                value="Dinner"
                name="mealType"
                checked={selectedFilters.mealType?.includes("Dinner") || false}
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Dessert`}
                label="Dessert"
                value="Dessert"
                name="mealType"
                checked={selectedFilters.mealType?.includes("Dessert") || false}
                onChange={onChange}
              />
            </Form.Group>
          ))}
          {["checkbox"].map((type) => (
            <Form.Group key={`default-${type}`} className="mb-3">
              <Form.Label>Type Gerecht</Form.Label>
              <Form.Check
                type={type}
                id={`default-${type}-Max30`}
                label="Minder dan 30 minuten"
                value="Minder dan 30 minuten"
                name="cookingTime"
                checked={
                  selectedFilters.cookingTime?.includes(
                    "Minder dan 30 minuten"
                  ) || false
                }
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Max60`}
                label="Tusen de 30 minuten en een uur"
                value="Tusen de 30 minuten en een uur"
                name="cookingTime"
                checked={
                  selectedFilters.cookingTime?.includes(
                    "Tusen de 30 minuten en een uur"
                  ) || false
                }
                onChange={onChange}
              />
              <Form.Check
                type={type}
                id={`default-${type}-Min60`}
                label="Meer dan een uur"
                value="Meer dan een uur"
                name="cookingTime"
                checked={
                  selectedFilters.cookingTime?.includes("Meer dan een uur") ||
                  false
                }
                onChange={onChange}
              />
            </Form.Group>
          ))}
        </Form>
      </Col>
    </Row>
    // </Container>
  );
};
