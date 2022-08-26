import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/mri-stages");
    // }, 2000);
  }, []);

  useEffect(() => {
    console.log("Here");
  }, []);

  return (
    <>
      <div id="app"></div>
      {/* 
      <button
        className="mt-10"
        onClick={() => navigate("/mri-stages")}
        style={{ marginTop: "100px" }}
      >
        navigate
      </button> */}
      <div className="relative">
        <div
          className="absolute text-4xl font-bold text-white loading"
          style={{ position: "absolute", top: "10%", left: "40%" }}
        >
          Loading Results
        </div>
        <iframe
          width={"100%"}
          height={"100%"}
          className="h-screen w-screen"
          src="http://localhost:1234"
        ></iframe>
      </div>
    </>
  );
};

export default Loading;
