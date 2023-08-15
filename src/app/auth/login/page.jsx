"use client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons library

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-1/2">
        <div className="p-10  md:p-20 md:justify-center md:items-center   ">
          <div className="bg-white  rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#399bf7] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#1c6fbd]"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        {/* Image (hidden on small screens) */}
        <img
          src="examImg.jpg"
          alt="Signin Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
