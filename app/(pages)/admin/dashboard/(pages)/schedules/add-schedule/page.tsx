"use client";
import {
  FaCalendarAlt,
  FaSave,
  FaChalkboardTeacher,
  FaBook,
  FaHashtag,
  FaClock,
  FaAlignLeft,
} from "react-icons/fa";
import Link from "next/link";

export default function AddMeetingPage() {
  const departments = ["Data Science", "Software Engineering", "Cybersecurity"];
  const faculty = ["Faculty of Engineering", "Faculty of Computer Science"];
  const academicLevels = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaCalendarAlt className="mr-2 text-primary" />
          Schedule New Meeting
        </h1>
        <Link
          href="/admin/dashboard/meetings"
          className="text-primary hover:text-primary-dark flex items-center"
        >
          Back to Meetings
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meeting Code */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaHashtag className="mr-2 text-primary" />
                Meeting Code
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="CS201"
              />
            </div>

            {/* Meeting Title */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaBook className="mr-2 text-primary" />
                Meeting Title (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Meeting Title"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meeting Start Time */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaClock className="mr-2 text-primary" />
                Start Time (Required)
              </label>
              <input
                type="datetime-local"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Meeting End Time */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaClock className="mr-2 text-primary" />
                End Time (Required)
              </label>
              <input
                type="datetime-local"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Department (Required)
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                <option value="">Select Department</option>
                {departments.map((dept, i) => (
                  <option key={i} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Instructor */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaChalkboardTeacher className="mr-2 text-primary" />
                Instructor (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Instructor Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* faculty */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Faculty (Required)
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                <option value="">Select Faculty</option>
                {faculty.map((dept, i) => (
                  <option key={i} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Academic Level */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaChalkboardTeacher className="mr-2 text-primary" />
                Academic Level (Required)
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                <option value="">Select Academic Level</option>
                {academicLevels.map((level, i) => (
                  <option key={i} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Meeting Description */}
          <div>
            <label className="text-sm font-medium text-text mb-1 flex items-center">
              <FaAlignLeft className="mr-2 text-primary" />
              Meeting Description
            </label>
            <textarea
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              rows={3}
              placeholder="Enter meeting description..."
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/meetings"
              className="px-4 py-2 border border-gray-300 rounded-lg text-text hover:bg-background-secondary"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
            >
              <FaSave className="mr-2" />
              Schedule Meeting
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
