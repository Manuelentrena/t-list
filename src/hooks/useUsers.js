import { useState, useCallback, useContext, useEffect } from "react";
import SecurityProvider from "providers/SecurityProvider";
import UserProvider from "providers/UserProvider";
import getUserByParam from "services/getUserByParam";
import getUserList from "services/getUserList";
import putUser from "services/putUser";
import deleteUser from "services/deleteUser";
import registerService from "services/register";

export default function useUsers() {
  /* Provider User */
  const { token, idUser } = useContext(SecurityProvider);
  const { users, setUsers, userChange, setUserChange, mode, setMode } =
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
      setStateList({ loading: true, error: false });
      const data = await getUserByParam({ token, value, searchBy });
      if (!data) {
        setStateList({ loading: false, error: true });
      } else {
        setStateList({ loading: false, error: false });
        setUsers(data);
      }
    },
    [token, setUsers]
  );

  /* POST USER */
  const postUser = useCallback(
    async ({ name, lastname, email, password, direction, available }) => {
      console.log({ name, lastname, email, password, direction, available });
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await registerService({
        name,
        lastname,
        email,
        password,
        direction,
        available,
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
          msg: "Guardado Correctamente!",
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
    [listUser]
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

  /* DELETE USER */
  const eliminatedUser = useCallback(
    async ({ id }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await deleteUser({ id, token });
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
          msg: "Borrado Correctamente!",
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
    idUser,
    listUser,
    listUserBy,
    users,
    userChange,
    setUserChange,
    postUser,
    editedUser,
    eliminatedUser,
    mode,
    setMode,
  };
}
