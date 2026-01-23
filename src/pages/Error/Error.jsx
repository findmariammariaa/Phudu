import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { Outlet, useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "Error - Phudu";
  }, []);
  return (
    <>
      <Header></Header>
      <div className="items-center justify-center flex flex-col min-h-screen bg-red-100 dark:bg-red-700">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-300">
          {error?.status || 404}
        </h1>
        <h1 className="text-2xl text-error-content">
          Opps! {error?.statusText || error?.message || "Something went wrong"}
        </h1>
        <p className="text-error-content">
          The page you are looking for does not exist.
        </p>

        <button
          className="btn btn-primary mt-4"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </button>
      </div>
    </>
  );
};

export default Error;
