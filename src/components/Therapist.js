import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, IS_CNN, IS_SVM } from "../constants";
import { motion } from "framer-motion";
import axios from "axios";
import { CountUp } from "use-count-up";
import Header from "../partials/Header";

const Therapist = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("ok");
  const [score, setScore] = useState(0);
  const [humanType, setHumanType] = useState("pat");

  const textColor = {
    default: "text-black",
    ok: "text-green-500",
    warn: "text-yellow-500",
    danger: "text-red-500",
    // ...
  };
const goToBooking = ()=>{ navigate("/patients/book")}

  // Side Effects
  // useEffect(() => {
  //   const element = document.getElementById("chatbot");
  //   element.classList.remove("hidden");
  //   console.log(element);

  //   return () => {
  //     const element = document.getElementById("chatbot");
  //     element.classList.append("hidden");
  //   };
  // }, []);


  useEffect(() => {
    // setScore(SVMResult?.score.toFixed(2));
    setHumanType(localStorage?.getItem("type"));
  }, []);

//   const params = useMemo(() => {
//     const p = [];
//     p["kioskMode"] = true;

//     if (IS_SVM) {
//       p["surfaces"] = ["/sample_image.surf"];
//       p["images"] = ["/sample_dwi.nii.gz"];
//     }

//     return p;
//   }, [niiFile]);

  return (
    <motion.div
      className=" min-h-screen mriViewerBg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div style={{ padding: "30px" }}>
        <div style={{ textAlign: "center" }}>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mt-12"
            // data-aos="zoom-y-out"
          >
            Visualiser{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              MaanSick
            </span>
          </h1>
        </div>
      </div>

        {/* MRI viewer */}
        <div className="grid grid-cols-2 p-12 gap-10">
            <motion.div className="col-span-1" initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1 , x: 0}}>
                <div className="flex items-center justify-center flex-col bg-gray-50 p-10 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-center">
                    Your brain is
                    {/* {SVMResult?.score?.toFixed(2)} */}
                </div>
                {true ? (
                    // <div className="text-9xl py-10 font-bold">`${SVMResult}%`</div>
                    <>
                    <div
                    className={`text-9xl py-10 font-bold ${textColor[category]}`}
                    >
                    <CountUp
                        isCounting
                        end={90.57}
                        duration={3.2}
                        onUpdate={(currentValue) => {
                        if (currentValue <= 60) {
                            setCategory("ok");
                        } else if (currentValue > 60 && currentValue < 80) {
                            setCategory("warn");
                        } else {
                            setCategory("danger");
                        }
                        }}
                    />
                    %
                    </div>
                    <div className="text-4xl font-bold text-center">
                        similar to a depressed patient's brain.
                    </div>
                    </>
                        ) : (
                            <div className="my-4">Fetching results...</div>
                        )}
                    </div>
            </motion.div>
            <motion.div className="col-span-1" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1 , x: 0}} >
                        <div className=" bg-white shadow-2xl p-12 flex flex-col justify-center items-center">
                        <p className="text-justify mb-10">As per our evaluation, we think you are suffering from depression and hence we urge you to connect with a therapist. </p>
                            <button className=" bg-blue-600 text-white w-4/5 p-4 rounded-md text-xl font-bold" onClick={goToBooking}>Book your appointment now</button>
                        </div>
            </motion.div>
        </div>

    </motion.div>
  );
};

export default Therapist;
