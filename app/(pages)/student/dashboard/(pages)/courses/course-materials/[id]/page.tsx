"use client";
import { FaBookOpen, FaChalkboardTeacher, FaUniversity, FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export default function CoursePage() {
  // Static course data (replace with real data)
  const course = {
    _id: "1",
    courseCode: "CS101",
    courseName: "Introduction to Computer Science",
    instructor: "Dr. Ahmed Mohamed",
    department: "Computer Science"
  };

  // Static PDF materials data
  const pdfMaterials = [
    {
      _id: "1",
      title: "Lecture 1 - Introduction",
      url: "#",
      uploadDate: "2023-10-15"
    },
    {
      _id: "2",
      title: "Lecture 2 - Data Structures",
      url: "#",
      uploadDate: "2023-10-22"
    },
    {
      _id: "3",
      title: "Assignment 1 Guidelines",
      url: "#",
      uploadDate: "2023-10-25"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <Link href="/student/dashboard/courses" className="text-primary hover:underline">
            ← Back to Courses
          </Link>
        </div>

        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-primary px-6 py-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {course.courseCode}
                </span>
                <h1 className="text-3xl font-bold mt-2 text-white">
                  {course.courseName}
                </h1>
              </div>
              <div className="p-3 rounded-lg bg-white">
                <FaBookOpen className="text-2xl text-primary" />
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-primary-light text-xl mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="text-lg font-medium">{course.instructor}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaUniversity className="text-primary-light text-xl mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="text-lg font-medium">{course.department}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">Course Description</h3>
                <p className="text-gray-600">
                  This course covers fundamental concepts and advanced topics in the field. 
                  Students will engage with theoretical frameworks and practical applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Materials Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Course Materials</h2>
            <p className="text-gray-600 mt-1">PDF resources for your study</p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {pdfMaterials.map((pdf) => (
                <div key={pdf._id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <FaFilePdf className="text-red-500 text-2xl mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-800">{pdf.title}</h3>
                      <p className="text-sm text-gray-500">
                        Uploaded: {new Date(pdf.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    View PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Lectures Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Lectures</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Lecture 4: Algorithms</p>
                  <p className="text-sm text-gray-500">Mon, Nov 6 • 10:00 AM</p>
                </div>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Room A12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Lecture 5: OOP Principles</p>
                  <p className="text-sm text-gray-500">Wed, Nov 8 • 10:00 AM</p>
                </div>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Room A12</span>
              </div>
            </div>
          </div>

          {/* Assignments Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Assignments</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Assignment 1: Data Structures</p>
                  <p className="text-sm text-gray-500">Due: Nov 10, 2023</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Quiz 1: Basic Concepts</p>
                  <p className="text-sm text-gray-500">Submitted: Oct 28, 2023</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}