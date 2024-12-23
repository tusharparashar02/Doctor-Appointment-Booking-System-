import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'
const Login = () => {
    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setAToken, backendUrl} = useContext(AdminContext)
    const {setDToken} = useContext(DoctorContext)
    const onSubmitHandler = async(event)=>{
        event.preventDefault()
        try {
            if (state === 'Admin') {
                const {data} = await axios.post(backendUrl + '/api/admin/login' , {email,password})
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                    
                }else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl+ '/api/doctor/login', {email, password})
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token)
                    console.log(data.token);
                    
                }else{
                    toast.error(data.message)
                }
            }
        } catch (error) {
            
        }
    }
  return (
    <>
        <form onSubmit={onSubmitHandler} className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
            <div className="text-center mb-6">
                <p className="text-2xl font-semibold text-gray-700"><span className="text-blue-500">{state}</span> Login</p>
            </div>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input 
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    type="email" 
                    id="email" 
                    required 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input 
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                    type="password" 
                    id="password" 
                    required 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="text-center">
                <button 
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
                {
                    state === 'Admin'
                    ? <p>Doctor Login? <span className='text-blue-400 underline cursor-pointer ' onClick={()=>setState('Doctors')}>Click here</span></p>
                    : <p>Admin Login? <span className='text-blue-400 underline cursor-pointer ' onClick={()=>setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>

    </>
  )
}

export default Login
