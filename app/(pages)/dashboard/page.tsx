/* eslint-disable react/no-unescaped-entities */
import StartCard from "../../../components/ui/StartCard";
import Link from "next/link";
import { FiCalendar, FiFileText } from "react-icons/fi";
import RecentlyUploadedFilesCard from "../../../components/ui/RecentlyUploadedFilesCard ";
import UpcomingScheduleCard from "../../../components/ui/UpcomingScheduleCard";
import { MdOutlineTimelapse } from "react-icons/md";

const page = () => {
  return (
    <div className="text-black">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-text-secondary">
          Welcome back, John. Here's what's happening with your courses.
        </p>
      </div>
      {/* top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
        <StartCard
          title="Total Courses"
          count={5}
          icon={<FiFileText />}
          iconClass="text-primary"
          colorClass="border-primary"
          link="/dashboard"
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
          count={5}
          icon={<FiCalendar />}
          iconClass="text-green-400"
          colorClass="border-green-400"
          link="/dashboard"
        />
      </div>


      {/* bottom */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* Recently Uploaded Files */}
        <div className="border border-slate-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text font-bold">Recently Uploaded Files</span>
            <span>
              <Link
                href="/dashboard"
                className="text-xs text-primary hover:underline font-medium"
              >
                View all files
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <RecentlyUploadedFilesCard
              fileName="course-1.pdf"
              course="Course 1"
              date="2023-10-01"
            />
            <RecentlyUploadedFilesCard
              fileName="course-1.pdf"
              course="Course 1"
              date="2023-10-01"
            />
            <RecentlyUploadedFilesCard
              fileName="course-1.pdf"
              course="Course 1"
              date="2023-10-01"
            />
          </div>
        </div>
        {/* Upcoming Schedule */}
        <div className="border border-slate-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text font-bold">Upcoming Schedule</span>
            <span>
              <Link
                href="/dashboard"
                className="text-xs text-primary hover:underline font-medium"
              >
                View calendar
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-4">
          <UpcomingScheduleCard
          title="Algorithms Lecture"
          course="Course 1"
          time="2023-10-01 10:00 AM"
          />
          <UpcomingScheduleCard
          title="Algorithms Lecture"
          course="Course 1"
          time="2023-10-01 10:00 AM"
          />
          <UpcomingScheduleCard
          title="Algorithms Lecture"
          course="Course 1"
          time="2023-10-01 10:00 AM"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
