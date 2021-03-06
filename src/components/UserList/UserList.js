import React from "react";
import { Spinner, UserItem } from "components";

export default function UserList({
  users,
  loading,
  setUserChange,
  eliminatedUser,
  idUser,
}) {
  return (
    <div className="list">
      <div className="list__head">
        <div className="list__column nombre">Nombre</div>
        <div className="list__column apellido">Apellido</div>
        <div className="list__column email">Email</div>
        <div className="list__column direccion">Dirección</div>
        <div className="list__column permiso">Acceso</div>
      </div>
      <div className="List__body">
        {loading ? (
          <Spinner />
        ) : (
          users &&
          users.map((user) => (
            <UserItem
              {...user}
              key={user.id}
              setUserChange={setUserChange}
              eliminatedUser={eliminatedUser}
              idUser={idUser}
            />
          ))
        )}
      </div>
    </div>
  );
}
