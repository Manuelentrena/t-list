import React from "react";
import { Logo } from "components";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        Realizado por{" "}
        <a
          className="footer__link"
          href="https://www.instagram.com/manuel_entrena"
        >
          @Manuel Entrena
        </a>
      </p>
      <Logo />
    </div>
  );
}
