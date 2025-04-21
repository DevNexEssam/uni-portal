'use client';
import Link from 'next/link';
import { FaCalendarAlt, FaPlus, FaSearch, FaUserTie } from 'react-icons/fa';

export default function MeetingsPage() {
  const meetings = [
    { id: 'MT001', title: 'Faculty Meeting', date: '2023-10-15', time: '10:00 AM', organizer: 'Dr. Ahmed', status: 'Upcoming' },
    { id: 'MT002', title: 'Curriculum Review', date: '2023-10-20', time: '02:00 PM', organizer: 'Dr. Salma', status: 'Upcoming' },
    { id: 'MT003', title: 'Department Assembly', date: '2023-10-05', time: '11:00 AM', organizer: 'Dean', status: 'Completed' }
  ];

  return (
      <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaCalendarAlt className="mr-2 text-primary" />
          Meetings Schedule
        </h1>
        <Link 
          href="/admin/dashboard/meetings/add-meeting"
          className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          <FaPlus className="mr-2" />
          Schedule Meeting
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
              placeholder="Search meetings..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-primary focus:border-primary">
            <option>All Meetings</option>
            <option>Upcoming</option>
            <option>Completed</option>
            <option>Canceled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-background-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Organizer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {meetings.map((meeting) => (
                <tr key={meeting.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text">{meeting.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    {meeting.date} at {meeting.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <FaUserTie className="mr-2 text-primary" />
                    {meeting.organizer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      meeting.status === 'Upcoming' 
                        ? 'bg-warning/10 text-warning' 
                        : 'bg-success/10 text-success'
                    }`}>
                      {meeting.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">
                    <Link 
                      href={`/admin/meetings/${meeting.id}`}
                      className="text-primary hover:text-primary-dark mr-3"
                    >
                      Details
                    </Link>
                    {meeting.status === 'Upcoming' && (
                      <button className="text-error hover:text-error-dark">
                        Cancel
                      </button>
                    )}
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