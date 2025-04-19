import { ReactNode } from "react";
import Sidebar from "../../../components/layout/Sidebar";
import DashboardNavbar from "../../../components/layout/DashboardNavbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../lib/auth";

const LayoutDashboard = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <DashboardNavbar />
        <main className="p-4 md:p-6 bg-background-secondary">
          {children}
          </main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
