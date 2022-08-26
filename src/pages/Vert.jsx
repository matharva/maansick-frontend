import React, { useEffect, useRef, useState } from "react";
import CustomLoader from "../components/CustomLoader";
import Therapist from "../components/Therapist";

import ThreeModel from "../components/ThreeModel";

// import "./styles.css";
import { data, data2 } from "../data";

const UpperComponent = ({ state }) => {
  const finalData = data2[state];
  console.log(finalData);

  return (
    <div className="text-white ">
      <div
        className="absolute text-4xl font-bold loading"
        style={{ bottom: "10%", left: "35%" }}
      >
        Waiting for model results
      </div>
      <div
        id="topleft"
        className="absolute text-white "
        style={{ top: "20%", left: "10%" }}
      >
        <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Lobes:
        </div>
        {finalData["lobes"].map((item) => {
          return <p className="text-xl mt-1 text-start">{item}</p>;
        })}
      </div>
      <div
        id="rightmid"
        className="absolute text-white"
        style={{ top: "35%", right: "10%" }}
      >
        <div>
          <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Functions:
          </div>
          {finalData["functions"].map((item) => {
            return <p className="text-xl mt-1 text-start">{item}</p>;
          })}
        </div>
      </div>
      <div
        id="bottomleft"
        className="absolute text-white"
        style={{ bottom: "20%", left: "10%" }}
      >
        <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Diseases:
        </div>
        {finalData["diseases"].map((item) => {
          return <p className="text-xl mt-1 text-start">{item}</p>;
        })}
      </div>
    </div>
  );
};

const FinalResult = () => {
  const finalData = data[0];
  console.log(finalData);
  return (
    <>
      <div className="">
        <div
          id="topleft"
          className="absolute text-white come-1"
          style={{ top: "10%", right: "10%" }}
        >
          <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Lobes:
          </div>
          {finalData["lobes"].map((item) => {
            return <p className="text-xl mt-1 text-start">{item}</p>;
          })}
        </div>

        <div
          id="bottomleft"
          className="absolute text-white  w-32 come-2"
          style={{ bottom: "50%", right: "10%" }}
        >
          <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Diseases:
          </div>

          {finalData["diseases"].map((item) => {
            return <p className="text-xl mt-1 text-start">{item}</p>;
          })}
        </div>

        <div
          id="rightmid"
          className="absolute text-white come-3"
          style={{ bottom: "10%", right: "10%" }}
        >
          <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Functions:
          </div>
          {finalData["functions"].map((item) => {
            return <p className="text-xl mt-1 text-start">{item}</p>;
          })}
        </div>
      </div>

      {/* Left */}
      <div
        id="rightmid"
        className="absolute text-white w-96 come-1"
        style={{ top: "10%", left: "5%" }}
      >
        <div>
          <div className="text-2xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Treatment:
          </div>
          {finalData["suggestions"].map((item) => {
            return (
              <p
                className="text-xl mt-6 text-start"
                style={{ fontFamily: "Helvetica" }}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default function Vert() {
  const [counter, setCounter] = useState(0);
  const [isModelResult, setIsModelResult] = useState(false);

  useEffect(() => {
    var timer = setInterval(() => {
      setCounter((prev) => (prev + 1) % 4);
      setTimeout(() => {
        clearInterval(timer);
        setIsModelResult(true);
      }, 12000);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div class="scroll-container">
        {/* <section class="child">
          <CustomLoader />
        </section> */}
        <section class="child relative " style={{ position: "relative" }}>
          <div
            className="absolute"
            style={{
              textAlign: "center",
              //   border: "2px solid red",
              top: "5%",
              left: "35%",
              zIndex: 1,
            }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                MaanSick{" "}
              </span>
              Viewer
            </h1>
          </div>
          <ThreeModel />
          {isModelResult ? <FinalResult /> : <UpperComponent state={counter} />}
        </section>
        <section class="child">
          <Therapist />
        </section>
        {/* <section class="child"></section> */}

        {/* <p>...</p> */}
      </div>
    </>
  );
}
