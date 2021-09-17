import React, { useState } from "react";
import useSecurity from "hooks/useSecurity";
import { Spinner } from "components";

export default function FormUser() {
  const { isLoading, register, errorLogin, msg, isRegister } = useSecurity();
  const [values, setValues] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    direction: "",
    available: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    console.log({ ...values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ ...values });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Nombre..."
          value={values.name}
          onChange={handleChange}
          required
        />
        {/* LASTNAME */}
        <input
          className="form__input"
          type="text"
          name="lastname"
          placeholder="Apellido..."
          value={values.lastname}
          onChange={handleChange}
          required
        />
        {/* EMAIL */}
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email..."
          value={values.email}
          onChange={handleChange}
          required
        />
        {/* DIRECTION */}
        <input
          className="form__input"
          type="text"
          name="direction"
          placeholder="Email..."
          value={values.direction}
          onChange={handleChange}
          required
        />
        {/* AVAILABLE */}
        <input
          type="checkbox"
          defaultChecked={values.direction}
          onChange={handleChange}
          required
        />

        <div className="form__doble"></div>
        {errorLogin && <p className="form__error">{msg}</p>}
        {isRegister && <p className="form__success">{msg}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          <button className="form__button">GUARDAR</button>
        )}
      </form>
    </>
  );
}
