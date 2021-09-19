import React, { useState } from "react";

export default function UserItem({
  available,
  direction,
  email,
  lastname,
  name,
  id,
  setUserChange,
  eliminatedUser,
  idUser,
}) {
  const [msg, setMsg] = useState(null);
  const handleEdit = () => {
    setUserChange({ available, direction, email, lastname, name, id });
  };

  const handleDelete = () => {
    if (idUser !== id) {
      eliminatedUser({ id });
      setMsg(null);
    } else {
      setMsg("No puedes borrar tu cuenta");
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    }
  };

  return (
    <div className="Item">
      {msg && <p className="popup error">{msg}</p>}
      <p className="Item__field nombre">{name}</p>
      <p className="Item__field apellido">{lastname}</p>
      <p className="Item__field email">{email}</p>
      <p className="Item__field direccion">{direction}</p>
      <p className="Item__field permiso">{available === "1" ? "SI" : "NO"}</p>
      <button className="button__secun" onClick={handleEdit}>
        📋
      </button>
      <button className="button__secun" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
}
