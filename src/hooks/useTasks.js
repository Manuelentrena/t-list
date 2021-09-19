import { useState, useCallback, useContext, useEffect } from "react";
import SecurityProvider from "providers/SecurityProvider";
/* import UserProvider from "providers/UserProvider"; */
import TaskProvider from "providers/TaskProvider";
/* import StateProvider from "providers/StateProvider"; */
import getTaskList from "services/getTaskList";
import getTaskByParam from "services/getTaskByParam";

export default function useUsers() {
  /* Provider Security */
  const { token } = useContext(SecurityProvider);
  /* const { users } = useContext(UserProvider);
  const { states } = useContext(StateProvider); */
  const { tasks, setTasks, taskChange, setTaskChange, mode, setMode } =
    useContext(TaskProvider);
  /* Estado del useTask */
  /*   const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
    msg: "",
  }); */
  /* Estado del useTaskList */
  const [stateList, setStateList] = useState({
    loading: false,
    error: false,
  });

  /* GetlistTAsk */
  const listTask = useCallback(async () => {
    setStateList({ loading: true, error: false });
    const data = await getTaskList({ token });
    if (!data) {
      setStateList({ loading: false, error: true });
    } else {
      setStateList({ loading: false, error: false });
      setTasks(data);
    }
  }, [token, setTasks]);

  /* GetTaskBy */
  const listTaskBy = useCallback(
    async ({ value, searchBy }) => {
      setStateList({ loading: true, error: false });
      const data = await getTaskByParam({ token, value, searchBy });
      if (!data) {
        setStateList({ loading: false, error: true });
      } else {
        setStateList({ loading: false, error: false });
        setTasks(data);
      }
    },
    [token, setTasks]
  );

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
    listTask,
    listTaskBy,
    tasks,
    taskChange,
    setTaskChange,
    /* postTask,
    editedTask,
    eliminatedTask, */
    mode,
    setMode,
  };
}
