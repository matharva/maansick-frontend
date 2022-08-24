import { useCallback, useState } from "react";


const Upload = () => {
    const [selectedFile, setSelectedFile] = useState("");
    const [bvalFile, setBValFile] = useState("");
    const [bvecFile, setBVecFile] = useState("");
    const selectFile = useCallback((e) => setSelectedFile(e.target.files[0]), []);
    const selectBValFile = useCallback((e) => setBValFile(e.target.files[0]), []);
    const selectBVecFile = useCallback((e) => setBVecFile(e.target.files[0]), []);
    const sendFilesToBackend = (e)=>{
        e.preventDefault();
        console.log('NIIFILE', selectedFile);
        console.log('BVALFILE', bvalFile);
        console.log('BVECFILE', bvecFile);
    }
    return ( <>
        <h2>Upload page</h2>
        <form onSubmit={sendFilesToBackend} className = 'flex grid-cols-4 gap-3'>
          <label className=" col-span-1">
            <h3>Upload NII file:</h3>
            <input required type="file" onChange={selectFile} />
          </label>
          <br />
          <label className=" col-span-1">
            <h3>Upload Bvec file:</h3>
            <input required type="file" onChange={selectBVecFile} />
          </label>
          <br />
          <label className=" col-span-1">
            <h3>Upload BVal file:</h3>
            <input required type="file" onChange={selectBValFile} />
          </label>
          <br />
          <button type="submit" style={{ marginTop: "10px" }}>
            Visualize image
          </button>
        </form>
    </> );
}
 
export default Upload;