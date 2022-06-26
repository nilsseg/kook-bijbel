import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { currentUser, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Kijk in je mailbox voor meer instructies");
    } catch {
      setError("Gefaald om je wachtwoord te resetten");
    }

    setLoading(false);
  }

  return (
    <section className="card-change-password">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ paddingTop: `10rem` }}
      >
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          {/* <div className="card-change-password"> */}
          <Card.Body>
            <h2 className="text-center mb-4">Wachtwoord wijzigen</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>E-mailadres</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <div className="card-btn">
                <Button disabled={loading} className="w-100" type="submit">
                  Wijzig wachtwoord
                </Button>
              </div>
            </Form>
            {!currentUser && (
              <div className="w-100 text-center mt-3">
                <Link to="/login">Meld je aan</Link>
              </div>
            )}
          </Card.Body>
          {!currentUser && (
            <div className="card-link-register">
              <div className="w-100 text-center mt-2">
                Nog geen profiel?{" "}
                <Link to="/registreer">Registreer je hier</Link>
              </div>
            </div>
          )}
        </Card>
      </Container>
    </section>
  );
}
