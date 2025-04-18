import React, { useContext } from "react";
import { assets } from "../assets/assets";
import AdminContext from "../context/AdminContext";

function Navbar() {
 const { setToken } = useContext(AdminContext)
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="logo" />
      <button onClick={() => setToken('')} className="bg-gray-600 hover:opacity-75 cursor-pointer text-white px-5 py-2 text-xs md:text-sm sm:px-7 sm:py-2 rounded-full">
        Log out
      </button>
    </div>
  );
}

export default Navbar;
