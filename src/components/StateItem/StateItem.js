import React, { useState } from "react";

export default function StateItem({
  description,
  name,
  id,
  setStateChange,
  eliminatedState,
}) {
  const [msg, setMsg] = useState(null);
  const handleEdit = () => {
    setStateChange({ description, name, id });
  };

  const handleDelete = () => {
    eliminatedState({ id });
    setMsg("Borrado exitosamente!");
    setTimeout(() => {
      setMsg(null);
    }, 3000);
  };

  return (
    <div className="Item">
      {msg && <p className="popup error">{msg}</p>}
      <p className="Item__field nombre">{name}</p>
      <p className="Item__field descripcion">{description}</p>
      <button className="button__secun" onClick={handleEdit}>
        📋
      </button>
      <button className="button__secun" onClick={handleDelete}>
        ❌
      </button>
    </div>
  );
}
