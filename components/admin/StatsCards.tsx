'use client';
import { FaUsers, FaBook, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

export default function StatsCards() {
  const stats = [
    { 
      title: "Total Students", 
      value: "1,245", 
      icon: <FaUsers className="text-2xl" />,
      change: "+12%",
      trend: "up"
    },
    { 
      title: "Active Courses", 
      value: "48", 
      icon: <FaBook className="text-2xl" />,
      change: "+3",
      trend: "up"
    },
    { 
      title: "Upcoming Meetings", 
      value: "7", 
      icon: <FaCalendarAlt className="text-2xl" />,
      change: "-2",
      trend: "down"
    },
    { 
      title: "Pending Requests", 
      value: "12", 
      icon: <FaFileAlt className="text-2xl" />,
      change: "0%",
      trend: "neutral"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-text-secondary">{stat.title}</p>
              <h3 className="text-2xl font-bold text-text mt-1">{stat.value}</h3>
              <p className={`text-xs mt-1 ${
                stat.trend === 'up' ? 'text-success' : 
                stat.trend === 'down' ? 'text-error' : 'text-text-secondary'
              }`}>
                {stat.change} {stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : ''}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${stat.trend === 'up' ? 'bg-success/10 text-success' : stat.trend === 'down' ? 'bg-error/10 text-error' : 'bg-background-secondary text-text-secondary'}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}