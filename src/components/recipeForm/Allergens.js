import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function Allergens({ allergens, updateForm }) {
  console.log(allergens);
  const [allergen, setAllergen] = useState(allergens);

  useEffect(() => {
    updateForm("allergens", allergen);
  }, [allergen]);

  const onChange = (e) => {
    setAllergen({ ...allergens, [e.target.value]: e.target.checked });
  };
  console.log(allergen);

  return (
    <div>
      <Form.Label>Allergenen</Form.Label>
      {["checkbox"].map((type) => (
        <Form.Group key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="gluten"
            type={type}
            name="allergen"
            value="gluten"
            checked={allergen.gluten}
            id={`inline-${type}-gluten`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="eieren"
            type={type}
            name="allergen"
            value="eieren"
            checked={allergen.eieren}
            id={`inline-${type}-eieren`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="vis"
            type={type}
            name="allergen"
            value="vis"
            checked={allergen.vis}
            id={`inline-${type}-vis`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="pinda"
            type={type}
            name="allergen"
            value="pinda"
            checked={allergen.pinda}
            id={`inline-${type}-pinda`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="noten"
            type={type}
            name="allergen"
            value="noten"
            checked={allergen.noten}
            id={`inline-${type}-noten`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="soja"
            type={type}
            name="allergen"
            value="soja"
            checked={allergen.soja}
            id={`inline-${type}-soja`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="melk"
            type={type}
            name="allergen"
            value="melk"
            checked={allergen.melk}
            id={`inline-${type}-melk`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="schaaldier"
            type={type}
            name="allergen"
            value="schaaldieren"
            checked={allergen.schaaldieren}
            id={`inline-${type}-schaaldieren`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="weekdier"
            type={type}
            name="allergen"
            value="weekdieren"
            checked={allergen.weekdieren}
            id={`inline-${type}-weekdieren`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="selder"
            type={type}
            name="allergen"
            value="selderij"
            checked={allergen.selderij}
            id={`inline-${type}-selderij`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="mosterd"
            type={type}
            name="allergen"
            value="mosterd"
            checked={allergen.mosterd}
            id={`inline-${type}-mosterd`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="sesamzaad"
            type={type}
            name="allergen"
            value="sesamzaad"
            checked={allergen.sesamzaad}
            id={`inline-${type}-sesamzaad`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="sulfiet"
            type={type}
            name="allergen"
            value="sulfiet"
            checked={allergen.sulfiet}
            id={`inline-${type}-sulfiet`}
            onChange={onChange}
          />
          <Form.Check
            inline
            label="lupine"
            type={type}
            name="allergen"
            value="lupine"
            checked={allergen.lupine}
            id={`inline-${type}-lupine`}
            onChange={onChange}
          />
        </Form.Group>
      ))}
    </div>
  );
}

export default Allergens;
