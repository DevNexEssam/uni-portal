'use client';
import { FaEnvelope, FaLock, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function PasswordResetPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="mb-4">
          <Link href="/login" className="flex items-center text-primary hover:text-primary-dark">
            <FaArrowLeft className="mr-2" />
            Back to Login
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mb-4">
            <FaLock className="text-2xl text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-text mb-2">Reset Your Password</h1>
          <p className="text-text-secondary">
            Enter your email to receive a password reset link
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                University Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="student@university.edu"
                />
              </div>
            </div>

            {/* New Password Field (for demonstration) */}
            <div className="hidden">
              <label htmlFor="new-password" className="block text-sm font-medium text-text mb-1">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="new-password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Enter new password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>

        {/* Additional Help */}
        <div className="mt-6 text-center text-sm">
          <p className="text-text-secondary">
            Need help?{' '}
            <a href="#" className="font-medium text-primary hover:text-primary-dark">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}