import React from "react";
import { NavLink } from "react-router";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer className="flex shadow-md w-full flex-col footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
      <div className="flex">
        <img src="/img/logo.png" alt="logo" className="size-10" />
        <a className="btn btn-ghost text-xl font-extrabold">PHUDU</a>
      </div>
      <nav className="grid grid-flow-col gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/booking"}>My-Booking</NavLink>

        <NavLink to={"/blogs"}>Blogs</NavLink>

        <NavLink to={"/contact"}>Contact Us</NavLink>
      </nav>
      <hr className=" border-base-300 border-1 w-6/8" />

      <nav>
        <div className="grid grid-flow-col gap-3">
          <SocialIcon
            url="https://facebook.com/findmariammariaa"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://youtube.com/@findmariammariaa"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/findmariammariaa"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://github.com/findmariammariaa"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
