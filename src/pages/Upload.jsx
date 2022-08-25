import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";

const Upload = ({ selectedFile, setSelectedFile }) => {
  const navigate = useNavigate();

  // States
  const [bvalFile, setBValFile] = useState("");
  const [bvecFile, setBVecFile] = useState("");

  // Handlers
  const selectFile = useCallback((e) => setSelectedFile(e.target.files[0]), []);
  const selectBValFile = useCallback((e) => setBValFile(e.target.files[0]), []);
  const selectBVecFile = useCallback((e) => setBVecFile(e.target.files[0]), []);

  // Upload function
  const sendFilesToBackend = (e) => {
    navigate("/mri");

    // send files to backend
    e.preventDefault();
    console.log("NIIFILE", selectedFile);
    console.log("BVALFILE", bvalFile);
    console.log("BVECFILE", bvecFile);

    let formData = new FormData();
    formData.append("nii", selectedFile);
    formData.append("bval", bvalFile);
    formData.append("bvec", bvecFile);

    const SVMendpoint = BACKEND_URL + "/evaluate";

    axios
      .post(SVMendpoint, formData)
      .then((response) => {
        console.log("res: ", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl font-bold mb-10">Upload page</div>
      <div className="flex flex-col items-start justify-center">
        {/* <form onSubmit={sendFilesToBackend}> */}
        <div className="flex flex-col">
          <label className="text-3xl font-bold">Upload NII file:</label>
          <input
            required
            type="file"
            onChange={selectFile}
            className="mt-4 items-center"
          />
        </div>
        <br />
        <div className="flex flex-col mt-4">
          <label className="text-3xl font-bold">Upload Bvec file:</label>
          <input
            required
            type="file"
            onChange={selectBVecFile}
            className="mt-4"
          />
        </div>
        <br />
        <div className="flex flex-col mt-4">
          <label className="text-3xl font-bold">Upload BVal file:</label>
          <input
            required
            type="file"
            onChange={selectBValFile}
            className="mt-4"
          />
        </div>
        <br />

        <button
          type="submit"
          onClick={sendFilesToBackend}
          class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Visualize image
        </button>

        {/* <button type="submit" style={{ marginTop: "10px" }}>
            Visualize image
          </button> */}
        {/* </form> */}
      </div>
    </div>
  );
};

export default Upload;
