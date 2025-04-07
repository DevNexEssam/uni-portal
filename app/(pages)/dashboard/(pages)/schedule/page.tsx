'use client';

import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

const exams = [
  {
    id: 1,
    title: 'Data Structures Final Exam',
    course: 'CS201 - Data Structures',
    type: 'Final Exam',
    date: 'Tuesday, April 15, 2025',
    time: '09:00 AM - 12:00 PM',
    location: 'Main Hall - Building A',
    instructor: 'Dr. Ahmed Mohamed',
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Database Systems Midterm',
    course: 'CS301 - Database Systems',
    type: 'Midterm Exam',
    date: 'Thursday, April 17, 2025',
    time: '01:00 PM - 03:00 PM',
    location: 'Room 203 - Computer Science Building',
    instructor: 'Dr. Yasmin Ali',
    status: 'Upcoming'
  },
  {
    id: 3,
    title: 'Operating Systems Quiz',
    course: 'CS401 - Operating Systems',
    type: 'Quiz',
    date: 'Monday, April 21, 2025',
    time: '10:00 AM - 11:00 AM',
    location: 'Lab 105',
    instructor: 'Dr. Khaled Mahmoud',
    status: 'Upcoming'
  },
  {
    id: 4,
    title: 'Artificial Intelligence Final',
    course: 'CS501 - AI',
    type: 'Final Exam',
    date: 'Wednesday, April 9, 2025',
    time: '08:00 AM - 11:00 AM',
    location: 'Auditorium',
    instructor: 'Dr. Nora Saad',
    status: 'Completed'
  }
];

const ExamSchedulePage = () => {
  return (
    <div className="p-6 bg-background rounded-lg shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">Exam Schedule</h2>
        <p className="text-sm text-text-secondary">
          You have {exams.length} exams scheduled
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {exams.map((exam) => (
          <div key={exam.id} className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-background-secondary transition-colors">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                  exam.type.includes('Final') ? 'bg-error text-white' :
                  exam.type.includes('Midterm') ? 'bg-warning text-white' :
                  'bg-primary text-white'
                }`}>
                  <FaBook className="text-xl" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-text">{exam.title}</h3>
                    <p className="text-sm text-text-secondary">{exam.course} - {exam.instructor}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    exam.status === 'Completed' ? 'bg-text-secondary text-white' : 'bg-success text-white'
                  }`}>
                    {exam.status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-text-secondary">
                    <FaClock className="mr-2 text-primary" />
                    {exam.time}
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <FaCalendarAlt className="mr-2 text-primary" />
                    {exam.date}
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    {exam.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSchedulePage;