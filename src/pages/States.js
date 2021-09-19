import React from "react";
import useStates from "hooks/useStates";
import {
  Footer,
  NavBar,
  Header,
  StateList,
  Tab,
  FormState,
  CreateNew,
} from "components";
export default function States() {
  const {
    states,
    loading,
    loadingList,
    setStateChange,
    stateChange,
    error,
    success,
    msg,
    mode,
    setMode,
    listStates,
    postState,
    editedState,
    eliminatedState,
  } = useStates();
  return (
    <>
      <div className="container">
        <Header />
        <NavBar setStateChange={setStateChange} />
        <Tab />
        <StateList
          states={states}
          loading={loadingList}
          setStateChange={setStateChange}
          eliminatedState={eliminatedState}
        />
        <CreateNew setMode={setMode} />
        <FormState
          stateChange={stateChange}
          error={error}
          success={success}
          msg={msg}
          loading={loading}
          editedState={editedState}
          listStates={listStates}
          setStateChange={setStateChange}
          mode={mode}
          setMode={setMode}
          postState={postState}
        />
      </div>
      <Footer />
    </>
  );
}
