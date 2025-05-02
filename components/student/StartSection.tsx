"use client";
import React, { useEffect, useState } from "react";
import StartCard from "@/components/ui/StartCard";
import { FiCalendar, FiFileText } from "react-icons/fi";
import { MdOutlineTimelapse } from "react-icons/md";
import axios from "axios";
import Loading from "../ui/loading";

const StartSection = () => {
  const [courses, setCourses] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  //   fetch courser
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/student/courses");
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // fetch schedules
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const { data } = await axios.get("/api/student/schedule");
        setSchedules(data.schedules);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchedules();
  }, []);

  if (loading) return <Loading bg="border-r-primary" />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
      <StartCard
        title="Total Courses"
        count={courses.length}
        icon={<FiFileText />}
        iconClass="text-primary"
        colorClass="border-primary"
        link="/student/dashboard/courses"
      />
      <StartCard
        title="Upcoming Deadlines"
        count={5}
        icon={<MdOutlineTimelapse />}
        iconClass="text-warning"
        colorClass="border-warning"
        link="/dashboard"
      />
      <StartCard
        title="Today's Schedule"
        count={schedules.length}
        icon={<FiCalendar />}
        iconClass="text-green-400"
        colorClass="border-green-400"
        link="/dashboard"
      />
    </div>
  );
};

export default StartSection;
