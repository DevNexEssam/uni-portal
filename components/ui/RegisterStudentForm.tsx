import Link from "next/link";
import React from "react";
import { FaLock, FaUser, FaEnvelope, FaIdCard } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";

const SignUpForm = () => {
  return (
    <>
      {/* Sign Up Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-text mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="fullname"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* University ID Field */}
          <div>
            <label
              htmlFor="universityId"
              className="block text-sm font-medium text-text mb-1"
            >
              University ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaIdCard className="text-gray-400" />
              </div>
              <input
                type="text"
                id="universityId"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your university ID"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text mb-1"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Enter your university email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text mb-1"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Create a password (min 8 characters)"
              />
            </div>
            <p className="mt-1 text-xs text-text-secondary">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-text mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="pt-2">
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Create Account
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 mb-4 w-max mx-auto"
          >
            <GiBookmarklet className="text-primary text-3xl" />
            {/* College Name */}
            <div className="text-left">
              <h1 className="font-bold text-xl text-text">UniFlow</h1>
              <p className="text-sm text-text-secondary">
                Faculty of Computer Science
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Login Link
      <div className="mt-6 text-center text-sm">
        <p className="text-text-secondary">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary-dark"
          >
            Login here
          </Link>
        </p>
      </div> */}
    </>
  );
};

export default SignUpForm;