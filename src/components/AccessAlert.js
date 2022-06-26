import React, { useState } from "react";
import { Alert, Button } from "bootstrap";

function AccessAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="info">
        <Alert.Heading>Geen toegang</Alert.Heading>
        <p>Meld je aan of om toegang te krijgen tot deze pagina</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AccessAlert;
