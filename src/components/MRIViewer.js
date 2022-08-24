import React, { useCallback, useEffect, useMemo, useState } from "react";
import medical_image_preview from "../assets/medical_image_preview.jpg";

const MRIViewer = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [nonDicomImg, setNonDicomImg] = useState(false);

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
          <div className="text-9xl py-10 font-bold">90%</div>
          <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            View Detailed Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default MRIViewer;
