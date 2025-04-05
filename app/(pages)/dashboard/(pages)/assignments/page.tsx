/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { FaDownload, FaFileAlt, FaSearch } from 'react-icons/fa';
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
    status: 'Submitted',
  },
  {
    id: '2',
    title: 'SQL Queries Practice',
    course: 'Database Systems',
    grade: '90',
    uploadDate: 'April 2, 2025',
    dueDate: 'April 12, 2025',
    pdfUrl: '/files/sql-queries.pdf',
    status: 'Submitted',
  },
  {
    id: '3',
    title: 'Process Management Report',
    course: 'Operating Systems',
    grade: '85',
    uploadDate: 'April 1, 2025',
    dueDate: 'April 15, 2025',
    pdfUrl: '/files/process-report.pdf',
    status: 'Submitted',
  },
  {
    id: '4',
    title: 'Machine Learning Project',
    course: 'Artificial Intelligence',
    grade: "100",
    uploadDate: 'April 3, 2025',
    dueDate: 'April 20, 2025',
    pdfUrl: '/files/ml-project.pdf',
    status: 'Pending',
  },
];

const AssignmentsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-success text-white';
      case 'Pending':
        return 'bg-warning text-white';
      case 'Late':
        return 'bg-error text-white';
      default:
        return 'bg-text-secondary text-white';
    }
  };

  return (
    <div className="p-6 bg-background rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text">Assignments</h2>
          <p className="text-sm text-text-secondary">
            {filteredAssignments.length} {filteredAssignments.length === 1 ? 'assignment' : 'assignments'} found
          </p>
        </div>
        
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <FaSearch className="h-4 w-4 text-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Search assignments..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-background placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-background rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Course
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Assignment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-gray-200">
              {filteredAssignments.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-primary-light/10 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-text">{assignment.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-primary-light/10 text-primary">
                        <FaFileAlt className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text">{assignment.title}</div>
                        <div className="text-sm text-text-secondary">Uploaded: {assignment.uploadDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(assignment.status || 'Pending')}`}>
                      {assignment.status || 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text">
                      {assignment.grade || 'Not graded'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-text">{assignment.dueDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href={assignment.pdfUrl}
                      download
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      <FaDownload className="mr-1.5 h-3 w-3" />
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-24 w-24 text-text-secondary">
            <FaFileAlt className="h-full w-full opacity-50" />
          </div>
          <h3 className="mt-2 text-lg font-medium text-text">No assignments found</h3>
          <p className="mt-1 text-sm text-text-secondary">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default AssignmentsPage;