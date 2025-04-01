import { FaBook, FaCalendarAlt, FaChartLine, FaClipboardList, FaGraduationCap, FaTasks, FaUserFriends } from 'react-icons/fa';
import { FiBell, FiSearch } from 'react-icons/fi';

const StudentDashboard = () => {
  // Sample data - replace with real data from your backend
  const courses = [
    { id: 1, name: 'Mathematics', code: 'MATH101', progress: 75 },
    { id: 2, name: 'Computer Science', code: 'CS201', progress: 60 },
    { id: 3, name: 'Physics', code: 'PHY150', progress: 45 },
  ];

  const assignments = [
    { id: 1, course: 'Mathematics', title: 'Linear Algebra Homework', due: '2023-06-15', status: 'Pending' },
    { id: 2, course: 'Computer Science', title: 'Data Structures Project', due: '2023-06-20', status: 'In Progress' },
    { id: 3, course: 'Physics', title: 'Thermodynamics Lab Report', due: '2023-06-10', status: 'Completed' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Midterm Exam', date: '2023-06-25', course: 'Mathematics' },
    { id: 2, title: 'Group Project Deadline', date: '2023-07-01', course: 'Computer Science' },
    { id: 3, title: 'Final Presentation', date: '2023-07-10', course: 'Physics' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <FaGraduationCap className="mr-2 text-blue-600" />
            Student Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <FiBell className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <FaBook className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Active Courses</h3>
                <p className="mt-1 text-3xl font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <FaTasks className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Pending Assignments</h3>
                <p className="mt-1 text-3xl font-semibold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 flex items-center">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <FaCalendarAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
                <p className="mt-1 text-3xl font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Courses Section */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <FaBook className="mr-2 text-blue-600" />
                  My Courses
                </h3>
              </div>
              <div className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <div key={course.id} className="px-4 py-5 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{course.name}</h4>
                        <p className="text-sm text-gray-500">{course.code}</p>
                      </div>
                      <div className="w-1/2">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {course.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignments Section */}
            <div className="mt-6 bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <FaClipboardList className="mr-2 text-green-600" />
                  Recent Assignments
                </h3>
              </div>
              <div className="bg-white divide-y divide-gray-200">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-500">{assignment.course}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Due: {assignment.due}</span>
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                          assignment.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : assignment.status === 'In Progress' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {assignment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <FaCalendarAlt className="mr-2 text-purple-600" />
                  Upcoming Events
                </h3>
              </div>
              <div className="bg-white divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-purple-100 rounded-md p-2 mr-4">
                        <FaCalendarAlt className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.course} • {event.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <FaChartLine className="mr-2 text-indigo-600" />
                  Performance Overview
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
                  <p className="text-gray-500">Performance chart will be displayed here</p>
                </div>
              </div>
            </div>

            {/* Study Groups */}
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                  <FaUserFriends className="mr-2 text-blue-600" />
                  Study Groups
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="text-center">
                  <p className="text-gray-500 mb-4">You're not part of any study groups yet</p>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Join a Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;