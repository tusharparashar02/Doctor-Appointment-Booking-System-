import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-2xl sm:text-3xl font-medium text-center">
        Find by Speciality
      </h1>
      <p className="w-5/6 sm:w-2/3 lg:w-1/3 text-center text-sm">
        Simply browse the doctors through our extensive list of trusted doctors,
        schedule your appointment hassle-free.
      </p>
      <div className="flex flex-wrap justify-center gap-6 pt-5 w-full">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img
              className="w-12 sm:w-16 md:w-20 lg:w-24 mb-2"
              src={item.image}
              alt=""
            />
            <p className="text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
