"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUsers, FaPlus, FaSearch } from "react-icons/fa";
import Loading from "../ui/loading";

type Student = {
  _id: string;
  academicId: string;
  name: string;
  department: string;
  faculty: string;
};

export default function StudentsSection() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");

  const filteredStudents = students.filter((student) => {
    const matchSearch = student.academicId.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || 
      student.name.toLocaleLowerCase().includes(searchTerm.toLowerCase());
    const matchDepartment = departmentFilter === "All Departments" || student.department === departmentFilter;
    return matchSearch && matchDepartment;
  });
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get("/api/admin/students");
        console.log("API Response", data);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaUsers className="mr-2 text-primary" />
          Students Management
        </h1>
        <Link
          href="/admin/dashboard/students/add-student"
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex space-x-2">
            <select
            value={departmentFilter}
            onChange={(e)=> setDepartmentFilter(e.target.value)}
             className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary focus:border-primary">
              <option>All Departments</option>
              <option>Data Science</option>
              <option>Software Engineering</option>
              <option>Cybersecurity</option>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    {student.academicId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    {student.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    {student.faculty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-success/10 text-success">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    <Link 
                      href={`/admin/students/${student._id}`}
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
