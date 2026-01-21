import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Root = () => {
  const navigation = useNavigation();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
    document.title = "Phudu - Home";
  } else if (location.pathname === "/blogs") {
    document.title = "Blogs - Phudu";
  } else if (location.pathname === "/my-appointments") {
    document.title = "Booking - Phudu";
  } else if (location.pathname.startsWith("/doctors/") && location.state?.doctor) {
    document.title = `${location.state.doctor.name}`;

  }else {
    document.title= "Error - Phudu";
  }
  } , [location]);
  

  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Header />
      {navigation.state === "loading" && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
