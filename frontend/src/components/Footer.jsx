import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 mt-40 text-sm">
          {/*left section */}
          <div>
            <img className="mb-5 w-40" src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-700 leading-6">
              By leveraging modern technology and machine learning, this project
              aims to enhance accessibility, improve the efficiency of
              healthcare delivery, and promote overall well being in a
              user-friendly and secure environment.{" "}
            </p>
          </div>
          {/*center section */}
          {/* <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='py-1 text-gray-900'>Home</li>
                        <li className='py-1 text-gray-900'>About us</li>
                        <li className='py-1 text-gray-900'>Contacts</li>
                        <li className='py-1'>Privacy Policy</li>
                    </ul>
             </div> */}
          <div>
            <h2 className="text-xl font-medium mb-5 uppercase ">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-700">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-700">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline text-gray-700">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/*right section */}
          <div>
            <p className="text-xl font-medium mb-5 uppercase">Get in Touch</p>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className=" text-gray-500">+180-548-2588</li>
              <li className=" text-gray-500">tusharparashar@gmail.com</li>
              <li className=" text-gray-500">+999-544-2588</li>
              <li className=" text-gray-500">
                G-110_GLA_University@example.com
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/*--copyright text--- */}
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 2024@ TusharParashar - All Right Reversed.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
