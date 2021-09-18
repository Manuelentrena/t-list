import React from "react";

export default function UserCreate({ setUserChange }) {
  const handleClick = () => {
    setUserChange({
      id: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
      direction: "",
      available: 1,
    });
  };
  return (
    <button className="button__create" onClick={handleClick}>
      CREAR NUEVO
    </button>
  );
}
