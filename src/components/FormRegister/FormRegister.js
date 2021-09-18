import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSecurity from "hooks/useSecurity";
import { Spinner } from "components";

export default function FormRegister() {
  const { isLoading, register, errorLogin, msg, isRegister } = useSecurity();
  const [values, setValues] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ ...values });
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
        <div className="form__doble">
          <input
            className="form__input"
            type="text"
            name="nombre"
            placeholder="Nombre..."
            value={values.nombre}
            onChange={handleChange}
            autoComplete="on"
            required
          />
          <input
            className="form__input"
            type="text"
            name="apellido"
            placeholder="Apellido..."
            value={values.apellido}
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        {errorLogin && <p className="form__error">{msg}</p>}
        {isRegister && <p className="form__success">{msg}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          <button className="form__button">REGISTRATE</button>
        )}
        <div className="form__reg">
          Si ya tienes cuenta, <Link to={"/login"}>Entra!</Link>
        </div>
      </form>
    </>
  );
}
