import React, { useState, useEffect } from "react";
import { Spinner } from "components";
import "./styles.css";

export default function FormUser({
  userChange,
  error,
  success,
  msg,
  loading,
  editedUser,
  setUserChange,
  setMode,
  mode,
  postUser,
}) {
  /* Valores del formulario por defecto */
  const [values, setValues] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    direction: "",
    available: 1,
  });
  /* Cargamos datos a editar */
  useEffect(() => {
    if (Object.entries(userChange).length !== 0) {
      setValues({
        id: userChange.id,
        name: userChange.name,
        lastname: userChange.lastname,
        email: userChange.email,
        password: "*********",
        direction: userChange.direction,
        available: parseInt(userChange.available, 10),
      });
      setMode("EDIT");
    } else {
      setValues({
        id: "",
        name: "",
        lastname: "",
        email: "",
        password: "",
        direction: "",
        available: 1,
      });
      setMode("NONE");
    }
  }, [userChange, setMode]);
  /* Almacenamos datos al pulsar una tecla de cualquier input */
  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === "available") {
      value = checked;
    }
    setValues({ ...values, [name]: value });
  };
  /* Enviadmos datos a la BD */
  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "EDIT" && editedUser({ ...values });
    mode === "NEW" && postUser({ ...values });
    setUserChange({}); // Reset form
  };

  return (
    <div className="formUser">
      <p>FORMULARIO DE RELLENO:</p>
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
          autoComplete="on"
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
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
          autoComplete="on"
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
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
          autoComplete="on"
          disabled={mode === "NEW" ? false : true}
        />
        {/* PASSWORD */}
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Password..."
          value={values.password}
          onChange={handleChange}
          required
          autoComplete="on"
          disabled={mode === "NEW" ? false : true}
        />
        {/* DIRECTION */}
        <input
          className="form__input"
          type="text"
          name="direction"
          placeholder="Dirección..."
          value={values.direction}
          onChange={handleChange}
          autoComplete="on"
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
        />
        {/* AVAILABLE */}
        <div className="form__checkbox">
          <label htmlFor="available">Acceso</label>
          <input
            type="checkbox"
            name="available"
            checked={values.available}
            onChange={handleChange}
            disabled={mode === "EDIT" || mode === "NEW" ? false : true}
          />
        </div>

        <div className="form__doble"></div>
        {error && <p className="popup error">{msg}</p>}
        {success && <p className="popup success">{msg}</p>}
        {loading ? (
          <Spinner />
        ) : (
          <button
            className="form__button"
            disabled={mode === "EDIT" || mode === "NEW" ? false : true}
          >
            GUARDAR
          </button>
        )}
      </form>
    </div>
  );
}
