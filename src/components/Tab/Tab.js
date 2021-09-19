import React from "react";
import { useLocation } from "react-router";
import "./styles.css";

const PATHS = {
  "/": "USUARIOS",
  "/tasks": "TAREAS",
  "/states": "ESTADOS",
};

export default function Tab() {
  const { pathname } = useLocation();
  return (
    <div className="tab">
      <h2 className="tab__title">{PATHS[pathname]}</h2>
    </div>
  );
}
