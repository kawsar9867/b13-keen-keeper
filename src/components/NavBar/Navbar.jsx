import React from "react";
import { House } from "lucide-react";
import { Clock4 } from "lucide-react";
import { ChartLine } from "lucide-react";

import logo from "../../../public/Assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 ">
        <div className=" navbar bg-base-100 shadow-sm flex justify-between items-center">
          <div className="flex items-center">
             <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 border-2 border-green-700"
            >
              <NavLink
                to="/home"
                className={({ isActive }) => `
              flex gap-1 font-semibold p-1 flex items-center rounded-sm ${
                isActive ?
                  "bg-[#244d3f] text-white shadow-sm"
                : "text-gray-500 hover:text-black "
              }`}
              >
                <House size={20} />
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => `
              flex gap-1 font-semibold p-1 flex items-center rounded-sm ${
                isActive ?
                  "bg-[#244d3f] text-white shadow-sm"
                : "text-gray-500 hover:text-black "
              }`}
                to="/timeline"
              >
                <Clock4 size={20} />
                Timeline
              </NavLink>
                   <NavLink
                className={({ isActive }) => `
              flex gap-1 font-semibold p-1 flex items-center rounded-sm ${
                isActive ?
                  "bg-[#244d3f] text-white shadow-sm"
                : "text-gray-500 hover:text-black "
              }`}
                to="/status"
              >
                {" "}
                <ChartLine size={20} />
                Status
              </NavLink>
            </ul>
          </div>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="gap-5 hidden lg:block md:block">
            <nav className="flex gap-2">
              <NavLink
                to="/home"
                className={({ isActive }) => `
              flex gap-1 font-semibold p-1 flex items-center rounded-sm ${
                isActive ?
                  "bg-[#244d3f] text-white shadow-sm"
                : "text-gray-500 hover:text-black "
              }`}
              >
                <House size={20} />
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => `
              flex gap-1 font-semibold p-1 flex items-center rounded-sm ${
                isActive ?
                  "bg-[#244d3f] text-white shadow-sm"
                : "text-gray-500 hover:text-black "
              }`}
                to="/timeline"
              >
                <Clock4 size={20} />
                Timeline
              </NavLink>
              <NavLink
                className={({ isActive }) => `
              flex gap-1 font-semibold p-1 flex items-center rounded-sm ${
                isActive ?
                  "bg-[#244d3f] text-white shadow-sm"
                : "text-gray-500 hover:text-black "
              }`}
                to="/status"
              >
                {" "}
                <ChartLine size={20} />
                Status
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
