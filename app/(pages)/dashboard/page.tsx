/* eslint-disable react/no-unescaped-entities */
import StartCard from "@/components/ui/StartCard";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";
import RecentlyUploadedFilesCard from "../../../components/ui/RecentlyUploadedFilesCard ";

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
          icon={<FiFileText className="text-primary" />}
          iconClass="text-primary"
          colorClass="border-primary"
          link="/dashboard"
        />
        <StartCard
          title="Total Courses"
          count={5}
          icon={<FiFileText className="text-primary" />}
          iconClass="text-primary"
          colorClass="border-primary"
          link="/dashboard"
        />
        <StartCard
          title="Total Courses"
          count={5}
          icon={<FiFileText className="text-primary" />}
          iconClass="text-primary"
          colorClass="border-primary"
          link="/dashboard"
        />
      </div>


      {/* bottom */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* Recently Uploaded Files */}
        <div className="border border-slate-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <span>Recently Uploaded Files</span>
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
      </div>
    </div>
  );
};

export default page;
