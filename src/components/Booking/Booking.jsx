import React from "react";
import { useLoaderData } from "react-router";
import Chart from "../Dashboard/Chart";

const Booking = () => {
  const alldoctors = useLoaderData();

  const bookedIds =
    JSON.parse(localStorage.getItem("BookedAppointments")) || [];

  const doctors = alldoctors.filter((doctor) =>
    bookedIds.includes(doctor.id)
  );

  const handleCancel = (id) => {
    const updatedBookings = bookedIds.filter(
      (doctorId) => doctorId !== id
    );

    localStorage.setItem(
      "BookedAppointments",
      JSON.stringify(updatedBookings)
    );

    window.location.reload(); // simple refresh
  };

  return (
    
    <div className="mx-auto pb-10  px-8 flex flex-col gap-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {doctors.length > 0 && <Chart doctors={doctors}/>}
      <h1 className="text-xl lg:text-2xl  font-bold text-center lg:m-10">
        My Today Appointments
      </h1>
      {doctors.length > 0?(<p className="text-xs lg:text-sm max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300 text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>):null}
      

      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex flex-col gap-4"
          >
            <div className="flex-col lg:flex justify-between border-b rounded-xl border-dashed  border-gray-400 pb-3">
              <div >
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <h2 className="text-lg font-semibold text-gray-400">
                  {doctor.speciality}, {doctor.education}
                </h2> 
              </div>

              <div className="flex items-center">
                <h1 className="font-semibold text-md text-gray-400">
                  Appointment Fee: {doctor.fee} + VAT
                </h1>
              </div>
            </div>

            <button
              className="btn btn-error font-bold btn-outline mt-2 rounded-full"
              onClick={() => handleCancel(doctor.id)}
            >
              Cancel Appointment
            </button>
          </div>
        ))
      ) : (
        <div className="m-auto flex flex-col p-5 justify-center items-center">
          <h1 className="text-md font-semibold text-center">
          No Appointments Booked Yet
        </h1>
        <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/'}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default Booking;
