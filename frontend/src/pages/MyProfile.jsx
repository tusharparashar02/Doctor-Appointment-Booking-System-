import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 rounded opacity-75"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt=""
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={image ? "" : userData.image}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        {isEdit ? (
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="text-xl font-semibold">{userData.name}</p>
        )}
        <hr className="my-4 border-gray-300" />
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">
            {" "}
            Contact Information{" "}
          </p>
          <div className="mt-2 text-gray-600">
            <p>
              <span className="font-medium">Email Id:</span> {userData.email}{" "}
            </p>
            <p className="mt-2">
              <span className="font-medium">Phone number:</span>
              {isEdit ? (
                <input
                  type="text"
                  className="border rounded-lg p-2 w-full mt-1"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <span className="ml-2">{userData.phone}</span>
              )}
            </p>
            <p className="mt-4">
              <span className="font-medium">Address:</span>
            </p>
            {isEdit ? (
              <p>
                <input
                  type="text"
                  className="border rounded-lg p-2 w-full mt-1"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                />
                <input
                  type="text"
                  className="border rounded-lg p-2 w-full mt-2"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </p>
            ) : (
              <p className="ml-2">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">
            Basic Information
          </p>
          <div className="mt-2 text-gray-600">
            <span className="font-medium">Gender:</span>
            {isEdit ? (
              <select
                className="border rounded-lg p-2 w-full mt-1"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span className="ml-2">{userData.gender}</span>
            )}

            <p className="mt-4">
              <span className="font-medium">Birthday:</span>
              {isEdit ? (
                <input
                  type="date"
                  className="border rounded-lg p-2 w-full mt-1"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  value={userData.dob}
                />
              ) : (
                <span className="ml-2">{userData.dob}</span>
              )}
            </p>
          </div>
        </div>

        <div className="text-center">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default MyProfile;
