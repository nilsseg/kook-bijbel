import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/database";
import "../styles/Register.css";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { register, profileDetails } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Wachtwoorden moeten overeenkomen");
    }

    try {
      setError("");
      setLoading(true);
      const results = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      const displayName = nameRef.current.value;
      await profileDetails(results.user, {
        displayName,
      });

      // nieuwe gebruiker wegschrijven in firestore
      await setDoc(doc(db, "users", results.user.uid), {
        userName: displayName,
        userid: results.user.uid,
        userEmail: results.user.email,
      });
      console.log(results);
      console.log(results.id);
      console.log(results.user.id);
      navigate("/");
    } catch {
      setError("Profiel aanmaken is niet gelukt");
    }
    setLoading(false);
  }

  return (
    <section className="card-register">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ paddingTop: `2.5em` }}
      >
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <div>
            <Card.Body>
              <h2 className="text-center mb-4">Maak je profiel aan</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="profielnaam">
                  <Form.Label>Profielnaam</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Jeroen Huysentruyt"
                    autoFocus
                    ref={nameRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="email" style={{ paddingTop: `0.4em` }}>
                  <Form.Label>E-mailadres</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="password" style={{ paddingTop: `0.4em` }}>
                  <Form.Label>Wachtwoord</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group
                  id="password-confirm"
                  style={{ paddingTop: `0.4em` }}
                >
                  <Form.Label>Wachtwoord bevestigen</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <div className="card-btn">
                  <Button disabled={loading} className="w-100" type="submit">
                    Ga verder
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <div className="card-link-register">
              <div className="w-100 text-center mt-2">
                Heb je al een profiel? <Link to="/login">Log je aan</Link>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
