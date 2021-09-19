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
} from "components";
export default function Tasks() {
  const {
    listTaskBy,
    setTaskChange,
    /* taskChange, */
    /* loading,
      error,
      success,
      msg, */
    /* editedTask, */
    /* listTask, */
    loadingList,
    /* eliminatedTask, */
    /* mode, */
    setMode,
    /* postTask, */
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
      </div>
      <Footer />
    </>
  );
}
