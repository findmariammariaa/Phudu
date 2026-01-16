import React from "react";
import { Link } from "react-router-dom";

function Doctors({ doctors }) {
  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-extrabold mx-auto mt-4">
        Our Best Doctors
      </h1>

      <p className="text-sm max-w-3xl mx-auto text-center">
        Our platform connects you with verified, experienced doctors across various specialties —
        all at your convenience. Whether it's a routine checkup or urgent consultation,
        book appointments in minutes and receive quality care you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow"
          >
            <img
              src='img/doctor-sample.png'
              alt={doctor.name}
              className="h-52 w-full object-cover rounded-2xl"
            />

            <div className="flex gap-2">
              <span className="btn btn-soft btn-success rounded-full">
                Available
              </span>
              <span className="btn btn-soft btn-info rounded-full">
                {doctor.experience}+ Years Experience
              </span>
            </div>

            <h2 className="text-lg font-bold">{doctor.name}</h2>

            <p className="border-b border-dashed pb-2 text-sm">
              {doctor.speciality}
            </p>

            <p className="text-sm">{doctor.education}</p>

            <Link to={`/doctors/${doctor.id}`}>
              <button className="btn btn-outline btn-info w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
