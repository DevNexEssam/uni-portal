import Link from 'next/link'
import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'

const LoginForm = () => {
  return (
    <>
            {/* Login Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-text mb-1">
                University ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Enter your university ID"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
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
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm">
          <p className="text-text-secondary">
            Forgot your password?{' '}
            <Link href="/login/reset-password" className="font-medium text-primary hover:text-primary-dark">
              Reset here
            </Link>
          </p>
        </div>
    </>
  )
}

export default LoginForm
