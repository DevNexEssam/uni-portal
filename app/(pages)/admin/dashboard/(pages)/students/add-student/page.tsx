'use client';
import { FaUser, FaIdCard, FaGraduationCap, FaUniversity, FaCalendarAlt, FaSave } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function AddStudentPage() {
  const departments = ['Data Science', 'Software Engineering', 'Cybersecurity'];
  const faculties = ['Faculty of Engineering', 'Faculty of Computer Science'];
  const academicLevels = ['1st Year', '2st Year', '3st Year', '4st Year'];

  const [student, setStudent] = useState({
    universityId: '',
    fullName: '',
    department: '',
    faculty: '',
    academicLevel: '',
    phone: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
    

  }

  return (
    <>
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaUser className="mr-2 text-primary" />
          Add New Student
        </h1>
        <Link 
          href="/admin/dashboard/students"
          className="text-primary hover:text-primary-dark flex items-center"
        >
          Back to Students
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* University ID */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaIdCard className="mr-2 text-primary" />
                University ID (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="ST2023001"
                required
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaUser className="mr-2 text-primary" />
                Full Name (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Ahmed Mohamed"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaGraduationCap className="mr-2 text-primary" />
                Department (Required)
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept, i) => (
                  <option key={i} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Faculty */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaUniversity className="mr-2 text-primary" />
                Faculty (Required)
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Faculty</option>
                {faculties.map((faculty, i) => (
                  <option key={i} value={faculty}>{faculty}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Academic Level */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaCalendarAlt className="mr-2 text-primary" />
                Academic Level
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                <option value="">Select Level</option>
                {academicLevels.map((level, i) => (
                  <option key={i} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="+20 123 456 7890"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/students"
              className="px-4 py-2 border border-gray-300 rounded-lg text-text hover:bg-background-secondary"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
            >
              <FaSave className="mr-2" />
              Save Student
            </button>
          </div>
        </form>
      </div>
    </>
      
  );
}