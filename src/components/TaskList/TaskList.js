import React from "react";
import { Spinner, TaskItem } from "components";

export default function UserList({
  tasks,
  loading,
  setTaskChange,
  eliminatedTask,
}) {
  return (
    <div className="list">
      <div className="list__head">
        <div className="list__column nombre">Tarea</div>
        <div className="list__column descripcion">Descripcion</div>
        <div className="list__column usuario">Usuario</div>
        <div className="list__column estado">Estado</div>
        <div className="list__column fecha">Fecha</div>
      </div>
      <div className="List__body">
        {loading ? (
          <Spinner />
        ) : (
          tasks &&
          tasks.map((task) => (
            <TaskItem
              {...task}
              key={task.id}
              setTaskChange={setTaskChange}
              eliminatedTask={eliminatedTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
