"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons library
import { FcGoogle } from "react-icons/fc"; // Import Google icon from react-icons library

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const field in formData) {
      if (formData[field] === "") {
        setFormError("Please fill in all fields.");
        return;
      }
    }

    // Reset form error if no empty fields
    setFormError("");

    // Submit form data
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-1/2">
        <div className="p-10  md:pr-15 md:py-5 md:justify-center md:items-center">
          <div className="bg-white  rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Confirm your password"
                />
              </div>
              {formError && <p className="text-red-500 mb-4">{formError}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-600 mb-4"
              >
                Sign Up
              </button>
              <button className="flex items-center justify-center w-full bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600">
                <FcGoogle size={20} className="mr-2" />
                Sign In with Google
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        {/* Image (hidden on small screens) */}
        <img
          src="examImg.jpg"
          alt="Register Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
