import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "./exportComp";
import { toast } from "react-toastify";

function Navbar() {
  const { showSearch, setShowSearch, getCartCount, setToken, token, navigate } =
    useContext(ShopContext);
  const [isVisible, setVisibility] = useState(false);
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "COLLECTION", link: "/collection" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  function logout() {
    localStorage.removeItem("token");
    setToken("");
    toast.warn("Good bye!");
    setTimeout(() => navigate("/login"), 1000);
  }
  return (
    <section className="flex items-center justify-between py-5 font-medium ">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.link}
            className="flex flex-col items-center gap-1"
          >
            <p>{link.name}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:text-black"
          alt="search icon"
        />
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-5 cursor-pointer hover:text-black"
            />
          </Link>
          <div className="absolute group-hover:block hidden dropdown-menu right-0 p-4">
            <div className="flex flex-col w-36 py-3 px-5 bg-slate-100 text-slate-500">
              {!token ? (
                <p
                  onClick={() => navigate("/login")}
                  className="cursor-pointer text-green-400 hover:text-black"
                >
                  Login
                </p>
              ) : (
                <>
                  <p onClick={() => navigate("/profile")} className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                  <p
                    onClick={logout}
                    className="cursor-pointer text-red-500 hover:text-black"
                  >
                    Logout
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt=" cart icon" className="w-5 minw-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-sqaure rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisibility(true)}
          src={assets.menu_icon}
          alt="menu_icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* SIDEBAR MENU FOR SMALL SCREEN */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisibility(false)}
            className="flex items-center cursor-pointer gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="drop down icon"
            />
            <p>Back</p>
          </div>
          {navLinks.map((link) => (
            <NavLink
              onClick={() => setVisibility(false)}
              className="py-2 pl-6 border"
              key={link.name}
              to={link.link}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
