import { useState, useCallback, useContext, useEffect } from "react";
import SecurityProvider from "providers/SecurityProvider";
/* import UserProvider from "providers/UserProvider"; */
import TaskProvider from "providers/TaskProvider";
/* import StateProvider from "providers/StateProvider"; */
import getStateList from "services/getStateList";

export default function useUsers() {
  /* Provider User */
  const { token, idUser } = useContext(SecurityProvider);
  /* const { users } = useContext(UserProvider);
  const { states } = useContext(StateProvider); */
  const { tasks, setTasks, taskChange, setTaskChange, mode, setMode } =
    useContext(TaskProvider);
  /* Estado del useUser */
  /*   const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
    msg: "",
  }); */
  /* Estado del useUserList */
  const [stateList, setStateList] = useState({
    loading: false,
    error: false,
  });

  /* GetlistUser */
  const listTask = useCallback(async () => {
    setStateList({ loading: true, error: false });
    const data = await getStateList({ token });
    if (!data) {
      setStateList({ loading: false, error: true });
    } else {
      setStateList({ loading: false, error: false });
      setTasks(data);
    }
  }, [token, setTasks]);

  /* GetUserBy */
  /* const listUserBy = useCallback(
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
  ); */

  /* POST USER */
  /*   const postTask = useCallback(
    async ({ name, lastname, email, password, direction, available }) => {

    [listTask]
  ); */

  /* PUT USER */
  /*   const editedUser = useCallback(
    async ({ id, name, lastname, direction, available }) => {

    },
    [token, listUser]
  ); */

  /* DELETE USER */
  /*   const eliminatedUser = useCallback(
    async ({ id }) => {
      
    },
    [token, listUser]
  ); */

  useEffect(() => {
    async function callTaskList() {
      listTask();
    }
    token && callTaskList();
  }, [token, listTask]);

  return {
    /*     loading: state.loading ,
    error: state.error ,
    msg: state.msg,
    success: state.success, */
    loadingList: stateList.loading,
    errorList: stateList.error,
    idUser,
    listTask,
    /* listUserBy, */
    tasks,
    taskChange,
    setTaskChange,
    /* postUser,
    editedUser,
    eliminatedUser, */
    mode,
    setMode,
  };
}
