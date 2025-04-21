/* eslint-disable react/no-unescaped-entities */
import { FaCog, FaUserShield, FaBell, FaPalette } from 'react-icons/fa';

export default function SettingsPage() {
  return (
      <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text flex items-center">
          <FaCog className="mr-2 text-primary" />
          System Settings
        </h1>
        <p className="text-sm text-text-secondary">
          Configure your institution's settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-primary-light/10 text-primary mr-4">
              <FaUserShield className="text-lg" />
            </div>
            <h2 className="text-lg font-semibold text-text">Account Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Admin Email
              </label>
              <input
                type="email"
                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                value="admin@university.edu"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Change Password
              </label>
              <button className="w-full text-left p-2 border border-gray-300 rounded-lg hover:bg-background-secondary">
                ********
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-warning/10 text-warning mr-4">
              <FaBell className="text-lg" />
            </div>
            <h2 className="text-lg font-semibold text-text">Notifications</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm text-text">
                Email Notifications
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm text-text">
                System Alerts
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-success/10 text-success mr-4">
              <FaPalette className="text-lg" />
            </div>
            <h2 className="text-lg font-semibold text-text">Appearance</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Theme Color
              </label>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-primary border-2 border-primary"></button>
                <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-200"></button>
                <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-gray-200"></button>
                <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-200"></button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-sm text-text">
                Dark Mode
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-error/10 text-error mr-4">
              <FaCog className="text-lg" />
            </div>
            <h2 className="text-lg font-semibold text-text">System Configuration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Academic Year
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                <option>2023/2024</option>
                <option>2022/2023</option>
                <option>2021/2022</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Semester
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                <option>Fall 2023</option>
                <option>Spring 2023</option>
                <option>Summer 2023</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}