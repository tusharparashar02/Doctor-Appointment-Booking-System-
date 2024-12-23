import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <header className="font-[sans-serif] min-h-[60px] tracking-wide relative z-50">
        {/* Top Section */}
        <section className="bg-[#004d66] min-h-[40px] flex items-center justify-between py-3 px-4 sm:px-10">
          <div className="w-full overflow-hidden">
            <div className="animate-scroll whitespace-nowrap text-white text-sm text-center">
              G-110_GLA_University || This is Our Final Year Project || Hope You
              are doing well! ❤️️ || For any Further Enquiry Contact to our
              Mentor: "Dr. Swati Srivastava"
            </div>
          </div>
        </section>

        {/* Main Header */}
        <div className="flex items-center justify-between py-3 px-4 sm:px-10 bg-white border-b border-b-gray-400">
          {/* Logo */}
          <Link to="/">
            <img src={assets.logo} alt="logo" className="w-36" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-5 font-medium">
            <ul className="hidden md:flex items-start gap-5 font-medium">
              <NavLink to="/">
                <li className="py-1">HOME</li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/doctors">
                <li className="py-1"> ALL DOCTORS</li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/contact">
                <li className="py-1">CONTACTS</li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/about">
                <li className="py-1">ABOUT</li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
              </NavLink>
            </ul>
          </div>

          {/* Profile or Login Button */}
          <div className="flex items-center gap-4">
            {token && userData ? (
              <div className="relative group cursor-pointer flex items-center gap-2">
                <img
                  className="w-8 rounded-full"
                  src={userData.image}
                  alt="Profile"
                />
                <div className="absolute right-0 top-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p
                      onClick={() => navigate("my-profile")}
                      className="text-gray-600 text-sm cursor-pointer hover:text-black"
                    >
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate("my-appointments")}
                      className="text-gray-600 text-sm cursor-pointer hover:text-black"
                    >
                      My Appointment
                    </p>
                    <p
                      onClick={logout}
                      className="text-gray-600 text-sm cursor-pointer hover:text-black"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sm rounded-full font-bold text-black border-2 border-red bg-red-500 transition-all duration-300 hover:bg-transparent hover:text-[#007bff]"
              >
                Get Started
              </button>
            )}
            <img
              onClick={() => setShowMenu(true)}
              className="w-6 md:hidden"
              src="https://cdn-icons-png.flaticon.com/128/17821/17821829.png"
              alt=""
            />
            {/*----Mobile Menu------- */}
            <div
              className={`${
                showMenu ? "fixed w-full" : "h-0 w-0"
              } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
            >
              <div className="flex items-center justify-between px-5 py-6">
                <img className="w-36" src={assets.logo} alt="" />
                <img
                  className="w-7"
                  onClick={() => setShowMenu(false)}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                  alt=""
                />
              </div>
              <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <NavLink onClick={() => setShowMenu(false)} to="/">
                  <p className="px-4 py-2 rounded inline-block">Home</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                  <p className="px-4 py-2 rounded inline-block">All Doctors</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to="/about">
                  <p className="px-4 py-2 rounded inline-block">About</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to="/contact">
                  <p className="px-4 py-2 rounded inline-block">Contact</p>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
