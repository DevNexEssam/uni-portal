import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import { getServerSession } from "next-auth";
import { studentAuthOptions } from "@/lib/studentAuthOptions";
import { redirect } from "next/navigation";

const LayoutDashboard = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(studentAuthOptions);

  if (session?.user?.role !== "student") {
    redirect("/student/login");
  }
  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <DashboardNavbar />
        <main className="p-4 md:p-6 bg-background-secondary">{children}</main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
