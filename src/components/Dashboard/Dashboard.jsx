import React from "react";
import CountUp from 'react-countup';
function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mx-5 lg:gap-6 my-8">
      <h1 className="text-xl lg:text-2xl text-center font-semibold lg:font-extrabold mx-auto mt-2 lg:mt-4">
        We Provide Best Medical Services
      </h1>

      <p className="text-xs lg:text-sm max-w-3xl mx-auto text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 lg:w-9/10 mx-auto mb-10 lg:mb-25">
        <div className="flex flex-col gap-3 p-8 lg:p-10 bg-white rounded-2xl shadow">
          <img
            src="/img/success-doctor.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-2xl lg:text-5xl font-bold">199+</h2>
          <h3 className="text-lg lg:text-xl text-gray-500 font-semibold">Total Doctors</h3>
        </div>

         <div className="flex flex-col gap-3 p-8 lg:p-10 bg-white rounded-2xl shadow">
          <img
            src="/img/success-review.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-2xl lg:text-5xl font-bold"><CountUp delay={1} start={400} end={500} duration={5000} />+</h2>
          <h3 className="text-lg lg:text-xl text-gray-500 font-semibold">Total Reviews</h3>
        </div>

         <div className="flex flex-col gap-3 p-8 lg:p-10 bg-white rounded-2xl shadow">
          <img
            src="/img/success-patients.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-2xl lg:text-5xl font-bold"><CountUp delay={0} start={1900} end={2000} duration={1500} />+</h2>

          <h3 className="text-lg lg:text-xl text-gray-500 font-semibold">Patients</h3>
        </div>

         <div className="flex flex-col gap-3 p-8 lg:p-10 bg-white rounded-2xl shadow">
          <img
            src="/img/success-staffs.png"
            alt=""
            srcset=""
            className="w-12 h-auto"
          />
          <h2 className="text-2xl lg:text-5xl font-bold">300+</h2>
          <h3 className="text-lg lg:text-xl text-gray-500 font-semibold">Total Staffs</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
