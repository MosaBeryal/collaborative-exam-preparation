"use client";
import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setFormError("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    // Submit form data
    console.log("Email:", email);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-1/2 d-flex justify-center items-center">
        <div className="p-10 md:pr-15 md:pt-40 md:py-5 md:justify-center md:items-center h-full">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              {formError && <p className="text-red-500 mb-4">{formError}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        {/* Image (hidden on small screens) */}
        <img
          src="examImg.jpg"
          alt="Forgot Password Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
