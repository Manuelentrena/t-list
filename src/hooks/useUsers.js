import { useState, useCallback, useContext, useEffect } from "react";
import SecurityProvider from "providers/SecurityProvider";
import UserProvider from "providers/UserProvider";
import getUserByParam from "services/getUserByParam";
import getUserList from "services/getUserList";

export default function useUsers() {
  /* Provider User */
  const { token } = useContext(SecurityProvider);
  const { users, setUsers, userChange, setUserChange } =
    useContext(UserProvider);
  /* Estado del useUser */
  const [state, setState] = useState({
    loading: false,
    error: false,
  });

  /* GetlistUser */
  const listUser = useCallback(async () => {
    console.log("dentro de listUser");
    setState({ loading: true, error: false });
    const data = await getUserList({ token });
    if (!data) {
      setState({ loading: false, error: true });
    } else {
      setState({ loading: false, error: false });
      setUsers(data);
    }
  }, [token, setUsers]);

  /* GetUserBy */
  const listUserBy = useCallback(
    async ({ value, searchBy }) => {
      console.log("dentro de listUserByName");
      console.log({ value, searchBy });
      setState({ loading: true, error: false });
      const data = await getUserByParam({ token, value, searchBy });
      if (!data) {
        console.log("Entra en error");
        setState({ loading: false, error: true });
      } else {
        console.log("Entra en save");
        setState({ loading: false, error: false });
        setUsers(data);
      }
    },
    [token, setUsers]
  );

  useEffect(() => {
    async function callUserList() {
      listUser();
    }
    token && callUserList();
    console.log("El valor del token", token);
  }, [token, listUser]);

  return {
    usersLoading: state.loading /* Si esta cargando */,
    errorUsersList: state.error /* Si ha habido un error */,
    listUser,
    listUserBy,
    users,
    userChange,
    setUserChange,
  };
}
