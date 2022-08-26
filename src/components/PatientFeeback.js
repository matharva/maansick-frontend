import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PatientFeeback = () => {
  const [searchParams] = useSearchParams();
  const [patientEmail, setPatientEmail] = useState("");

  //   Side Effects
  useEffect(() => {
    setPatientEmail(searchParams.get("email"));
  }, []);

  return (
    <div className="pb-12 " style={{ width: "35%", margin: "0 auto", background: "white" }}>
      <form className="px-24 py-16 card-shadow rounded-md">
        <div className="text-center text-3xl font-bold mb-4">
          Patient Feedback
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Patient email
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
            defaultValue={patientEmail}
            disabled
            required=""
          />
        </div>

        <div class="mb-6">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Feedback
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div className="mx-auto flex">
          <button
            type="submit"
            class="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientFeeback;
