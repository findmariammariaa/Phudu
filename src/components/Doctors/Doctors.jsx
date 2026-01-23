import React, { useState } from "react";
import { Link } from "react-router-dom";

function Doctors({ doctors }) {
  const today = new Date();   
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayName = days[today.getDay()]; 

  const [showAll, setShowAll] = useState(false);
  const displayedDoctors = showAll ? doctors : doctors.slice(0, 6);
  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 mx-3 lg:mx-10 my-3 lg:my-8">
      <h1 className="text-xl lg:text-2xl font-semibold lg:font-extrabold mx-auto mt-2 lg:mt-4">Our Best Doctors</h1>

      <p className="text-xs lg:text-sm max-w-3xl mx-auto text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-700 rounded-2xl shadow"
          >
            <img
              src="img/image.png"
              alt={doctor.name}
              className="h-52 w-full object-cover rounded-2xl"
            />

            <div className="flex gap-2">
              {
                doctor.availability.includes(todayName) ? (
                   <span className="btn btn-soft btn-success text-xs rounded-full cursor-default pointer-events-none">
                Available
              </span>
              ) :
              (
                 <span className="btn btn-soft btn-error text-xs rounded-full cursor-default pointer-events-none"> 
                Unvailable
              </span>
              )
              }
             
              <span className="btn btn-soft btn-info rounded-full text-xs cursor-default pointer-events-none">
                {doctor.experience}+ Years Experience
              </span>
            </div>

            <h2 className="text-xl font-bold">{doctor.name}</h2>

            <p className="text-sm">
              {doctor.education}
            </p>
            <p className="border-b-2 border-dashed border-b-gray-300 pb-2 text-sm">{doctor.speciality}, {doctor.designation}</p>

            <p className="text-sm  items-center flex ">
              <span className="text-xl font-semibold mr-2">® </span>{" "} Reg No: {" "}
              {doctor.registrationNumber}
            </p>

            <Link to={`/doctors/${doctor.id}`} state={{ doctor }}>
              <button className="btn btn-outline btn-info w-full rounded-full border-2 font-bold">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      {!showAll && doctors.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="btn btn-primary rounded-full font-bold m-2"
        >
          View All Doctors
        </button>
      )}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="btn btn-outline btn-primary w-1/5 rounded-full font-bold"
        >
          Show Less
        </button>
      )}
    </div>
  );
}

export default Doctors;
