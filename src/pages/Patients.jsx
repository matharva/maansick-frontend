import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../partials/Header";
import "../css/style.css";

const Patients = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState();
  
  useEffect(() => {
    axios.get("http://localhost:4000/doctors/" + localStorage.getItem("email")).then((res) => {
      setPatients(res.data.patientEmails)
    })
  }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Header />
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1520"
          height="578"
          viewBox="0 0 1360 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            {/* <circle cx="1380" cy="128" r="128" /> */}
            <circle cx="100" cy="530" r="64" />
          </g>
          {/* Second Circle */}
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#E0F4FD" offset="0%" />
              <stop stopColor="#FEFCFF" offset="77.402%" />
              <stop stopColor="#D2F9FE" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1380" cy="128" r="128" />
          </g>
        </svg>
      </div>
      <div className="pt-24">
        {/* <div className="font-bold text-6xl text-center py-12">
          Doctor's Dashboard
        </div> */}
        <div className="flex items-center justify-center flex-col">
          <div
            className="flex justify-center items-center"
            style={{ flex: "0.5" }}
          >
            <section class="text-gray-600 body-font">
              <div className="text-center font-bold text-2xl">
                Pending Patients
              </div>
              <div class="px-64 pt-8 pb-24 mx-auto">
                <div class="flex flex-wrap -m-2">

                  {patients && patients.map((element) => {
                    return  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                      <div
                        class="h-full flex items-center border-gray-200 border p-4 rounded-lg cursor-pointer"
                        onClick={() => navigate("/doctor/patients/info?email="+element.id)}
                      >
                        <img
                          alt="team"
                          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                          src="https://dummyimage.com/80x80"
                        />
                        <div class="flex-grow">
                          <h2 class="text-gray-900 title-font font-medium">
                            {capitalizeFirstLetter(element.id.split('.')[0]) + " " + capitalizeFirstLetter(element.id.split('.')[1].slice(0, -5))}
                          </h2>
                          <div className="clock">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#D62929" className="w-6 h-6" style={{paddingTop: "2%"}}>
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                            <span class="text-red-500">{capitalizeFirstLetter(element.status)}</span>
                            {/* <p class="text-gray-500">{capitalizeFirstLetter(element.status)}</p> */}
                          </div>

                          
                        </div>
                      </div>
                    </div>
                  })}

                  {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div
                      class="h-full flex items-center border-gray-200 border p-4 rounded-lg cursor-pointer"
                      onClick={() => navigate("/doctor/patients/info")}
                    >
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Holden Caulfield
                        </h2>
                        <p class="text-gray-500">UI Designer</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/84x84"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Henry Letham
                        </h2>
                        <p class="text-gray-500">CTO</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/88x88"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Oskar Blinde
                        </h2>
                        <p class="text-gray-500">Founder</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/90x90"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          John Doe
                        </h2>
                        <p class="text-gray-500">DevOps</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/94x94"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Martin Eden
                        </h2>
                        <p class="text-gray-500">Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/98x98"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Boris Kitua
                        </h2>
                        <p class="text-gray-500">UX Researcher</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/100x90"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Atticus Finch
                        </h2>
                        <p class="text-gray-500">QA Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/104x94"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Alper Kamu
                        </h2>
                        <p class="text-gray-500">System</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/108x98"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Rodrigo Monchi
                        </h2>
                        <p class="text-gray-500">Product Manager</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
          </div>

          <div className="" style={{ flex: "0.5" }}>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col mt-4">
                <label className="text-3xl font-bold">
                  Upload New Patient Data
                </label>

                <form className="mt-12">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">AND</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>

                <label htmlFor="">Upload MRI Files: </label>
                <input
                  required
                  type="file"
                  // onChange={selectBulkFiles}
                  multiple
                  className="mt-4 items-center"
                />
              </div>

              <button
                type="submit"
                //   onClick={sendFilesToBackend}
                class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Visualize image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
