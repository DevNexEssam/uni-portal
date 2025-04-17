"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";

const SignUpForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!student.name || !student.email || !student.password) {
      setError("Please fill all the fields");
      return;
    }

    if (student.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      await axios.post("/api/register", student);
      router.push("/login");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullname" className="block text-sm font-medium text-text mb-1">
            Full Name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </span>
            <input
              type="text"
              id="fullname"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Enter your full name"
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              type="email"
              id="email"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Enter your university email"
              value={student.email}
              onChange={(e) => setStudent({ ...student, email: e.target.value })}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              id="password"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Create a password (min 8 characters)"
              value={student.password}
              onChange={(e) => setStudent({ ...student, password: e.target.value })}
            />
          </div>
          <p className="mt-1 text-xs text-text-secondary">
            Password must be at least 8 characters long
          </p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border cursor-pointer border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Create Account
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 mb-4 w-max mx-auto"
        >
          <GiBookmarklet className="text-primary text-3xl" />
          <div className="text-left">
            <h1 className="font-bold text-xl text-text">UniFlow</h1>
            <p className="text-sm text-text-secondary">Faculty of Computer Science</p>
          </div>
        </Link>

        {/* Login Link */}
        <p className="text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
