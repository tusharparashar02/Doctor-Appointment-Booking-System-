import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [Speciality, setSpeciality] = useState('General Physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const {backendUrl, aToken} = useContext(AdminContext)

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    try {
      if (!docImg) {
        return toast.error('Image not selected')
      }
      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees',Number(fees))
      formData.append('about', about)
      formData.append('speciality', Speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({line1:address1, line2:address2}))

      //console log formdata
      formData.forEach((value,key)=>{
        console.log(`${key}: ${value}`)
        
      })
      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers:{aToken}})

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setFees('')
        setAbout('')

      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
      console.log(error);
      
    }
  }

  return (
      <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        <p className="text-2xl text-center font-bold text-gray-800 mb-4">Add Doctor</p>
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-3">
            <label htmlFor="doc-img" className="cursor-pointer">
              <img className="w-36 h-14 object-contain" src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload" />
            </label>
            <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
            <p className="text-gray-600 text-sm">Upload doctor picture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Doctor Name</p>
              <input
                onChange={(e)=> setName(e.target.value)} value={name}
                type="text"
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Doctor Email</p>
              <input
              onChange={(e)=> setEmail(e.target.value)} value={email}
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Doctor Password</p>
              <input
              onChange={(e)=> setPassword(e.target.value)} value={password}
                type="password"
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Doctor Experience</p>
              <select
                onChange={(e)=> setExperience(e.target.value)} value={experience}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5+ Year">5+ Year</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Doctor Fees</p>
              <input
                onChange={(e)=> setFees(e.target.value)} value={fees}
                type="number"
                placeholder="Fees"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Speciality</p>
              <select
                onChange={(e)=> setSpeciality(e.target.value)} value={Speciality}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="General physician">General Physician</option>
                <option value="Gynecologiest">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologiest">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Doctor Education</p>
              <input
              onChange={(e)=> setDegree(e.target.value)} value={degree}
                type="text"
                placeholder="Education"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Address</p>
              <input
              onChange={(e)=> setAddress1(e.target.value)} value={address1}
                type="text"
                placeholder="Address 1"
                required
                className="w-full mb-2 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
              onChange={(e)=> setAddress2(e.target.value)} value={address2}
                type="text"
                placeholder="Address 2"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">About Doctor</p>
            <textarea
            onChange={(e)=> setAbout(e.target.value)} value={about}
              placeholder="Write about Doctor"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition"
          >
            Add Doctor
          </button>
        </div>
      </form>

  );
};

export default AddDoctor;
