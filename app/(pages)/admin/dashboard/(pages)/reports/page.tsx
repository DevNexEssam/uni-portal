'use client';
import { FaFileAlt, FaChartBar, FaDownload } from 'react-icons/fa';

export default function ReportsPage() {
  const reports = [
    { id: 'RPT001', title: 'Student Enrollment', type: 'Annual', lastGenerated: '2023-09-01' },
    { id: 'RPT002', title: 'Course Statistics', type: 'Semester', lastGenerated: '2023-08-15' },
    { id: 'RPT003', title: 'Faculty Performance', type: 'Quarterly', lastGenerated: '2023-07-01' }
  ];

  return (
      <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaFileAlt className="mr-2 text-primary" />
          Reports
        </h1>
        <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
          <FaChartBar className="mr-2" />
          Generate New Report
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all">
            <h3 className="font-medium text-text mb-2">Quick Reports</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Today's Activity
                </button>
              </li>
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Current Enrollment
                </button>
              </li>
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Upcoming Deadlines
                </button>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all">
            <h3 className="font-medium text-text mb-2">Standard Reports</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Semester Summary
                </button>
              </li>
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Faculty Workload
                </button>
              </li>
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Student Performance
                </button>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all">
            <h3 className="font-medium text-text mb-2">Custom Reports</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  Create New Template
                </button>
              </li>
              <li>
                <button className="text-sm text-primary hover:text-primary-dark">
                  My Saved Reports
                </button>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-text mb-4">Recently Generated</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-background-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Report</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Last Generated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text">{report.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{report.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">{report.lastGenerated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    <button className="text-primary hover:text-primary-dark flex items-center">
                      <FaDownload className="mr-1" />
                      Download
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