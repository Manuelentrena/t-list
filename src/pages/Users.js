import { Footer, NavBar, Header, UserList, Filter, FormUser } from "components";
import useUsers from "hooks/useUsers";
import React from "react";

export default function Users() {
  const { users, listUserBy, usersLoading } = useUsers();

  return (
    <>
      <div className="container">
        <Header />
        <NavBar />
        <Filter listUserBy={listUserBy} />
        <UserList users={users} loading={usersLoading} />
        <FormUser />
      </div>
      <Footer />
    </>
  );
}
