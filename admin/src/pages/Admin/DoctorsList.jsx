import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext)

  useEffect(()=>{
    getAllDoctors()
  },[aToken])
  
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">ALL Doctors</h1>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
          doctors.map((item, index)=>(
            <div key={index} className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
              <img src={item.image} alt="" className='w-full h-[300px] object-cover bg-blue-50'/>
              <div className="p-4">
                <p className="text-medium font-semibold text-gray-700">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.speciality}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList
