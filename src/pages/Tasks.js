import React from "react";
import { Footer, NavBar, Header, Filter } from "components";
export default function Tasks() {
  return (
    <>
      <div className="container">
        <Header />
        <NavBar />
        <Filter />
      </div>
      <Footer />
    </>
  );
}
