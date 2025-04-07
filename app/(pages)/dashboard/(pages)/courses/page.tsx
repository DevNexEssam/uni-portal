'use client';

import { CourseProps } from '../../../../../types';

const courses: CourseProps[] = [
  {
    id: 1,
    name: 'Data Structures',
    department: 'Computer Science',
    instructor: 'Dr. Ahmed Hamed',
    lecturesCount: 12,
  },
  {
    id: 2,
    name: 'Operating Systems',
    department: 'Information Technology',
    instructor: 'Dr. Salma Mostafa',
    lecturesCount: 9,
  },
  {
    id: 3,
    name: 'Database Systems',
    department: 'Information Systems',
    instructor: 'Dr. Hossam Refaat',
    lecturesCount: 10,
  },
  {
    id: 4,
    name: 'Computer Networks',
    department: 'Computer Engineering',
    instructor: 'Dr. Omar Samy',
    lecturesCount: 8,
  },
];

const MyCoursesPage = () => {
  return (
    <div className="p-6 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">My Courses</h2>
        <p className="text-sm text-text-secondary">
          You are currently enrolled in <span className="text-primary font-medium">{courses.length}</span> courses
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-text">{course.name}</h3>
                <span className="text-xs bg-primary-light/10 text-primary px-2 py-1 rounded-full">
                  {course.lecturesCount} lectures
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-text-secondary font-medium">Instructor</p>
                  <p className="text-text">{course.instructor}</p>
                </div>
                
                <div className="text-sm">
                  <p className="text-text-secondary font-medium">Department</p>
                  <p className="text-text">{course.department}</p>
                </div>
              </div>
            </div>
            
            <div className="px-5 pb-5">
              <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPage;