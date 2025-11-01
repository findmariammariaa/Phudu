import React from 'react';

import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from '../pages/Root/Root';
import Details from '../components/Details/Details';
import Home from '../components/Home/Home';
import Blogs from "../pages/Blogs/Blogs";
import Error from '../pages/Error/Error';
import Booking from '../components/Booking/Booking';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
          index: true,
          Component: Home,
        },
        {
          path:"details",
          Component: Details,
        },
        {
          path: "booking",
          Component: Booking,
        },

    ],
  },
  {
    path: "error",
    Component: Error,
    children:[
      {index: true, Component: ErrorMsg}
    ]
  },
  {
    path: "blogs",
    Component: Blogs,
  }


]);
