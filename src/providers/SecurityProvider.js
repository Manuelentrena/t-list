import React, { useState, useEffect } from "react";
import getUserByParam from "services/getUserByParam";
const SecurityContext = React.createContext({});

export function SecurityContextProvider({ children }) {
  /* Leemos el token del session si existe */
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("token")
  );
  const [idUser, setIdUser] = useState(() =>
    window.sessionStorage.getItem("id")
  );
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function nameUser() {
      const res = await getUserByParam({
        token,
        value: idUser,
        searchBy: "id",
      });

      setUserName(res[0].name);
      console.log(res);
    }
    idUser && token && nameUser();
  }, [idUser, token]);

  /* Proveemos el token con el provider */
  return (
    <SecurityContext.Provider
      value={{ token, setToken, idUser, setIdUser, userName }}
    >
      {children}
    </SecurityContext.Provider>
  );
}

export default SecurityContext;
