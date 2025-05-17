/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import StartSection from "@/components/student/StartSection";
import UpcomingScheduleSection from "../../../../components/student/UpcomingScheduleSection";
import RecentlyUploadedSection from "../../../../components/student/RecentlyUploadedSection";

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
        <RecentlyUploadedSection />
        {/* <div className="border border-slate-200 rounded-lg p-4">
        </div> */}
        {/* Upcoming Schedule */}
        <UpcomingScheduleSection />
      </div>
    </div>
  );
};

export default DashboardPage;
