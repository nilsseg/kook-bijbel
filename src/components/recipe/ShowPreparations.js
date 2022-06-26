import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function ShowPreparations({ preparations }) {
  return (
    <Container>
      <Row>
        <h3 style={{ marginBottom: "1.5em", textAlign: "center" }}>
          Bereiding
        </h3>
      </Row>
      <Row>
        <ul>
          {preparations?.map((preparation) => (
            <li key={uuidv4()}>
              <Row>
                <Col>{preparation?.text}</Col>
              </Row>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
}

export default ShowPreparations;
