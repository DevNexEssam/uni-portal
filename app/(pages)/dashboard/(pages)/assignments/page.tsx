'use client';

import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { AssignmentProps } from '../../../../../types';

const assignments: AssignmentProps[] = [
  {
    id: '1',
    title: 'Linked List Implementation',
    course: 'Data Structures',
    grade: '100',
    uploadDate: 'April 5, 2025',
    dueDate: 'April 10, 2025',
    pdfUrl: '/files/linked-list.pdf',
  },
  {
    id: '2',
    title: 'SQL Queries Practice',
    course: 'Database Systems',
    grade: '90',
    uploadDate: 'April 2, 2025',
    dueDate: 'April 12, 2025',
    pdfUrl: '/files/sql-queries.pdf',
  },
  {
    id: '3',
    title: 'Process Management Report',
    course: 'Operating Systems',
    grade: '85',
    uploadDate: 'April 1, 2025',
    dueDate: 'April 15, 2025',
    pdfUrl: '/files/process-report.pdf',
  },
];

const AssignmentsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-text mb-6">Assignments</h2>
      <p className="text-sm text-text-secondary mb-6">
        You have {assignments.length} assignments currently.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm font-semibold text-text">Course</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-text">Action</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-text">Grade</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-text">Upload Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-text">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-text">{assignment.course}</td>
                <td className="px-4 py-2 text-sm text-text">
                  <a
                    href={assignment.pdfUrl}
                    download
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <FaDownload className="h-4 w-4" />
                    Download
                  </a>
                </td>
                <td className="px-4 py-2 text-sm text-text">{assignment.grade}/100</td>
                <td className="px-4 py-2 text-sm text-text">{assignment.uploadDate}</td>
                <td className="px-4 py-2 text-sm text-text">{assignment.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignmentsPage;
