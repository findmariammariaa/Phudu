import React from "react";

function Hero() {
  return (
    <div className="lg:py-4 mx-auto hero border-4 border-white rounded-2xl bg-linear-to-t  from-white to-gray-200 ">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="lg:text-5xl 2xl font-semibold">
            Dependable Care, Backed By Trusted Professionals
          </h1>
          <p className="py-2 text-xs lg:text-sm text-gray-700">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="flex gap-2 lg:gap-4 justify-center max-w-3xl mx-auto">
            <label className="input w-full flex items-center gap-2 border-2 border-gray-300 rounded-4xl px-4 py-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search any doctor" />
            </label>
            <button type="submit" className="btn btn-primary rounded-4xl">
              Search Now
            </button>
          </div>
          <div className="mt-2 flex justify-center gap-2 mx-auto max-w-md py-4">
            <img
              src="/img/banner-img-1.png"
              alt=""
              className="w-1/2 lg:w-full  h-auto object-contain"
            />
            <img
              src="/img/banner-img-1.png"
              alt=""
              className="w-1/2 lg:w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
