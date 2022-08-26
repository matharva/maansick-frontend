import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, IS_CNN, IS_SVM } from "../constants";
import { motion } from "framer-motion";
import axios from "axios";
import { CountUp } from "use-count-up";
import Roadmap from './Roadmap';
import Header from "../partials/Header";


const MRIViewer = ({ niiFile, SVMResult, bulkFiles }) => {
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

  console.log("Score of SVM", SVMResult, SVMResult?.score?.toFixed(2))

  // Side Effects
  useEffect(() => {
    const data = {
      file_name: bulkFiles?.nii?.name,
    };
    console.log("CNN Data: ", data);
    if (IS_CNN) {
      const CNNendpoint = BACKEND_URL + "";
      axios
        .post(CNNendpoint, data)
        .then((response) => {
          console.log("res: ", response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [bulkFiles]);

  useEffect(()=>{
    setScore(SVMResult?.score.toFixed(2));
    setHumanType(localStorage?.getItem('type'));
  },[])

  const params = useMemo(() => {
    const p = [];
    p["kioskMode"] = true;

    if (IS_SVM) {
      p["surfaces"] = ["/sample_image.surf"];
      p["images"] = ["/sample_dwi.nii.gz"];
    }

    return p;
  }, [niiFile]);

  useEffect(() => {
    window.papaya.Container.startPapaya();
    window.papaya.Container.resetViewer(0, params);
  }, [params]);

  return (
    <motion.div className="mriViewerBg" 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }}>
   <Header/>
    <div style={{padding:"30px"}}>
      <div style = {{textAlign: "center"}}>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 pt-12"
                // data-aos="zoom-y-out"
        >Visualiser {" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  MaanSick</span>
        </h1>
      </div>


      {/* MRI viewer */}
      <div className="flex h-screen items-center justify-center">
      <div style={{ flex: "0.5" }}>
        <div id="papaya_viewer" className="papaya"></div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ flex: "0.5", height: "100%" }}
      >
        <div className="flex items-center justify-center flex-col bg-gray-50 p-10 rounded-xl shadow-xl">
          <div className="text-4xl font-bold text-center">Results: 
          {/* {SVMResult?.score?.toFixed(2)} */}
          </div>
          {SVMResult?.score? (
            // <div className="text-9xl py-10 font-bold">`${SVMResult}%`</div>
            <div className={`text-9xl py-10 font-bold ${textColor[category]}`}>
              <CountUp
                isCounting
                end={score}
                // end={90.57}
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
          ) : (
            <div className="my-4">Fetching results...</div>
          )}
          {humanType == "doc"?(
            <button
            // onClick={() => navigate("/loading")}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View Detailed Results
          </button>
          ):(
            <>
            </>
          )}
          
        </div>
      </div>
      </div>

      {/* Motion */}
      <div className = "mt-5">
        {humanType == "pat"?(
            <Roadmap/>
          ):(
            <></>
        )}

          {/* {
            localStorag.getItem("name") == "motwani"? <div><Roadmap/></div>: <div></div>
          } */}
      </div>
  
    </div>
     </motion.div>
  );
};

export default MRIViewer;
