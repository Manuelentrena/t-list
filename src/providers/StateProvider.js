import React, { useState } from "react";

const StateContext = React.createContext({});

export function StateContextProvider({ children }) {
  /* Guardamos la lista de usuarios */
  const [states, setStates] = useState([]);
  const [stateChange, setStateChange] = useState({});
  const [mode, setMode] = useState("NONE");

  return (
    <StateContext.Provider
      value={{ states, setStates, stateChange, setStateChange, mode, setMode }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
