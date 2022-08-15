import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "../../styles/Preparations.css";

const Preparations = ({ preparations, updateForm }) => {
  const handlePreparation = (e, i) => {
    const preparationClone = [...preparations];
    preparationClone[i].text = e.target.value;
    updateForm(e.target.name, preparationClone);
  };

  // const handlePreparationCount = () => {
  //   updateForm("preparations", [...preparations, { id: uuidv4(), text: "" }]);
  // };

  const handlePreparationCount = (i) => {
    const preparationClone = [...preparations];
    preparationClone.splice(i + 1, 0, {
      id: uuidv4(),
      text: "",
    });
    updateForm("preparations", preparationClone);
  };

  const removePreparation = (i) => {
    const preparationClone = [...preparations];
    preparationClone.splice(i, 1);
    updateForm("preparations", preparationClone);
  };
  return (
    <div className="form-preparations">
      <Form.Label htmlFor="preparations">Bereidingen</Form.Label>
      <Row>
        <Col>
          {preparations.map((preparation, i) => (
            <Form.Group className="form-preparations-item" key={preparation.id}>
              <Row>
                <Col xs={9}>
                  <Form.Control
                    as="textarea"
                    name="preparations"
                    value={preparation.text}
                    id="preparations"
                    onChange={(e) => handlePreparation(e, i)}
                  />
                </Col>
                <Col xs={3}>
                  <div className="form-buttons">
                    <Row>
                      <Col>
                        {/* <Button type="button" onClick={handlePreparationCount}> */}
                        <Button
                          type="button"
                          onClick={() => handlePreparationCount(i)}
                        >
                          {/* Voeg een volgende stap toe */}
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>
                      </Col>
                      <Col>
                        {i ? (
                          <Button onClick={() => removePreparation(i)}>
                            {/* Verwijder stap */}
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        ) : null}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Form.Group>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Preparations;
