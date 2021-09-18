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
        <UserCreate setUserChange={setUserChange} />
        <FormUser
          userChange={userChange}
          error={error}
          success={success}
          msg={msg}
          loading={loading}
          editedUser={editedUser}
          listUser={listUser}
          setUserChange={setUserChange}
        />
      </div>
      <Footer />
    </>
  );
}
