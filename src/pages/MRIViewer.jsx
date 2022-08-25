import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountUp } from 'use-count-up'
import { BACKEND_URL, IS_CNN, IS_SVM } from "../constants";
import axios from "axios";
// Assets
import medical_image_preview from "../assets/medical_image_preview.jpg";
const MRIViewer = () => {
  const navigate = useNavigate();
  const textColor = {
    default: 'text-black',
    'ok': 'text-green-500',
    'warn': 'text-yellow-500',
    'danger': 'text-red-500',
    // ...
  }
  // States
  const [selectedFile, setSelectedFile] = useState("");
  const [nonDicomImg, setNonDicomImg] = useState(false);
  const[category, setCategory] = useState('ok')

const MRIViewer = ({ niiFile, SVMResult, bulkFiles }) => {
const navigate = useNavigate();

  // Side Effects
  useEffect(() => {
    const data = {
      file_name: bulkFiles["nii"].name,
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
    <div className="flex h-screen items-center justify-center">
      <div style={{ flex: "0.5" }}>
        <div id="papaya_viewer" class="papaya"></div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ flex: "0.5", height: "100%" }}
      >
        <div className="flex items-center justify-center flex-col">
          <div className="text-4xl font-bold text-center ">Results</div>
          {/* <div className="text-9xl py-10 font-bold">90%</div> */}
          <div className={`text-9xl py-10 font-bold ${textColor[category]}`}>
          <CountUp isCounting end={90.56} duration={3.2}  onUpdate = {(currentValue)=>{
            if(currentValue <=60)
            {
              setCategory('ok');
            }
            else if (currentValue > 60 && currentValue < 80)
            {
              setCategory('warn');
            }
            else
            {
              setCategory('danger');
            }
          }}/>%
          </div>

          {SVMResult ? (
            <div className="text-9xl py-10 font-bold">`${SVMResult}%`</div>
          ) : (
            <div className="my-4">Fetching results...</div>
          )}

          <button
            onClick={() => navigate("/loading")}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View Detailed Results
          </button>
        </div>
  {/* <Speedometer
    value={96}
    max={100}
    fontFamily='Helvetica'

  >
    <Background />
    <Arc arcWidth={50}/>
    <Needle/>
    <DangerPath/>
    <Progress/>
    <Marks/>
    <Indicator/>
  </Speedometer> */}
      </div>
    </div>
  );
};

export default MRIViewer;

// const updateImage = useCallback(
//   (_event) => {
//     _event.preventDefault();

//     if (selectedFile.type.startsWith("image")) {
//       setNonDicomImg(true);
//     } else {
//       setNonDicomImg(false);
//     }

//     try {
//       params["images"] = [URL.createObjectURL(selectedFile)];
//       window.papaya.Container.resetViewer(0, params);
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   [params, selectedFile]
// );

// const selectFile = useCallback((e) => setSelectedFile(e.target.files[0]), []);

// const handleURLExpired = useCallback((e) => {
//   e.target.onerror = null;
//   e.target.src = medical_image_preview;
// }, []);

{
  /* {!!selectedFile && !!nonDicomImg && (
          <img
            alt="Medical file preview"
            src={URL.createObjectURL(selectedFile)}
            style={{ width: "800px", height: "600px", objectFit: "contain" }}
            onError={handleURLExpired}
          />
        )} */
}
{
  /* <br /> */
}
{
  /* <form style={{ margin: "10px" }} onSubmit={updateImage}>
          <label style={{ fontFamily: "monospace" }}>
            <h3>Upload file:</h3>
            <input required type="file" onChange={selectFile} />
          </label>
          <br />
          <button type="submit" style={{ marginTop: "10px" }}>
            Visualize image
          </button>
        </form> */
}
