import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
  /* Guardamos la lsita de usuarios */
  const [users, setUsers] = useState([]);
  const [userChange, setUserChange] = useState({});
  const [mode, setMode] = useState("NONE");

  return (
    <UserContext.Provider
      value={{ users, setUsers, userChange, setUserChange, mode, setMode }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
