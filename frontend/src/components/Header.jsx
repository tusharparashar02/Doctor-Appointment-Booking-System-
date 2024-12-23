import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col mt-3 md:flex-row flex-wrap bg-gray-500 rounded-lg px-6 md:px-10 lg:px-20">
      {/* -------left side */}
      {/* <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment  <br /> With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt=""/>
                <p>Simply browse through our extensive list of trusted doctors <br className='hidden sm:block' /> schedule your appointment hassel-free</p>
            </div>
            <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
      </div> */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 px-4 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight text-center md:text-left">
          Book Appointment
          <br className="hidden md:block" />
          With our Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img
            className="w-20 sm:w-24 md:w-28"
            src={assets.group_profiles}
            alt="Group Profiles"
          />
          <p className="text-center md:text-left">
            Simply browse through our extensive list of trusted doctors
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-sm mx-auto md:mx-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* -------right side */}
      {/* <div className='md:w-1/2 relative'>
        <img className='w-100 md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div> */}
      <div className="md:w-2/2 flex items-center justify-center relative">
        <img
          className="w-full md:max-w-[90%] lg:max-w-[80%] h-auto rounded-lg"
          src={assets.header_img}
          alt="Header Illustration"
        />
      </div>
    </div>
  );
};

export default Header;
