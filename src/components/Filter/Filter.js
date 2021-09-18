import React, { useState } from "react";
import { useLocation } from "react-router";
import "./styles.css";

var valuesFilter = {
  user: [
    ["nombre", "name"],
    ["apellido", "lastname"],
    ["email", "email"],
  ],
  tasks: [
    ["usuario", "user"],
    ["nombre", "name"],
    ["estado", "state"],
  ],
};

export default function Filter({ listUserBy }) {
  const { pathname } = useLocation();

  const [values, setValues] = useState({
    search: "",
    type: pathname === "/" ? valuesFilter.user[0][1] : valuesFilter.tasks[0][1],
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    listUserBy({ value: values.search, searchBy: values.type });
  };

  return (
    <div className="filter">
      <form className="filter__form" onSubmit={handleSubmit}>
        <input
          className="form__input filter__input"
          type="text"
          name="search"
          placeholder="Buscar por..."
          value={values.search}
          onChange={handleChange}
        />
        <select className="filter__select" name="type" onChange={handleChange}>
          {pathname === "/"
            ? valuesFilter.user.map((type) => (
                <option key={type[1]} value={type[1]}>
                  {type[0]}
                </option>
              ))
            : valuesFilter.tasks.map((type) => (
                <option key={type[1]} value={type[1]}>
                  {type[0]}
                </option>
              ))}
        </select>
        <button className="button__search">🔍</button>
      </form>
    </div>
  );
}
