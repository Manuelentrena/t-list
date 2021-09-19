import { useState, useCallback, useContext, useEffect } from "react";
import SecurityProvider from "providers/SecurityProvider";
import StateProvider from "providers/StateProvider";
import getStateList from "services/getStateList";
import postStateService from "services/postStateService";
import putStateService from "services/putStateService";
import deleteStateService from "services/deleteStateService";

export default function useUsers() {
  /* Provider State */
  const { token, idUser } = useContext(SecurityProvider);
  const { states, setStates, stateChange, setStateChange, mode, setMode } =
    useContext(StateProvider);
  /* Estado del useState*/
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
    msg: "",
  });
  /* Estado del useStateList */
  const [stateList, setStateList] = useState({
    loading: false,
    error: false,
  });

  /* GetlistStates */
  const listStates = useCallback(async () => {
    setStateList({ loading: true, error: false });
    const data = await getStateList({ token });
    if (!data) {
      setStateList({ loading: false, error: true });
    } else {
      setStateList({ loading: false, error: false });
      setStates(data);
    }
  }, [token, setStates]);

  /* POST State */
  const postState = useCallback(
    async ({ name, description }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await postStateService({
        name,
        description,
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
          msg: "Guardado Correctamente!",
          success: true,
        });
      }
      /* Actualizamos los datos en la lista */
      listStates();
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
    [token, listStates]
  );

  /* PUT State */
  const editedState = useCallback(
    async ({ name, description, id }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await putStateService({
        id,
        name,
        description,
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
      listStates();
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
    [token, listStates]
  );

  /* DELETE State */
  const eliminatedState = useCallback(
    async ({ id }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await deleteStateService({ id, token });
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
      listStates();
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
    [token, listStates]
  );

  useEffect(() => {
    async function callStateList() {
      listStates();
    }
    token && callStateList();
  }, [token, listStates]);

  return {
    loading: state.loading /* Si esta cargando */,
    error: state.error /* Si ha habido un error */,
    msg: state.msg,
    success: state.success,
    loadingList: stateList.loading,
    errorList: stateList.error,
    idUser,
    listStates,
    states,
    stateChange,
    setStateChange,
    postState,
    editedState,
    eliminatedState,
    mode,
    setMode,
  };
}
