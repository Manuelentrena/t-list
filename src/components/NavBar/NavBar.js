import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            USUARIOS
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/tasks" className="navbar__link">
            TAREAS
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/states" className="navbar__link">
            ESTADOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
