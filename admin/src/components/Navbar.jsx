import React from "react";
import { assets } from "../assets/assets";

function Navbar() {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="logo" />
      <button className="bg-gray-600 hover:opacity-75 cursor-pointer text-white px-5 py-2 text-xs md:text-sm sm:px-7 sm:py-2 rounded-full">
        Log out
      </button>
    </div>
  );
}

export default Navbar;
