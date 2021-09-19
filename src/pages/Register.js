import React, { useEffect, useRef } from "react";
import { FormRegister, Footer } from "components";
import lottie from "lottie-web";

export default function Register() {
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
        <FormRegister />
        <div ref={containerTask}></div>
      </div>
      <Footer />
    </>
  );
}
