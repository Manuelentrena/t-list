import React from "react";

export default function UserCreate({ setMode }) {
  const handleClick = () => {
    setMode("NEW");
  };
  return (
    <button className="button__create" onClick={handleClick}>
      CREAR NUEVO
    </button>
  );
}
