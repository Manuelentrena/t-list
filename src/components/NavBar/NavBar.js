import React, { useContext } from "react";
import UserProvider from "providers/UserProvider";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  const { setUserChange } = useContext(UserProvider);

  const handleClick = () => {
    setUserChange({});
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link" onClick={handleClick}>
            USUARIOS
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/tasks" className="navbar__link" onClick={handleClick}>
            TAREAS
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/states" className="navbar__link" onClick={handleClick}>
            ESTADOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
