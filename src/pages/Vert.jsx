import React, { useEffect, useRef, useState } from "react";
import Therapist from "../components/Therapist";

import ThreeModel from "../components/ThreeModel";

// import "./styles.css";
import { data, data2 } from "../data";

const UpperComponent = ({ state }) => {
  const finalData = data2[state];
  console.log(finalData);

  return (
    <div className="text-white">
      <div
        className="absolute text-4xl font-bold"
        style={{ top: "10%", right: "32%" }}
      >
        Waiting for model results...
      </div>
      <div
        id="topleft"
        className="absolute text-white"
        style={{ top: "10%", left: "10%" }}
      >
        <div className="text-2xl font-bold text-start">Lobes:</div>
        {finalData["lobes"].map((item) => {
          return <p className="text-xl mt-2 text-start">{item}</p>;
        })}
      </div>
      <div
        id="rightmid"
        className="absolute text-white"
        style={{ top: "40%", right: "10%" }}
      >
        <div>
          <div className="text-2xl font-bold text-start">Functions:</div>
          {finalData["functions"].map((item) => {
            return <p className="text-xl mt-2 text-start">{item}</p>;
          })}
        </div>
      </div>
      <div
        id="bottomleft"
        className="absolute text-white"
        style={{ bottom: "10%", left: "10%" }}
      >
        <div className="text-2xl font-bold text-start">Diseases:</div>
        {finalData["diseases"].map((item) => {
          return <p className="text-xl mt-2 text-start">{item}</p>;
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
          className="absolute text-white"
          style={{ top: "10%", right: "10%" }}
        >
          <div className="text-2xl font-bold text-start">Lobes:</div>
          {finalData["lobes"].map((item) => {
            return <p className="text-xl mt-2 text-start">{item}</p>;
          })}
        </div>

        <div
          id="bottomleft"
          className="absolute text-white  w-32"
          style={{ bottom: "50%", right: "10%" }}
        >
          <div className="text-2xl font-bold text-start ">Diseases:</div>

          {finalData["diseases"].map((item) => {
            return <p className="text-xl mt-2 text-start">{item}</p>;
          })}
        </div>

        <div
          id="rightmid"
          className="absolute text-white"
          style={{ bottom: "10%", right: "10%" }}
        >
          <div>
            <div className="text-2xl font-bold text-start">Functions:</div>
            {finalData["functions"].map((item) => {
              return <p className="text-xl mt-2 text-start">{item}</p>;
            })}
          </div>
        </div>
      </div>

      {/* Left */}
      <div
        id="rightmid"
        className="absolute text-white w-96"
        style={{ top: "10%", left: "5%" }}
      >
        <div>
          <div className="text-2xl font-bold text-start">Treatment:</div>
          {finalData["suggestions"].map((item) => {
            return <p className="text-xl mt-6 text-start">{item}</p>;
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
      }, 10000);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div class="scroll-container">
        <section class="child relative " style={{ position: "relative" }}>
          <ThreeModel />
          {isModelResult ? <FinalResult /> : <UpperComponent state={counter} />}
        </section>
        <section class="child">
          <Therapist />
        </section>
        <section class="child"></section>
        <section class="child"></section>
        <section class="child"></section>
        <section class="child"></section>
        {/* <p>...</p> */}
      </div>
    </>
  );
}
