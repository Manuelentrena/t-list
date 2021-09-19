import React from "react";
import useTasks from "hooks/useTasks";
import {
  Footer,
  NavBar,
  Header,
  Filter,
  Tab,
  CreateNew,
  TaskList,
  FormTask,
} from "components";
export default function Tasks() {
  const {
    listTaskBy,
    setTaskChange,
    taskChange,
    loading,
    error,
    success,
    msg,
    editedTask,
    listTask,
    loadingList,
    /* eliminatedTask, */
    mode,
    setMode,
    postTask,
    tasks,
  } = useTasks();
  return (
    <>
      <div className="container">
        <Header />
        <NavBar setTaskChange={setTaskChange} />
        <Tab />
        <Filter listTaskBy={listTaskBy} />
        <TaskList
          tasks={tasks}
          loading={loadingList}
          setTaskChange={setTaskChange}
          /* eliminatedTask={eliminatedTask} */
        />
        <CreateNew setMode={setMode} />
        <FormTask
          taskChange={taskChange}
          error={error}
          success={success}
          msg={msg}
          loading={loading}
          editedTask={editedTask}
          listTask={listTask}
          setTaskChange={setTaskChange}
          mode={mode}
          setMode={setMode}
          postTask={postTask}
        />
      </div>
      <Footer />
    </>
  );
}
