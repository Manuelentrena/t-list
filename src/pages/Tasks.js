import React from "react";
import { Footer, NavBar, Header, Filter, Tab } from "components";
export default function Tasks() {
  return (
    <>
      <div className="container">
        <Header />
        <NavBar />
        <Tab />
        <Filter />
      </div>
      <Footer />
    </>
  );
}
