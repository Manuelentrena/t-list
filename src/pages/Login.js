import React, { useEffect, useRef } from "react";
import { FormLogin, Footer } from "components";
import lottie from "lottie-web";

export default function Login() {
  const containerTask = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: containerTask.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animationTask.json"),
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1>TASK LIST</h1>
        <FormLogin />
        <div ref={containerTask}></div>
      </div>
      <Footer />
    </>
  );
}
