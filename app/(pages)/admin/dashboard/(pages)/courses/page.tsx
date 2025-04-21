'use client';
import Link from 'next/link';
import { FaBook, FaPlus, FaSearch, FaChalkboardTeacher } from 'react-icons/fa';

export default function CoursesPage() {
  const courses = [
    { code: 'CS201', name: 'Data Structures', instructor: 'Dr. Ahmed', students: 45, status: 'Active' },
    { code: 'CS301', name: 'Database Systems', instructor: 'Dr. Salma', students: 38, status: 'Active' },
    { code: 'CS401', name: 'Operating Systems', instructor: 'Dr. Hossam', students: 42, status: 'Archived' }
  ];

  return (
      <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaBook className="mr-2 text-primary" />
          Courses Management
        </h1>
        <Link 
          href="/admin/dashboard/courses/add-course"
          className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          <FaPlus className="mr-2" />
          Add Course
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-4 flex justify-between items-center">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary focus:border-primary">
            <option>All Status</option>
            <option>Active</option>
            <option>Archived</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-background-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.code}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text">{course.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{course.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <FaChalkboardTeacher className="mr-2 text-primary" />
                    {course.instructor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{course.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      course.status === 'Active' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-error/10 text-error'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    <Link 
                      href={`/admin/courses/${course.code}`}
                      className="text-primary hover:text-primary-dark mr-3"
                    >
                      Edit
                    </Link>
                    <button className="text-error hover:text-error-dark">
                      {course.status === 'Active' ? 'Archive' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
  );
}