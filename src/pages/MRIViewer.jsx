import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// Assets
import medical_image_preview from "../assets/medical_image_preview.jpg";
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
  DangerPath
}from 'react-speedometer';
import { CountUp } from 'use-count-up'
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
  const params = useMemo(() => {
    const p = [];
    p["kioskMode"] = true;
    p["surfaces"] = ["/sample_image.surf"];
    p["/sample_image.surf"] = { color: [1, 0, 0], alpha: 0.5 };
    // p["sample_dwi.nii.gz"] = { dti: true, dtiLines: true, dtiColors: true };
    return p;
  }, []);

  useEffect(() => {
    window.papaya.Container.startPapaya();
    window.papaya.Container.resetViewer(0, params);
  }, [params]);

  const updateImage = useCallback(
    (_event) => {
      _event.preventDefault();

      if (selectedFile.type.startsWith("image")) {
        setNonDicomImg(true);
      } else {
        setNonDicomImg(false);
      }

      try {
        params["images"] = [URL.createObjectURL(selectedFile)];
        window.papaya.Container.resetViewer(0, params);
      } catch (error) {
        console.error(error);
      }
    },
    [params, selectedFile]
  );

  const selectFile = useCallback((e) => setSelectedFile(e.target.files[0]), []);

  const handleURLExpired = useCallback((e) => {
    e.target.onerror = null;
    e.target.src = medical_image_preview;
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div style={{ flex: "0.5", border: "2px solid red" }}>
        <div id="papaya_viewer" class="papaya" hidden={nonDicomImg}></div>
        {!!selectedFile && !!nonDicomImg && (
          <img
            alt="Medical file preview"
            src={URL.createObjectURL(selectedFile)}
            style={{ width: "800px", height: "600px", objectFit: "contain" }}
            onError={handleURLExpired}
          />
        )}
        <br />
        <form style={{ margin: "10px" }} onSubmit={updateImage}>
          <label style={{ fontFamily: "monospace" }}>
            <h3>Upload file:</h3>
            <input required type="file" onChange={selectFile} />
          </label>
          <br />
          <button type="submit" style={{ marginTop: "10px" }}>
            Visualize image
          </button>
        </form>
      </div>
      <div
        className="flex items-center justify-center helper1"
        style={{ flex: "0.5", height: "100%" }}
      >
        <div className="flex items-center justify-center flex-col helper">
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
