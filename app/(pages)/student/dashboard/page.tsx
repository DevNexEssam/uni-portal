/* eslint-disable react/no-unescaped-entities */
// import StartCard from "@/components/ui/StartCard";
import Link from "next/link";
// import { FiCalendar, FiFileText } from "react-icons/fi";
import RecentlyUploadedFilesCard from "@/components/ui/RecentlyUploadedFilesCard ";
// import { MdOutlineTimelapse } from "react-icons/md";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import StartSection from "@/components/student/StartSection";
import UpcomingScheduleSection from "../../../../components/student/UpcomingScheduleSection";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="text-black">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-text-secondary">
          👋🏻Welcome back, {session?.user.name} Here's what's happening with your
          courses.
        </p>
      </div>
      {/* top */}
      <StartSection />

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
        <UpcomingScheduleSection />
      </div>
    </div>
  );
};

export default DashboardPage;
