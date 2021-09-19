import React, { useEffect, useRef } from "react";
import { Footer } from "components";
import { useHistory } from "react-router";
import lottie from "lottie-web";

export default function PageError() {
  const history = useHistory();
  const containerError = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: containerError.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/errorPage.json"),
    });
  }, []);

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <h1>TASK LIST</h1>
        <p>No exite esta página, lo sentimos!</p>
        <div ref={containerError}></div>
        <button className="form__button" onClick={handleClick}>
          IR AL INICIO
        </button>
      </div>
      <Footer />
    </>
  );
}
