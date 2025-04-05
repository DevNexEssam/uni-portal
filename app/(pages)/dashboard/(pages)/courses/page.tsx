'use client';

import Image from 'next/image';
import { CourseProps } from '../../../../../types';


const courses: CourseProps[] = [
  {
    id: 1,
    name: 'Data Structures',
    department: 'Computer Science',
    instructor: 'Dr. Ahmed Hamed',
    lecturesCount: 12,
    image: '/course.png',
  },
  {
    id: 2,
    name: 'Operating Systems',
    department: 'Information Technology',
    instructor: 'Dr. Salma Mostafa',
    lecturesCount: 9,
    image: '/course.png',
  },
  {
    id: 3,
    name: 'Database Systems',
    department: 'Information Systems',
    instructor: 'Dr. Hossam Refaat',
    lecturesCount: 10,
    image: '/course.png',
  },
  {
    id: 4,
    name: 'Database Systems',
    department: 'Information Systems',
    instructor: 'Dr. Hossam Refaat',
    lecturesCount: 10,
    image: '/course.png',
  },
  {
    id: 5,
    name: 'Database Systems',
    department: 'Information Systems',
    instructor: 'Dr. Hossam Refaat',
    lecturesCount: 10,
    image: '/course.png',
  },
];

const MyCoursesPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-text">My Courses</h2>
      <p className="text-sm text-text-secondary mb-4">
      You are currently enrolled in <span className='text-primary'>3</span> courses.
      <br />
      Click on any course to view more details and access its materials.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className=" rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all bg-background"
          >
            <Image
              src={course.image}
              alt={course.name}
              className="object-cover flex justify-center items-center mx-auto"
              width={120}
              height={120}
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-text">{course.name}</h3>
              <p className="text-sm text-text-secondary">Instructor: {course.instructor}</p>
              <p className="text-sm text-text-secondary">Department: {course.department}</p>
              <p className="text-xs text-primary">{course.lecturesCount} Lectures</p>
            </div>
            <div className="flex justify-center items-center mb-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-all duration-300">
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
