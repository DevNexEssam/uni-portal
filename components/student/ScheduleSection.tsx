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

  if (loading) return <Loading />;

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
    <div className="p-6 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">Class Schedule</h2>
        <p className="text-sm text-gray-500">
          You have{" "}
          <span className="text-primary font-semibold">{schedules.length}</span>{" "}
          upcoming classes
        </p>
      </div>

      <div className="space-y-4">
        {schedules.length === 0 ? (
          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
            <p className="text-gray-500">No classes scheduled yet</p>
          </div>
        ) : (
          schedules.map((schedule) => (
            <div
              key={schedule._id}
              className="bg-white p-5 rounded-lg border border-gray-200 hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-5">
                {/* Date/time badge */}
                <div className="flex flex-col items-center justify-center bg-primary/10 p-3 rounded-lg min-w-[120px]">
                  <FaCalendarDay className="text-primary text-xl mb-1" />
                  <span className="text-sm font-medium text-primary">
                    {formatDate(schedule.startTime)}
                  </span>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <span>{formatTime(schedule.startTime)}</span>
                    <span className="mx-1">-</span>
                    <span>{formatTime(schedule.endTime)}</span>
                  </div>
                </div>

                {/* Class details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {schedule.meetingTitle}
                      </h3>
                      <div className="flex items-center text-sm text-primary mt-1">
                        <FaIdBadge className="mr-1" />
                        <span>{schedule.meetingCode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaChalkboardTeacher className="mr-2 text-primary" />
                      <span>{schedule.instructor}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaUniversity className="mr-2 text-primary" />
                      <span>{schedule.faculty}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaLayerGroup className="mr-2 text-primary" />
                      <span>{schedule.academicLevel}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-primary" />
                      <span>{schedule.department}</span>
                    </div>
                  </div>

                  {schedule.description && (
                    <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-700 border-l-4 border-primary">
                      <p className="font-medium text-gray-800 mb-1">
                        Class Notes:
                      </p>
                      {schedule.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScheduleSection;
