'use client';
import { FaBook, FaHashtag, FaChalkboardTeacher, FaSave } from 'react-icons/fa';
import Link from 'next/link';

export default function AddCoursePage() {
  const departments = ['Computer Science', 'Information Systems', 'AI', 'Computer Engineering'];
  const instructors = ['Dr. Ahmed Mohamed', 'Dr. Salma Mostafa', 'Dr. Hossam Refaat'];
  const faculty = ["Faculty of Engineering", "Faculty of Computer Science"];
  const academicLevels = ["1st Year", "2st Year", "3st Year", "4st Year"];


  return (
      <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaBook className="mr-2 text-primary" />
          Add New Course
        </h1>
        <Link 
          href="/admin/dashboard/courses"
          className="text-primary hover:text-primary-dark flex items-center"
        >
          Back to Courses
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Code */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaHashtag className="mr-2 text-primary" />
                Course Code (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="CS201"
                required
              />
            </div>

            {/* Course Name */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaBook className="mr-2 text-primary" />
                Course Name (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Data Structures"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
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

            {/* Instructor */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaChalkboardTeacher className="mr-2 text-primary" />
                Instructor (Required)
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select Instructor</option>
                {instructors.map((instructor, i) => (
                  <option key={i} value={instructor}>{instructor}</option>
                ))}
              </select>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                faculty
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select faculty</option>
                {faculty.map((dept, i) => (
                  <option key={i} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Instructor */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaChalkboardTeacher className="mr-2 text-primary" />
                academic Level
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select academic Level</option>
                {academicLevels.map((instructor, i) => (
                  <option key={i} value={instructor}>{instructor}</option>
                ))}
              </select>
            </div>
          </div>


          {/* Course Description */}
          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Course Description
            </label>
            <textarea
              rows={4}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Enter course description..."
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/courses"
              className="px-4 py-2 border border-gray-300 rounded-lg text-text hover:bg-background-secondary"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
            >
              <FaSave className="mr-2" />
              Save Course
            </button>
          </div>
        </form>
      </div>
      </>
  );
}