import React, { useState, useEffect } from "react";
import { Spinner } from "components";
import "./styles.css";

export default function FormUser({
  stateChange,
  error,
  success,
  msg,
  loading,
  editedState,
  setStateChange,
  setMode,
  mode,
  postState,
}) {
  /* Valores del formulario por defecto */
  const [values, setValues] = useState({
    id: "",
    name: "",
    description: "",
  });
  /* Cargamos datos a editar */
  useEffect(() => {
    if (Object.entries(stateChange).length !== 0) {
      setValues({
        id: stateChange.id,
        name: stateChange.name,
        description: stateChange.description,
      });
      setMode("EDIT");
    } else {
      setValues({
        id: "",
        name: "",
        description: "",
      });
      setMode("NONE");
    }
  }, [stateChange, setMode]);
  /* Almacenamos datos al pulsar una tecla de cualquier input */
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };
  /* Enviadmos datos a la BD */
  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "EDIT" && editedState({ ...values });
    mode === "NEW" && postState({ ...values });
    setStateChange({}); // Reset form
  };

  return (
    <div className="formState">
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
        {/* DESCRIPTION */}
        <input
          className="form__input"
          type="text"
          name="description"
          placeholder="Descripcion..."
          value={values.description}
          onChange={handleChange}
          autoComplete="on"
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
        />

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
