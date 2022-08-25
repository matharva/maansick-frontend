import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import Header from "../partials/Header";
// import Header from "../partials/Header";

const Upload = ({ bulkFiles, setBulkFiles, setSVMResult }) => {
  const navigate = useNavigate();

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
        if (localStorage?.getItem("email") != null)
          axios
            .get(
              "http://localhost:4000/patients/" + localStorage.getItem("email")
            )
            .then((res) => {
              let tempData = res.data;
              tempData.niiFileName = bulkFiles["nii"].name;
              tempData.perc = data.score;
              axios.put(
                "http://localhost:4000/patients/" +
                  localStorage?.getItem("email"),
                tempData
              );
            });
        navigate("/mri");
      })
      .catch((err) => {
        console.log(err);
        console.log("Backend is not running");
        navigate("/mri");
      });
  };
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center h-screen">
        {/* <div className="text-6xl font-bold mb-10">Upload page</div> */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col mt-4">
            <label className="text-4xl font-bold text-center mb-12">
              Upload Bulk files
            </label>

            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 "
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6 w-96">
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
                  {bulkFiles?.nii ? (
                    <>
                      <p>Selected files</p>
                      {/* {console.log(Object.values(bulkFiles))} */}
                      {!!bulkFiles &&
                        Object.values(bulkFiles).map((item) => {
                          console.log("Files inside: ", item.name);
                          return <p>{item.name}</p>;
                        })}
                    </>
                  ) : (
                    <>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={selectBulkFiles}
                  multiple
                />
              </label>
            </div>

            {/* <input
            required
            type="file"
            onChange={selectBulkFiles}
            multiple
            className="mt-4 items-center"
          /> */}
          </div>

          <button
            type="submit"
            onClick={sendFilesToBackend}
            class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Visualize image
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
