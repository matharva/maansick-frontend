import Header from "../partials/Header";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Navigate } from "react-router-dom";
import Timeslot from "./Timeslot";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = () => {
        toast(" Booking Successfull ")
      };

const PatientBooking = () => {
    const [value, onChange] = useState(new Date());
    const handleBooking = ()=>{
        Navigate('/patient/appointments')
    }
    const handleTilesDisabled = ({date, view})=>{
        const today = new Date();
        today.setHours(0,0,0,0);
        if (view == 'month')
        {
            return today > date;
        }
        
    }
    return ( <div className=" min-h-screen bookingBg">
    <Header/>
    <div style={{ padding: "30px" }}>
        <div style={{ textAlign: "center" }}>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-14 pt-12"
            // data-aos="zoom-y-out"
          >
            Book an {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              appointment
            </span>
          </h1>
        </div>
    </div>
    <div className="grid grid-cols-8">
        <div className="col-span-3 text-center">
        <strong className="text-lg">Pick a date</strong>
        </div>
        <div className="col-span-4 text-center">
        <strong className="text-lg">Pick a slot</strong>
        </div>
    </div>
    <div className="grid grid-cols-8">
        <div className="col-span-3 m-auto">
            <Calendar onChange={onChange} value={value} className="shadow-2xl" tileDisabled={handleTilesDisabled} width="1000px" height="550px"/>
        </div>
        <div className="col-span-3 m-auto">
            <Timeslot />
        </div>        
    </div>
    <div className="flex justify-center items-center mt-20">
        <button className="mt-8 px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all ease-in-out duration-300 hover:scale-105 scale-100" onClick={showToast}>Book now</button>
    </div>
    <ToastContainer />
    </div> );
}
 
export default PatientBooking;