import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import "aos/dist/aos.css";
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
import Roadmap from "./pages/Roadmap";
import ThreeModel from "./components/ThreeModel";
import Patients from "./pages/Patients";
import PatientInfo from "./pages/PatientInfo";
import { AuthProvider } from "./context/AuthContext";
// import Header from "./partials/Header";
import Vert from "./pages/Vert";
import PatientBooking from "./pages/PatientBooking";
import Therapist from "./components/Therapist";

function App() {
  const location = useLocation();

  // States
  const [selectedFile, setSelectedFile] = useState("");
  const [SVMResult, setSVMResult] = useState(0);
  const [bulkFiles, setBulkFiles] = useState(null);

  // Side effects
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

  useEffect(() => {
    console.log("From App js: ", selectedFile);
  }, [selectedFile]);

  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* MRI */}
          <Route
            path="/upload"
            element={
              <Upload
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                setSVMResult={setSVMResult}
                bulkFiles={bulkFiles}
                setBulkFiles={setBulkFiles}
              />
            }
          />
          <Route
            path="/mri"
            element={
              <MRIViewer
                niiFile={selectedFile}
                SVMResult={SVMResult}
                bulkFiles={bulkFiles}
              />
            }
          />
          <Route path="/three" element={<ThreeModel />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/mri-stages" element={<MRIStory />} />

          {/*Patient-Roadmap*/}
          {/* <Route path="/roadmap" element={<Roadmap />} /> */}
          <Route path="/doctor/patients" element={<Patients />} />
          <Route path="/doctor/patients/info" element={<PatientInfo />} />
          <Route path="/patients/book" element={<PatientBooking />} />
          <Route path="/rocky" element={<Therapist />} />
          <Route path="/vert" element={<Vert />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
