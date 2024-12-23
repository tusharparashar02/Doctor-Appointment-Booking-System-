import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
const Slidebar = () => {
    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)
  return (
    <div className="bg-white text-gray-600 min-h-screen shadow-lg ">
      {
        aToken && <ul className="space-y-4">
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-green-600':''}`} to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium">Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-red-600':''}`} to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium">Appointments</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-pink-600':''}`} to={'/add-doctor'}>
                <img src={assets.add_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium">Add Doctors</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-blue-600':''}`} to={'/doctor-list'}>
                <img src={assets.people_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium">Doctor List</p>
            </NavLink>
        </ul>
      }
      {
        dToken && <ul className="space-y-4">
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-green-600':''}`} to={'/doctor-dashboard'}>
                <img src={assets.home_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium hidden md:block">Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-red-600':''}`} to={'/doctor-appointments'}>
                <img src={assets.appointment_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium hidden md:block">Appointments</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ?'bg-[#F2F3FF] border-r-4 border-blue-600':''}`} to={'/doctor-profile'}>
                <img src={assets.people_icon} alt="" className="w-6 h-6"/>
                <p className="text-lg font-medium hidden md:block">Profile</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Slidebar
