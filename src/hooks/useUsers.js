import { useState, useCallback, useContext, useEffect } from "react";
import SecurityProvider from "providers/SecurityProvider";
import UserProvider from "providers/UserProvider";
import getUserByParam from "services/getUserByParam";
import getUserList from "services/getUserList";
import putUser from "services/putUser";

export default function useUsers() {
  /* Provider User */
  const { token } = useContext(SecurityProvider);
  const { users, setUsers, userChange, setUserChange } =
    useContext(UserProvider);
  /* Estado del useUser */
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
    msg: "",
  });
  /* Estado del useUserList */
  const [stateList, setStateList] = useState({
    loading: false,
    error: false,
  });

  /* GetlistUser */
  const listUser = useCallback(async () => {
    setStateList({ loading: true, error: false });
    const data = await getUserList({ token });
    if (!data) {
      setStateList({ loading: false, error: true });
    } else {
      setStateList({ loading: false, error: false });
      setUsers(data);
    }
  }, [token, setUsers]);

  /* GetUserBy */
  const listUserBy = useCallback(
    async ({ value, searchBy }) => {
      setState({ loading: true, error: false });
      const data = await getUserByParam({ token, value, searchBy });
      if (!data) {
        setState({ loading: false, error: true });
      } else {
        setState({ loading: false, error: false });
        setUsers(data);
      }
    },
    [token, setUsers]
  );

  /* PUT USER */
  const editedUser = useCallback(
    async ({ id, name, lastname, direction, available }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await putUser({
        id,
        name,
        lastname,
        direction,
        available,
        token,
      });
      if (status === "error") {
        setState({
          loading: false,
          error: true,
          msg: result.error_msg,
          success: false,
        });
      } else {
        setState({
          loading: false,
          error: false,
          msg: "Editado Correctamente!",
          success: true,
        });
      }
      /* Actualizamos los datos en la lista */
      listUser();
      /* Reseteamos el mensaje */
      setTimeout(() => {
        setState({
          loading: false,
          error: false,
          msg: "",
          success: false,
        });
      }, 3000);
    },
    [token, listUser]
  );

  useEffect(() => {
    async function callUserList() {
      listUser();
    }
    token && callUserList();
  }, [token, listUser]);

  return {
    loading: state.loading /* Si esta cargando */,
    error: state.error /* Si ha habido un error */,
    msg: state.msg,
    success: state.success,
    loadingList: stateList.loading,
    errorList: stateList.error,
    listUser,
    listUserBy,
    users,
    userChange,
    setUserChange,
    editedUser,
  };
}