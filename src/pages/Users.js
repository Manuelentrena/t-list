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
  } = useUsers();

  return (
    <>
      <div className="container">
        <Header />
        <NavBar setUserChange={setUserChange} />
        <Filter listUserBy={listUserBy} />
        <UserList
          users={users}
          loading={loadingList}
          setUserChange={setUserChange}
          eliminatedUser={eliminatedUser}
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
