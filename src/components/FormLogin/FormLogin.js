import React, { useState, useEffect } from "react";
import useSecurity from "hooks/useSecurity";
import { useHistory } from "react-router";
import { Spinner } from "components";
import { Link } from "react-router-dom";

export default function FormLogin() {
  let history = useHistory();
  const { login, isLogin, isLoading, msg, errorLogin } = useSecurity();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  /* Verificamos si tiene token */
  useEffect(() => {
    isLogin && history.push("/");
  }, [isLogin, history]);

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...values });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email..."
          value={values.email}
          onChange={handleChange}
          autoComplete="on"
          required
        />
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Password..."
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          required
        />
        {errorLogin && <p className="form__error">{msg}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          <button className="form__button">ENTRAR</button>
        )}
        <div className="form__reg">
          Si no tienes cuenta, <Link to={"/register"}>registrate!</Link>
        </div>
      </form>
    </>
  );
}
