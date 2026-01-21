import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";

function Doctor() {
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayName = days[today.getDay()];

  const location = useLocation();
  const doctor = location.state?.doctor;
  console.log(doctor);
  const [isBooked, setIsBooked] = useState(false);
  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("BookedAppointments")) || [];

    if (storedBookings.includes(doctor?.id)) {
      setIsBooked(true);
    }
  }, [doctor]);
  const handleBooking = () => {
    toast.success(`${doctor.name} booked successfully!`);
    const storedBookings =
      JSON.parse(localStorage.getItem("BookedAppointments")) || [];

    if (!storedBookings.includes(doctor.id)) {
      storedBookings.push(doctor.id);
      localStorage.setItem(
        "BookedAppointments",
        JSON.stringify(storedBookings),
      );
    }

    setIsBooked(true);
    ;
  };

  return (
    <div className=" bg-gray-100 min-h-screen flex flex-col gap-6 lg:gap-10">
      <div className="p-1 lg:p-12 mx-10 flex flex-col justify-center items-center gap-4 bg-white rounded-3xl shadow-lg">
        <h1 className="text-xl lg:text-2xl font-bold mt-4 ">Doctor's Profile Details</h1>
        <p className="text-xs lg:text-sm text-gray-600 w-5/6 text-center">
          Comprehensive profile of {doctor.name}, a seasoned {doctor.speciality}{" "}
          with over {doctor.experience} years of experience in diagnosing and
          treating related medical conditions. {doctor.name} is committed to
          providing personalized care and staying updated with the latest
          advancements in respective field to ensure the best outcomes for the
          patients.
        </p>
      </div>
      <div className="p-6 lg:p-12 mx-10 flex-col lg:flex justify-center items-center gap-10 bg-white rounded-3xl shadow-lg">
        <img
          src="/img/doctor-sample.png"
          alt=""
          srcset=""
          className="h-80 w-auto"
        />
        <div className="flex flex-col lg:w-4/5">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <h2 className="text-xl text-gray-600">{doctor.education}</h2>
          <p className="text-xl text-gray-600 mb-2">{doctor.speciality}</p>
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
                className="btn text-xs lg:text-sm btn-sm btn-soft btn-warning rounded-full cursor-default pointer-events-none"
              >
                {day}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <h1 className="text-sm font-semibold">Consultation Fee: </h1>
            <h2 className="text-sm text-blue-500 font-semibold">
              Taka :{doctor.fee}{" "}
              <span className="text-sm text-gray-400">(inc. Vat)</span> Per
              consultation
            </h2>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12 mx-10 flex flex-col gap-4 bg-white rounded-3xl shadow-lg mb-6 lg:mb-20">
        <h1 className="text-md lg:text-2xl font-bold text-center">Book an Appointment</h1>
        <div
          className="
            flex justify-between w-full items-center pt-3
            border-t border-dashed border-t-gray-400
            "
        >
          <h1 className="text-xs lg:text-md font-bold">Availability</h1>
          {doctor.availability.includes(todayName) ? (
            <span className="btn btn-soft btn-sm btn-success rounded-full cursor-default pointer-events-none">
              Doctor is available today
            </span>
          ) : (
            <span className="btn btn-soft btn-sm btn-error rounded-full cursor-default pointer-events-none">
              Doctor is unavailable today
            </span>
          )}
        </div>
        <hr className=" border-gray-200 border mt-0 w-full" />

        <p className="text-xs lg:text-sm bg-orange-50 text-orange-400 items-center rounded-full justify-start lg:w-max p-2">
          ⓘ Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        {doctor.availability.includes(todayName) ? (
          isBooked ? (
            <button
              className="btn w-full btn-success mt-4 px-8 py-3 rounded-full font-bold cursor-default"
              onClick={() => toast.error("You have already booked this appointment.") }
            >
              Appointment Booked
            </button>
          ) : (
            <Link to="/my-appointments" state={{ doctor }}>
              <button
                className="btn w-full btn-primary mt-4 px-8 py-3 rounded-full font-bold"
                onClick={() => handleBooking()}
              >
                Book Appointment Now
              </button>
            </Link>
          )
        ) : (
          <button className="btn w-full btn-disabled btn-primary mt-4 px-8 py-3 rounded-full font-bold">
            Book Appointment Now
          </button>
        )}
      </div>
    </div>
  );
}

export default Doctor;
