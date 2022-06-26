import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { ThemeContext } from "../context/ThemeContext";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleUser,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  const { currentUser, logout } = useAuth();
  console.log(currentUser);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Niet gelukt om af te melden");
    }
  }

  return (
    <nav className="navbar">
      <Link to="/overview" className="navbar-item">
        Alle recepten
      </Link>
      <Link to="/nieuwrecept" className="navbar-item">
        Voeg een recept toe
      </Link>
      <Link to="/weekmenu" className="navbar-item">
        Weekmenu
      </Link>

      {!currentUser && (
        <div className="navbar-item">
          <NavDropdown
            title={
              <FontAwesomeIcon icon={faCircleUser} className="dropdown-logo" />
            }
            id="dropdown-menu-align-end"
          >
            <NavDropdown.Item
              eventKey="4.1"
              href="/login"
              className="dropdown-item"
            >
              Aanmelden
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              eventKey="4.2"
              href="/registreer"
              className="dropdown-item"
            >
              Nog geen profiel?
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      )}
      {currentUser && (
        <div className="navbar-item">
          <NavDropdown
            title={
              <FontAwesomeIcon icon={faCircleUser} className="dropdown-logo" />
            }
            id="dropdown-menu-align-end"
          >
            <NavDropdown.Header>
              {currentUser.displayName} - {currentUser.email}
            </NavDropdown.Header>
            <NavDropdown.Divider />
            <NavDropdown.Item
              eventKey="4.3"
              href="/forgotpassword"
              className="dropdown-item"
            >
              Wachtwoord wjzigen
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              eventKey="4.4"
              onClick={handleLogout}
              className="dropdown-item"
            >
              Afmelden
            </NavDropdown.Item>
          </NavDropdown>
          <FontAwesomeIcon icon={faCheckCircle} className="navbar-icon" />
        </div>
      )}
      <button onClick={toggleTheme} className="navbar-item">
        {theme === "light" ? (
          <span>
            <FontAwesomeIcon icon={faCircleHalfStroke} /> Dark Mode{" "}
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faCircleHalfStroke} /> Light Mode{" "}
          </span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
