// 'use client';
import { FaUser, FaLock, FaEdit } from 'react-icons/fa';
// import { FiSmartphone } from 'react-icons/fi';

export default function StudentProfilePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-text">Student Profile</h1>
          <p className="text-sm text-text-secondary">
            Manage your basic information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary-light/10 flex items-center justify-center overflow-hidden">
                <FaUser className="text-3xl text-primary" />
              </div>
              <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full hover:bg-primary-dark">
                <FaEdit className="text-xs" />
              </button>
            </div>
          </div>

          {/* Student Information */}
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <p className="text-xs text-text-secondary uppercase">Full Name</p>
              <p className="font-medium text-text">Ahmed Mohamed</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <p className="text-xs text-text-secondary uppercase">Student ID</p>
              <p className="font-medium text-text">ST20231542</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <p className="text-xs text-text-secondary uppercase">Major</p>
              <p className="font-medium text-text">Computer Science</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-text-secondary uppercase">Phone Number</p>
                  <p className="font-medium text-text">+20 123 456 7890</p>
                </div>
                <button className="text-primary hover:text-primary-dark">
                  <FaEdit size={14} />
                </button>
              </div>
            </div>

            {/* Password Change */}
            <div className="pt-2">
              <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg text-primary hover:bg-primary-light/10">
                <FaLock className="mr-2" />
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}