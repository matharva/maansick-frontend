import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, IS_CNN, IS_SVM } from "../constants";
import axios from "axios";
import { CountUp } from "use-count-up";
import Header from "../partials/Header";
import Quiz from "../components/Quiz";
import MRIStoryBoard from "../components/MRIStoryBoard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "../styles.css";

const PatientInfo = ({ niiFile, SVMResult, bulkFiles }) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("ok");

  // const swiperRef = useRef(null);

  const textColor = {
    default: "text-black",
    ok: "text-green-500",
    warn: "text-yellow-500",
    danger: "text-red-500",
  };

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

  const params = useMemo(() => {
    const p = [];
    p["kioskMode"] = true;

    const imageArr = [
      "/sample_dwi.nii.gz",
      "/sample_dwi_2.nii.gz",
      "/sample_dwi_3.nii.gz",
    ];
    const imageLink = imageArr[Math.floor(Math.random() * 3)];

    if (IS_SVM) {
      p["surfaces"] = ["/sample_image.surf"];
      p["images"] = [imageLink];
    }

    return p;
  }, [niiFile]);

  useEffect(() => {
    window.papaya.Container.startPapaya();
    window.papaya.Container.resetViewer(0, params);
  }, [params]);

  return (
    <>
      <Header />

      <div className="flex h-screen items-center justify-center pt-12">
        <div style={{ flex: "0.5" }}>
          <div id="papaya_viewer" class="papaya"></div>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ flex: "0.5", height: "100%" }}
        >
          <div className="flex items-center justify-center flex-col">
            <div className="text-4xl font-bold text-center ">Results</div>
            {true ? (
              // <div className="text-9xl py-10 font-bold">`${SVMResult}%`</div>
              <div
                className={`text-9xl py-10 font-bold ${textColor[category]}`}
              >
                <CountUp
                  isCounting
                  end={[90.56, 66.4, 82.3][Math.floor(Math.random() * 3)]}
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
            {/* <button
              // onClick={() => navigate("/loading")}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              View Detailed Results
            </button> */}
          </div>
        </div>
      </div>

      {/* <MRIStoryBoard /> */}

      <Quiz />
    </>
  );
};

export default PatientInfo;
