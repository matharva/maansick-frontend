import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, IS_CNN, IS_SVM } from "../constants";
import axios from "axios";
import { CountUp } from "use-count-up";
import Header from "../partials/Header";
import Quiz from "../components/Quiz";
import MRIStoryBoard from "../components/MRIStoryBoard";
import { useSearchParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import PatientFeeback from "../components/PatientFeeback";

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
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState();
  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="patientUploadBg min-h-screen">
      <Header />
      <div>
        {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1510"
          height="578"
          viewBox="0 0 1360 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="100" cy="530" r="64" />
          </g>
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#E0F4FD" offset="0%" />
              <stop stopColor="#FEFCFF" offset="77.402%" />
              <stop stopColor="#D2F9FE" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1380" cy="128" r="128" />
          </g>
        </svg>
      </div> */}
    <div className="flex pt-20 items-center justify-center flex-col">
      {email && <div className="font-bold text-3xl mb-4">
                                Patient Name: {capitalizeFirstLetter(
                                  email.split(".")[0]
                                ) +
                                  " " +
                                  capitalizeFirstLetter(
                                    email.split(".")[1].slice(0, -5)
                                  )}</div>}
      </div>

        <div className="flex h-screen items-center justify-center pt-12">
          <div style={{ flex: "0.5", zIndex: 9 }}>
            <div id="papaya_viewer" class="papaya"></div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ flex: "0.5", height: "100%" }}
          >
            <div className="flex items-center justify-center flex-col bg-gray-50 p-10 rounded-xl shadow-xl">
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

        <MRIStoryBoard />
        <div className="grid grid-cols-2 gap-4 ">
          <div className="text-center text-3xl font-bold mb-4 col-span-1">
            Quiz Results
          </div>
          <div className="text-center text-3xl font-bold mb-4 col-span-1">
            Patient Feedback
          </div>
        </div>

                
        <div className="grid grid-cols-2 mb-10 p-10">
          <div className="col-span-1 shadow-2xl">
          <Quiz />
          </div>
          <div className="col-span-1">
          <PatientFeeback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
 