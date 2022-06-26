import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalCheck({ text, handleEvent, id, data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow}>{text.bevestiging} het recept</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opgepast!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ben je zeker dat je het recept wil {text.opdracht}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sluit
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEvent(id);
              handleClose();
            }}
          >
            {text.bevestiging} het recept.
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCheck;
