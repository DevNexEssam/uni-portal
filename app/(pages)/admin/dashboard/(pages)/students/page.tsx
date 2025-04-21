'use client';
import Link from 'next/link';
import { FaUsers, FaPlus, FaSearch } from 'react-icons/fa';

export default function StudentsPage() {
  const students = [
    { id: 'ST2023001', name: 'Ahmed Mohamed', email: 'ahmed@uni.edu', department: 'Computer Science', status: 'Active' },
    { id: 'ST2023002', name: 'Mariam Ali', email: 'mariam@uni.edu', department: 'Information Systems', status: 'Active' },
    { id: 'ST2023003', name: 'Omar Samir', email: 'omar@uni.edu', department: 'AI', status: 'Inactive' }
  ];

  return (
      <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaUsers className="mr-2 text-primary" />
          Students Management
        </h1>
        <Link 
          href="/admin/students/add"
          className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          <FaPlus className="mr-2" />
          Add Student
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
              placeholder="Search students..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary focus:border-primary">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Information Systems</option>
              <option>AI</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary focus:border-primary">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-background-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{student.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{student.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{student.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      student.status === 'Active' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-error/10 text-error'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    <Link 
                      href={`/admin/students/${student.id}`}
                      className="text-primary hover:text-primary-dark mr-3"
                    >
                      Edit
                    </Link>
                    <button className="text-error hover:text-error-dark">
                      Delete
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