import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginData from "../assets/logins.json";
import Header from "../partials/Header";

function SignIn() {
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [humanType, setHumanType] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  // Handlers
  const handleAuth = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("type", humanType);

    if (humanType == "pat") {
      navigate("/upload");
    } else {
      navigate("/doctor/patients");
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
                <h1 className="h1">Welcome back to Maansick.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleAuth}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phoneNum"
                        type="number"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your phone number"
                        required
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      {/* <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <Link to="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
                      </div> */}
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="phoneNumber"
                      >
                        Password
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

                  {/* Select Type Starts */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium"
                        htmlFor="type"
                      >
                        Select type
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 justify-center items-center">
                    <div className="flex w-1/2 px-3 gap-2">
                      <input
                        type="radio"
                        name="value"
                        onChange={() => {
                          setHumanType("doc");
                        }}
                      />
                      <label for="humanType">Doctor</label>
                    </div>
                    <div className="flex w-1/2 px-3 gap-2">
                      <input
                        type="radio"
                        name="value"
                        onChange={() => {
                          setHumanType("pat");
                        }}
                      />
                      <label for="humanType">Patient</label>
                    </div>
                  </div>
                  {/* Select Type Ends */}

                  {/* Select Gender Starts */}
                  <div className="flex flex-wrap -mx-3 my-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium"
                        htmlFor="type"
                      >
                        Select Gender
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 justify-center items-center">
                    <div className="flex w-1/2 px-3 gap-2">
                      <input
                        type="radio"
                        name="value"
                        onChange={() => {
                          setGender("female");
                        }}
                      />
                      <label for="humanType">Female</label>
                    </div>
                    <div className="flex w-1/2 px-3 gap-2">
                      <input
                        type="radio"
                        name="value"
                        onChange={() => {
                          setGender("male");
                        }}
                      />
                      <label for="humanType">Male</label>
                    </div>
                  </div>
                  {/* Select Gender Ends */}

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
