import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";
import "./App.css";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MRIStory from "./pages/MRIStory";
import ResetPassword from "./pages/ResetPassword";
import MRIViewer from "./pages/MRIViewer";
import Upload from "./pages/Upload";
import Loading from "./pages/Loading";

import ThreeModel from "./components/ThreeModel";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* MRI */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/mri" element={<MRIViewer />} />
        <Route path="/three" element={<ThreeModel />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/mri-stages" element={<MRIStory />} />
      </Routes>
    </div>
  );
}

export default App;
