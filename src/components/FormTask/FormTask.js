import React, { useState, useEffect } from "react";
import { Spinner } from "components";
import useUsers from "hooks/useUsers";
import useStates from "hooks/useStates";
import "./styles.css";

export default function FormTask({
  taskChange,
  error,
  success,
  msg,
  loading,
  editedTask,
  setTaskChange,
  setMode,
  mode,
  postTask,
}) {
  /* Traemos los usuarios */
  const { users } = useUsers();
  /* Traemos los estados */
  const { states } = useStates();
  /* Valores del formulario por defecto */
  const [values, setValues] = useState({
    id: "",
    name: "",
    idstate: "",
    iduser: "",
    description: "",
  });
  /* Cargamos datos a editar */
  useEffect(() => {
    if (Object.entries(taskChange).length !== 0) {
      setValues({
        id: taskChange.id,
        name: taskChange.name,
        idstate: taskChange.stateid,
        iduser: taskChange.userid,
        description: taskChange.description,
      });
      setMode("EDIT");
    } else {
      setValues({
        id: "",
        name: "",
        idstate: "",
        iduser: "",
        description: "",
      });
      setMode("NONE");
    }
  }, [taskChange, setMode]);
  /* Almacenamos datos al pulsar una tecla de cualquier input */
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };
  /* Enviadmos datos a la BD */
  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "EDIT" && editedTask({ ...values });
    mode === "NEW" && postTask({ ...values });
    setTaskChange({});
  };

  return (
    <div className="formTask">
      <p>FORMULARIO DE RELLENO:</p>
      <form className="form" onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Tarea..."
          value={values.name}
          onChange={handleChange}
          required
          autoComplete="on"
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
        />
        {/* USER */}
        <select
          className="form__select"
          name="iduser"
          value={values.iduser}
          onChange={handleChange}
          required
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
        >
          <option disabled value="">
            {" "}
            -- Selecciona un usuario --{" "}
          </option>
          {users &&
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {`${user.name} ${user.lastname}`}
              </option>
            ))}
        </select>
        {/* STATE */}
        <select
          className="form__select"
          name="idstate"
          value={values.idstate}
          onChange={handleChange}
          required
          disabled={mode === "EDIT" || mode === "NEW" ? false : true}
        >
          <option disabled value="">
            {" "}
            -- Selecciona un estado --{" "}
          </option>
          {states &&
            states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
        </select>
        {/* DESCRIPTION */}
        <input
          className="form__input"
          type="text"
          name="description"
          placeholder="Descripción..."
          value={values.description}
          onChange={handleChange}
          required
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
