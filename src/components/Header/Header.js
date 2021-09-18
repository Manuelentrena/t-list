import React, { useEffect } from "react";
import useSecurity from "hooks/useSecurity";
import { useHistory } from "react-router";
import "./styles.css";

export default function Header() {
  const { isLogin, logout, userName } = useSecurity();
  let history = useHistory();

  useEffect(() => {
    !isLogin && history.push(`/login`);
  }, [isLogin, history]);

  const handleClickLogin = () => {
    logout();
  };

  return (
    <div className="header">
      <h1 className="header__logo">T-LIST 📑</h1>
      <div className="header__controls">
        <p className="header__reg">{`Hola, ${userName}`}</p>
        <button className="form__button" onClick={handleClickLogin}>
          SALIR
        </button>
      </div>
    </div>
  );
}
