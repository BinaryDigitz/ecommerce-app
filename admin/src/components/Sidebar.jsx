import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Sidebar() {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink to="/add" className='flex items-center gap-3 border border-r-0 rounded-lg px-3 py-2 border-gray-300'>
          <img className="size-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add items</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
