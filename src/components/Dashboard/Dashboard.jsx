import React from "react";
import CountUp from 'react-countup';
function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-8">
      <h1 className="text-2xl font-extrabold mx-auto mt-4">
        We Provide Best Medical Services
      </h1>

      <p className="text-sm max-w-3xl mx-auto text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-9/10 mx-auto mb-25">
        <div className="flex flex-col gap-3 p-10 bg-white rounded-2xl shadow">
          <img
            src="/public/img/success-doctor.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-5xl font-bold">199+</h2>
          <h3 className="text-xl text-gray-500 font-semibold">Total Doctors</h3>
        </div>

         <div className="flex flex-col gap-3 p-10 bg-white rounded-2xl shadow">
          <img
            src="/public/img/success-review.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-5xl font-bold"><CountUp delay={1} start={400} end={500} duration={5000} />+</h2>
          <h3 className="text-xl text-gray-500 font-semibold">Total Reviews</h3>
        </div>

         <div className="flex flex-col gap-3 p-10 bg-white rounded-2xl shadow">
          <img
            src="/public/img/success-patients.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-5xl font-bold"><CountUp delay={0} start={1900} end={2000} duration={1500} />+</h2>

          <h3 className="text-xl text-gray-500 font-semibold">Patients</h3>
        </div>

         <div className="flex flex-col gap-3 p-10 bg-white rounded-2xl shadow">
          <img
            src="/public/img/success-staffs.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-5xl font-bold">300+</h2>
          <h3 className="text-xl text-gray-500 font-semibold">Total Staffs</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
