import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      const origin = location?.state?.from?.pathname || "/";
      navigate(origin);
    } catch {
      setError("Aanmelden is niet gelukt");
    }

    setLoading(false);
  }

  return (
    <section className="card-login">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ paddingTop: `8em` }}
      >
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <div>
            <Card.Body>
              <h2 className="text-center mb-4">Meld je aan</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>E-mailadres</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label style={{ paddingTop: `0.4em` }}>
                    Wachtwoord
                  </Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <div className="card-btn">
                  <Button disabled={loading} className="w-100" type="submit">
                    Aanmelden
                  </Button>
                </div>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgotpassword">Wachtwoord vergeten?</Link>
              </div>
            </Card.Body>
            <div className="card-link-register">
              <div className="w-100 text-center mt-2">
                Nog geen profiel?{" "}
                <Link to="/registreer">Registreer je hier</Link>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
