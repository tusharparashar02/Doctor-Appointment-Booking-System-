import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const months  = [" ","jan", "feb", "mar","Apr", "May", "June", "July", "Aug", "Sep", "Oct","Nov","Dec"]

  const navigate = useNavigate()
  const slotDateFormat = (slotDate)=>{
    const dateArray = slotDate.split('_')
    return dateArray[0]+" "+ months[Number(dateArray[1])]+ " "+ dateArray[2]
  }

  // get userAppointmet
  const getUserAppointments = async()=>{
    try {
      const {data} = await axios.get(backendUrl + '/api/user/list-appointment',{headers:{token}})

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  //cancel Appointment
  const cancelAppointment = async (appointmentId) =>{
    try {
      const {data} = await axios.post(backendUrl+'/api/user/cancel-appointment', {appointmentId}, {headers: {token}})
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const initPay = (order) =>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt : order.receipt,
      handler: async(response)=>{
        console.log(response)
        try {
          const {data} = await axios.post(backendUrl + '/api/user/verify-razorpay', response, {headers: {token}})
          if (data.success) {
            getUserAppointments()
            navigate('/my-appointments')
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message)
        }
        
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  //Payment by razorpay
  const appointmentRazorpay = async (appointmentId)=>{
    try {
      const {data} = await axios.post(backendUrl+ '/api/user/payment-razorpay', {appointmentId}, {headers: {token}})
      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  },[token])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        My Appointments
      </h1>
      <div className="space-y-6">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-6"
          >
            <div className="w-24 h-24">
              <img
                src={item.docData.image}
                alt={item.docData.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-700">{item.name}</p>
              <p className="text-gray-600">{item.docData.speciality}</p>
              <p className="text-gray-500 mt-2">
                <span className="font-medium text-gray-700">Fees:</span>
                {item.docData.fees}
              </p>
              <p className="text-gray-500 mt-2">
                <span className="font-medium text-gray-700">Date & Time:</span>
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              {!item.cancelled && item.payment && !item.isCompleted &&<button className='sm:min-w-48 py-2 border rounded text-green-500 bg-indigo-50'>Paid</button>}
              {!item.cancelled && !item.payment &&  !item.isCompleted &&<button onClick={()=>appointmentRazorpay(item._id)} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                Pay Online
              </button>}
              
              {!item.cancelled && !item.payment && !item.isCompleted &&<button onClick={()=>cancelAppointment(item._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                Cancel Appointment
              </button>}

              {item.cancelled && !item.isCompleted &&<button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
              {
                item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
