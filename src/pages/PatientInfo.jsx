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

      <div
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
      </div>

      <div className="flex h-screen items-center justify-center pt-12">
        <div style={{ flex: "0.5", zIndex: 9 }}>
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

      <div className="pb-12 " style={{ width: "35%", margin: "0 auto" }}>
        <form className="px-24 py-16 card-shadow rounded-md">
          <div className="text-center text-3xl font-bold mb-4">
            Patient Feedback
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Patient email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required=""
            />
          </div>

          <div class="mb-6">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Feedback
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          {/* <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <label
              for="terms"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div> */}
          <div className="mx-auto flex">
            <button
              type="submit"
              class="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PatientInfo;
