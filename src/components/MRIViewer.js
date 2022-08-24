import React, { useCallback, useEffect, useMemo, useState } from "react";
import medical_image_preview from "../assets/medical_image_preview.jpg";

const   MRIViewer = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [nonDicomImg, setNonDicomImg] = useState(false);

  const params = useMemo(() => {
    const p = [];
    // p["kioskMode"] = true;
    p["surfaces"] = ["sample_image.surf"];
    p["sample_image.surf"] = { color: [1, 0, 0], alpha: 0.5 };
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
    <div className="">
      {/* Upload Starts */}

      <div class="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      {/* </div>
          </div> */}
      {/* Upload Ends */}

      <div className="text-3xl font-bold underline bg-red-300">Hello!</div>
      <div style={{ width: "800px", marginTop: "10px" }}>
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
    </div>
  );
};

export default MRIViewer;
