import React from "react";
import { House } from 'lucide-react';
import { Clock4 } from 'lucide-react';
import { ChartLine } from 'lucide-react';

import logo from "../../../public/Assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 ">
        <div className=" navbar bg-base-100 shadow-sm ">
          <div className="navbar-start ">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-end gap-5">
           <nav className="flex gap-5">
              <NavLink
  to="/home"
  className={({isActive}) => `
              flex gap-1 font-semibold p-1 rounded-sm ${
                isActive ? "bg-[#244d3f] text-white shadow-sm" : "text-gray-500 hover:text-black "
              }`}
>
  <House />
  Home
</NavLink>
              <NavLink className={({isActive}) => `
              flex gap-1 font-semibold p-1 rounded-sm ${
                isActive ? "bg-[#244d3f] text-white shadow-sm" : "text-gray-500 hover:text-black "
              }`} to="/timeline"><Clock4 />Timeline</NavLink>
              <NavLink className={({isActive}) => `
              flex gap-1 font-semibold p-1 rounded-sm ${
                isActive ? "bg-[#244d3f] text-white shadow-sm" : "text-gray-500 hover:text-black "
              }`} to="/status"> <ChartLine />Status</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
