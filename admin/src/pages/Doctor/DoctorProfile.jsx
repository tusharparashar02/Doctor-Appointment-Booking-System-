import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl  } =
    useContext(DoctorContext);
  const { currency} = useContext(AppContext);

  const [isEdit, setISEdit] = useState(false);

  const updateProfile = async()=>{
    try {
      const updateData ={
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }
      const {data} = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, {headers:{dToken}}) 
      if (data.success) {
        toast.success(data.message)
        setISEdit(false)
        getProfileData()
      }else{
        toast.error(data.error)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProfileData();
  }, [dToken]);

  return (
    profileData && (
      <div>
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex justify-center md:justify-start">
            <img
              src={profileData.image}
              alt=""
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-300"
            />
          </div>
          <div className="flex-1">
            {/* doctor info- name, degree, experience */}
            <p className="text-2xl font-bold text-gray-800">
              {profileData.name}
            </p>
            <div className="flex items-center mt-2 space-x-4">
              <p className="text-gray-600 text-lg">
                {profileData.degree} - {profileData.speciality}
              </p>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm shadow hover:bg-blue-600">
                {profileData.experience}
              </button>
            </div>
            {/**Doctor About */}
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">About:</p>
              <p className="text-gray-600 mt-1">{profileData.about}</p>
            </div>
            <p className="mt-4 text-lg text-gray-700">
              Appointment Fees:{" "}
              <span className="font-semibold text-green-500">
                {currency} {isEdit ?<input type="number" onChange={(e)=>setProfileData(prev =>({...prev, fees: e.target.value}))} value={profileData.fees}/> :profileData.fees}
              </span>
            </p>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Address:</p>
              <p className="text-gray-600">
                
                {isEdit? <input type="text" onChange={(e)=> setProfileData(prev => ({...prev, address: {...prev.address, line1:e.target.value}}))} value={profileData.address.line1}/>:profileData.address.line1}
                <br />
                {isEdit? <input type="text" onChange={(e)=> setProfileData(prev => ({...prev, address: {...prev.address, line2:e.target.value}}))} value={profileData.address.line2}/>:profileData.address.line2}
              </p>
            </div>
            {/**Availability */}
            <div className="flex items-center mt-4 space-x-2">
              <input
              onChange={()=>isEdit && setProfileData(prev => ({...prev, available: !prev.available}))}
                checked={profileData.available}
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label htmlFor="" className="text-gray-600">
                Available
              </label>
            </div>
            {
              isEdit 
              ? 
              <button
              onClick={updateProfile}
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg text-sm shadow hover:bg-green-600"
            >
              Save
            </button> : <button
              onClick={() => setISEdit(true)}
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg text-sm shadow hover:bg-green-600"
            >
              Edit
            </button>
            }
          
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
