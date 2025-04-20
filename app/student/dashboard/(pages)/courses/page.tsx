'use client';
import { FaBookOpen, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    name: 'Data Structures',
    code: 'CS201',
    department: 'Computer Science',
    instructor: 'Dr. Ahmed Hamed',
    lecturesCount: 12,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 2,
    name: 'Operating Systems',
    code: 'CS301', 
    department: 'Information Technology',
    instructor: 'Dr. Salma Mostafa',
    lecturesCount: 9,
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    name: 'Database Systems',
    code: 'IS401',
    department: 'Information Systems',
    instructor: 'Dr. Hossam Refaat',
    lecturesCount: 10,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 4,
    name: 'Computer Networks',
    code: 'CE205',
    department: 'Computer Engineering', 
    instructor: 'Dr. Omar Samy',
    lecturesCount: 8,
    color: 'bg-orange-100 text-orange-800'
  },
];

export default function MyCoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-2">
            You are enrolled in <span className="text-primary font-semibold">{courses.length}</span> courses this semester
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="group relative">
              {/* Course Card */}
              <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20">
                {/* Course Header */}
                <div className={`${course.color} px-5 py-4`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider">{course.code}</span>
                      <h3 className="text-xl font-bold mt-1">{course.name}</h3>
                    </div>
                    <div className="p-2 rounded-lg bg-white/20">
                      <FaBookOpen className="text-lg" />
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaChalkboardTeacher className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Instructor</p>
                        <p className="text-sm font-medium">{course.instructor}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaUniversity className="text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Department</p>
                        <p className="text-sm font-medium">{course.department}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Lectures</span>
                        <span>{course.lecturesCount} sessions</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <button className="w-full py-2 px-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 font-medium">
                      View Course Materials
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}