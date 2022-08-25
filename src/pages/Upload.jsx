import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import Header from "../partials/Header"
import { useAuth } from "../context/AuthContext";

const Upload = ({ bulkFiles, setBulkFiles, setSVMResult }) => {
  const navigate = useNavigate();

  const { a } = useAuth();

  useEffect(() => {
    console.log("from context: ", a);
  }, []);

  const selectBulkFiles = (e) => {
    const files = e.target.files;
    console.log(e.target.files);
    const fileData = {
      nii: null,
      bval: null,
      bvec: null,
    };

    Array.from(files).forEach((item) => {
      if (item.name.includes("nii")) fileData["nii"] = item;
      if (item.name.includes("bval")) fileData["bval"] = item;
      if (item.name.includes("grad")) fileData["bvec"] = item;
    });

    console.log("Files: ", fileData);
    setBulkFiles(fileData);
  };

  // Upload function
  const sendFilesToBackend = (e) => {
    let formData = new FormData();
    formData.append("nii", bulkFiles["nii"]);
    formData.append("bval", bulkFiles["bval"]);
    formData.append("bvec", bulkFiles["bvec"]);

    const SVMendpoint = BACKEND_URL + "/evaluate";

    navigate("/loading");
    console.log("After redirect");

    axios
      .post(SVMendpoint, formData)
      .then((response) => {
        console.log("res from SVM model: ", response);
        let data = response.data;
        setSVMResult(data);
        navigate("/mri");
      })
      .catch((err) => {
        console.log(err);
        console.log("Backend is not running");
        navigate("/mri");
      });
  };
  return (
    <>{
      localStorage.getItem("name") == null ? <Header /> : <></>
    }<div className="flex flex-col items-center justify-center h-screen">
    <div className="text-6xl font-bold mb-10">Upload page</div>
    <div className="flex flex-col items-start justify-center">
      {/* <div className="flex flex-col">
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
      <br /> */}
      <div className="flex flex-col mt-4">
        <label className="text-3xl font-bold">Upload Bulk files:</label>
        <input
          required
          type="file"
          onChange={selectBulkFiles}
          multiple
          className="mt-4 items-center"
        />
      </div>

      <button
        type="submit"
        onClick={sendFilesToBackend}
        class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Visualize image
      </button>
    </div>
  </div></>
    
  );
};

export default Upload;
