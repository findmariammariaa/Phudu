import React from "react";
import { useLocation } from "react-router";

function Doctor() {
  const location = useLocation();
  const doctor = location.state?.doctor;
  console.log(doctor);
  return (
    <div className=" bg-gray-100 min-h-screen py-10 flex flex-col gap-10">
      <div className="p-12 mx-10 flex flex-col justify-center items-center gap-4 bg-white rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold ">Doctor's Profile Details</h1>
        <p className="text-sm text-gray-600 w-5/6 text-center">
          Comprehensive profile of {doctor.name}, a seasoned {doctor.speciality}{" "}
          with over {doctor.experience} years of experience in diagnosing and
          treating related medical conditions. {doctor.name} is committed to
          providing personalized care and staying updated with the latest
          advancements in respective field to ensure the best outcomes for the
          patients.
        </p>
      </div>
      <div className="p-12 mx-10 flex justify-center items-center gap-10 bg-white rounded-3xl shadow-lg">
        <img
          src="/public/img/doctor-sample.png"
          alt=""
          srcset=""
          className="h-80 w-auto"
        />
        <div className="flex flex-col w-4/5">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <h2 className="text-xl text-gray-600">
            {doctor.education}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            {doctor.speciality}
          </p>
          <p className="text-gray-400 text-md">Working at</p>
          <p className="text-xl font-bold text-black my-4">
            {" "}
            {doctor.workplace}
          </p>
          <p className="text-sm  items-center flex border-y-2 border-dashed border-y-gray-200 pb-2">
            <span className="text-xl font-bold mt-1 ">®</span>Reg No:{" "}
            {doctor.registrationNumber}
          </p>
          

          <div className="flex flex-wrap gap-2 items-center  my-2">
            <h1 className="text-sm font-semibold">Availability </h1>
            {doctor.availability.map((day, index) => (
              <span
                key={index}
                className="btn text-sm btn-sm btn-soft btn-warning rounded-full cursor-default pointer-events-none"
              >
                {day}
              </span>
            ))}
          </div>
           <div className="flex flex-wrap gap-2 items-center">
            <h1 className="text-sm font-semibold">Consultation Fee: </h1>
            <h2 className="text-sm text-blue-500 font-semibold">Taka :{doctor.fee} <span className="text-sm text-gray-400">(inc. Vat)</span> Per consultation</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
