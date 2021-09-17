/* import useUsers from "hooks/useUsers"; */
import React from "react";
import "./styles.css";

export default function UserItem({
  available,
  direction,
  email,
  lastname,
  name,
  id,
}) {
  /* const { setUserChange } = useUsers(); */

  const handleEdit = () => {
    /* setUserChange({ available, direction, email, lastname, name, id }); */
  };

  const handleDelete = () => {
    console.log(id);
  };

  return (
    <div className="userItem">
      <p className="userItem__field nombre">{name}</p>
      <p className="userItem__field apellido">{lastname}</p>
      <p className="userItem__field email">{email}</p>
      <p className="userItem__field direccion">{direction}</p>
      <p className="userItem__field permiso">
        {available === "1" ? "SI" : "NO"}
      </p>
      <button className="button__secun" onClick={handleEdit}>
        📋
      </button>
      <button className="button__secun" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
}
