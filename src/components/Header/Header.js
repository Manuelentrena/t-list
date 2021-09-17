import React, { useEffect, useState } from "react";
import useSecurity from "hooks/useSecurity";
import { useHistory } from "react-router";
import "./styles.css";

export default function Header() {
  const { isLogin, logout, getUser, idUser } = useSecurity();
  let history = useHistory();
  const [username, setUserName] = useState(null);

  useEffect(() => {
    /* No no esta logueado lo redirigimos a login */
    !isLogin && history.push(`/login`);
    /* Si esta logueado mostramos sus datos */
    async function nameUser() {
      const { name } = await getUser({ value: idUser, searchBy: "id" });
      setUserName(name);
    }
    isLogin && nameUser();
  }, [isLogin, history, getUser, idUser]);

  const handleClickLogin = () => {
    logout();
  };

  return (
    <div className="header">
      <h1 className="header__logo">T-LIST 📑</h1>
      <div className="header__controls">
        <p className="header__reg">{`Hola, ${username}`}</p>
        <button className="form__button" onClick={handleClickLogin}>
          SALIR
        </button>
      </div>
    </div>
  );
}
