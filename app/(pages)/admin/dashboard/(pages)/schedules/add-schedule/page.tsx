'use client';
import { FaCalendarAlt, FaUserTie, FaUsers, FaSave } from 'react-icons/fa';
import Link from 'next/link';

export default function AddMeetingPage() {
  const meetingTypes = ['Faculty Meeting', 'Department Meeting', 'Committee Meeting', 'Student Meeting'];
  const organizers = ['Dr. Ahmed Mohamed', 'Dr. Salma Mostafa', 'Dean Office', 'Student Affairs'];

  return (
      <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaCalendarAlt className="mr-2 text-primary" />
          Schedule New Meeting
        </h1>
        <Link 
          href="/admin/dashboard/meetings"
          className="text-primary hover:text-primary-dark flex items-center"
        >
          Back to Meetings
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meeting Title */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Meeting Title (Required)
              </label>
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Monthly Faculty Meeting"
                required
              />
            </div>

            {/* Meeting Type */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Meeting Type
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                {meetingTypes.map((type, i) => (
                  <option key={i} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Date (Required)
              </label>
              <input
                type="date"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Time (Required)
              </label>
              <input
                type="time"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organizer */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaUserTie className="mr-2 text-primary" />
                Organizer (Required)
              </label>
              <select
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                required
              >
                {organizers.map((organizer, i) => (
                  <option key={i} value={organizer}>{organizer}</option>
                ))}
              </select>
            </div>

            {/* Attendees */}
            <div>
              <label className="text-sm font-medium text-text mb-1 flex items-center">
                <FaUsers className="mr-2 text-primary" />
                Expected Attendees
              </label>
              <input
                type="number"
                min="1"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="25"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Location
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Main Conference Room"
            />
          </div>

          {/* Agenda */}
          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Meeting Agenda
            </label>
            <textarea
              rows={4}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Enter meeting agenda..."
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/meetings"
              className="px-4 py-2 border border-gray-300 rounded-lg text-text hover:bg-background-secondary"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
            >
              <FaSave className="mr-2" />
              Schedule Meeting
            </button>
          </div>
        </form>
      </div>
      </>
  );
}