import React, { useState } from "react";

export default function UserItem({
  name,
  user,
  state,
  date,
  description,
  id,
  setTaskChange,
  eliminatedTask,
}) {
  const [msg, setMsg] = useState(null);
  const handleEdit = () => {
    setTaskChange({ name, user, state, description, id });
  };

  const handleDelete = () => {
    eliminatedTask({ id });
    setMsg("Borrado exitosamente!");
    setTimeout(() => {
      setMsg(null);
    }, 3000);
  };

  return (
    <div className="Item">
      {msg && <p className="popup error">{msg}</p>}
      <p className="Item__field nombre">{name}</p>
      <p className="Item__field usuario">{user}</p>
      <p className="Item__field estado">{state}</p>
      <p className="Item__field descripcion">{description}</p>
      <p className="Item__field fecha">{date}</p>
      <button className="button__secun" onClick={handleEdit}>
        📋
      </button>
      <button className="button__secun" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
}
