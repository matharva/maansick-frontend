import React from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="app"></div>
      <button
        className="mt-10"
        onClick={() => navigate("/mri-stages")}
        style={{ marginTop: "100px" }}
      >
        navigate
      </button>
    </>
  );
};

export default Loading;
