import React, { useState } from "react";

const TaskContext = React.createContext({});

export function TaskContextProvider({ children }) {
  /* Guardamos la lsita de tareas */
  const [tasks, setTasks] = useState([]);
  /* Tarea a editar */
  const [taskChange, setTaskChange] = useState({});
  /* Modo del formulario */
  const [mode, setMode] = useState("NONE");

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, taskChange, setTaskChange, mode, setMode }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
