import { ReactNode } from "react";
import Sidebar from "../../../components/layout/Sidebar";
import DashboardNavbar from "../../../components/layout/DashboardNavbar";

const LayoutDashboard = ({ children }: { children: ReactNode }) => {
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
