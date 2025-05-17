"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaUniversity,
  FaLayerGroup,
  FaCalendarDay,
  FaIdBadge,
} from "react-icons/fa";
import Loading from "../ui/loading";

type ISchedule = {
  _id: string;
  meetingCode: string;
  meetingTitle: string;
  startTime: string;
  endTime: string;
  department: string;
  faculty: string;
  instructor: string;
  academicLevel: string;
  description: string;
};

const ScheduleSection = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const { data } = await axios.get("/api/student/schedule");
        setSchedules(data.schedules);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  if (loading) return <Loading bg="border-r-primary" />;

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-primary px-6 py-5">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-white">Class Schedule</h1>
                <p className="text-white/90 mt-1">
                  {schedules.length} upcoming classes
                </p>
              </div>
              <div className="p-2 rounded-lg bg-white">
                <FaCalendarDay className="text-xl text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {schedules.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <p className="text-gray-500">No classes scheduled yet</p>
            </div>
          ) : (
            schedules.map((schedule) => (
              <div
                key={schedule._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Date/Time Badge */}
                    <div className="flex flex-col items-center justify-center bg-primary/10 p-4 rounded-lg min-w-[120px]">
                      <span className="text-sm font-medium text-primary">
                        {formatDate(schedule.startTime)}
                      </span>
                      <div className="flex items-center mt-2 text-sm text-primary">
                        <span>{formatTime(schedule.startTime)}</span>
                        <span className="mx-1">-</span>
                        <span>{formatTime(schedule.endTime)}</span>
                      </div>
                    </div>

                    {/* Class Details */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {schedule.meetingTitle}
                        </h3>
                        <div className="flex items-center text-sm text-primary mt-1">
                          <FaIdBadge className="mr-2" />
                          <span>{schedule.meetingCode}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <FaChalkboardTeacher className="text-primary-light text-lg mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Instructor</p>
                            <p className="font-medium">{schedule.instructor}</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <FaMapMarkerAlt className="text-primary-light text-lg mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Faculty</p>
                            <p className="font-medium">{schedule.faculty}</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <FaLayerGroup className="text-primary-light text-lg mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Level</p>
                            <p className="font-medium">{schedule.academicLevel}</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <FaUniversity className="text-primary-light text-lg mr-3" />
                          <div>
                            <p className="text-sm text-gray-500">Department</p>
                            <p className="font-medium">{schedule.department}</p>
                          </div>
                        </div>
                      </div>

                      {schedule.description && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                          <h4 className="font-medium text-gray-800 mb-2">Class Notes:</h4>
                          <p className="text-gray-600">{schedule.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;