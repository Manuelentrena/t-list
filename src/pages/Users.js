import React from "react";
import useUsers from "hooks/useUsers";
import {
  Footer,
  NavBar,
  Header,
  UserList,
  Filter,
  FormUser,
  UserCreate,
  Tab,
} from "components";

export default function Users() {
  const {
    users,
    listUserBy,
    loading,
    setUserChange,
    userChange,
    error,
    success,
    msg,
    editedUser,
    listUser,
    loadingList,
    eliminatedUser,
    mode,
    setMode,
    postUser,
    idUser,
  } = useUsers();

  return (
    <>
      <div className="container">
        <Header />
        <NavBar setUserChange={setUserChange} />
        <Tab />
        <Filter listUserBy={listUserBy} />
        <UserList
          users={users}
          loading={loadingList}
          setUserChange={setUserChange}
          eliminatedUser={eliminatedUser}
          idUser={idUser}
        />
        <UserCreate setMode={setMode} />
        <FormUser
          userChange={userChange}
          error={error}
          success={success}
          msg={msg}
          loading={loading}
          editedUser={editedUser}
          listUser={listUser}
          setUserChange={setUserChange}
          mode={mode}
          setMode={setMode}
          postUser={postUser}
        />
      </div>
      <Footer />
    </>
  );
}
