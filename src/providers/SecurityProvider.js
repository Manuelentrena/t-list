import React, { useState } from "react";

const SecurityContext = React.createContext({});

export function SecurityContextProvider({ children }) {
  /* Leemos el token del session si existe */
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("token")
  );
  const [idUser, setIdUser] = useState(() =>
    window.sessionStorage.getItem("id")
  );

  /* Proveemos el token con el provider */
  return (
    <SecurityContext.Provider value={{ token, setToken, idUser, setIdUser }}>
      {children}
    </SecurityContext.Provider>
  );
}

export default SecurityContext;
