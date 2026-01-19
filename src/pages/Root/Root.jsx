import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
