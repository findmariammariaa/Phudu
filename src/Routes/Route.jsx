import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../pages/Root/Root";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Booking from "../components/Booking/Booking";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Doctor from "../components/Doctor/Doctor";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/doctors.json").then((res) => res.json()),
      },
      {
        path: "doctors/:id",
        element: <Doctor />,
        loader: async ({ params }) => {
          const res = await fetch("/doctors.json");
          const doctors = await res.json();

          const doctor = doctors.find((d) => String(d.id) === params.id);

          if (!doctor) {
            throw new Response("Doctor not found", { status: 404 });
          }

          return doctor;
        },
      },

      {
        path: "my-appointments",
        Component: Booking,
        loader: () => fetch("/doctors.json").then((res) => res.json()),
      },
      {
        path: "blogs",
        Component: Blogs,
      },
    ],
  },
]);
